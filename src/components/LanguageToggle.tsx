"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { LanguageOutlined } from "@mui/icons-material";
import { localeCookieName, type Locale } from "@/i18n/config";

export default function LanguageToggle() {
  const router = useRouter();
  const t = useTranslations("LanguageToggle");
  const current = useLocale() as Locale;
  const next: Locale = current === "es" ? "en" : "es";

  function toggle() {
    document.cookie = `${localeCookieName}=${next};path=/;max-age=31536000;SameSite=Lax`;
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t("ariaLabel")}
      className="flex items-center gap-1.5 px-2.5 py-2 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-300 text-xs font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
    >
      <LanguageOutlined fontSize="small" />
      <span>{current.toUpperCase()}</span>
    </button>
  );
}
