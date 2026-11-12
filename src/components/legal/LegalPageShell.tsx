import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock,
  FileText,
  Globe2,
  Lock,
  Mail,
  MapPin,
  Phone,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { COMPANY_INFO } from "@/content/company";
import {
  LegalTableOfContents,
  type LegalTocItem,
} from "@/components/legal/LegalTableOfContents";

export type SummaryIconName =
  | "shield"
  | "lock"
  | "file"
  | "scale"
  | "globe"
  | "check";

const SUMMARY_ICON_MAP: Record<
  SummaryIconName,
  React.ComponentType<{ className?: string }>
> = {
  shield: ShieldCheck,
  lock: Lock,
  file: FileText,
  scale: Scale,
  globe: Globe2,
  check: Check,
};

export interface LegalSummaryCard {
  icon: SummaryIconName;
  eyebrow: string;
  title: string;
  description: string;
}

export interface LegalPageShellProps {
  badge: string;
  title: string;
  subtitle: string;
  breadcrumbLabel: string;
  documentCode: string;
  lastUpdated: string;
  effectiveSince: string;
  jurisdiction: string;
  highlights: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  sections: LegalTocItem[];
  summaryCards: LegalSummaryCard[];
  companionDoc: {
    badge: string;
    title: string;
    description: string;
    href: string;
    ctaLabel: string;
  };
  ctaBanner: {
    eyebrow: string;
    title: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
  children: React.ReactNode;
}

/**
 * Shared legal documentation layout matching GSB Export's industrial B2B page system.
 */
export function LegalPageShell({
  badge,
  title,
  subtitle,
  breadcrumbLabel,
  documentCode,
  lastUpdated,
  effectiveSince,
  jurisdiction,
  highlights,
  primaryCta,
  secondaryCta,
  sections,
  summaryCards,
  companionDoc,
  ctaBanner,
  children,
}: LegalPageShellProps) {
  return (
    <div className="bg-white">
      {/* Dark Navy Industrial Header Banner */}
      <section className="bg-navy py-12 sm:py-16 text-white relative overflow-hidden border-b border-steel/30 print:bg-white print:text-[#0A1C33] print:py-6 print:border-slate-300">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none print:hidden" />
        <Container className="relative z-10">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-sm text-slate-200 mb-4 print:hidden"
            >
              <Link href="/" className="hover:text-[#FA8540] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-slate-300">Legal &amp; Governance</span>
              <span>/</span>
              <span className="text-[#FA8540] font-semibold">{breadcrumbLabel}</span>
            </nav>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold tracking-wider uppercase bg-copper/20 text-copper-light border border-copper/40 mb-3 print:border-slate-300 print:text-[#C2410C]">
              {badge}
            </span>

            <h1 className="text-h1 font-bold text-white leading-tight font-sans print:text-[#0A1C33]">
              {title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-3xl print:text-slate-700">
              {subtitle}
            </p>

            {/* Key Governance Highlight Pills */}
            <div className="mt-5 flex flex-wrap items-center gap-2 print:hidden">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold bg-white/10 text-white border border-white/20 px-3 py-1 rounded-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#52B72A]" />
                  {item}
                </span>
              ))}
            </div>

            {/* Hero Action Controls */}
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4 print:hidden">
              <Link
                href={primaryCta.href}
                className="btn-copper text-sm font-bold px-6 py-3 rounded-full shadow flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>{primaryCta.label}</span>
              </Link>

              <Link
                href={secondaryCta.href}
                className="btn-outline-white text-sm font-bold px-6 py-3 rounded-full flex items-center gap-2"
              >
                <span>{secondaryCta.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Section Anchor Bar */}
      <div className="bg-[#F6F9FC] border-b border-slate-200/80 print:hidden">
        <Container>
          <nav
            aria-label="Quick section jump"
            className="flex items-center gap-2 py-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 mr-1 shrink-0">
              On this page:
            </span>
            {sections.map((sec) => (
              <Link
                key={sec.id}
                href={`#${sec.id}`}
                className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-[#0A1C33] bg-white border border-slate-200/90 hover:border-[#F36C21] hover:text-[#C2410C] whitespace-nowrap shrink-0 transition-colors shadow-sm"
              >
                {sec.number}. {sec.shortLabel || sec.title}
              </Link>
            ))}
          </nav>
        </Container>
      </div>

      {/* Main Content + Sticky Governance Sidebar */}
      <section className="py-12 sm:py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Main Editorial Column */}
            <div className="lg:col-span-8 space-y-10 sm:space-y-12 print:col-span-12">
              {/* Executive At-a-Glance Summary Strip */}
              <div className="bg-[#F6F9FC] border border-slate-200/90 rounded-2xl p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-3 mb-4">
                  <h2 className="text-lg sm:text-xl font-bold text-[#0A1C33] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F36C21]" />
                    <span>Executive Summary — Key Commitments</span>
                  </h2>
                  <span className="text-xs font-mono text-slate-600">
                    Effective {effectiveSince} &bull; Reviewed {lastUpdated}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {summaryCards.map((card) => {
                    const IconComp = SUMMARY_ICON_MAP[card.icon] || ShieldCheck;
                    return (
                      <div
                        key={card.title}
                        className="bg-white border border-slate-200/80 rounded-xl p-4 sm:p-5 shadow-sm flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2.5">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#C2410C]">
                              {card.eyebrow}
                            </span>
                            <span className="w-7 h-7 rounded-lg bg-slate-50 border border-slate-200/70 text-[#0F4C81] flex items-center justify-center shrink-0">
                              <IconComp className="w-3.5 h-3.5" />
                            </span>
                          </div>
                          <h3 className="text-base font-bold text-[#0A1C33] mb-1.5">
                            {card.title}
                          </h3>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Policy / Terms Body Clauses */}
              <div className="space-y-10">{children}</div>
            </div>

            {/* Right Sticky Sidebar */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 print:hidden">
              {/* Interactive TOC + Print */}
              <LegalTableOfContents
                sections={sections}
                documentCode={documentCode}
                lastUpdated={lastUpdated}
              />

              {/* Document Control Metadata Card */}
              <div className="bg-[#F6F9FC] border border-slate-200/90 rounded-2xl p-5 sm:p-6">
                <h3 className="text-sm font-bold text-[#0A1C33] uppercase tracking-wider border-b border-slate-200/80 pb-2.5 mb-3.5">
                  Document Control &amp; Jurisdiction
                </h3>
                <dl className="space-y-2.5 text-sm">
                  <div className="flex items-center justify-between gap-2">
                    <dt className="text-slate-600">Document ID</dt>
                    <dd className="font-mono font-bold text-[#0A1C33]">
                      {documentCode}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <dt className="text-slate-600">Issuing Entity</dt>
                    <dd className="font-semibold text-[#0A1C33]">
                      {COMPANY_INFO.legalName}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <dt className="text-slate-600">Effective Since</dt>
                    <dd className="font-semibold text-slate-700">
                      {effectiveSince}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <dt className="text-slate-600">Last Reviewed</dt>
                    <dd className="font-semibold text-[#C2410C]">
                      {lastUpdated}
                    </dd>
                  </div>
                  <div className="pt-2 border-t border-slate-200/80 flex items-start justify-between gap-2">
                    <dt className="text-slate-600 shrink-0">Jurisdiction</dt>
                    <dd className="font-semibold text-[#0A1C33] text-right">
                      {jurisdiction}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Companion Legal Document Switcher */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F4C81] bg-blue-50 border border-blue-200/80 px-2.5 py-0.5 rounded-full inline-block mb-2.5">
                  {companionDoc.badge}
                </span>
                <h3 className="text-lg font-bold text-[#0A1C33] mb-1.5">
                  {companionDoc.title}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  {companionDoc.description}
                </p>
                <Link
                  href={companionDoc.href}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0A1C33] hover:text-[#C2410C] transition-colors group"
                >
                  <span>{companionDoc.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              {/* Dark Navy Administrative & Compliance Desk Card */}
              <div className="bg-navy rounded-2xl p-6 text-white border border-steel/60 shadow-industrial-lg">
                <span className="text-[#FA8540] text-xs font-bold uppercase tracking-wider block mb-1">
                  Compliance &amp; Procurement Desk
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  Questions or NDA Requests?
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed mb-4">
                  Contact our Vadodara coordination desk for bilateral NDA
                  execution, data deletion requests, or commercial contract
                  terms.
                </p>

                <div className="space-y-2.5 text-sm text-slate-200 mb-5 pt-3 border-t border-steel/40">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#FA8540] shrink-0" />
                    <a
                      href={`mailto:${COMPANY_INFO.contact.email}`}
                      className="text-white hover:text-[#FA8540] font-semibold transition-colors"
                    >
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#FA8540] shrink-0" />
                    <a
                      href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                      className="text-white hover:text-[#FA8540] font-semibold transition-colors"
                    >
                      {COMPANY_INFO.contact.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#FA8540] shrink-0 mt-1" />
                    <span>
                      {COMPANY_INFO.headquarters.city},{" "}
                      {COMPANY_INFO.headquarters.state},{" "}
                      {COMPANY_INFO.headquarters.country}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-[#FA8540] shrink-0 mt-1" />
                    <span>{COMPANY_INFO.contact.workingHours}</span>
                  </div>
                </div>

                <Link
                  href="/contact-us"
                  className="btn-copper text-sm font-bold py-3 px-4 rounded-full w-full text-center flex items-center justify-center gap-1.5 shadow"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Legal &amp; Admin Desk</span>
                </Link>
              </div>
            </aside>
          </div>

          {/* Bottom Action Card */}
          <div className="mt-14 p-7 sm:p-9 rounded-2xl bg-navy text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-steel/60 shadow-industrial-lg print:hidden">
            <div className="space-y-1.5 text-center md:text-left max-w-2xl">
              <span className="text-[#FA8540] text-xs font-bold uppercase tracking-wider block">
                {ctaBanner.eyebrow}
              </span>
              <h3 className="text-xl font-bold text-white">
                {ctaBanner.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-0">
                {ctaBanner.description}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <Link
                href={ctaBanner.secondaryHref}
                className="btn-outline-white text-sm font-bold px-5 py-2.5 rounded-full"
              >
                {ctaBanner.secondaryLabel}
              </Link>
              <Link
                href={ctaBanner.primaryHref}
                className="btn-copper text-sm font-bold px-5 py-2.5 rounded-full flex items-center gap-1.5"
              >
                <span>{ctaBanner.primaryLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
