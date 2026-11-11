import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, FileText, Check } from "lucide-react";
import { APPLICATION_CASES } from "@/content/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Projects & Applications | Technical Case Studies & Benchmarks | GSB Export",
  description:
    "Review technical application case studies: refinery crude preheating, sanitary milk HTST pasteurization, desert gas compression cooling, and anaerobic sludge heating.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy py-16 sm:py-20 text-white relative overflow-hidden border-b border-steel/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold tracking-widest uppercase bg-copper/20 text-copper-light border border-copper/40 mb-4">
              Technical Case Studies
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Projects &amp; Applications
            </h1>
            <p className="mt-4 text-base sm:text-lg text-silver leading-relaxed">
              Real-world thermal challenges and engineering solutions. Exploring how customized heat exchangers resolve severe fouling, high pressures, and extreme temperature crossings.
            </p>
          </div>
        </Container>
      </section>

      {/* Transparency Note */}
      <section className="py-6 bg-offwhite border-b border-silver/50 text-xs text-graphite/80">
        <Container>
          <div className="flex items-center gap-2 p-3 bg-white rounded border border-silver/70">
            <ShieldCheck className="w-4 h-4 text-copper shrink-0" />
            <p>
              <strong>Engineering Integrity Notice:</strong> Case studies on this page represent typical engineering application benchmarks and technical problem-solution models designed to illustrate equipment selection criteria.
            </p>
          </div>
        </Container>
      </section>

      {/* Case Studies List */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="space-y-16">
            {APPLICATION_CASES.map((appCase, idx) => (
              <div
                key={appCase.id}
                id={appCase.slug}
                className="bg-offwhite border border-silver/70 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm hover:border-steel/60 transition-colors"
              >
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-silver/50 pb-5 mb-6">
                  <div>
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-copper/10 text-copper-dark px-2.5 py-0.5 rounded border border-copper/30">
                        {appCase.type}
                      </span>
                      <span className="text-xs text-steel font-bold">
                        {appCase.industry}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-navy">
                      {appCase.title}
                    </h2>
                  </div>
                  <span className="text-xs font-semibold bg-white px-3 py-1.5 rounded border border-silver/60 text-navy self-start sm:self-auto">
                    {appCase.equipmentType}
                  </span>
                </div>

                {/* Duty Summary */}
                <div className="mb-6 p-4 bg-white rounded-lg border border-silver/50 text-xs text-graphite/90">
                  <span className="font-bold text-navy uppercase text-[10px] tracking-wider block mb-1">
                    Process Duty:
                  </span>
                  <p className="leading-relaxed">
                    {appCase.dutySummary}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
                  {/* Challenge & Solution */}
                  <div className="lg:col-span-7 space-y-4">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-copper-dark mb-1.5">
                        The Technical Challenge:
                      </h3>
                      <p className="text-xs sm:text-sm text-graphite/85 leading-relaxed bg-white/70 p-3.5 rounded border border-silver/40">
                        {appCase.challenge}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-steel mb-1.5">
                        The Engineering Solution:
                      </h3>
                      <p className="text-xs sm:text-sm text-graphite/85 leading-relaxed bg-white/70 p-3.5 rounded border border-silver/40">
                        {appCase.technicalSolution}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-navy mb-2">
                        Demonstrated Operational Benefits:
                      </h3>
                      <ul className="space-y-1.5 text-xs text-graphite">
                        {appCase.keyBenefits.map((ben, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-copper shrink-0 mt-0.5" />
                            <span>{ben}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technical Specifications Matrix */}
                  <div className="lg:col-span-5 bg-white rounded-xl p-5 border border-silver/60 shadow-sm">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-navy border-b border-silver/40 pb-2 mb-3">
                      Equipment Technical Parameters
                    </h3>
                    <div className="space-y-2.5 text-xs">
                      {appCase.equipmentSpecs.map((spec, sIdx) => (
                        <div key={sIdx} className="border-b border-silver/30 pb-2 last:border-0 last:pb-0">
                          <span className="text-graphite/60 block text-[10px] uppercase">
                            {spec.label}
                          </span>
                          <span className="font-semibold text-navy">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 pt-4 border-t border-silver/40">
                      <Link
                        href={`/request-a-quote?application=${encodeURIComponent(appCase.title)}`}
                        className="btn-copper text-xs font-bold uppercase tracking-wider py-2.5 px-4 rounded w-full text-center flex items-center justify-center gap-1.5"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Inquire About Similar Duty</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Card */}
          <div className="mt-16 p-8 rounded-2xl bg-navy text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-steel/60 shadow-industrial-lg">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-lg font-bold text-white">Have a Challenging Thermal Process Requirement?</h3>
              <p className="text-xs sm:text-sm text-silver">Our engineering team analyzes heat duty parameters, fouling risks, and metallurgy to recommend the right configuration.</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link href="/products" className="btn-outline-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full">Explore Equipment</Link>
              <Link href="/request-a-quote" className="btn-copper text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full">Request a Quote</Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

