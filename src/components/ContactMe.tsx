export default function ContactMe() {
    return (
        <main className="flex-grow flex flex-col items-center justify-center ">
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                <div className="flex flex-col gap-8 animate-fade-in-up">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Disponible para trabajar
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                            Construyamos algo <span className="text-primary">extraordinario</span> juntos.
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-gray-400 max-w-lg leading-relaxed">
                            Actualmente estoy abierto a oportunidades freelance y roles a tiempo completo. ¿Tienes un proyecto en mente? Escríbeme o conectemos en redes sociales.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-gray-500">Encuéntrame en</h3>
                        <div className="flex flex-wrap gap-4">
                            <a className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary/10" href="#">
                                <span className="material-symbols-outlined text-2xl group-hover:text-primary transition-colors">code</span>
                                <span className="font-bold text-sm">GitHub</span>
                            </a>
                            <a className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary/10" href="#">
                                <span className="material-symbols-outlined text-2xl group-hover:text-primary transition-colors">work</span>
                                <span className="font-bold text-sm">LinkedIn</span>
                            </a>
                            <a className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary/10" href="#">
                                <span className="material-symbols-outlined text-2xl group-hover:text-primary transition-colors">alternate_email</span>
                                <span className="font-bold text-sm">Email</span>
                            </a>
                        </div>
                    </div>
                    <div className="hidden lg:block mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/10">
                        <div className="flex items-center gap-4 text-slate-800 dark:text-white/80">
                            <span className="material-symbols-outlined text-3xl text-primary">verified</span>
                            <div>
                                <p className="font-bold">Respuesta Rápida</p>
                                <p className="text-sm opacity-70">Suelo responder dentro de las 24 horas.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 md:p-8 shadow-xl border border-slate-100 dark:border-slate-700 relative overflow-hidden group">
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500"></div>
                        <form className="flex flex-col gap-6 relative z-10" id="contact-form" >
                            <div className="space-y-2 group/input">
                                <label className="text-sm font-semibold text-slate-700 dark:text-gray-300 ml-1 transition-colors group-focus-within/input:text-primary" htmlFor="email">Tu Email</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-gray-400 group-focus-within/input:text-primary transition-colors">mail</span>
                                    </div>
                                    <input className="w-full pl-12 pr-4 py-4 rounded-xl bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-600 focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600" id="email" placeholder="ejemplo@dominio.com" required type="email" />
                                </div>
                            </div>
                            <div className="space-y-2 group/input">
                                <label className="text-sm font-semibold text-slate-700 dark:text-gray-300 ml-1 transition-colors group-focus-within/input:text-primary" htmlFor="message">Mensaje</label>
                                <div className="relative">
                                    <div className="absolute top-4 left-0 pl-4 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-gray-400 group-focus-within/input:text-primary transition-colors">chat_bubble</span>
                                    </div>
                                    <textarea className="w-full pl-12 pr-4 py-4 rounded-xl bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-600 focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-slate-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600" id="message" placeholder="Cuéntame sobre tu proyecto..." required rows={5}></textarea>
                                </div>
                            </div>
                            <div className="pt-2">
                                <button className="group relative w-full h-14 bg-primary hover:bg-[#2563eb] text-white rounded-xl font-bold text-base tracking-wide transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] active:scale-[0.98]" id="submit-btn" type="submit">
                                    <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-12">Enviar Mensaje</span>
                                    <span className="material-symbols-outlined absolute z-10 transition-all duration-300 translate-y-12 group-hover:translate-y-0 text-xl">send</span>
                                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
                                </button>
                            </div>
                            <div className="hidden absolute inset-0 bg-white dark:bg-surface-dark flex-col items-center justify-center text-center p-6 z-20 rounded-2xl animate-fade-in" id="success-message">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined text-4xl text-primary animate-bounce-short">check_circle</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">¡Mensaje Enviado!</h3>
                                <p className="text-slate-500 dark:text-gray-400 text-sm">Gracias por contactarme. Te responderé lo antes posible.</p>
                                <button className="mt-6 text-primary font-bold text-sm hover:underline" >Enviar otro mensaje</button>
                            </div>
                        </form>
                    </div>
                    <div className="mt-6 flex justify-center lg:justify-start gap-2 text-sm text-slate-400 dark:text-gray-500">
                        <span className="material-symbols-outlined text-sm">lock</span>
                        <p>Tus datos están seguros. Nunca envío spam.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}