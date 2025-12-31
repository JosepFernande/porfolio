import { DarkModeOutlined, FileDownloadOutlined } from "@mui/icons-material";

export default function Navbar() {
    return (
        <header className="w-full border-b border-gray-200 dark:border-[#2d4625] bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
            <div className="px-6 lg:px-20 py-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="size-8 text-primary">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <h1 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">DevPortfolio<span className="text-primary">.</span></h1>
                </div>
                <div className="flex items-center gap-8">
                    <nav className="hidden md:flex items-center gap-8">
                        <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors" href="#">Inicio</a>
                        <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors" href="#">Proyectos</a>
                        <a className="text-primary text-sm font-bold" href="#">Habilidades</a>
                        <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors" href="#">Contacto</a>
                    </nav>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center justify-center p-2 rounded-full hover:bg-slate-200 dark:hover:bg-[#2d4625] text-slate-600 dark:text-slate-300 transition-colors">
                            <DarkModeOutlined />
                        </button>
                        <button className="hidden sm:flex bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all items-center gap-2">
                            <span>Descargar CV</span>
                            <FileDownloadOutlined />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
