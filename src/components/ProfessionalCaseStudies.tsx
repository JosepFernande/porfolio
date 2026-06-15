import { LockOutlined, TrendingUpOutlined } from "@mui/icons-material";
import SectionHeader from "./SectionHeader";
import { getTranslations } from "next-intl/server";

const CASE_STUDIES = [
  {
    id: "cs-peopleapps-maui-admin",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMfCeIjZVtK04-uby4V6RcOkc5xqV8FxJ_BJsAwLPdeS_gJvOIzainTNdhPv7LsuebBmGZD3ckWiWn-JkGLiHJwRvvYGTd0fd1uLeyCzpWUBOQ8TN1SR84RaoypD2swMIT7JhPD79cBSpFIqpkPbuJRYIor6DPG-nqvGjEw756WEFHioE1o3-RiBZLP2cnf27Q_xjUoN9mwp7516MDTMeBYFgzp_0zBN9uSvgf783SNErPIc_Umvl2BSbjVzsQZD7iJOkMvdFjS68",
    stack: ["Angular", ".NET MAUI", "JavaScript", "Gestión de usuarios", "Notificaciones"],
  },
  {
    id: "cs-createc-medical-platform",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBr76aGhSlMtnifgrD4Ex0U-m_BQx8QKEkveedMMcpPAfzfk5L5ce1aHF90Lunf553LQir-aGESvKNOHPUq3lxNxOizsYZpVuDssOaUnrYKk8-hct2wjQOpgPWg9g08zijdvNutOaaodUIHJbXU74PJ5lNPua0GHBbeSeSgjkKFxBAAKnaw858XZrkr2ftG2df09yiK3L7ng_lN4YXS2c4yu2eJ8ZW3h_G8Qb9kmAcFTQNU7d6qcVNGrNVGvuwbFRNkrqz2-KRDyVc",
    stack: [
      "Laravel",
      "Livewire",
      "JavaScript",
      "MySQL",
      "Composer",
      "Eloquent ORM",
    ],
  },
  {
    id: "cs-peopleapps-ecommerce-maps",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMfCeIjZVtK04-uby4V6RcOkc5xqV8FxJ_BJsAwLPdeS_gJvOIzainTNdhPv7LsuebBmGZD3ckWiWn-JkGLiHJwRvvYGTd0fd1uLeyCzpWUBOQ8TN1SR84RaoypD2swMIT7JhPD79cBSpFIqpkPbuJRYIor6DPG-nqvGjEw756WEFHioE1o3-RiBZLP2cnf27Q_xjUoN9mwp7516MDTMeBYFgzp_0zBN9uSvgf783SNErPIc_Umvl2BSbjVzsQZD7iJOkMvdFjS68",
    stack: ["Angular", "JavaScript", "Mapas Interactivos", "Arquitectura por roles", "UX Operativa"],
  },
  {
    id: "cs-peopleapps-legacy-modernization",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBr76aGhSlMtnifgrD4Ex0U-m_BQx8QKEkveedMMcpPAfzfk5L5ce1aHF90Lunf553LQir-aGESvKNOHPUq3lxNxOizsYZpVuDssOaUnrYKk8-hct2wjQOpgPWg9g08zijdvNutOaaodUIHJbXU74PJ5lNPua0GHBbeSeSgjkKFxBAAKnaw858XZrkr2ftG2df09yiK3L7ng_lN4YXS2c4yu2eJ8ZW3h_G8Qb9kmAcFTQNU7d6qcVNGrNVGvuwbFRNkrqz2-KRDyVc",
    stack: ["Angular", "Razor", "JavaScript", "Signals", "OnPush", "Lazy Loading", "Zoneless"],
  },
];

export default async function ProfessionalCaseStudies() {
  const t = await getTranslations("ProfessionalCaseStudies");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const items = (t.raw as any)("items") as Record<
    string,
    {
      title: string;
      imageAlt: string;
      context: string;
      challenge: string;
      approach: string;
      impact: string;
    }
  >;
  return (
    <section
      aria-labelledby="case-studies-title"
      className="w-full flex flex-col gap-10 animate-fade-in-up"
    >
      <SectionHeader
        tag={t("tag")}
        title={t("title")}
        accent={t("accent")}
        description={t("description")}
        titleId="case-studies-title"
      />

      <div className="grid grid-cols-1 gap-6">
        {CASE_STUDIES.map((item, index) => {
          const cs = items[item.id];
          return (
          <article
            key={item.id}
            className="rounded-xl border border-gray-200 dark:border-slate-700/50 bg-card-light dark:bg-card-dark overflow-hidden shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300"
          >
            <div
              className={`grid grid-cols-1  ${
                index % 2 === 1
                  ? "lg:grid-cols-[64%_36%]"
                  : "lg:grid-cols-[36%_64%]"
              }`}
            >
              <div
                className={`relative min-h-65 lg:min-h-95 ${
                  index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url("${item.image}")` }}
                  role="img"
                  aria-label={cs?.imageAlt ?? ""}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/35 to-transparent" />
              </div>

              <div
                className={`p-7 md:p-10 ${
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                    {cs?.title ?? item.id}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wide shrink-0">
                    <LockOutlined className="text-sm!" /> NDA
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm md:text-base leading-relaxed">
                  <div className="rounded-lg border border-gray-200 dark:border-slate-700/50 bg-white/70 dark:bg-slate-800/30 p-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400 mb-1">
                      {t("labels.context")}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300">
                      {cs?.context ?? ""}
                    </p>
                  </div>

                  <div className="rounded-lg border border-gray-200 dark:border-slate-700/50 bg-white/70 dark:bg-slate-800/30 p-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400 mb-1">
                      {t("labels.challenge")}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300">
                      {cs?.challenge ?? ""}
                    </p>
                  </div>

                  <div className="rounded-lg border border-gray-200 dark:border-slate-700/50 bg-white/70 dark:bg-slate-800/30 p-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400 mb-1">
                      {t("labels.approach")}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300">
                      {cs?.approach ?? ""}
                    </p>
                  </div>

                  <div className="rounded-lg border border-primary/25 bg-primary/6 dark:bg-primary/10 p-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-primary mb-1">
                      {t("labels.impact")}
                    </p>
                    <p className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                      <TrendingUpOutlined className="text-primary text-[18px]! mt-0.5" />
                      <span>{cs?.impact ?? ""}</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-5 mt-6 border-t border-gray-100 dark:border-slate-700/50">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-gray-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border border-gray-200 dark:border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        );
        })}
      </div>
    </section>
  );
}
