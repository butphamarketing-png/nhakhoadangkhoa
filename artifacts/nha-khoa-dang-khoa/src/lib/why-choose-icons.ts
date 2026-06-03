import {
  Award,
  CheckCircle,
  Heart,
  Shield,
  Stethoscope,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const WHY_CHOOSE_ICON_OPTIONS = [
  "Award",
  "Stethoscope",
  "Wrench",
  "Shield",
  "CheckCircle",
  "Heart",
] as const;

export type WhyChooseIconKey = (typeof WHY_CHOOSE_ICON_OPTIONS)[number];

const ICON_MAP: Record<WhyChooseIconKey, LucideIcon> = {
  Award,
  Stethoscope,
  Wrench,
  Shield,
  CheckCircle,
  Heart,
};

export function resolveWhyChooseIcon(key: string): LucideIcon {
  return ICON_MAP[key as WhyChooseIconKey] ?? Award;
}
