
import { ArrowUpward } from "@mui/icons-material";
import { GitHubDark, Gmail, LinkedIn } from "developer-icons";
import ThemeToggle from "./ThemeToggle";

export default function Footer() {
    return (
        <footer className="w-full bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-primary/20 py-12 transition-colors duration-300">
            <div className="layout-container max-w-240 mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 items-center mb-10">
                    <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                            <h2 className="text-gray-900 dark:text-white text-xl font-bold tracking-tight">Josep Fernández Ortega</h2>
                        </div>
                        <p className="text-gray-600 dark:text-slate-400 text-sm font-medium">Full Stack Developer<br /><span className="opacity-70 font-normal">Construyendo soluciones web escalables.</span></p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a aria-label="GitHub" className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-700/60 transition-all duration-300 border border-transparent hover:border-primary/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background-light dark:focus-visible:ring-offset-background-dark" href="https://github.com/JosepFernande" target="_blank" rel="noopener noreferrer">
                            <GitHubDark size={24} />

                            <span className="absolute -top-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">GitHub</span>
                        </a>
                        <a aria-label="LinkedIn" className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-700/60 transition-all duration-300 border border-transparent hover:border-primary/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background-light dark:focus-visible:ring-offset-background-dark" href="https://www.linkedin.com/in/josep-fern%C3%A1ndez-a84174247/" target="_blank" rel="noopener noreferrer">
                            <LinkedIn size={24} />
                            <span className="absolute -top-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">LinkedIn</span>
                        </a>

                        <a aria-label="Email" className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-700/60 transition-all duration-300 border border-transparent hover:border-primary/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background-light dark:focus-visible:ring-offset-background-dark" href="mailto:fernandezjos98@gmail.com">
                            <Gmail size={24} />
                            <span className="absolute -top-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Email</span>
                        </a>
                    </div>
                    <div className="flex flex-col gap-4 items-center md:items-end">
                        <ThemeToggle variant="switch" />
                        <a href="#inicio" className="flex cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-2 bg-transparent hover:bg-gray-100 dark:hover:bg-slate-800/60 text-gray-700 dark:text-white text-sm font-bold transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background-light dark:focus-visible:ring-offset-background-dark" >
                            <div className="group-hover:-translate-y-1 transition-transform duration-300">
                                <ArrowUpward />
                            </div>
                            <span className="truncate">Scroll to Top</span>
                        </a>
                    </div>
                </div>
                <div className="border-t border-gray-200 dark:border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 dark:text-slate-400 text-xs font-normal">
                        © 2026 Josep Fernández Ortega. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6" aria-label="Enlaces legales">
                        <a className="text-xs text-gray-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors" href="/politica-de-privacidad">Política de Privacidad</a>
                        <a className="text-xs text-gray-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors" href="/terminos-de-servicio">Términos de Servicio</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
