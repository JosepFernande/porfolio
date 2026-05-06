import { TECHNICAL_SKILLS } from "@/const/technical-skills.data";
import SectionHeader from "./SectionHeader";

export default function TechnicalSkill() {
    return (
        <section aria-labelledby="habilidades-title" className="max-w-300 mx-auto w-full flex flex-col gap-12 animate-fade-in-up">
            <SectionHeader
                tag="Expertise"
                title="Habilidades"
                accent="Técnicas"
                description="Un conjunto de tecnologías modernas enfocadas en el rendimiento y la escalabilidad."
                titleId="habilidades-title"
            />

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {TECHNICAL_SKILLS.map((skill) => {
                    const Icon = skill.icon;
                    const BgIcon = skill.bgIcon;

                    return (
                        <div
                            key={skill.title}
                            className="group relative flex flex-col gap-6 p-6 rounded-xl bg-card-light dark:bg-card-dark
              border border-gray-200 dark:border-slate-700/50
              hover:border-primary/50 dark:hover:border-primary/50
              hover:shadow-[0_0_25px_rgba(16,185,129,0.22)]
              dark:hover:shadow-[0_0_20px_rgba(16,185,129,0.12)]
              transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Icono decorativo */}
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <BgIcon className="text-[80px]! text-primary" />
                            </div>

                            {/* Icono principal */}
                            <div className="size-12 rounded-xl bg-background-light dark:bg-slate-800/50
                flex items-center justify-center text-primary
                border border-gray-100 dark:border-slate-700/50
                group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                            >
                                <Icon className="text-[28px]!" />
                            </div>

                            {/* Texto */}
                            <div className="flex flex-col gap-2 z-10">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                    {skill.title}
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                    {skill.description}
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-slate-700/50">
                                {skill.tags.map((tag) =>
                                    tag.highlight ? (
                                        <span
                                            key={tag.label}
                                            className="px-3 py-1 rounded-lg text-xs font-semibold
                      bg-primary/10 text-primary border border-primary/20
                      flex items-center gap-1"
                                        >
                                            {tag.label}
                                            {tag.level && (
                                                <span className="text-[10px] uppercase opacity-70 ml-1">
                                                    {tag.level}
                                                </span>
                                            )}
                                        </span>
                                    ) : (
                                        <span
                                            key={tag.label}
                                            className="px-3 py-1 rounded-lg text-xs font-medium
                      bg-gray-100 dark:bg-slate-800/50
                      text-slate-600 dark:text-slate-300
                      border border-gray-200 dark:border-slate-700/50"
                                        >
                                            {tag.label}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
