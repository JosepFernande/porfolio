import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad del sitio de Josep Fernández Ortega.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl w-full mx-auto px-6 py-16 md:py-24">
      <article className="rounded-xl border border-gray-200 dark:border-slate-700/50 bg-card-light dark:bg-card-dark p-7 md:p-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
          Política de Privacidad
        </h1>

        <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>
            Este sitio puede recopilar información básica de contacto cuando el usuario envía un mensaje a través del formulario.
            Los datos se utilizan únicamente para responder consultas profesionales.
          </p>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Datos recopilados</h2>
            <p>
              Nombre, correo electrónico y contenido del mensaje enviado voluntariamente por el usuario.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Uso de la información</h2>
            <p>
              La información se utiliza exclusivamente para comunicación profesional y seguimiento de solicitudes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Protección de datos</h2>
            <p>
              No se comercializan datos personales ni se comparten con terceros salvo obligación legal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Contacto</h2>
            <p>
              Para consultas relacionadas con privacidad, podés escribir mediante los canales de contacto disponibles en este sitio.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
