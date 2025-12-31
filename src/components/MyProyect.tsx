'use client'
import { ArrowOutwardOutlined, CodeOutlined, DesktopWindowsOutlined, StarOutline, VisibilityOutlined, AddOutlined, ShareOutlined, CheckCircleOutline, FolderOpenOutlined, CloseOutlined } from '@mui/icons-material';
import { useState } from 'react';

// Datos de proyectos
const projectsData = {
    featured: {
        id: 1,
        title: "E-Commerce Dashboard",
        description: "Una plataforma integral para administradores de tiendas online. Permite visualización de ventas en tiempo real, gestión de inventario automatizada y reportes predictivos basados en IA.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMfCeIjZVtK04-uby4V6RcOkc5xqV8FxJ_BJsAwLPdeS_gJvOIzainTNdhPv7LsuebBmGZD3ckWiWn-JkGLiHJwRvvYGTd0fd1uLeyCzpWUBOQ8TN1SR84RaoypD2swMIT7JhPD79cBSpFIqpkPbuJRYIor6DPG-nqvGjEw756WEFHioE1o3-RiBZLP2cnf27Q_xjUoN9mwp7516MDTMeBYFgzp_0zBN9uSvgf783SNErPIc_Umvl2BSbjVzsQZD7iJOkMvdFjS68",
        imageAlt: "Dashboard analytics mockup shown on a laptop screen with data charts",
        tags: ["React", "TypeScript", "Tailwind", "Supabase"],
        demoUrl: "#",
        codeUrl: "#"
    },
    regular: [
        {
            id: 2,
            title: "Realtime Chat App",
            description: "Sistema de mensajería instantánea con soporte para canales, mensajes privados y notificaciones push.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCO0Rdb0Bd_y4WsSgHjQ8vPAL5DdgymBS3nc8ujWERCSg-OKcgn88MjcclHl0DcbzkrI-L-Nt_pGJ2tj2wrX_BJ_5tnJEIgkQBo3xzsBNXct-w8RAWslwuPsOHH2p_rWje0_yD6DKuOxFVdSM54PlAFcm6Q4UFHjmCh-eJkApmRpz3s9FbPzr2G0DHC_vgwfMXVrqbV6eamJ986pHjbQ5amOMFMaGzFlJCziYtpClVlN4ODM3HUuSvIhfzD4Ki6t6hGmhwlPJVJWSw",
            imageAlt: "Abstract linear interface of a chat application on mobile",
            tags: ["Node.js", "Socket.io", "Redis"]
        },
        {
            id: 3,
            title: "TaskFlow API",
            description: "API RESTful robusta para gestión de proyectos colaborativos con autenticación JWT y documentación Swagger.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaxgU7Njivdnsu1puPGsCmeiCm00qnwQOqMwuYViIuaHalnznoA7hxGcjiNU_Tridbx33mveVzKZLaMdDrFPPuvWrVxze45RDSasBde5LBr2Oz3MVMI8PqqeWhHLjkAQSCjVKSeAv07pkch4sgpbFt4ajbGtk2A-jw4OAf32q0iud4k8vGsN7tut4zni0PF57biZl1NwwHCO_BihALY5VzF9cpGqC3mYs08bwREkR1bWXgkIE7XZclaF0JLqwFzN-J-kGZidACY7Q",
            imageAlt: "Minimalist task management interface with cards and lists",
            tags: ["Python", "Django", "Docker"]
        },
        {
            id: 4,
            title: "Lumina Portfolio",
            description: "Portafolio minimalista para fotógrafos con transiciones de página fluidas y galería optimizada.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmJ01TmBBuPa3-g_NxGDZ6otdVM0XjAPw8BCNwtx6rX_M8VKXausLmkfxJ4MHSkdGKIPrFgNDFjGimPofPKy9eM-cqm1Adj1xdxA7PIOGrm-0Sy7Vu7lodF--4DXNUUuAHaze1ULMxAHic0W8HrLgKFLQsQe3lz9IfqPVQ40yIoGd5KoYo_-FVV8pTq80biifmW15JeznIHbkZJTqXpfi7D4hRInWKI6WZcJNpMmS0_WWMsuvBaqlT1_0VCaspK0e2s9_h6G7WbMQ",
            imageAlt: "Artistic portfolio gallery layout with dark theme",
            tags: ["Next.js", "Framer Motion"]
        },
        {
            id: 5,
            title: "Crypto Tracker",
            description: "Dashboard financiero que consume APIs de criptomonedas para mostrar variaciones de precio y alertas.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrbyPkq3Nr5Yyi7a4FBbuXQVxd9hqgE_jYwpftRcI-iVdfmBcBacNb9oSxxQpQQgPb7Ox0aAYhXmpCZvpAWujIMfcMAJ9QkqcDxMWEX8ZaSXkbwgAmXe_ymLeI22QbwKivwlkhKk4t00h-JL6cn4LkblE-7d8SP3ZigEtVXUC6h2DeUVCn5uovhiq027ciMp3cCw_2QjyxZWiC6d9ZR9xKNNOmaNlo1Lytna2mL0GBbj3PweQVHmfxg4YbLdss60sPeVE-kOxX2WI",
            imageAlt: "Code editor screen showing crypto finance algorithm",
            tags: ["Vue 3", "Pinia", "Chart.js"]
        },
        {
            id: 6,
            title: "Booking System",
            description: "Sistema de reservas para clínicas médicas con calendario interactivo y recordatorios por email.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBr76aGhSlMtnifgrD4Ex0U-m_BQx8QKEkveedMMcpPAfzfk5L5ce1aHF90Lunf553LQir-aGESvKNOHPUq3lxNxOizsYZpVuDssOaUnrYKk8-hct2wjQOpgPWg9g08zijdvNutOaaodUIHJbXU74PJ5lNPua0GHBbeSeSgjkKFxBAAKnaw858XZrkr2ftG2df09yiK3L7ng_lN4YXS2c4yu2eJ8ZW3h_G8Qb9kmAcFTQNU7d6qcVNGrNVGvuwbFRNkrqz2-KRDyVc",
            imageAlt: "Clean minimal calendar and scheduling interface",
            tags: ["Laravel", "Livewire", "MySQL"]
        }
    ]
};

