import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Servicio",
  description:
    "Términos de servicio del sitio de Josep Fernández Ortega.",
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl w-full mx-auto px-6 py-16 md:py-24">
      <article className="rounded-xl border border-gray-200 dark:border-slate-700/50 bg-card-light dark:bg-card-dark p-7 md:p-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
          Términos de Servicio
        </h1>

        <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>
            Al utilizar este sitio, aceptás estos términos. El contenido tiene fines informativos y profesionales.
          </p>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Uso del contenido</h2>
            <p>
              No está permitido copiar, redistribuir o reutilizar contenido del sitio sin autorización previa.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Limitación de responsabilidad</h2>
            <p>
              No se garantiza disponibilidad continua del sitio ni ausencia total de errores técnicos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Enlaces externos</h2>
            <p>
              Este sitio puede incluir enlaces a terceros; no se controla ni garantiza el contenido de esos sitios.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Modificaciones</h2>
            <p>
              Estos términos pueden actualizarse en cualquier momento para reflejar cambios funcionales o legales.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
