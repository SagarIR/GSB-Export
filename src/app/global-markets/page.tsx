import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Ship, Anchor, FileCheck, CheckCircle2, ShieldCheck, ArrowRight, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/content/company";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Global Markets & Export Corridors | International Supply",
  description:
    "Explore GSB Export's target international markets across the Middle East, Southeast Asia, Africa, and Europe, alongside our export documentation and shipping capabilities.",
};

export default function GlobalMarketsPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy py-16 sm:py-20 text-white relative overflow-hidden border-b border-steel/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold tracking-widest uppercase bg-copper/20 text-copper-light border border-copper/40 mb-4">
              Export Logistics &amp; Corridors
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Global Markets &amp; Export
            </h1>
            <p className="mt-4 text-base sm:text-lg text-silver leading-relaxed">
              Serving international process industries from India&apos;s premier fabrication hubs, backed by comprehensive export documentation and seaworthy packaging.
            </p>
          </div>
        </Container>
      </section>

      {/* Strategic Positioning & Export Hub */}
      <section className="py-16 sm:py-20 bg-white border-b border-silver/40">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                badge="Supply Geography"
                badgeVariant="copper"
                title="The Vadodara &amp; Gujarat Industrial Advantage"
                subtitle="Positioned at the heart of India's capital goods and engineering fabrication clusters."
                className="mb-4"
              />

              <div className="space-y-4 text-sm text-graphite/85 leading-relaxed">
                <p>
                  Gujarat represents India&apos;s industrial manufacturing powerhouse, hosting extensive specialized clusters for pressure vessel fabrication, precision machining, tube drawing, and chemical process equipment.
                </p>
                <p>
                  Operating from <strong>Vadodara, Gujarat</strong>, GSB Export benefits from immediate access to world-class steel stockholders, accredited testing laboratories, independent inspection agencies (TUV, Bureau Veritas, DNV), and deepwater container terminals.
                </p>
                <p>
                  Our logistical infrastructure provides streamlined multimodal transport routes to major international shipping ports including <strong>Mundra Port, Hazira Port, and JNPT (Nhava Sheva)</strong>, enabling regular sailings to the Middle East, Southeast Asia, Africa, and Europe.
                </p>
              </div>

              {/* Factual Integrity Notice */}
              <div className="p-4 bg-offwhite border-l-4 border-steel rounded-r-lg text-xs text-graphite/90 space-y-1">
                <span className="font-bold text-navy flex items-center gap-1.5 text-sm">
                  <ShieldCheck className="w-4 h-4 text-copper" />
                  <span>Market Designation Transparency</span>
                </span>
                <p className="leading-relaxed">
                  International territories highlighted on this website represent our strategic export target markets and outreach priorities. We do not claim existing physical branch offices or unverified historical export statistics in these jurisdictions.
                </p>
              </div>
            </div>

            {/* Right Card: Port Proximity & Incoterms */}
            <div className="lg:col-span-5 bg-navy rounded-xl p-6 lg:p-8 text-white border border-steel/60 shadow-industrial-lg">
              <h3 className="text-base font-bold text-white border-b border-steel/40 pb-3 mb-4 flex items-center gap-2">
                <Ship className="w-5 h-5 text-copper" />
                <span>Export Gateways &amp; Shipping Terms</span>
              </h3>

              <div className="space-y-4 text-xs text-silver">
                <div>
                  <span className="text-silver/60 block uppercase text-[10px] tracking-wider">Primary Dispatch Ports</span>
                  <span className="text-white font-semibold text-sm">Mundra, Hazira, JNPT (Nhava Sheva)</span>
                </div>
                <div>
                  <span className="text-silver/60 block uppercase text-[10px] tracking-wider">Air Freight Gateway</span>
                  <span className="text-white font-semibold text-sm">Ahmedabad (AMD) / Mumbai (BOM) International Cargo</span>
                </div>
                <div>
                  <span className="text-silver/60 block uppercase text-[10px] tracking-wider">Supported Incoterms (2020)</span>
                  <span className="text-white font-semibold text-sm">EXW, FOB, CFR, CIF, CPT, CIP, DDP</span>
                </div>
                <div>
                  <span className="text-silver/60 block uppercase text-[10px] tracking-wider">Export Packaging</span>
                  <span className="text-white font-semibold text-sm">ISPM 15 Heat-Treated Crating, Vacuum VCI Foil</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Target Regional Corridors Grid */}
      <section className="py-16 sm:py-20 bg-offwhite border-b border-silver/40">
        <Container>
          <SectionHeading
            badge="Target Corridors"
            badgeVariant="steel"
            title="Strategic International Export Markets"
            subtitle="Focusing our technical coordination on regions with expanding oil, gas, chemical, pharmaceutical, and energy infrastructure."
            className="max-w-2xl"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {COMPANY_INFO.targetMarkets.map((market, idx) => (
              <div
                key={idx}
                className="bg-white border border-silver/70 rounded-xl p-6 shadow-sm hover:border-steel/60 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-copper/10 text-copper-dark px-2 py-0.5 rounded border border-copper/30">
                      {market.status}
                    </span>
                    <span className="text-xs text-steel font-semibold">
                      {market.region}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-navy mb-2">
                    {market.name}
                  </h3>
                  <p className="text-xs text-graphite/80 leading-relaxed mb-4">
                    Target process sectors: <strong className="text-navy">{market.keySectors}</strong>.
                  </p>
                </div>

                <div className="pt-3 border-t border-silver/40 text-[11px] text-graphite/70">
                  <span>Ocean Transit Time: Subject to Carrier</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Export Documentation Dossier */}
      <section className="py-16 sm:py-20 bg-white border-b border-silver/40">
        <Container>
          <SectionHeading
            badge="Compliance Dossier"
            badgeVariant="copper"
            title="Comprehensive Technical &amp; Commercial Export Documentation"
            subtitle="Ensuring smooth customs clearance and complete quality transparency at the destination port."
            className="max-w-2xl"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Certified Mill Test Certificates (MTC)",
                desc: "EN 10204 Type 3.1 & 3.2 documentation verifying chemical and mechanical compliance of all pressure-containing plates, tubes, and forgings."
              },
              {
                title: "Non-Destructive Testing (NDT) Reports",
                desc: "Certified radiography (RT) films, ultrasonic (UT) logs, and dye-penetrant (PT) clearance sheets signed by ASNT Level II/III inspectors."
              },
              {
                title: "Hydrostatic Test Charts",
                desc: "Time-stamped electronic pressure recorder charts verifying proof test duration and zero pressure decay."
              },
              {
                title: "Certificate of Origin (COO)",
                desc: "Chamber of Commerce legalized Certificates of Origin, including GSP / FTA certificates for preferential tariff treatment where applicable."
              },
              {
                title: "ISPM 15 Fumigation Certificates",
                desc: "Official phytosanitary treatment certificates verifying international compliance of all wooden packaging and crating."
              },
              {
                title: "Comprehensive As-Built GA Dossier",
                desc: "As-built drawings, weld map layouts, bill of materials (BOM), and operational maintenance manuals bound for client records."
              }
            ].map((doc, idx) => (
              <div
                key={idx}
                className="p-6 bg-offwhite rounded-xl border border-silver/70 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-navy text-copper font-bold text-xs flex items-center justify-center mb-3">
                    0{idx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-navy mb-2">
                    {doc.title}
                  </h4>
                  <p className="text-xs text-graphite/80 leading-relaxed">
                    {doc.desc}
                  </p>
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
                Planning an International Delivery?
              </h3>
              <p className="text-xs sm:text-sm text-silver max-w-xl">
                Contact our export desk for Incoterms consultation, freight estimates, and documentation requirements for your destination country.
              </p>
            </div>
            <Link
              href="/request-a-quote"
              className="btn-copper text-xs font-bold uppercase tracking-wider px-6 py-3 rounded shrink-0"
            >
              Request Export Quotation
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
