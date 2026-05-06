import { LockOutlined, TrendingUpOutlined } from "@mui/icons-material";
import SectionHeader from "./SectionHeader";

const CASE_STUDIES = [
  {
    id: "cs-peopleapps-maui-admin",
    title: "Administrador Angular para Ecosistema .NET MAUI",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMfCeIjZVtK04-uby4V6RcOkc5xqV8FxJ_BJsAwLPdeS_gJvOIzainTNdhPv7LsuebBmGZD3ckWiWn-JkGLiHJwRvvYGTd0fd1uLeyCzpWUBOQ8TN1SR84RaoypD2swMIT7JhPD79cBSpFIqpkPbuJRYIor6DPG-nqvGjEw756WEFHioE1o3-RiBZLP2cnf27Q_xjUoN9mwp7516MDTMeBYFgzp_0zBN9uSvgf783SNErPIc_Umvl2BSbjVzsQZD7iJOkMvdFjS68",
    imageAlt: "Panel de analítica y modernización de plataforma empresarial",
    context:
      "Aplicación empresarial con frontend móvil en .NET MAUI y necesidad de panel administrativo web para gestión operativa.",
    challenge:
      "Centralizar funciones administrativas críticas sin afectar flujos existentes de operación.",
    approach:
      "Construcción de módulo administrador en Angular para notificaciones, usuarios y gestión transversal del sistema, con enfoque modular y mantenible.",
    impact:
      "Mayor trazabilidad operativa y mejor control administrativo sobre funcionalidades clave del ecosistema.",
    stack: ["Angular", ".NET MAUI", "JavaScript", "Gestión de usuarios", "Notificaciones"],
  },
  {
    id: "cs-createc-medical-platform",
    title: "Plataforma de Gestión de Consultas y Exámenes Médicos",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBr76aGhSlMtnifgrD4Ex0U-m_BQx8QKEkveedMMcpPAfzfk5L5ce1aHF90Lunf553LQir-aGESvKNOHPUq3lxNxOizsYZpVuDssOaUnrYKk8-hct2wjQOpgPWg9g08zijdvNutOaaodUIHJbXU74PJ5lNPua0GHBbeSeSgjkKFxBAAKnaw858XZrkr2ftG2df09yiK3L7ng_lN4YXS2c4yu2eJ8ZW3h_G8Qb9kmAcFTQNU7d6qcVNGrNVGvuwbFRNkrqz2-KRDyVc",
    imageAlt: "Interfaz de sistema médico para gestión de consultas y exámenes",
    context:
      "Aplicación web para gestión de consultas médicas y diferentes tipos de exámenes clínicos en entorno empresarial.",
    challenge:
      "Diseñar una base funcional y escalable para operar flujos clínicos con estructura clara de datos.",
    approach:
      "Implementación full stack con Laravel + Livewire, modelado relacional en MySQL, migraciones, Composer y Eloquent ORM.",
    impact:
      "Estandarización técnica del proyecto y base sólida para evolución funcional del sistema.",
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
    title: "E-commerce Multirol con Mapas Interactivos",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMfCeIjZVtK04-uby4V6RcOkc5xqV8FxJ_BJsAwLPdeS_gJvOIzainTNdhPv7LsuebBmGZD3ckWiWn-JkGLiHJwRvvYGTd0fd1uLeyCzpWUBOQ8TN1SR84RaoypD2swMIT7JhPD79cBSpFIqpkPbuJRYIor6DPG-nqvGjEw756WEFHioE1o3-RiBZLP2cnf27Q_xjUoN9mwp7516MDTMeBYFgzp_0zBN9uSvgf783SNErPIc_Umvl2BSbjVzsQZD7iJOkMvdFjS68",
    imageAlt: "Interfaz e-commerce con segmentación por rol y ubicación",
    context:
      "Proyecto e-commerce con distintos perfiles de operación y necesidades de visualización geográfica.",
    challenge:
      "Coordinar experiencia y permisos por rol (administrador, proveedor, cliente) manteniendo consistencia funcional.",
    approach:
      "Desarrollo de módulos frontend en Angular por tipo de usuario e integración de mapas interactivos para mejorar flujos de operación.",
    impact:
      "Mejor experiencia operativa y de navegación para usuarios con necesidades diferentes dentro de la misma plataforma.",
    stack: ["Angular", "JavaScript", "Mapas Interactivos", "Arquitectura por roles", "UX Operativa"],
  },
  {
    id: "cs-peopleapps-legacy-modernization",
    title: "Migración de Sistema Legacy a Angular Moderno",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBr76aGhSlMtnifgrD4Ex0U-m_BQx8QKEkveedMMcpPAfzfk5L5ce1aHF90Lunf553LQir-aGESvKNOHPUq3lxNxOizsYZpVuDssOaUnrYKk8-hct2wjQOpgPWg9g08zijdvNutOaaodUIHJbXU74PJ5lNPua0GHBbeSeSgjkKFxBAAKnaw858XZrkr2ftG2df09yiK3L7ng_lN4YXS2c4yu2eJ8ZW3h_G8Qb9kmAcFTQNU7d6qcVNGrNVGvuwbFRNkrqz2-KRDyVc",
    imageAlt: "Panel de analítica y modernización de plataforma empresarial",
    context:
      "Sistema core legado en Razor + JavaScript con necesidad de modernización progresiva sin interrumpir operación.",
    challenge:
      "Reducir deuda técnica y mejorar mantenibilidad sin frenar entregas funcionales del negocio.",
    approach:
      "Estrategia incremental de migración a Angular moderno aplicando Signals, Change Detection OnPush, Lazy Loading y enfoque zoneless.",
    impact:
      "Mayor consistencia técnica del frontend y evolución funcional con menor riesgo operativo.",
    stack: ["Angular", "Razor", "JavaScript", "Signals", "OnPush", "Lazy Loading", "Zoneless"],
  },
];

