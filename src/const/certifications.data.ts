import {
    Verified,
    Bolt,
    Code,
    School,
    Terminal,
    Groups,
    DeveloperBoard,
    Javascript,
    IntegrationInstructions,
} from "@mui/icons-material";
import { SvgIconComponent } from "@mui/icons-material";

export type CertificationCategory = "all" | "agile" | "technical";

export interface CertificationItem {
    id: string;
    title: string;
    issuer: string;
    year: number;
    description: string;
    category: CertificationCategory;
    timelineIcon: SvgIconComponent;
    cardIcon: SvgIconComponent;
    tags: string[];
    credentialUrl?: string;
}

export const CERTIFICATIONS: CertificationItem[] = [
    {
        id: "scrum-fundamentals",
        title: "Scrum Fundamentals",
        issuer: "SCRUMstudy",
        year: 2023,
        description:
            "Certificación en los conceptos fundamentales de la metodología Scrum, roles y eventos clave para la gestión ágil.",
        category: "agile",
        timelineIcon: Verified,
        cardIcon: Groups,
        tags: ["Agile", "Management"],
        credentialUrl: "#",
    },
    {
        id: "scrum-developer",
        title: "Scrum Developer",
        issuer: "SCRUMstudy",
        year: 2023,
        description:
            "Enfoque práctico de Scrum para desarrolladores, integrando prácticas técnicas con la gestión del backlog.",
        category: "agile",
        timelineIcon: Terminal,
        cardIcon: DeveloperBoard,
        tags: ["DevOps", "Teamwork"],
        credentialUrl: "#",
    },
    {
        id: "angular-junior",
        title: "Angular Junior Dev",
        issuer: "Google / Angular Training",
        year: 2022,
        description:
            "Especialización en desarrollo Frontend utilizando Angular, RxJS y TypeScript para aplicaciones SPA robustas.",
        category: "technical",
        timelineIcon: Code,
        cardIcon: Javascript,
        tags: ["Frontend", "TypeScript"],
        credentialUrl: "#",
    },
    {
        id: "fullstack-bootcamp",
        title: "Full Stack Bootcamp",
        issuer: "Coderhouse",
        year: 2021,
        description:
            "Bootcamp intensivo cubriendo el stack MERN (MongoDB, Express, React, Node) y despliegue en la nube.",
        category: "technical",
        timelineIcon: School,
        cardIcon: IntegrationInstructions,
        tags: ["React", "Node.js"],
        credentialUrl: "#",
    },
];

export const CERTIFICATION_FILTERS = [
    {
        id: "all",
        label: "Todas",
        icon: Verified,
    },
    {
        id: "agile",
        label: "Ágiles",
        icon: Bolt,
    },
    {
        id: "technical",
        label: "Técnicas",
        icon: Code,
    },
] as const;
