import type { Metadata } from "next";
import Link from "next/link";
import { Ship, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/content/company";
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
  "Exporting industrial heat exchangers from Vadodara via Mundra, Hazira & JNPT ports to the Middle East, Southeast Asia, Africa & Europe under Incoterms 2020.";

export const metadata: Metadata = buildPageMetadata({
  title: "Global Export Markets & Logistics Corridors",
  description: PAGE_DESCRIPTION,
  path: "/global-markets",
  keywords: [
    "Heat Exchanger Export India",
    "Heat Exchanger Supplier UAE Saudi Oman",
    "Incoterms 2020 Industrial Export",
    "Mundra JNPT Engineering Export",
  ],
});

export default function GlobalMarketsPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Global Markets", path: "/global-markets" },
  ]);
  const pageJsonLd = buildWebPageJsonLd({
    name: "Global Markets & Export Corridors",
    description: PAGE_DESCRIPTION,
    path: "/global-markets",
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
            <BannerBreadcrumb items={[{ label: "Global Markets" }]} />
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold tracking-wider uppercase bg-copper/20 text-copper-light border border-copper/40 mb-4">
              Export Logistics &amp; Corridors
            </span>
            <h1 className="text-h1 font-bold text-white leading-tight">
              Global Markets &amp; Export
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed mb-0">
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

              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  Gujarat represents India&apos;s industrial manufacturing powerhouse, hosting extensive specialized clusters for pressure vessel fabrication, precision machining, tube drawing, and chemical process equipment.
                </p>
                <p>
                  Operating from <strong className="text-navy">Vadodara, Gujarat</strong>, GSB Export benefits from immediate access to world-class steel stockholders, accredited testing laboratories, independent inspection agencies (TUV, Bureau Veritas, DNV), and deepwater container terminals.
                </p>
                <p>
                  Our logistical infrastructure provides streamlined multimodal transport routes to major international shipping ports including <strong className="text-navy">Mundra Port, Hazira Port, and JNPT (Nhava Sheva)</strong>, enabling regular sailings to the Middle East, Southeast Asia, Africa, and Europe.
                </p>
              </div>

              {/* Factual Integrity Notice */}
              <div className="p-5 bg-offwhite border-l-4 border-steel rounded-r-lg text-sm text-slate-700 space-y-1.5">
                <span className="font-bold text-navy flex items-center gap-2 text-base">
                  <ShieldCheck className="w-4 h-4 text-[#C2410C]" />
                  <span>Market Designation Transparency</span>
                </span>
                <p className="leading-relaxed mb-0 text-sm sm:text-[15px]">
                  International territories highlighted on this website represent our strategic export target markets and outreach priorities. We do not claim existing physical branch offices or unverified historical export statistics in these jurisdictions.
                </p>
              </div>
            </div>

            {/* Right Card: Port Proximity & Incoterms */}
            <div className="lg:col-span-5 bg-navy rounded-xl p-6 lg:p-8 text-white border border-steel/60 shadow-industrial-lg">
              <h3 className="text-lg font-bold text-white border-b border-steel/40 pb-3 mb-4 flex items-center gap-2">
                <Ship className="w-5 h-5 text-[#FA8540]" />
                <span>Export Gateways &amp; Shipping Terms</span>
              </h3>

              <div className="space-y-4 text-sm text-slate-200">
                <div>
                  <span className="text-slate-300 block uppercase text-xs tracking-wider mb-0.5">Primary Dispatch Ports</span>
                  <span className="text-white font-semibold text-sm sm:text-base">Mundra, Hazira, JNPT (Nhava Sheva)</span>
                </div>
                <div>
                  <span className="text-slate-300 block uppercase text-xs tracking-wider mb-0.5">Air Freight Gateway</span>
                  <span className="text-white font-semibold text-sm sm:text-base">Ahmedabad (AMD) / Mumbai (BOM) International Cargo</span>
                </div>
                <div>
                  <span className="text-slate-300 block uppercase text-xs tracking-wider mb-0.5">Supported Incoterms (2020)</span>
                  <span className="text-white font-semibold text-sm sm:text-base">EXW, FOB, CFR, CIF, CPT, CIP, DDP</span>
                </div>
                <div>
                  <span className="text-slate-300 block uppercase text-xs tracking-wider mb-0.5">Export Packaging</span>
                  <span className="text-white font-semibold text-sm sm:text-base">ISPM 15 Heat-Treated Crating, Vacuum VCI Foil</span>
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
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider bg-orange-50 text-[#C2410C] px-2.5 py-0.5 rounded border border-orange-200/80">
                      {market.status}
                    </span>
                    <span className="text-xs text-[#0F4C81] font-semibold">
                      {market.region}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">
                    {market.name}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed mb-4">
                    Target process sectors: <strong className="text-navy">{market.keySectors}</strong>.
                  </p>
                </div>

                <div className="pt-3 border-t border-silver/40 text-xs text-slate-600">
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
                  <div className="w-8 h-8 rounded-lg bg-navy text-[#FA8540] font-bold text-xs flex items-center justify-center mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-navy mb-2">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed mb-0">
                    {doc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Card */}
          <div className="mt-12 p-8 rounded-2xl bg-navy text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-steel/60 shadow-industrial-lg">
            <div className="space-y-1.5 text-center sm:text-left">
              <h3 className="text-xl font-bold text-white">Planning an International Project Shipment?</h3>
              <p className="text-sm sm:text-base text-slate-200 mb-0">We coordinate CIF, CFR, FOB, and Ex-Works dispatches with complete technical and customs dossiers.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <Link href="/products" className="btn-outline-white text-sm font-bold px-5 py-2.5 rounded-full">Explore Equipment</Link>
              <Link href="/request-a-quote" className="btn-copper text-sm font-bold px-5 py-2.5 rounded-full">Request Export Quote</Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