export default function ProfessionalCaseStudies() {
  return (
    <section
      aria-labelledby="case-studies-title"
      className="w-full flex flex-col gap-10 animate-fade-in-up"
    >
      <SectionHeader
        tag="Case Studies"
        title="Caso de Estudios"
        accent="Profesionales"
        description="Resumen de casos reales en contexto empresarial. Se comparten
          decisiones técnicas, enfoque de arquitectura y resultados, preservando
          confidencialidad de cliente y producto."
        titleId="case-studies-title"
      />

      <div className="grid grid-cols-1 gap-6">
        {CASE_STUDIES.map((item, index) => (
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
                  aria-label={item.imageAlt}
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
                    {item.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wide shrink-0">
                    <LockOutlined className="text-sm!" /> NDA
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm md:text-base leading-relaxed">
                  <div className="rounded-lg border border-gray-200 dark:border-slate-700/50 bg-white/70 dark:bg-slate-800/30 p-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400 mb-1">
                      Contexto
                    </p>
                    <p className="text-slate-700 dark:text-slate-300">
                      {item.context}
                    </p>
                  </div>

                  <div className="rounded-lg border border-gray-200 dark:border-slate-700/50 bg-white/70 dark:bg-slate-800/30 p-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400 mb-1">
                      Desafío
                    </p>
                    <p className="text-slate-700 dark:text-slate-300">
                      {item.challenge}
                    </p>
                  </div>

                  <div className="rounded-lg border border-gray-200 dark:border-slate-700/50 bg-white/70 dark:bg-slate-800/30 p-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400 mb-1">
                      Enfoque
                    </p>
                    <p className="text-slate-700 dark:text-slate-300">
                      {item.approach}
                    </p>
                  </div>

                  <div className="rounded-lg border border-primary/25 bg-primary/6 dark:bg-primary/10 p-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-primary mb-1">
                      Impacto
                    </p>
                    <p className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                      <TrendingUpOutlined className="text-primary text-[18px]! mt-0.5" />
                      <span>{item.impact}</span>
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
        ))}
      </div>
    </section>
  );
}
