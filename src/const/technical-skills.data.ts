import {
    BuildOutlined,
    CodeOutlined,
    Dns,
    IntegrationInstructionsOutlined,
    SettingsEthernetOutlined,
    StorageOutlined,
    TerminalOutlined,
} from "@mui/icons-material";
import type { SvgIconComponent } from "@mui/icons-material";

export interface SkillTag {
    id: string;
    highlight?: boolean;
}

export interface TechnicalSkillItem {
    id: string;
    icon: SvgIconComponent;
    bgIcon: SvgIconComponent;
    tags: SkillTag[];
}

export const TECHNICAL_SKILLS: TechnicalSkillItem[] = [
    {
        id: "frontend",
        icon: CodeOutlined,
        bgIcon: TerminalOutlined,
        tags: [
            { id: "angular", highlight: true },
            { id: "signals" },
            { id: "onpush" },
            { id: "lazyLoading" },
            { id: "razor" },
            { id: "jsTs" },
        ],
    },
    {
        id: "backend",
        icon: SettingsEthernetOutlined,
        bgIcon: Dns,
        tags: [
            { id: "nestjs", highlight: true },
            { id: "laravel" },
            { id: "apiRest" },
            { id: "jwtGuards" },
            { id: "modularArch" },
        ],
    },
    {
        id: "database",
        icon: StorageOutlined,
        bgIcon: StorageOutlined,
        tags: [
            { id: "mysql" },
            { id: "postgresql" },
            { id: "sqlServer" },
            { id: "prismaOrm" },
            { id: "eloquentOrm" },
        ],
    },
    {
        id: "tools",
        icon: BuildOutlined,
        bgIcon: IntegrationInstructionsOutlined,
        tags: [
            { id: "git" },
            { id: "github" },
            { id: "devops", highlight: true },
            { id: "scrumKanban" },
        ],
    },
];
