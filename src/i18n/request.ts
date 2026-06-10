import { cookies, headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { defaultLocale, locales, type Locale } from "./config";

function detectLocale(
  cookieValue: string | undefined,
  acceptLang: string | null,
): Locale {
  if (cookieValue && (locales as readonly string[]).includes(cookieValue)) {
    return cookieValue as Locale;
  }

  if (acceptLang) {
    const primary =
      acceptLang.split(",")[0]?.split(";")[0]?.trim().toLowerCase() ?? "";
    if (primary.startsWith("en")) return "en";
    if (primary.startsWith("es")) return "es";
  }

  return defaultLocale;
}

export default getRequestConfig(async () => {
  const store = await cookies();
  const hdrs = await headers();
  const locale = detectLocale(
    store.get("locale")?.value,
    hdrs.get("accept-language"),
  );
  const messages = (await import(`../../messages/${locale}.json`)).default;
  return { locale, messages };
});
