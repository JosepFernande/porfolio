import { FileDownloadOutlined, RocketLaunchOutlined } from "@mui/icons-material";
import { Angular, JavaScript, NestJS, NextJs, NodeJs, React } from "developer-icons";

export default function AboutMe() {
    const habilities = [
        {
            htitle: 'JavaScript',
            HIcon: JavaScript
        },
        {
            htitle: 'React',
            HIcon: React
        },
        {
            htitle: 'Next.js',
            HIcon: NextJs
        },
        {
            htitle: 'Node.js',
            HIcon: NodeJs
        },
        {
            htitle: 'Angular',
            HIcon: Angular
        },
        {
            htitle: 'NestJs',
            HIcon: NestJS
        },
    ]

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center animate-fade-in">
            <div className="relative order-1 md:order-2 flex justify-center md:justify-end group perspective-1000">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-700 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-700"></div>
                <div className="relative z-10 w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl rotate-2 bg-white dark:bg-surface-dark p-2 shadow-2xl transition-all duration-500 ease-out group-hover:rotate-0 group-hover:scale-[1.02] group-hover:shadow-glow">
                    <div className="w-full h-full rounded-2xl overflow-hidden relative">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110" data-alt="Professional headshot of a developer smiling against a blurred background"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDwGe3xftt4rhUDYF5hsFINVxziMrWC-WoTG7DwgXYf2hks6cQQv85qCknqbOFZ87zInKtKe0Lc4AWDjVDX0Ur6MxOlGPxfIS6-RoD0kM2dpyRuC8o8IE2OxlM6Gwihqe1m3y2PwLpsfLaYd2--NPvBx0JVmnE10F2cPiitxKHqv1mkXvQ2QCDxf17CG8smHcTCs2oCnYtyWs3CabTrZnyYv-S7oymp3pltpAUmn65qAyruxmEGK0WsnIDB1wh8uMVy5Tr2VYAXl3s')",
                            }}></div>
                    </div>
                </div>
                <div className="absolute -bottom-4 right-10 z-20 bg-surface-light dark:bg-surface-dark px-5 py-3 rounded-2xl shadow-xl border border-gray-100 dark:border-[#334155] flex items-center gap-3 animate-float"
                    style={{
                        animationDelay:
                            '1s'
                    }}>
                    <div className="bg-primary/10 p-2 rounded-lg">
                        <RocketLaunchOutlined className="text-primary text-xl" />
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">Focus</p>
                        <p className="text-sm font-bold text-gray-800 dark:text-white">Mejora Continua</p>
                    </div>
                </div>
            </div>
            <div className="order-2 md:order-1 flex flex-col gap-8">
                <div className="space-y-4">
                    <p className="text-primary font-bold tracking-[0.2em] text-sm uppercase flex items-center gap-2">
                        <span className="w-8 h-0.5 bg-primary"></span>
                        Sobre Mí
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
                        Hola, soy <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">Alex Morgan</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl font-medium text-primary">
                        Full Stack Developer
                    </h2>
                </div>
                <div className="space-y-4">
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                        Soy un desarrollador apasionado por crear soluciones integrales, combinando un <strong className="text-gray-900 dark:text-white font-semibold">Frontend pulido</strong> con un <strong className="text-gray-900 dark:text-white font-semibold">Backend robusto</strong>.
                    </p>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                        Mi filosofía se centra en la <span className="text-primary font-medium">mejora continua</span> y la aplicación de <strong>metodologías ágiles</strong> como Scrum para adaptarme rápidamente a los cambios y entregar valor real. Busco constantemente optimizar procesos y aprender nuevas tecnologías que eleven la calidad de cada proyecto.
                    </p>
                </div>
                <div className="flex flex-wrap gap-3">

                    {habilities.map(({ htitle, HIcon }, i) => (
                        <div
                            key={i}
                            className="px-4 py-2 rounded-full bg-white border border-gray-200 dark:bg-surface-dark dark:border-[#334155] hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/20 transition-all cursor-default flex items-center gap-2 group/chip shadow-sm">
                            <HIcon size={18} />
                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{htitle}</span>
                        </div>
                    ))}

                </div>
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <button className="flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-opacity-90 transition-all hover:shadow-glow transform hover:-translate-y-1">
                        <FileDownloadOutlined />
                        Descargar CV
                    </button>
                    <button className="flex items-center justify-center gap-2 px-8 py-3 bg-transparent border-2 border-gray-300 dark:border-[#334155] text-gray-800 dark:text-white font-bold rounded-full hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all">
                        Ver Proyectos
                    </button>
                </div>
            </div>
        </section>
    )
}