// Componente para el header de la página
const PageHeader = () => (
    <div className="flex flex-col gap-2 border-b border-gray-200 dark:border-surface-dark pb-6">
        <div className="flex items-center gap-2 text-primary mb-1">
            <CodeOutlined fontSize="small" />
            <span className="text-xs font-bold uppercase tracking-widest">Portfolio</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Mis <span className="text-primary decoration-wavy underline decoration-primary/30">Proyectos</span>
        </h1>
        <p className="text-neutral-600 dark:text-text-secondary-dark max-w-2xl text-base md:text-lg">
            Una colección de aplicaciones web, herramientas y experimentos diseñados con enfoque en rendimiento y experiencia de usuario.
        </p>
    </div>
);

// Componente para tags de tecnologías
const TechTag = ({ children, variant = "regular" }) => {
    const styles = {
        regular: "text-[10px] font-bold uppercase tracking-wider text-blue-500 dark:text-blue-400",
        badge: "px-3 py-1 rounded-md bg-blue-50 dark:bg-background-dark text-blue-800 dark:text-blue-200 text-xs font-medium border border-blue-100 dark:border-blue-900/30"
    };

    return <span className={styles[variant]}>{children}</span>;
};

// Componente para el proyecto destacado
const FeaturedProject = ({ project }) => (
    <section className="w-full">
        <h3 className="sr-only">Proyecto Destacado</h3>
        <div className="group relative overflow-hidden rounded-2xl bg-card-light dark:bg-card-dark border border-gray-200 dark:border-surface-dark shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-7 relative h-64 lg:h-auto overflow-hidden bg-neutral-100 dark:bg-background-dark">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url("${project.image}")` }}
                        role="img"
                        aria-label={project.imageAlt}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent lg:bg-linear-to-r lg:from-transparent lg:to-card-light/90 dark:lg:to-card-dark/90" />
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md z-10">
                        <StarOutline className='text-[14px]!' />
                        Destacado
                    </div>
                </div>

                <div className="lg:col-span-5 p-6 lg:p-10 flex flex-col justify-center gap-6 relative z-10">
                    <div>
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                            {project.title}
                        </h3>
                        <p className="text-neutral-600 dark:text-text-secondary-dark leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                            <TechTag key={idx} variant="badge">{tag}</TechTag>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mt-2">
                        <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold py-2.5 px-6 rounded-lg transition-colors shadow-[0_4px_14px_0_rgba(59,130,246,0.39)]">
                            <DesktopWindowsOutlined className='text-[20px]!' />
                            Ver Demo
                        </button>
                        <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-transparent border border-neutral-300 dark:border-[#334155] text-neutral-700 dark:text-white hover:bg-blue-50 dark:hover:bg-suborder-surface-dark hover:border-primary/50 hover:text-primary font-medium py-2.5 px-6 rounded-lg transition-colors">
                            <CodeOutlined className='text-[20px]!' />
                            Ver Código
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// Componente para las tarjetas de proyectos regulares
const ProjectCard = ({ project, onClick }) => (
    <article
        className="group relative flex flex-col rounded-xl overflow-hidden bg-card-light dark:bg-card-dark border border-gray-200 dark:border-surface-dark shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50 transition-all duration-300 cursor-pointer"
        onClick={() => onClick(project)}
    >
        <div className="relative h-56 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url("${project.image}")` }}
                role="img"
                aria-label={project.imageAlt}
            />
            <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 backdrop-blur-[2px] p-4">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 flex gap-3">
                    <button
                        className="bg-white text-primary p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
                        title="Ver Demo"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <VisibilityOutlined className='block' />
                    </button>
                    <button
                        className="bg-primary text-white p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
                        title="Ver Código"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <CodeOutlined className='block' />
                    </button>
                </div>
                <span className="text-white text-sm font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 drop-shadow-md">
                    Click para detalles
                </span>
            </div>
        </div>

        <div className="flex flex-col flex-1 p-5 gap-3">
            <div className="flex justify-between items-start">
                <h4 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-primary transition-colors">
                    {project.title}
                </h4>
                <ArrowOutwardOutlined className='text-neutral-400 group-hover:text-primary text-[20px] transition-colors' />
            </div>

            <p className="text-sm text-neutral-600 dark:text-text-secondary-dark line-clamp-2">
                {project.description}
            </p>

            <div className="mt-auto pt-3 flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                    <span key={idx}>
                        {idx > 0 && <TechTag>•</TechTag>}
                        <TechTag>{tag}</TechTag>
                    </span>
                ))}
            </div>
        </div>
    </article>
);

