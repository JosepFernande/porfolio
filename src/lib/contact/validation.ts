// Use zod v3 compat layer — required for @hookform/resolvers type compatibility
import { z } from "zod/v3";

const HTML_INJECTION_RE = /<script|<style|<html|<body|<img/i;

export const contactFormSchema = z.object({
  name: z
    .string()
    .max(100, { message: "Name must be at most 100 characters." })
    .optional(),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(5000, { message: "Message must be at most 5000 characters." })
    .refine((msg) => !HTML_INJECTION_RE.test(msg), {
      message: "HTML content is not allowed.",
    }),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must accept the privacy policy." }),
  }),
  honeypot: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Creates a localized contact form schema using the provided translator.
 * Use inside a component: createContactSchema(t) where t = useTranslations('Validation').
 */
export function createContactSchema(t: (key: string) => string) {
  return z.object({
    name: z
      .string()
      .max(100, { message: t("nameMax") })
      .optional(),
    email: z
      .string()
      .min(1, { message: t("emailRequired") })
      .email({ message: t("emailInvalid") }),
    message: z
      .string()
      .min(10, { message: t("messageMin") })
      .max(5000, { message: t("messageMax") })
      .refine((msg) => !HTML_INJECTION_RE.test(msg), {
        message: t("htmlNotAllowed"),
      }),
    consent: z.literal(true, {
      errorMap: () => ({ message: t("consentRequired") }),
    }),
    honeypot: z.string().optional(),
  });
}
