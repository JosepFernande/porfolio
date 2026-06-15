import type { Metadata } from "next";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("LegalPrivacy");
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function PrivacyPolicyPage() {
  const locale = await getLocale();
  setRequestLocale(locale);
  const t = await getTranslations("LegalPrivacy");

  return (
    <main className="max-w-4xl w-full mx-auto px-6 py-16 md:py-24">
      <article className="rounded-xl border border-gray-200 dark:border-slate-700/50 bg-card-light dark:bg-card-dark p-7 md:p-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
          {t("heading")}
        </h1>

        <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>{t("intro")}</p>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t("section1Title")}</h2>
            <p>{t("section1Body")}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t("section2Title")}</h2>
            <p>{t("section2Body")}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t("section3Title")}</h2>
            <p>{t("section3Body")}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t("section4Title")}</h2>
            <p>{t("section4Body")}</p>
          </section>
        </div>
      </article>
    </main>
  );
}
