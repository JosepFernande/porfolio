import {
  AutoGraphOutlined,
  Groups2Outlined,
  GitHub,
  HubOutlined,
  RocketLaunchOutlined,
  SyncOutlined,
} from "@mui/icons-material";
import type { ReactNode } from "react";

/**
 * Stable string keys → MUI icon components for the WorkFlow team-tools section.
 *
 * The keys live in messages/{es,en}.json under `WorkFlow.team.tools[].iconKey`.
 * Lookup happens at render time via `TOOL_ICON_MAP[tool.iconKey]`.
 *
 * Using `ReactNode` (not `SvgIconComponent`) because some entries render a
 * fragment of two icons — e.g. Git shows both `HubOutlined` and `GitHub`.
 *
 * This follows the same pattern as `CERTIFICATION_ICON_MAP` in
 * `src/const/certifications.data.ts`: icons stay in TypeScript (they are React
 * components and cannot be serialized to JSON), while the translatable
 * labels live in the message files.
 */
export const TOOL_ICON_MAP: Record<string, ReactNode> = {
  teams: <Groups2Outlined className="text-lg!" />,
  azure: <AutoGraphOutlined className="text-lg!" />,
  git: (
    <>
      <HubOutlined className="text-lg!" />
      <GitHub className="text-lg!" />
    </>
  ),
  scrum: <SyncOutlined className="text-lg!" />,
  okrs: <RocketLaunchOutlined className="text-lg!" />,
};
