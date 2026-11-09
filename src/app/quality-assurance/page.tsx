import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, FileCheck, Eye, Layers, Gauge, AlertTriangle, ArrowRight } from "lucide-react";
import { QUALITY_SYSTEM } from "@/content/quality";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Quality Assurance & ITP | Inspection Protocols & Testing",
  description:
    "Learn about GSB Export's quality assurance framework: material traceability (EN 10204 3.1), ASME Section IX welding procedures, hydrostatic testing, NDT, and third-party inspection (TPIA).",
};

export default function QualityAssurancePage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy py-16 sm:py-20 text-white relative overflow-hidden border-b border-steel/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold tracking-widest uppercase bg-copper/20 text-copper-light border border-copper/40 mb-4">
              Zero-Defect Quality Governance
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Quality Assurance &amp; Inspection
            </h1>
            <p className="mt-4 text-base sm:text-lg text-silver leading-relaxed">
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

              <div className="space-y-4 text-sm text-graphite/85 leading-relaxed">
                <p>
                  At <strong>GSB Export</strong>, quality is not a post-manufacturing check; it is a continuous, document-driven discipline executed at every milestone of equipment lifecycle. We formulate and oversee detailed project-specific <strong>Inspection and Test Plans (ITP)</strong> that outline witness, hold, and review points before any metal is cut.
                </p>
                <p>
                  From validating heat numbers against raw mill test certificates to observing final hydrostatic pressure tests with calibrated digital chart loggers, our technical quality team ensures full compliance with ASME, TEMA, and international regulatory frameworks.
                </p>
              </div>

              {/* Factual Disclaimer Box */}
              <div className="p-4 bg-offwhite border-l-4 border-steel rounded-r-lg text-xs text-graphite/90 space-y-1">
                <span className="font-bold text-navy flex items-center gap-1.5 text-sm">
                  <ShieldCheck className="w-4 h-4 text-copper" />
                  <span>Standards Applicability Notice</span>
                </span>
                <p className="leading-relaxed">
                  {QUALITY_SYSTEM.standardsDisclaimer}
                </p>
              </div>
            </div>

            {/* Right Card: Third Party Inspection Authorities */}
            <div className="lg:col-span-5 bg-navy rounded-xl p-6 lg:p-8 text-white border border-steel/60 shadow-industrial-lg">
              <div className="flex items-center gap-2.5 border-b border-steel/40 pb-3 mb-4">
                <Eye className="w-5 h-5 text-copper" />
                <h3 className="text-base font-bold text-white">
                  Third-Party Inspection Coordination (TPIA)
                </h3>
              </div>
              <p className="text-xs text-silver leading-relaxed mb-4">
                We regularly coordinate stage-wise witnessing, hold-point clearance, and final dossier release with globally recognized independent inspection agencies:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-silver-light">
                <div className="p-2.5 bg-navy-900/90 rounded border border-steel/40 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-copper shrink-0" />
                  <span>TÜV Rheinland / NORD</span>
                </div>
                <div className="p-2.5 bg-navy-900/90 rounded border border-steel/40 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-copper shrink-0" />
                  <span>Bureau Veritas (BV)</span>
                </div>
                <div className="p-2.5 bg-navy-900/90 rounded border border-steel/40 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-copper shrink-0" />
                  <span>DNV GL</span>
                </div>
                <div className="p-2.5 bg-navy-900/90 rounded border border-steel/40 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-copper shrink-0" />
                  <span>Lloyd&apos;s Register (LR)</span>
                </div>
                <div className="p-2.5 bg-navy-900/90 rounded border border-steel/40 flex items-center gap-2 sm:col-span-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-copper shrink-0" />
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
                  <span className="text-copper text-xs font-bold uppercase tracking-wider block mb-1">
                    Protocol 0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-navy mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-graphite/80 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-silver/40">
                  <ul className="space-y-1.5 text-[11px] text-graphite">
                    {pillar.details.map((det, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-copper shrink-0 mt-0.5" />
                        <span className="text-graphite/85">{det}</span>
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
                  <th className="w-40">Documentation</th>
                </tr>
              </thead>
              <tbody>
                {QUALITY_SYSTEM.itpPhases.map((phase, idx) => (
                  <tr key={idx} className="hover:bg-offwhite/50 transition-colors">
                    <td className="font-bold text-copper">{phase.stage}</td>
                    <td className="font-semibold text-navy">{phase.name}</td>
                    <td className="text-xs leading-relaxed">{phase.activities}</td>
                    <td className="text-xs text-steel font-medium">Signed Quality Report</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-navy text-white">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Require a Project-Specific Quality Plan (ITP)?
              </h3>
              <p className="text-xs sm:text-sm text-silver max-w-xl">
                We can provide sample Inspection and Test Plans aligned with your project design code and third-party inspection agency requirements.
              </p>
            </div>
            <Link
              href="/request-a-quote"
              className="btn-copper text-xs font-bold uppercase tracking-wider px-6 py-3 rounded shrink-0"
            >
              Request ITP &amp; Quotation
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
