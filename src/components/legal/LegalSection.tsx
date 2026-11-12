import React from "react";
import {
  BookOpen,
  Database,
  ShieldCheck,
  Lock,
  Globe2,
  Cookie,
  Clock,
  Mail,
  Scale,
  Factory,
  Ruler,
  FileCheck2,
  Copyright,
  AlertTriangle,
  Landmark,
} from "lucide-react";

export type LegalSectionIcon =
  | "book"
  | "database"
  | "shield"
  | "lock"
  | "globe"
  | "cookie"
  | "clock"
  | "mail"
  | "scale"
  | "factory"
  | "ruler"
  | "contract"
  | "copyright"
  | "alert"
  | "landmark";

const SECTION_ICON_MAP: Record<
  LegalSectionIcon,
  React.ComponentType<{ className?: string }>
> = {
  book: BookOpen,
  database: Database,
  shield: ShieldCheck,
  lock: Lock,
  globe: Globe2,
  cookie: Cookie,
  clock: Clock,
  mail: Mail,
  scale: Scale,
  factory: Factory,
  ruler: Ruler,
  contract: FileCheck2,
  copyright: Copyright,
  alert: AlertTriangle,
  landmark: Landmark,
};

interface LegalSectionProps {
  id: string;
  number: string;
  title: string;
  icon: LegalSectionIcon;
  badge?: string;
  children: React.ReactNode;
}

/**
 * Consistent numbered legal clause block matching GSB Export's technical specification layout.
 */
export function LegalSection({
  id,
  number,
  title,
  icon,
  badge,
  children,
}: LegalSectionProps) {
  const IconComp = SECTION_ICON_MAP[icon] || ShieldCheck;

  return (
    <section
      id={id}
      className="scroll-mt-28 pb-10 border-b border-slate-200/80 last:border-b-0 last:pb-0"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-3.5 mb-5">
        <h2 className="text-h3 font-bold text-[#0A1C33] flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#C2410C] shrink-0">
            <IconComp className="w-4 h-4" />
          </span>
          <span className="flex items-baseline gap-2">
            <span className="font-mono text-sm font-bold text-[#C2410C]">
              {number}.
            </span>
            <span>{title}</span>
          </span>
        </h2>

        {badge && (
          <span className="text-xs font-bold uppercase tracking-wider text-[#0F4C81] bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
      </div>

      <div className="space-y-4 text-base text-slate-700 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
