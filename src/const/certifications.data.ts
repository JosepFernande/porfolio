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
  type SvgIconComponent,
} from "@mui/icons-material";

export type CertificationCategory = "all" | "agile" | "technical" | "academic";

export interface CertificationItem {
  id: string;
  category: CertificationCategory;
  year: number;
  credentialUrl?: string;
  timelineIconKey: string;
  cardIconKey: string;
}

export const CERTIFICATION_ICON_MAP: Record<string, SvgIconComponent> = {
  verified: Verified,
  bolt: Bolt,
  code: Code,
  school: School,
  terminal: Terminal,
  groups: Groups,
  developerBoard: DeveloperBoard,
  javascript: Javascript,
  integrationInstructions: IntegrationInstructions,
  workspacePremium: WorkspacePremium,
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "product-owner",
    category: "agile",
    year: 2025,
    credentialUrl: "/Interno%20Product%20Owner.pdf",
    timelineIconKey: "verified",
    cardIconKey: "workspacePremium",
  },
  {
    id: "scrum-master",
    category: "agile",
    year: 2024,
    credentialUrl: "/Scrum%20Master.pdf",
    timelineIconKey: "bolt",
    cardIconKey: "groups",
  },
  {
    id: "scrum-developer",
    category: "agile",
    year: 2024,
    credentialUrl: "/Scrum%20Developer.pdf",
    timelineIconKey: "terminal",
    cardIconKey: "developerBoard",
  },
  {
    id: "angular-junior",
    category: "technical",
    year: 2024,
    credentialUrl: "/Angular%20Junior.pdf",
    timelineIconKey: "code",
    cardIconKey: "javascript",
  },
  {
    id: "bachillerato-informatica-empresarial",
    category: "academic",
    year: 2024,
    credentialUrl: "/Informatica_Empresarial.pdf",
    timelineIconKey: "school",
    cardIconKey: "workspacePremium",
  },
  {
    id: "scrum-fundamentals",
    category: "agile",
    year: 2023,
    credentialUrl: "/Scrum%20Fundamentals.jpg",
    timelineIconKey: "verified",
    cardIconKey: "groups",
  },
  {
    id: "tecnico-soporte",
    category: "academic",
    year: 2017,
    credentialUrl: "/Soporte_Tecnico.pdf",
    timelineIconKey: "school",
    cardIconKey: "integrationInstructions",
  },
];

export const CERTIFICATION_FILTERS: { id: CertificationCategory; icon: SvgIconComponent }[] = [
  { id: "all", icon: Verified },
  { id: "agile", icon: Bolt },
  { id: "technical", icon: Code },
  { id: "academic", icon: School },
] as const;