// Componente para la tarjeta de "Ver más"
const MoreProjectsCard = () => (
    <article className="relative flex flex-col justify-center items-center rounded-xl overflow-hidden bg-gray-50 dark:bg-background-dark border-2 border-dashed border-gray-300 dark:border-[#334155] hover:border-primary/50 transition-colors p-6 text-center gap-4 cursor-pointer group">
        <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
            <AddOutlined className='text-3xl!' />
        </div>
        <div>
            <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                Ver más en GitHub
            </h4>
            <p className="text-sm text-neutral-500 dark:text-text-secondary-dark group-hover:text-neutral-700 dark:group-hover:text-gray-300 transition-colors">
                Explora mis otros repositorios y contribuciones.
            </p>
        </div>
    </article>
);

// Componente Modal para detalles del proyecto
const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!isOpen || !project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />
            <div className="relative w-full max-w-4xl bg-white dark:bg-[#1e293b] rounded-2xl shadow-2xl overflow-hidden">
                {/* Header con imagen de fondo */}
                <div className="relative h-48 overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url("${project.image}")` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white transition-all z-10"
                        aria-label="Cerrar modal"
                    >
                        <CloseOutlined />
                    </button>
                    <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-2 text-white/80 mb-2">
                            <FolderOpenOutlined fontSize='small' />
                            <span className="text-xs font-bold uppercase tracking-widest">Proyecto</span>
                        </div>
                        <h3 className="text-3xl font-extrabold text-white tracking-tight">
                            {project.title}
                        </h3>
                    </div>
                </div>

                {/* Contenido */}
                <div className="p-8 overflow-y-auto max-h-[60vh] bg-white dark:bg-[#1e293b]">
                    {/* Descripción */}
                    <div className="mb-8">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
                            Descripción
                        </h4>
                        <p className="text-neutral-700 dark:text-gray-300 leading-relaxed text-lg">
                            {project.description}
                        </p>
                    </div>

                    {/* Tecnologías */}
                    <div className="mb-8">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
                            Stack Tecnológico
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, idx) => (
                                <TechTag key={idx} variant="badge">{tag}</TechTag>
                            ))}
                        </div>
                    </div>

                    {/* Características (placeholder) */}
                    <div className="mb-8">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
                            Características Principales
                        </h4>
                        <ul className="space-y-2 text-neutral-600 dark:text-gray-300">
                            <li className="flex items-start gap-3">
                                <CheckCircleOutline className='text-primary text-[20px] mt-0.5' />
                                <span>Interfaz moderna y responsiva</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircleOutline className='text-primary text-[20px] mt-0.5' />
                                <span>Optimizado para rendimiento</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircleOutline className='text-primary text-[20px] mt-0.5' />
                                <span>Código limpio y mantenible</span>
                            </li>
                        </ul>
                    </div>

                    {/* Botones de acción */}
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl hover:shadow-primary/30">
                            <DesktopWindowsOutlined className='text-[20px]!' />
                            Ver Demo en Vivo
                        </button>
                        <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-transparent border-2 border-gray-300 dark:border-gray-600 text-neutral-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-primary font-bold py-3 px-8 rounded-lg transition-all">
                            <CodeOutlined className='text-[20px]!' />
                            Ver Código Fuente
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-transparent border-2 border-gray-300 dark:border-gray-600 text-neutral-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-primary font-medium py-3 px-6 rounded-lg transition-all">
                            <ShareOutlined className='text-[20px]!' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Componente principal
export default function MyProyect() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProject(null), 300);
    };

    return (
        <>
            <main className="flex-1 flex flex-col items-center">
                <div className="w-full max-w-7xl flex flex-col gap-10">
                    <PageHeader />
                    <FeaturedProject project={projectsData.featured} />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                        {projectsData.regular.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onClick={handleProjectClick}
                            />
                        ))}
                        <MoreProjectsCard />
                    </div>
                </div>
            </main>

            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
}