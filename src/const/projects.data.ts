export interface ProjectItem {
    id: string;
    title: string;
    description: string;
    image: string;
    stack: string[];
    demoUrl?: string;
    codeUrl?: string;
    featured?: boolean;
}


export const PROJECTS: ProjectItem[] = [
    {
        id: "ecommerce-dashboard",
        title: "E-Commerce Dashboard",
        description:
            "Una plataforma integral para administradores de tiendas online con métricas en tiempo real y reportes predictivos.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDMfCeIjZVtK04-uby4V6RcOkc5xqV8FxJ_BJsAwLPdeS_gJvOIzainTNdhPv7LsuebBmGZD3ckWiWn-JkGLiHJwRvvYGTd0fd1uLeyCzpWUBOQ8TN1SR84RaoypD2swMIT7JhPD79cBSpFIqpkPbuJRYIor6DPG-nqvGjEw756WEFHioE1o3-RiBZLP2cnf27Q_xjUoN9mwp7516MDTMeBYFgzp_0zBN9uSvgf783SNErPIc_Umvl2BSbjVzsQZD7iJOkMvdFjS68",
        stack: ["React", "TypeScript", "Tailwind", "Supabase"],
        demoUrl: "#",
        codeUrl: "#",
        featured: true,
    },
    {
        id: "realtime-chat",
        title: "Realtime Chat App",
        description:
            "Sistema de mensajería instantánea con canales, mensajes privados y notificaciones push.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCO0Rdb0Bd_y4WsSgHjQ8vPAL5DdgymBS3nc8ujWERCSg-OKcgn88MjcclHl0DcbzkrI-L-Nt_pGJ2tj2wrX_BJ_5tnJEIgkQBo3xzsBNXct-w8RAWslwuPsOHH2p_rWje0_yD6DKuOxFVdSM54PlAFcm6Q4UFHjmCh-eJkApmRpz3s9FbPzr2G0DHC_vgwfMXVrqbV6eamJ986pHjbQ5amOMFMaGzFlJCziYtpClVlN4ODM3HUuSvIhfzD4Ki6t6hGmhwlPJVJWSw",
        stack: ["Node.js", "Socket.io", "Redis"],
        demoUrl: "#",
        codeUrl: "#",
    },
    {
        id: "taskflow-api",
        title: "TaskFlow API",
        description:
            "API RESTful para gestión de proyectos con autenticación JWT y documentación Swagger.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDaxgU7Njivdnsu1puPGsCmeiCm00qnwQOqMwuYViIuaHalnznoA7hxGcjiNU_Tridbx33mveVzKZLaMdDrFPPuvWrVxze45RDSasBde5LBr2Oz3MVMI8PqqeWhHLjkAQSCjVKSeAv07pkch4sgpbFt4ajbGtk2A-jw4OAf32q0iud4k8vGsN7tut4zni0PF57biZl1NwwHCO_BihALY5VzF9cpGqC3mYs08bwREkR1bWXgkIE7XZclaF0JLqwFzN-J-kGZidACY7Q",
        stack: ["Python", "Django", "Docker"],
    },
    {
        id: "lumina-portfolio",
        title: "Lumina Portfolio",
        description:
            "Portafolio minimalista para fotógrafos con transiciones fluidas.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAmJ01TmBBuPa3-g_NxGDZ6otdVM0XjAPw8BCNwtx6rX_M8VKXausLmkfxJ4MHSkdGKIPrFgNDFjGimPofPKy9eM-cqm1Adj1xdxA7PIOGrm-0Sy7Vu7lodF--4DXNUUuAHaze1ULMxAHic0W8HrLgKFLQsQe3lz9IfqPVQ40yIoGd5KoYo_-FVV8pTq80biifmW15JeznIHbkZJTqXpfi7D4hRInWKI6WZcJNpMmS0_WWMsuvBaqlT1_0VCaspK0e2s9_h6G7WbMQ",
        stack: ["Next.js", "Framer Motion"],
    },
];
