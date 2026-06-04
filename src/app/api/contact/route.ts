import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { Resend } from "resend";
import { ZodError } from "zod";
import { createElement } from "react";

import { ContactEmail } from "@/lib/contact/email";
import { contactFormSchema } from "@/lib/contact/validation";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function generateCorrelationId(): string {
  return `c_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

// ---------------------------------------------------------------------------
// Rate limiter — gracefully disabled when Redis env vars are absent
// ---------------------------------------------------------------------------

function buildRateLimiter(): Ratelimit | null {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;

  try {
    const redis = new Redis({ url, token });
    return new Ratelimit({
      redis,
      // 5 requests per 10 minutes per IP
      limiter: Ratelimit.slidingWindow(5, "10 m"),
      analytics: false,
      prefix: "contact_rl",
    });
  } catch {
    console.warn("[contact] Failed to initialise rate limiter", {});
    return null;
  }
}

const ratelimiter = buildRateLimiter();

// ---------------------------------------------------------------------------
// POST /api/contact
// ---------------------------------------------------------------------------

export async function POST(req: NextRequest) {
  const correlationId = generateCorrelationId();
  const log = (event: string, extra?: Record<string, unknown>) =>
    console.log(JSON.stringify({ correlationId, event, ...extra }));

  log("contact.request.received");

  // 1. Rate limiting
  if (ratelimiter) {
    const ip = getClientIp(req);
    const { success, reset } = await ratelimiter.limit(ip);
    if (!success) {
      const retryAfterSeconds = Math.max(0, Math.ceil((reset - Date.now()) / 1000));
      log("contact.rate_limited", { ip });
      return NextResponse.json(
        { ok: false, code: "RATE_LIMITED", retryAfterSeconds, correlationId },
        { status: 429 }
      );
    }
  }

  // 2. Parse body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    log("contact.invalid_json");
    return NextResponse.json(
      { ok: false, code: "INVALID_REQUEST", correlationId },
      { status: 400 }
    );
  }

  // 3. Honeypot — silent fail (return 200 so bots don't retry)
  if (
    typeof body === "object" &&
    body !== null &&
    "honeypot" in body &&
    typeof (body as Record<string, unknown>).honeypot === "string" &&
    (body as Record<string, unknown>).honeypot !== ""
  ) {
    log("contact.honeypot_triggered");
    return NextResponse.json({ ok: true, correlationId }, { status: 200 });
  }

  // 4. Consent pre-check (fast path before full schema validation)
  if (
    typeof body !== "object" ||
    body === null ||
    (body as Record<string, unknown>).consent !== true
  ) {
    log("contact.consent_missing");
    return NextResponse.json(
      { ok: false, code: "CONSENT_REQUIRED", correlationId },
      { status: 400 }
    );
  }

  // 5. Schema validation
  let parsed: ReturnType<typeof contactFormSchema.parse>;
  try {
    parsed = contactFormSchema.parse(body);
  } catch (err) {
    if (err instanceof ZodError) {
      log("contact.validation_failed", {
        issues: err.issues.map((i) => i.message),
      });
      return NextResponse.json(
        {
          ok: false,
          code: "INVALID_REQUEST",
          fields: err.flatten().fieldErrors,
          correlationId,
        },
        { status: 400 }
      );
    }
    throw err;
  }

  // 6. Validate provider credentials
  const apiKey = process.env.RESEND_API_KEY;
  const emailTo = process.env.CONTACT_EMAIL_TO;
  const emailFrom = process.env.CONTACT_EMAIL_FROM ?? "Portfolio Contact <onboarding@resend.dev>";

  if (!apiKey || !emailTo) {
    log("contact.missing_provider_config");
    return NextResponse.json(
      { ok: false, code: "PROVIDER_UNAVAILABLE", correlationId },
      { status: 503 }
    );
  }

  // 7. Send email via Resend
  const resend = new Resend(apiKey);
  const receivedAt = new Date().toISOString();

  try {
    const { error } = await resend.emails.send({
      from: emailFrom,
      to: emailTo,
      replyTo: parsed.email,
      subject: `[Portfolio] New message from ${parsed.name ?? parsed.email}`,
      react: createElement(ContactEmail, {
        name: parsed.name,
        email: parsed.email,
        message: parsed.message,
        correlationId,
        receivedAt,
      }),
    });

    if (error) {
      log("contact.provider_error", { error: error.message });
      return NextResponse.json(
        { ok: false, code: "PROVIDER_UNAVAILABLE", correlationId },
        { status: 503 }
      );
    }

    log("contact.sent", { to: emailTo });
    return NextResponse.json({ ok: true, correlationId }, { status: 202 });
  } catch (err) {
    log("contact.unexpected_error", {
      error: err instanceof Error ? err.message : "unknown",
    });
    return NextResponse.json(
      { ok: false, code: "PROVIDER_UNAVAILABLE", correlationId },
      { status: 503 }
    );
  }
}
