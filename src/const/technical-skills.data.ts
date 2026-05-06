import {
    BuildOutlined,
    CodeOutlined,
    Dns,
    IntegrationInstructionsOutlined,
    SettingsEthernetOutlined,
    StorageOutlined,
    TerminalOutlined,
} from "@mui/icons-material";
import { SvgIconComponent } from "@mui/icons-material";

interface SkillTag {
    label: string;
    level?: string;
    highlight?: boolean;
}

interface TechnicalSkillItem {
    title: string;
    description: string;
    icon: SvgIconComponent;
    bgIcon: SvgIconComponent;
    tags: SkillTag[];
}

export const TECHNICAL_SKILLS: TechnicalSkillItem[] = [
    {
        title: "Frontend",
        description:
            "Creación de interfaces responsivas y dinámicas con enfoque en la experiencia de usuario.",
        icon: CodeOutlined,
        bgIcon: TerminalOutlined,
        tags: [
            { label: "Angular", level: "Avanzado", highlight: true },
            { label: "Signals" },
            { label: "OnPush" },
            { label: "Lazy Loading" },
            { label: "Razor" },
            { label: "JavaScript / TypeScript" },
        ],
    },
    {
        title: "Backend",
        description:
            "Arquitectura robusta de servidores y gestión segura de datos.",
        icon: SettingsEthernetOutlined,
        bgIcon: Dns,
        tags: [
            { label: "NestJS", highlight: true },
            { label: "Laravel" },
            { label: "APIs REST" },
            { label: "JWT + Guards" },
            { label: "Arquitectura modular" },
        ],
    },
    {
        title: "Base de Datos",
        description:
            "Diseño y optimización de esquemas relacionales para integridad de datos.",
        icon: StorageOutlined,
        bgIcon: StorageOutlined,
        tags: [
            { label: "MySQL" },
            { label: "PostgreSQL" },
            { label: "SQL Server" },
            { label: "Prisma ORM" },
            { label: "Eloquent ORM" },
        ],
    },
    {
        title: "Herramientas",
        description:
            "Flujos de trabajo eficientes y control de versiones para colaboración.",
        icon: BuildOutlined,
        bgIcon: IntegrationInstructionsOutlined,
        tags: [
            { label: "Git" },
            { label: "GitHub" },
            { label: "Microsoft DevOps", highlight: true },
            { label: "Scrum / Kanban" },
        ],
    },
];
