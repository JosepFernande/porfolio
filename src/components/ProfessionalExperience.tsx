import { LockOutlined, TrendingUpOutlined } from "@mui/icons-material";
import SectionHeader from "./SectionHeader";

const PROFESSIONAL_EXPERIENCES = [
  {
    id: "createc-1",
    title: "Desarrollador Full Stack",
    company: "Createc Solution S.A",
    period: "Agosto 2023 - Enero 2024",
    summary:
      "Desarrollo de una plataforma web para la gestión de consultas médicas y diferentes tipos de exámenes clínicos, participando en decisiones de diseño técnico y arquitectura.",
    bullets: [
      "Implementación de módulos funcionales para la gestión de consultas y exámenes.",
      "Diseño de estructura de datos y flujos de negocio sobre MySQL.",
      "Gestión de dependencias con Composer y uso de migraciones con Eloquent ORM.",
    ],
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
    title: "Desarrollador Frontend",
    company: "PeopleApps",
    period: "Febrero 2024 - Actualidad",
    summary:
      "Evolución de aplicaciones empresariales frontend en Angular y Razor, incluyendo mantenimiento de sistemas legacy y definición de proyectos nuevos desde cero.",
    bullets: [
      "Definición de arquitectura, patrones, stack, metodología y file system para nuevos proyectos.",
      "Liderazgo técnico de equipo durante un período, impulsando estándares de desarrollo.",
      "Participación en frontend de aplicaciones con .NET MAUI y construcción de administrador Angular para notificaciones, usuarios y operación general.",
      "Trabajo en proyecto e-commerce con módulos por rol (administrador, proveedor, cliente) e integración de mapas interactivos.",
      "Migración del sistema core legacy hacia Angular moderno usando Signals, OnPush, Lazy Loading y enfoque zoneless.",
    ],
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

export default function ProfessionalExperience() {
  return (
    <section
      aria-labelledby="experiencia-title"
      className="w-full flex flex-col gap-10 animate-fade-in-up"
    >
      <SectionHeader
        tag="Experiencia"
        title="Trayectoria"
        accent="Profesional"
        description="Experiencia real en desarrollo de aplicaciones empresariales, combinando mantenimiento evolutivo, modernización de legacy y definición de soluciones desde cero."
        titleId="experiencia-title"
      />

      <aside
        aria-label="Aviso de confidencialidad"
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
              Transparencia NDA
            </p>
            <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Algunos detalles de clientes/proyectos se mantienen reservados por
              confidencialidad. En entrevista técnica comparto enfoque,
              decisiones e impacto.
            </p>
          </div>
        </div>
      </aside>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {PROFESSIONAL_EXPERIENCES.map((item) => (
          <article
            key={item.id}
            className="rounded-xl border border-gray-200 dark:border-slate-700/50 bg-card-light dark:bg-card-dark p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">
                    {item.company}
                  </p>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {item.period}
                  </p>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {item.summary}
              </p>

              <ul className="space-y-2 mb-5">
                {item.bullets.map((bullet) => (
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
              {item.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-gray-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border border-gray-200 dark:border-slate-700/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
