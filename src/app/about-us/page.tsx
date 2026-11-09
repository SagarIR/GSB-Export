import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Compass, Target, Award, CheckCircle2, ArrowRight, FileText, Globe2, Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { COMPANY_INFO } from "@/content/company";

export const metadata: Metadata = {
  title: "About Us | Industrial Sourcing & Supply Coordination",
  description:
    "Learn about GSB Export: our mission, technical coordination model, commitment to quality, and role connecting international buyers with certified heat exchanger manufacturing in India.",
};

export default function AboutUsPage() {
  return (
    <div className="bg-white">
      {/* Page Header Banner */}
      <section className="bg-navy py-16 sm:py-20 text-white relative overflow-hidden border-b border-steel/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold tracking-widest uppercase bg-copper/20 text-copper-light border border-copper/40 mb-4">
              Company Overview &amp; Principles
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              About GSB Export
            </h1>
            <p className="mt-4 text-base sm:text-lg text-silver leading-relaxed">
              Industrial heat exchanger solutions, technical coordination, and dependable international supply coordination based in Gujarat, India.
            </p>
          </div>
        </Container>
      </section>

      {/* Section 1: Who We Are & Business Model */}
      <section className="py-16 sm:py-20 bg-white border-b border-silver/40">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                badge="Who We Are"
                badgeVariant="copper"
                title="Bridging International Engineering Demand with Certified Manufacturing"
                subtitle="Positioned at the nexus of technical evaluation, precision manufacturing coordination, and international trade."
                className="mb-4"
              />

              <div className="space-y-4 text-sm text-graphite/85 leading-relaxed">
                <p>
                  <strong>GSB Export</strong> operates as a specialized industrial thermal equipment supplier, technical sourcing coordinator, and export partner headquartered in Vadodara, Gujarat, India. We serve procurement managers, plant operators, EPC contractors, and industrial distributors worldwide who require reliable, code-compliant heat exchangers tailored to demanding process conditions.
                </p>
                <p>
                  The global process industry demands rigorous thermal design, stringent pressure containment compliance, and certified metallurgy. Rather than operating as a disconnected trading entity, GSB Export provides deep technical oversight. We evaluate process parameters, clarify thermal rating sheets, coordinate design calculations with specialized engineering teams, and ensure complete alignment with international standards including ASME Section VIII, TEMA, and API codes.
                </p>
                <p>
                  Our business model pairs international buyers directly with vetted Indian manufacturing partners equipped with state-of-the-art heavy rolling bays, multi-spindle CNC tubesheet drilling, and automated orbital TIG welding systems.
                </p>
              </div>

              {/* Verified Positioning Box */}
              <div className="p-5 bg-offwhite border-l-4 border-steel rounded-r-lg text-xs text-graphite/90 space-y-2">
                <span className="font-bold text-navy flex items-center gap-1.5 text-sm">
                  <ShieldCheck className="w-4 h-4 text-copper" />
                  <span>Commercial Transparency Guarantee</span>
                </span>
                <p className="leading-relaxed">
                  We believe technical credibility begins with factual honesty. GSB Export clearly distinguishes our engineering coordination, quality oversight, and international export supply capabilities from the physical fabrication bays of our manufacturing partners. We do not claim ownership of unverified facilities or certifications; our value lies in uncompromising specification alignment, stage-wise ITP witnessing, and flawless export delivery.
                </p>
              </div>
            </div>

            {/* Right Column: Location & Key Facts */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-navy rounded-xl p-6 lg:p-8 text-white border border-steel/60 shadow-industrial-lg">
                <div className="flex items-center gap-3 border-b border-steel/40 pb-4 mb-6">
                  <Building2 className="w-6 h-6 text-copper" />
                  <div>
                    <h3 className="text-base font-bold text-white">Commercial Profile</h3>
                    <span className="text-xs text-copper-light">Vadodara, Gujarat, India</span>
                  </div>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-silver/60 block uppercase text-[10px] tracking-wider">Business Activity</span>
                    <span className="text-white font-semibold text-sm">Industrial Heat Exchanger Supply &amp; Export</span>
                  </div>
                  <div>
                    <span className="text-silver/60 block uppercase text-[10px] tracking-wider">Primary Supply Base</span>
                    <span className="text-white font-semibold text-sm">Vadodara / Gujarat Industrial Fabrication Hub</span>
                  </div>
                  <div>
                    <span className="text-silver/60 block uppercase text-[10px] tracking-wider">Equipment Scope</span>
                    <span className="text-white font-semibold text-sm">Shell &amp; Tube, Plate, Air-Cooled, Hairpin, Spiral</span>
                  </div>
                  <div>
                    <span className="text-silver/60 block uppercase text-[10px] tracking-wider">Target International Corridors</span>
                    <span className="text-white font-semibold text-sm">Middle East, South/Southeast Asia, Africa, Europe</span>
                  </div>
                  <div>
                    <span className="text-silver/60 block uppercase text-[10px] tracking-wider">Core Standards Alignment</span>
                    <span className="text-white font-semibold text-sm">ASME Section VIII, TEMA Class R/C/B, API 660, API 661</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-steel/40">
                  <Link
                    href="/request-a-quote"
                    className="btn-copper text-xs font-bold uppercase tracking-wider py-2.5 px-4 rounded w-full text-center block"
                  >
                    Submit Technical RFQ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2: Mission, Vision & Values */}
      <section className="py-16 sm:py-20 bg-offwhite border-b border-silver/40">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <SectionHeading
              badge="Guiding Framework"
              badgeVariant="steel"
              align="center"
              title="Mission, Vision &amp; Strategic Principles"
              subtitle="Driven by engineering rigor, transparent commercial conduct, and unwavering quality governance."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Mission */}
            <div className="bg-white border border-silver/70 rounded-xl p-8 shadow-sm hover:border-steel/60 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-steel/10 text-steel flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-3">Our Mission</h3>
              <p className="text-sm text-graphite/85 leading-relaxed">
                {COMPANY_INFO.mission}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white border border-silver/70 rounded-xl p-8 shadow-sm hover:border-steel/60 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-copper/10 text-copper flex items-center justify-center mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-3">Our Vision</h3>
              <p className="text-sm text-graphite/85 leading-relaxed">
                {COMPANY_INFO.vision}
              </p>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-white border border-silver/60 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-copper text-xs font-bold uppercase tracking-wider block mb-1">
                  Principle 0{idx + 1}
                </span>
                <h4 className="text-sm font-bold text-navy mb-2">
                  {val.title}
                </h4>
                <p className="text-xs text-graphite/80 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 3: Strategic Supply Pillars */}
      <section className="py-16 sm:py-20 bg-white border-b border-silver/40">
        <Container>
          <SectionHeading
            badge="Operational Pillars"
            badgeVariant="copper"
            title="How We Add Value to International Procurement"
            subtitle="Bridging the gap between complex engineering specifications and production execution."
            className="max-w-2xl"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {COMPANY_INFO.businessModel.keyDifferentiators.map((diff, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-silver/70 bg-offwhite hover:border-steel/60 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-navy text-copper font-bold text-xs flex items-center justify-center shrink-0">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-navy">
                    {diff.title}
                  </h3>
                </div>
                <p className="text-xs text-graphite/85 leading-relaxed pl-11">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-14 bg-navy text-white">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Have a Project or Tender to Evaluate?
              </h3>
              <p className="text-xs sm:text-sm text-silver max-w-xl">
                Send us your process datasheets, thermal duties, or equipment specifications for comprehensive engineering evaluation.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/request-a-quote"
                className="btn-copper text-xs font-bold uppercase tracking-wider px-6 py-3 rounded"
              >
                Request a Quote
              </Link>
              <Link
                href="/contact-us"
                className="btn-outline-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
