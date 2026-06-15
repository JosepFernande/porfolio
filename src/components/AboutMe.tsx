import {
  FileDownloadOutlined,
  RocketLaunchOutlined,
} from "@mui/icons-material";
import {
  Angular,
  JavaScript,
  NestJS,
  NextJs,
  NodeJs,
  React,
} from "developer-icons";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function AboutMe() {
  const t = await getTranslations("AboutMe");
  const habilities = [
    {
      htitle: "JavaScript",
      HIcon: JavaScript,
    },
    {
      htitle: "React",
      HIcon: React,
    },
    {
      htitle: "Next.js",
      HIcon: NextJs,
    },
    {
      htitle: "Node.js",
      HIcon: NodeJs,
    },
    {
      htitle: "Angular",
      HIcon: Angular,
    },
    {
      htitle: "NestJs",
      HIcon: NestJS,
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center animate-fade-in-up">
      <div className="relative order-1 md:order-2 flex justify-center md:justify-end group perspective-1000">
        <div className="absolute -top-8 -right-6 w-56 h-56 bg-primary/15 rounded-full blur-3xl transition-all duration-700"></div>
        <div className="absolute bottom-2 left-4 w-40 h-40 bg-primary/10 rounded-full blur-2xl transition-all duration-700"></div>
        <div className="relative z-10 w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl rotate-1 bg-white dark:bg-surface-dark p-2 shadow-2xl transition-all duration-500 ease-out group-hover:rotate-0 group-hover:scale-[1.015] group-hover:shadow-glow">
          <div className="w-full h-full rounded-2xl overflow-hidden relative">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
              data-alt="Professional headshot of a developer smiling against a blurred background"
              style={{
                backgroundImage: "url('me.webp')",
              }}
            ></div>
          </div>
        </div>
        <div
          className="absolute -bottom-4 right-10 z-20 bg-surface-light dark:bg-surface-dark px-5 py-3 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700/50 flex items-center gap-3 animate-float"
          style={{
            animationDelay: "1s",
          }}
        >
          <div className="bg-primary/10 p-2 rounded-lg">
            <RocketLaunchOutlined className="text-primary text-xl" />
          </div>
          <div>
            <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">
              {t("focusLabel")}
            </p>
            <p className="text-sm font-bold text-gray-800 dark:text-white">
              {t("focusValue")}
            </p>
          </div>
        </div>
      </div>
      <div className="order-2 md:order-1 flex flex-col gap-8">
        <div className="space-y-4">
          <p className="text-primary font-semibold tracking-[0.2em] text-sm uppercase flex items-center gap-2">
            <span className="w-8 h-0.5 bg-primary"></span>
            {t("tag")}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
            {t.rich("greeting", {
              br: () => <br className="hidden md:block" />,
            })}{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-900 via-gray-700 to-primary dark:from-white dark:via-gray-200 dark:to-primary">
              Josep Fernández
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-primary/90">
            {t("role")}
          </h2>
        </div>
        <div className="space-y-4">
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
            {t.rich("bio1", {
              strong: (chunks) => (
                <strong className="text-gray-900 dark:text-white font-semibold">
                  {chunks}
                </strong>
              ),
            })}
          </p>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
            {t.rich("bio2", {
              primary: (chunks) => (
                <span className="text-primary font-medium">{chunks}</span>
              ),
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {(t.raw("pills") as string[]).map((pill) => (
            <span
              key={pill}
              className="px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-primary/10 text-primary border border-primary/20"
            >
              {pill}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {habilities.map(({ htitle, HIcon }, i) => (
            <div
              key={`${htitle}-${i}`}
              className="px-4 py-2 rounded-full bg-white border border-gray-200 dark:bg-surface-dark dark:border-[#334155] hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/20 transition-all cursor-default flex items-center gap-2 group/chip shadow-sm"
            >
              <HIcon size={18} />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                {htitle}
              </span>
            </div>
          ))}
        </div>
        <div className="pt-4 flex flex-col sm:flex-row gap-4">
          <a
            href="/CV-Josep-Fernandez-Ortega.pdf"
            download
            className="flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover transition-all hover:shadow-glow transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background-light dark:focus-visible:ring-offset-background-dark"
          >
            <FileDownloadOutlined />
            {t("downloadCv")}
          </a>
          <Link
            href="#case-studies"
            className="flex items-center justify-center gap-2 px-8 py-3 bg-transparent   text-gray-800 dark:text-white font-bold rounded-xl  dark:hover:text-primary transition-all"
          >
            {t("viewProjects")}
          </Link>
        </div>
      </div>
    </section>
  );
}
