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
  WorkspacePremium,
  SvgIconComponent,
} from "@mui/icons-material";

export type CertificationCategory = "all" | "agile" | "technical" | "academic";

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
    id: "product-owner",
    title: "Product Owner",
    issuer: "Certificación Interna",
    year: 2025,
    description:
      "Enfoque en definición de valor de producto, priorización de backlog y alineación entre negocio y equipo técnico.",
    category: "agile",
    timelineIcon: Verified,
    cardIcon: WorkspacePremium,
    tags: ["Producto", "Backlog"],
    credentialUrl: "/Interno%20Product%20Owner.pdf",
  },
  {
    id: "scrum-master",
    title: "Scrum Master",
    issuer: "SCRUMstudy",
    year: 2024,
    description:
      "Certificación orientada al liderazgo ágil, facilitación de equipos y mejora continua en procesos Scrum.",
    category: "agile",
    timelineIcon: Bolt,
    cardIcon: Groups,
    tags: ["Agile", "Liderazgo"],
    credentialUrl: "/Scrum%20Master.pdf",
  },
  {
    id: "scrum-developer",
    title: "Scrum Developer",
    issuer: "SCRUMstudy",
    year: 2024,
    description:
      "Enfoque práctico de Scrum para desarrolladores, integrando prácticas técnicas con la gestión del backlog.",
    category: "agile",
    timelineIcon: Terminal,
    cardIcon: DeveloperBoard,
    tags: ["DevOps", "Teamwork"],
    credentialUrl: "/Scrum%20Developer.pdf",
  },
  {
    id: "angular-junior",
    title: "Angular Junior",
    issuer: "Certificación Técnica",
    year: 2024,
    description:
      "Especialización en desarrollo Frontend utilizando Angular, RxJS y TypeScript para aplicaciones SPA robustas.",
    category: "technical",
    timelineIcon: Code,
    cardIcon: Javascript,
    tags: ["Frontend", "TypeScript"],
    credentialUrl: "/Angular%20Junior.pdf",
  },
  {
    id: "bachillerato-informatica-empresarial",
    title: "Bachillerato en Informática Empresarial",
    issuer: "Universidad de Costa Rica",
    year: 2024,
    description:
      "Formación universitaria orientada a análisis de sistemas, desarrollo de software y aplicación de tecnologías de información en entornos empresariales.",
    category: "academic",
    timelineIcon: School,
    cardIcon: WorkspacePremium,
    tags: ["Académico", "TI Empresarial"],
    credentialUrl: "/Informatica_Empresarial.pdf",
  },
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
    tags: ["Agile", "Fundamentos"],
    credentialUrl: "/Scrum%20Fundamentals.jpg",
  },
  {
    id: "tecnico-soporte",
    title: "Técnico Medio en Informática en Soporte",
    issuer: "CTP Umberto Melloni Campanini",
    year: 2017,
    description:
      "Especialidad técnica en soporte informático, mantenimiento, resolución de incidencias y fundamentos de infraestructura tecnológica.",
    category: "academic",
    timelineIcon: School,
    cardIcon: IntegrationInstructions,
    tags: ["Soporte", "Infraestructura"],
    credentialUrl: "/Soporte_Tecnico.pdf",
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
  {
    id: "academic",
    label: "Académicas",
    icon: School,
  },
] as const;
