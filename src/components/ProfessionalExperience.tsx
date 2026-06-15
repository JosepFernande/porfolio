import { LockOutlined, TrendingUpOutlined } from "@mui/icons-material";
import SectionHeader from "./SectionHeader";
import { getTranslations } from "next-intl/server";
import { raw } from "@/lib/i18n-helpers";

const PROFESSIONAL_EXPERIENCES = [
  {
    id: "createc-1",
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
    id: "peopleapps-2",
    stack: [
      "Angular",
      "Razor",
      "JavaScript",
      ".NET MAUI",
      "Signals",
      "OnPush",
      "Lazy Loading",
      "Zoneless",
    ],
  },
];

export default async function ProfessionalExperience() {
  const t = await getTranslations("ProfessionalExperience");
  const items = raw<
    Record<
      string,
      {
        title: string;
        company: string;
        period: string;
        summary: string;
        bullets: string[];
      }
    >
  >(t, "items");
  return (
    <section
      aria-labelledby="experiencia-title"
      className="w-full flex flex-col gap-10 animate-fade-in-up"
    >
      <SectionHeader
        tag={t("tag")}
        title={t("title")}
        accent={t("accent")}
        description={t("description")}
        titleId="experiencia-title"
      />

      <aside
        aria-label={t("ndaAriaLabel")}
        className="w-full rounded-xl border border-primary/20 bg-primary/8 px-4 py-3 md:px-5 md:py-4 relative overflow-hidden"
      >
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-1.5 bg-linear-to-b from-primary/90 via-primary to-primary/70"
        />
        <div className="pl-3 md:pl-4 flex items-start gap-3">
          <span className="mt-0.5 inline-flex items-center justify-center size-8 rounded-lg bg-primary/12 border border-primary/25 text-primary shrink-0">
            <LockOutlined className="text-base!" />
          </span>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-primary uppercase tracking-wide">
              {t("ndaTitle")}
            </p>
            <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {t("ndaBody")}
            </p>
          </div>
        </div>
      </aside>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {PROFESSIONAL_EXPERIENCES.map((exp) => {
          const item = items[exp.id];
          return (
          <article
            key={exp.id}
            className="rounded-xl border border-gray-200 dark:border-slate-700/50 bg-card-light dark:bg-card-dark p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">
                    {item?.company ?? ""}
                  </p>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug">
                    {item?.title ?? exp.id}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {item?.period ?? ""}
                  </p>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {item?.summary ?? ""}
              </p>

              <ul className="space-y-2 mb-5">
                {item?.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <TrendingUpOutlined className="text-primary text-[18px]! mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-slate-700/50">
              {exp.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-gray-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border border-gray-200 dark:border-slate-700/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        );
        })}
      </div>
    </section>
  );
}
