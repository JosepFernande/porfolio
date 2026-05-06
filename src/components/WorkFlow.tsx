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

export default function WorkFlow() {
    return (
        <section aria-labelledby="workflow-title" className="flex-grow flex flex-col items-center">
            <div className=" w-full mb-16 ">
                <SectionHeader
                    tag="Workflow"
                    title="Metodologías de"
                    accent="Trabajo"
                    description="Mi proceso de desarrollo combina agilidad técnica con visión estratégica. Cada línea de código responde a un objetivo claro y a una mejora constante, garantizando soluciones escalables."
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
                                    Agile &amp; Scrum
                                </h3>
                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary uppercase tracking-wide">Iterativo</span>
                            </div>
                            <p className="text-sm md:text-base font-medium text-primary mb-3">
                                Aplicado en mantenimiento evolutivo y migración de sistemas legacy.
                            </p>
                            <p className="text-slate-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-6">
                                Iteraciones rápidas y feedback constante para entregar valor desde la semana 1.
                                Utilizo ceremonias Scrum para mantener al equipo alineado y adaptarnos rápidamente a los cambios del mercado.
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
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Orientación a Objetivos</h3>
                                <span className="hidden md:inline-flex px-3 py-1 rounded-full text-xs font-bold bg-gray-100 dark:bg-white/10 text-slate-500 dark:text-gray-300 uppercase tracking-wide group-hover/item:bg-primary/10 group-hover/item:text-primary transition-colors">OKRs</span>
                            </div>
                            <p className="text-slate-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
                                Enfoque en <span className="text-primary font-semibold">resultados tangibles</span>, no solo en escribir código.
                                Cada feature se alinea a objetivos definidos, con seguimiento continuo del impacto en experiencia de usuario y eficiencia del negocio.
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
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Mejora Continua (CI/CD)</h3>
                            <p className="text-slate-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
                                Refactorización constante y despliegue automatizado para un software robusto.
                                Implementación de pipelines de testing automatizado para garantizar que la calidad nunca sea negociable.
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
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Colaboración en Equipo</h3>
                            <p className="text-slate-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-6">
                                Comunicación transversal con equipos técnicos y de negocio, con trazabilidad de tareas y entregas iterativas.
                                El software de calidad nace cuando desarrollo, producto y stakeholders trabajan sobre objetivos compartidos.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-3 py-2 rounded-lg border border-transparent hover:border-primary/30 hover:text-primary transition-colors">
                                    <Groups2Outlined className="text-lg!" /> Microsoft Teams
                                </div>
                                <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-3 py-2 rounded-lg border border-transparent hover:border-primary/30 hover:text-primary transition-colors">
                                    <AutoGraphOutlined className="text-lg!" /> Azure DevOps
                                </div>
                                <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-3 py-2 rounded-lg border border-transparent hover:border-primary/30 hover:text-primary transition-colors">
                                    <HubOutlined className="text-lg!" />
                                    Git
                                    <GitHub className="text-lg!" />
                                </div>
                                <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-3 py-2 rounded-lg border border-transparent hover:border-primary/30 hover:text-primary transition-colors">
                                    <SyncOutlined className="text-lg!" /> Scrum / Kanban / Scrumban
                                </div>
                                <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-3 py-2 rounded-lg border border-transparent hover:border-primary/30 hover:text-primary transition-colors">
                                    <RocketLaunchOutlined className="text-lg!" /> OKRs
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
