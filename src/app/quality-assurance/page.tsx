import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, Eye } from "lucide-react";
import { QUALITY_SYSTEM } from "@/content/quality";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BannerBreadcrumb } from "@/components/ui/BannerBreadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildPageMetadata,
  buildBreadcrumbJsonLd,
  buildWebPageJsonLd,
} from "@/lib/seo";

const PAGE_DESCRIPTION =
  "EN 10204 3.1 material traceability, ASME Section IX welding procedures, NDT examination, hydrostatic proof testing, and third-party inspection (TUV, BV, DNV, LR).";

export const metadata: Metadata = buildPageMetadata({
  title: "Quality Assurance, ITP & NDT Inspection Protocols",
  description: PAGE_DESCRIPTION,
  path: "/quality-assurance",
  keywords: [
    "Heat Exchanger Quality Assurance",
    "EN 10204 3.1 Material Traceability",
    "Inspection and Test Plan ITP",
    "Third Party Inspection TUV BV DNV",
    "Hydrostatic Pressure Testing",
  ],
});

export default function QualityAssurancePage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Quality Assurance", path: "/quality-assurance" },
  ]);
  const pageJsonLd = buildWebPageJsonLd({
    name: "Quality Assurance & Inspection Protocols",
    description: PAGE_DESCRIPTION,
    path: "/quality-assurance",
    type: "WebPage",
  });

  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={pageJsonLd} />

      {/* Header Banner */}
      <section className="bg-navy py-16 sm:py-20 text-white relative overflow-hidden border-b border-steel/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <BannerBreadcrumb items={[{ label: "Quality Assurance" }]} />
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold tracking-wider uppercase bg-copper/20 text-copper-light border border-copper/40 mb-4">
              Zero-Defect Quality Governance
            </span>
            <h1 className="text-h1 font-bold text-white leading-tight">
              Quality Assurance &amp; Inspection
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed mb-0">
              Guaranteed material traceability, certified weld procedures, 100% pressure containment verification, and third-party inspection authority coordination.
            </p>
          </div>
        </Container>
      </section>

      {/* Overview & Contextual Accuracy Notice */}
      <section className="py-16 sm:py-20 bg-white border-b border-silver/40">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                badge="Quality Management"
                badgeVariant="copper"
                title="Pressure Equipment Demands Uncompromising Verification"
                subtitle="In aggressive chemical loops, high-pressure hydrocarbon lines, and sterile food plants, a single weld flaw or material substitution can cause catastrophic failure."
                className="mb-4"
              />

              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  At <strong className="text-navy">GSB Export</strong>, quality is not a post-manufacturing check; it is a continuous, document-driven discipline executed at every milestone of equipment lifecycle. We formulate and oversee detailed project-specific <strong className="text-navy">Inspection and Test Plans (ITP)</strong> that outline witness, hold, and review points before any metal is cut.
                </p>
                <p>
                  From validating heat numbers against raw mill test certificates to observing final hydrostatic pressure tests with calibrated digital chart loggers, our technical quality team ensures full compliance with ASME, TEMA, and international regulatory frameworks.
                </p>
              </div>

              {/* Factual Disclaimer Box */}
              <div className="p-5 bg-offwhite border-l-4 border-steel rounded-r-lg text-sm text-slate-700 space-y-1.5">
                <span className="font-bold text-navy flex items-center gap-2 text-base">
                  <ShieldCheck className="w-4 h-4 text-[#C2410C]" />
                  <span>Standards Applicability Notice</span>
                </span>
                <p className="leading-relaxed mb-0 text-sm sm:text-[15px]">
                  {QUALITY_SYSTEM.standardsDisclaimer}
                </p>
              </div>
            </div>

            {/* Right Card: Third Party Inspection Authorities */}
            <div className="lg:col-span-5 bg-navy rounded-xl p-6 lg:p-8 text-white border border-steel/60 shadow-industrial-lg">
              <div className="flex items-center gap-2.5 border-b border-steel/40 pb-3 mb-4">
                <Eye className="w-5 h-5 text-[#FA8540]" />
                <h3 className="text-lg font-bold text-white">
                  Third-Party Inspection Coordination (TPIA)
                </h3>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed mb-4">
                We regularly coordinate stage-wise witnessing, hold-point clearance, and final dossier release with globally recognized independent inspection agencies:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm font-semibold text-slate-100">
                <div className="p-3 bg-navy-900/90 rounded border border-steel/40 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FA8540] shrink-0" />
                  <span>TÜV Rheinland / NORD</span>
                </div>
                <div className="p-3 bg-navy-900/90 rounded border border-steel/40 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FA8540] shrink-0" />
                  <span>Bureau Veritas (BV)</span>
                </div>
                <div className="p-3 bg-navy-900/90 rounded border border-steel/40 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FA8540] shrink-0" />
                  <span>DNV GL</span>
                </div>
                <div className="p-3 bg-navy-900/90 rounded border border-steel/40 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FA8540] shrink-0" />
                  <span>Lloyd&apos;s Register (LR)</span>
                </div>
                <div className="p-3 bg-navy-900/90 rounded border border-steel/40 flex items-center gap-2 sm:col-span-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FA8540] shrink-0" />
                  <span>SGS India / Intertek / Client-Appointed Agency</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6 Core Quality Pillars */}
      <section className="py-16 sm:py-20 bg-offwhite border-b border-silver/40">
        <Container>
          <SectionHeading
            badge="QA Protocols"
            badgeVariant="steel"
            title="The Six Pillars of Our Quality Assurance System"
            subtitle="From raw steel plate and seamless tube bundles to final pressure tests and export crating."
            className="max-w-2xl"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {QUALITY_SYSTEM.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white border border-silver/70 rounded-xl p-6 sm:p-7 shadow-sm hover:border-steel/60 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-[#C2410C] text-xs font-bold uppercase tracking-wider block mb-1.5">
                    Protocol 0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-navy mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-silver/40">
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                    {pillar.details.map((det, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C2410C] shrink-0 mt-1" />
                        <span>{det}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5-Stage Inspection & Test Plan (ITP) Table */}
      <section className="py-16 sm:py-20 bg-white border-b border-silver/40">
        <Container>
          <SectionHeading
            badge="Inspection Lifecycle"
            badgeVariant="copper"
            title="Standard Five-Stage Inspection &amp; Test Plan (ITP)"
            subtitle="How every manufacturing project is sequenced, witnessed, documented, and approved."
            className="max-w-2xl"
          />

          <div className="mt-8 overflow-x-auto">
            <table className="tech-table border border-silver/60 rounded-lg overflow-hidden">
              <thead>
                <tr>
                  <th className="w-28">Stage</th>
                  <th className="w-56">Phase Name</th>
                  <th>Key Quality Assurance &amp; Witnessing Activities</th>
                  <th className="w-44">Documentation</th>
                </tr>
              </thead>
              <tbody>
                {QUALITY_SYSTEM.itpPhases.map((phase, idx) => (
                  <tr key={idx} className="hover:bg-offwhite/50 transition-colors">
                    <td className="font-bold text-[#C2410C]">{phase.stage}</td>
                    <td className="font-semibold text-navy">{phase.name}</td>
                    <td className="text-slate-700">{phase.activities}</td>
                    <td className="text-[#0F4C81] font-medium">Signed Quality Report</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Action Card */}
          <div className="mt-12 p-8 rounded-2xl bg-navy text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-steel/60 shadow-industrial-lg">
            <div className="space-y-1.5 text-center sm:text-left">
              <h3 className="text-xl font-bold text-white">Need Project-Specific ITP Alignment?</h3>
              <p className="text-sm sm:text-base text-slate-200 mb-0">Our quality team accommodates client-appointed third-party inspectors and customer-specific hold points.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <Link href="/contact-us" className="btn-outline-white text-sm font-bold px-5 py-2.5 rounded-full">Contact Quality Desk</Link>
              <Link href="/request-a-quote" className="btn-copper text-sm font-bold px-5 py-2.5 rounded-full">Request a Quote</Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

