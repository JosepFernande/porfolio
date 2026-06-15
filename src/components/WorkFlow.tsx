import {
    AdsClickOutlined,
    AutoGraphOutlined,
    Diversity3Outlined,
    GitHub,
    Groups2Outlined,
    HubOutlined,
    RocketLaunchOutlined,
    SyncOutlined,
} from "@mui/icons-material";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { getTranslations } from "next-intl/server";

export default async function WorkFlow() {
    const t = await getTranslations("WorkFlow");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const teamTools = (t.raw as any)("team.tools") as { label: string }[];
    return (
        <section aria-labelledby="workflow-title" className="flex-grow flex flex-col items-center">
            <div className=" w-full mb-16 ">
                <SectionHeader
                    tag={t("tag")}
                    title={t("title")}
                    accent={t("accent")}
                    description={t("description")}
                    titleId="workflow-title"
                />
            </div>
            <div className="max-w-[960px] w-full">
                <div className="relative grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] gap-x-6 md:gap-x-12">
                    <div className="flex flex-col items-center">
                        <div className="relative z-10 flex items-center justify-center size-12 md:size-14 rounded-2xl bg-white dark:bg-card-dark border-2 border-primary shadow-glow text-primary transition-transform hover:scale-110 duration-300">
                            <SyncOutlined className="text-2xl! md:text-3xl!" />
                        </div>
                        <div className="w-0.5 bg-gray-200 dark:bg-primary/20 h-full grow min-h-[120px]"></div>
                    </div>
                    <div className="pb-12 pt-1 group">
                        <div className="bg-white dark:bg-card-dark border border-gray-100 dark:border-white/5 rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl dark:hover:shadow-glow cursor-default transform hover:-translate-y-1">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                                    {t("agile.title")}
                                </h3>
                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary uppercase tracking-wide">{t("agile.badge")}</span>
                            </div>
                            <p className="text-sm md:text-base font-medium text-primary mb-3">
                                {t("agile.subtitle")}
                            </p>
                            <p className="text-slate-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-6">
                                {t("agile.body")}
                            </p>
                            <div className="w-full h-40 bg-gray-50 dark:bg-black/30 rounded-xl overflow-hidden relative group-hover:scale-[1.01] transition-transform duration-500">
                                <Image
                                    alt="Abstract agile process"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4-svZG2BIUzXtAS70zpiBlVn6JD2JoynKfH2JJgmkrHLNUtnJrHrmz3jkj7sSX8sxpOfnCFUY30aoxdjCS1WLonMoqtnjJrL6pKlAUG0Jl-lH556cGFvSivknWnu6OPuCYX1e-zwhAvJw10Z7xhnYJvahmYhMj-pPZucw5wKQVyta-3WjrdDapwCGpQ2rnLZ6JWy1Mx8pkkpOqdpEFzf2S1YK72Ip-2CQiGZX7z1iDnbpL4zxoR17sHsTCHBGJm4sFBVJfUpxSsc"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 640px"
                                    className="object-cover opacity-80 dark:opacity-60 dark:mix-blend-overlay hover:opacity-100 transition-opacity duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-card-dark via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 flex gap-2">
                                    <div className="h-1.5 w-12 rounded-full bg-primary shadow-sm"></div>
                                    <div className="h-1.5 w-8 rounded-full bg-gray-300 dark:bg-primary/30"></div>
                                    <div className="h-1.5 w-8 rounded-full bg-gray-300 dark:bg-primary/30"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="relative z-10 flex items-center justify-center size-12 md:size-14 rounded-2xl bg-white dark:bg-card-dark border border-gray-200 dark:border-white/20 text-slate-500 dark:text-white group-hover/item:border-primary group-hover/item:text-primary transition-all duration-300 shadow-sm">
                            <AdsClickOutlined className="text-2xl! md:text-3xl!" />
                        </div>
                        <div className="w-0.5 bg-gray-200 dark:bg-white/10 h-full grow min-h-[120px]"></div>
                    </div>
                    <div className="pb-12 pt-1 group/item">
                        <div className="bg-white dark:bg-card-dark border border-gray-100 dark:border-white/5 rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl dark:hover:shadow-glow cursor-default transform hover:-translate-y-1">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t("objectives.title")}</h3>
                                <span className="hidden md:inline-flex px-3 py-1 rounded-full text-xs font-bold bg-gray-100 dark:bg-white/10 text-slate-500 dark:text-gray-300 uppercase tracking-wide group-hover/item:bg-primary/10 group-hover/item:text-primary transition-colors">{t("objectives.badge")}</span>
                            </div>
                            <p className="text-slate-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
                                {t.rich("objectives.body", {
                                    primary: (chunks) => <span className="text-primary font-semibold">{chunks}</span>,
                                })}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="relative z-10 flex items-center justify-center size-12 md:size-14 rounded-2xl bg-white dark:bg-card-dark border border-gray-200 dark:border-white/20 text-slate-500 dark:text-white group-hover/item3:border-primary group-hover/item3:text-primary transition-all duration-300 shadow-sm">
                            <RocketLaunchOutlined className="text-2xl! md:text-3xl!" />
                        </div>
                        <div className="w-0.5 bg-gray-200 dark:bg-white/10 h-full grow min-h-[120px]"></div>
                    </div>
                    <div className="pb-12 pt-1 group/item3">
                        <div className="bg-white dark:bg-card-dark border border-gray-100 dark:border-white/5 rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl dark:hover:shadow-glow cursor-default transform hover:-translate-y-1">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{t("cicd.title")}</h3>
                            <p className="text-slate-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
                                {t("cicd.body")}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="relative z-10 flex items-center justify-center size-12 md:size-14 rounded-2xl bg-white dark:bg-card-dark border border-gray-200 dark:border-white/20 text-slate-500 dark:text-white group-hover/item4:border-primary group-hover/item4:text-primary transition-all duration-300 shadow-sm">
                            <Diversity3Outlined className="text-2xl! md:text-3xl!" />
                        </div>
                        <div className="w-0.5 bg-gradient-to-b from-gray-200 to-transparent dark:from-white/10 dark:to-transparent h-12"></div>
                    </div>
                    <div className="pt-1 group/item4">
                        <div className="bg-white dark:bg-card-dark border border-gray-100 dark:border-white/5 rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl dark:hover:shadow-glow cursor-default transform hover:-translate-y-1">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{t("team.title")}</h3>
                            <p className="text-slate-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-6">
                                {t("team.body")}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {teamTools.map((tool) => (
                                <div key={tool.label} className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-3 py-2 rounded-lg border border-transparent hover:border-primary/30 hover:text-primary transition-colors">
                                    {tool.label === "Microsoft Teams" || tool.label === "Microsoft Teams" ? <Groups2Outlined className="text-lg!" /> :
                                     tool.label === "Azure DevOps" ? <AutoGraphOutlined className="text-lg!" /> :
                                     tool.label === "Git" ? <><HubOutlined className="text-lg!" /><GitHub className="text-lg!" /></> :
                                     tool.label === "Scrum / Kanban / Scrumban" ? <SyncOutlined className="text-lg!" /> :
                                     tool.label === "OKRs" ? <RocketLaunchOutlined className="text-lg!" /> : null}
                                    {tool.label}
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
