import type { Metadata } from "next";
import Link from "next/link";
import { Cpu, Layers, Ruler, FileText, CheckCircle2, ShieldCheck, ArrowRight, Cog, Check } from "lucide-react";
import { ENGINEERING_SERVICES } from "@/content/engineering";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Engineering Solutions | Thermal & Mechanical Design Coordination",
  description:
    "Explore our technical coordination approach: thermal duty sizing, LMTD optimization, metallurgy selection, ASME/TEMA mechanical compliance, and GA drawing reviews.",
};

export default function EngineeringSolutionsPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy py-16 sm:py-20 text-white relative overflow-hidden border-b border-steel/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold tracking-widest uppercase bg-copper/20 text-copper-light border border-copper/40 mb-4">
              Technical Design Alignment
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Engineering Solutions
            </h1>
            <p className="mt-4 text-base sm:text-lg text-silver leading-relaxed">
              Bridging thermodynamic theory and mechanical reality. We coordinate rigorous thermal sizing, metallurgy evaluation, and code compliance for critical process equipment.
            </p>
          </div>
        </Container>
      </section>

      {/* Engineering Philosophy & Overview */}
      <section className="py-16 sm:py-20 bg-white border-b border-silver/40">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                badge="Engineering Approach"
                badgeVariant="copper"
                title="Engineering Precision Behind Every Heat Exchanger"
                subtitle="Optimizing heat transfer coefficients while managing allowable pressure drop and mechanical stress."
                className="mb-4"
              />

              <div className="space-y-4 text-sm text-graphite/85 leading-relaxed">
                <p>
                  Industrial heat exchangers operate at the intersection of thermal fluid dynamics and mechanical pressure vessel engineering. An exchanger that is thermally undersized will bottleneck entire plant production lines, while an over-conservative design causes unnecessary capital cost and accelerates fouling due to low tube velocities.
                </p>
                <p>
                  <strong>GSB Export</strong> provides technical consultation and specification coordination. We review customer process conditions—fluid flow rates, inlet/outlet temperatures, fouling resistances, viscosity, and chemical aggressiveness—and collaborate with certified engineering teams to calculate exact surface areas, baffle configurations, and pressure boundary thicknesses.
                </p>
              </div>

              {/* Disclaimer Box */}
              <div className="p-4 bg-offwhite border-l-4 border-steel rounded-r-lg text-xs text-graphite/90 space-y-1">
                <span className="font-bold text-navy flex items-center gap-1.5 text-sm">
                  <ShieldCheck className="w-4 h-4 text-copper" />
                  <span>Engineering Governance Notice</span>
                </span>
                <p className="leading-relaxed">
                  {ENGINEERING_SERVICES.disclaimer}
                </p>
              </div>
            </div>

            {/* Right Card: Code Alignment Highlights */}
            <div className="lg:col-span-5 bg-navy rounded-xl p-6 lg:p-8 text-white border border-steel/60 shadow-industrial-lg">
              <h3 className="text-base font-bold text-white border-b border-steel/40 pb-3 mb-4">
                Design Codes &amp; Standards We Coordinate
              </h3>
              <ul className="space-y-3 text-xs text-silver">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                  <span><strong>ASME BPVC Section VIII (Div 1 &amp; 2):</strong> Rules for construction of pressure vessels.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                  <span><strong>TEMA Standards (Class R, C, B):</strong> Tubular Exchanger Manufacturers Association standards for petroleum, chemical, and general commercial duties.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                  <span><strong>API Standard 660:</strong> Shell-and-tube exchangers for general refinery service.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                  <span><strong>API Standard 661 / ISO 13706:</strong> Air-cooled heat exchangers for refinery service.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                  <span><strong>EN 13445 / PED 2014/68/EU:</strong> European pressure vessel compliance for international export.</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 4 Core Engineering Capabilities */}
      <section className="py-16 sm:py-20 bg-offwhite border-b border-silver/40">
        <Container>
          <SectionHeading
            badge="Technical Disciplines"
            badgeVariant="steel"
            title="Our Technical Evaluation Capabilities"
            subtitle="Detailed thermodynamic, mechanical, and metallurgical validation."
            className="max-w-2xl"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {ENGINEERING_SERVICES.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="bg-white border border-silver/70 rounded-xl p-6 sm:p-8 shadow-sm hover:border-steel/60 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-navy text-copper font-bold text-sm flex items-center justify-center mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-graphite/80 leading-relaxed mb-6">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-silver/40">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-navy block mb-2">
                    Key Evaluation Focus:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-steel font-medium">
                    {cap.focusAreas.map((fa, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-copper shrink-0" />
                        <span>{fa}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Engineering Workflow Steps */}
      <section className="py-16 sm:py-20 bg-white border-b border-silver/40">
        <Container>
          <SectionHeading
            badge="Step-by-Step Workflow"
            badgeVariant="copper"
            title="From Process Data Sheet to Approved Fabrication"
            subtitle="A transparent, sequential engineering process ensuring zero discrepancy between site expectations and final hardware."
            className="max-w-2xl"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {ENGINEERING_SERVICES.workflow.map((wf, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-offwhite border border-silver/70 relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-extrabold text-navy/20 block mb-2">
                    {wf.step}
                  </span>
                  <h4 className="text-base font-bold text-navy mb-2">
                    {wf.title}
                  </h4>
                  <p className="text-xs text-graphite/80 leading-relaxed mb-4">
                    {wf.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-silver/40">
                  <span className="text-[10px] font-bold uppercase text-copper block mb-1">
                    Key Deliverables:
                  </span>
                  <ul className="text-[11px] text-graphite/70 space-y-0.5">
                    {wf.deliverables.map((d, dIdx) => (
                      <li key={dIdx}>• {d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-navy text-white">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Have a Complex Process Thermal Sheet to Evaluate?
              </h3>
              <p className="text-xs sm:text-sm text-silver max-w-xl">
                Our engineering team reviews fluid parameters, thermal crossing conditions, and metallurgy allowances to generate optimized proposals.
              </p>
            </div>
            <Link
              href="/request-a-quote"
              className="btn-copper text-xs font-bold uppercase tracking-wider px-6 py-3 rounded shrink-0"
            >
              Submit Engineering Inquiry
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}

