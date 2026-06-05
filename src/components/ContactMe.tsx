"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircleOutlined,
  EmailOutlined,
  ErrorOutlineOutlined,
  LockOutlined,
  MailOutline,
  SendOutlined,
  VerifiedOutlined,
  WorkOutline,
} from "@mui/icons-material";
import { GitHubDark, GitHubLight, LinkedIn } from "developer-icons";

import SectionHeader from "./SectionHeader";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/contact/validation";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type SubmitStatus = "idle" | "loading" | "success" | "error" | "rate_limited";

interface ApiError {
  ok: false;
  code: string;
  correlationId: string;
  retryAfterSeconds?: number;
  fields?: Record<string, string[]>;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function ContactMe() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [apiError, setApiError] = useState<ApiError | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  // Hidden honeypot field — not part of the visible form
  const { ref: honeypotRef, ...honeypotReg } = register("honeypot");

  async function onSubmit(data: ContactFormData) {
    setSubmitStatus("loading");
    setApiError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (res.ok && json.ok) {
        setSubmitStatus("success");
        return;
      }

      if (res.status === 429) {
        setSubmitStatus("rate_limited");
        setApiError(json as ApiError);
        return;
      }

      setSubmitStatus("error");
      setApiError(json as ApiError);
    } catch {
      setSubmitStatus("error");
      setApiError(null);
    }
  }

  function handleReset() {
    reset();
    setSubmitStatus("idle");
    setApiError(null);
  }

  return (
    <section
      aria-labelledby="contacto-title"
      className="grow flex flex-col items-center justify-center "
    >
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* ------------------------------------------------------------------ */}
        {/* Left column — info & links                                          */}
        {/* ------------------------------------------------------------------ */}
        <div className="flex flex-col gap-8 animate-fade-in-up">
          <SectionHeader
            tag="Disponible para trabajar"
            title="Construyamos algo"
            accent="extraordinario"
            description="Actualmente estoy abierto a oportunidades freelance y roles a tiempo completo. ¿Tenés un proyecto en mente? Escribime o conectemos en redes sociales."
            titleId="contacto-title"
          />
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-gray-500">
              Encuéntrame en
            </h3>
            <div className="flex flex-wrap gap-4">
              <a
                aria-label="GitHub"
                className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background-light dark:focus-visible:ring-offset-background-dark"
                href="https://github.com/JosepFernande"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="dark:hidden">
                  <GitHubDark size={22} />
                </span>
                <span className="hidden dark:inline">
                  <GitHubLight size={22} />
                </span>
                <span className="font-bold text-sm">GitHub</span>
              </a>
              <a
                aria-label="LinkedIn"
                className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background-light dark:focus-visible:ring-offset-background-dark"
                href="https://www.linkedin.com/in/josep-fern%C3%A1ndez-a84174247/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn size={22} />
                <span className="font-bold text-sm">LinkedIn</span>
              </a>
              <a
                aria-label="Email"
                className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background-light dark:focus-visible:ring-offset-background-dark"
                href="mailto:fernandezjos98@gmail.com"
              >
                <EmailOutlined className="text-2xl! group-hover:text-primary transition-colors" />
                <span className="font-bold text-sm">Email</span>
              </a>
            </div>
          </div>
          <div className="hidden lg:block mt-8 p-6 rounded-2xl bg-linear-to-br from-primary/20 to-transparent border border-primary/10">
            <div className="flex items-center gap-4 text-slate-800 dark:text-white/80">
              <VerifiedOutlined className="text-3xl! text-primary" />
              <div>
                <p className="font-bold">Respuesta Rápida</p>
                <p className="text-sm opacity-70">
                  Suelo responder dentro de las 24 horas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Right column — contact form                                         */}
        {/* ------------------------------------------------------------------ */}
        <div className="w-full">
          <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 md:p-8 shadow-xl border border-slate-100 dark:border-slate-700 relative overflow-hidden group">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />

            {/* ---- Success overlay ---- */}
            {submitStatus === "success" && (
              <div className="absolute inset-0 bg-white dark:bg-surface-dark flex flex-col items-center justify-center text-center p-6 z-20 rounded-2xl animate-fade-in">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircleOutlined className="text-4xl! text-primary animate-bounce-short" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                  ¡Mensaje Enviado!
                </h3>
                <p className="text-slate-500 dark:text-gray-400 text-sm">
                  Gracias por contactarme. Te responderé lo antes posible.
                </p>
                <button
                  className="mt-6 text-primary font-bold text-sm hover:underline"
                  onClick={handleReset}
                >
                  Enviar otro mensaje
                </button>
              </div>
            )}

            {/* ---- Form ---- */}
            <form
              className="flex flex-col gap-6 relative z-10"
              id="contact-form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              {/* Honeypot — hidden from real users, visible to bots */}
              <input
                {...honeypotReg}
                ref={honeypotRef}
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ display: "none" }}
              />

              {/* Email */}
              <div className="space-y-2 group/input">
                <label
                  className="text-sm font-semibold text-slate-700 dark:text-gray-300 ml-1 transition-colors group-focus-within/input:text-primary"
                  htmlFor="email"
                >
                  Tu Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <MailOutline className="text-gray-400 group-focus-within/input:text-primary transition-colors" />
                  </div>
                  <input
                    {...register("email")}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-600 focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 aria-invalid:border-red-400"
                    id="email"
                    placeholder="ejemplo@dominio.com"
                    type="email"
                    aria-invalid={errors.email ? "true" : undefined}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                </div>
                {errors.email && (
                  <p
                    id="email-error"
                    role="alert"
                    className="text-xs text-red-500 ml-1"
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-2 group/input">
                <label
                  className="text-sm font-semibold text-slate-700 dark:text-gray-300 ml-1 transition-colors group-focus-within/input:text-primary"
                  htmlFor="message"
                >
                  Mensaje
                </label>
                <div className="relative">
                  <div className="absolute top-4 left-0 pl-4 flex items-center pointer-events-none">
                    <WorkOutline className="text-gray-400 group-focus-within/input:text-primary transition-colors" />
                  </div>
                  <textarea
                    {...register("message")}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-600 focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-slate-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 aria-invalid:border-red-400"
                    id="message"
                    placeholder="Cuéntame sobre tu proyecto..."
                    rows={5}
                    aria-invalid={errors.message ? "true" : undefined}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  />
                </div>
                {errors.message && (
                  <p
                    id="message-error"
                    role="alert"
                    className="text-xs text-red-500 ml-1"
                  >
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Privacy consent */}
              <div className="flex items-start gap-3">
                <input
                  {...register("consent")}
                  id="consent"
                  type="checkbox"
                  className="mt-1 w-4 h-4 rounded accent-primary cursor-pointer"
                  aria-describedby={
                    errors.consent ? "consent-error" : undefined
                  }
                />
                <div>
                  <label
                    htmlFor="consent"
                    className="text-sm text-slate-600 dark:text-gray-400 cursor-pointer"
                  >
                    Acepto la{" "}
                    <a
                      href="/politica-de-privacidad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-semibold"
                    >
                      política de privacidad
                    </a>{" "}
                    y consiento el procesamiento de mis datos para recibir una
                    respuesta.
                  </label>
                  {errors.consent && (
                    <p
                      id="consent-error"
                      role="alert"
                      className="text-xs text-red-500 mt-1"
                    >
                      {errors.consent.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Global API error banners */}
              {submitStatus === "rate_limited" && (
                <div
                  role="alert"
                  className="flex items-start gap-2 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 text-amber-800 dark:text-amber-300 text-sm"
                >
                  <ErrorOutlineOutlined className="text-base! mt-0.5 shrink-0" />
                  <span>
                    Demasiados intentos. Por favor esperá{" "}
                    {apiError?.retryAfterSeconds
                      ? `${apiError.retryAfterSeconds} segundos`
                      : "unos minutos"}{" "}
                    antes de intentar de nuevo.
                  </span>
                </div>
              )}

              {submitStatus === "error" && (
                <div
                  role="alert"
                  className="flex flex-col gap-1 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 text-sm"
                >
                  <div className="flex items-center gap-2 text-red-700 dark:text-red-400 font-semibold">
                    <ErrorOutlineOutlined className="text-base! shrink-0" />
                    <span>No se pudo enviar el mensaje.</span>
                  </div>
                  <p className="text-red-600 dark:text-red-300 text-xs ml-6">
                    El servicio de correo no está disponible momentáneamente.
                    Podés contactarme directamente por{" "}
                    <a
                      href="mailto:fernandezjos98@gmail.com"
                      className="underline font-semibold hover:text-primary"
                    >
                      fernandezjos98@gmail.com
                    </a>{" "}
                    o vía{" "}
                    <a
                      href="https://www.linkedin.com/in/josep-fern%C3%A1ndez-a84174247/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-semibold hover:text-primary"
                    >
                      LinkedIn
                    </a>
                    .
                  </p>
                </div>
              )}

              {/* Submit */}
              <div className="pt-2">
                <button
                  className="group relative w-full h-14 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold text-base tracking-wide transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background-light dark:focus-visible:ring-offset-background-dark disabled:opacity-60 disabled:cursor-not-allowed"
                  id="submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="relative z-10">Enviando…</span>
                  ) : (
                    <>
                      <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-12">
                        Enviar Mensaje
                      </span>
                      <SendOutlined className="absolute z-10 transition-all duration-300 translate-y-12 group-hover:translate-y-0 text-xl" />
                      <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-linear-to-r from-transparent via-white/20 to-transparent z-0" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="mt-6 flex justify-center lg:justify-start gap-2 text-sm text-slate-400 dark:text-gray-500">
            <LockOutlined className="text-sm!" />
            <p>Tus datos están seguros. Nunca envío spam.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
