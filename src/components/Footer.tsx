
import { ArrowUpward, DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { GitHubDark, Gmail, LinkedIn } from "developer-icons";

export default function Footer() {
    return (
        <footer className="w-full bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-primary/20 py-12 transition-colors duration-300">
            <div className="layout-container max-w-240 mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 items-center mb-10">
                    <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                            <h2 className="text-gray-900 dark:text-white text-xl font-bold tracking-tight">Alex Developer</h2>
                        </div>
                        <p className="text-gray-600 dark:text-[#a0c695] text-sm font-medium">Full Stack Developer<br /><span className="opacity-70 font-normal">Building scalable web solutions.</span></p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 dark:bg-[#1f2e1a] hover:bg-white dark:hover:bg-[#2d4625] transition-all duration-300 border border-transparent hover:border-primary/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]" href="#">
                            <GitHubDark size={24} />

                            <span className="absolute -top-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">GitHub</span>
                        </a>
                        <a className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 dark:bg-[#1f2e1a] hover:bg-white dark:hover:bg-[#2d4625] transition-all duration-300 border border-transparent hover:border-primary/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]" href="#">
                            <LinkedIn size={24} />
                            <span className="absolute -top-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">LinkedIn</span>
                        </a>

                        <a className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 dark:bg-[#1f2e1a] hover:bg-white dark:hover:bg-[#2d4625] transition-all duration-300 border border-transparent hover:border-primary/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]" href="#">
                            <Gmail size={24} />
                            <span className="absolute -top-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Email</span>
                        </a>
                    </div>
                    <div className="flex flex-col gap-4 items-center md:items-end">
                        <div className="flex items-center gap-3 bg-gray-100 dark:bg-[#1f2e1a] px-4 py-2 rounded-lg border border-transparent dark:border-[#406336]">
                            <LightModeOutlined />
                            <label className="relative flex h-6 w-11 cursor-pointer items-center rounded-full border-none bg-gray-300 dark:bg-[#2d4625] p-1 transition-colors has-checked:justify-end has-checked:bg-primary">
                                <div className="h-4.5 w-4.5 rounded-full bg-white shadow-sm"></div>
                                <input className="invisible absolute" type="checkbox" />
                            </label>
                            <DarkModeOutlined />
                        </div>
                        <button className="flex cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-2 bg-transparent hover:bg-gray-100 dark:hover:bg-[#1f2e1a] text-gray-700 dark:text-white text-sm font-bold transition-colors group" >
                            <div className="group-hover:-translate-y-1 transition-transform duration-300">
                                <ArrowUpward />
                            </div>
                            <span className="truncate">Scroll to Top</span>
                        </button>
                    </div>
                </div>
                <div className="border-t border-gray-200 dark:border-[#2d4625] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 dark:text-[#a0c695]/60 text-xs font-normal">
                        © 2024 Alex Developer. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a className="text-xs text-gray-500 dark:text-[#a0c695]/60 hover:text-primary dark:hover:text-primary transition-colors" href="#">Privacy Policy</a>
                        <a className="text-xs text-gray-500 dark:text-[#a0c695]/60 hover:text-primary dark:hover:text-primary transition-colors" href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
