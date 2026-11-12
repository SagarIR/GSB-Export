import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { CAPABILITIES } from "@/content/capabilities";
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
  "End-to-end Indian heat exchanger supply workflow: thermal sizing, partner facility vetting, CNC tubesheet drilling, orbital welding, NDT, and ISPM 15 export packing.";

export const metadata: Metadata = buildPageMetadata({
  title: "Manufacturing Coordination & Export Supply Workflow",
  description: PAGE_DESCRIPTION,
  path: "/manufacturing-supply",
  keywords: [
    "Heat Exchanger Manufacturing India",
    "Pressure Vessel Fabrication Gujarat",
    "ISPM 15 Export Packing",
    "Heat Exchanger Supply Chain",
  ],
});

export default function ManufacturingSupplyPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Manufacturing & Supply", path: "/manufacturing-supply" },
  ]);
  const pageJsonLd = buildWebPageJsonLd({
    name: "Manufacturing & Supply Capabilities",
    description: PAGE_DESCRIPTION,
    path: "/manufacturing-supply",
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
            <BannerBreadcrumb items={[{ label: "Manufacturing & Supply" }]} />
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold tracking-wider uppercase bg-copper/20 text-copper-light border border-copper/40 mb-4">
              Sourcing &amp; Export Infrastructure
            </span>
            <h1 className="text-h1 font-bold text-white leading-tight">
              Manufacturing &amp; Supply Capabilities
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed mb-0">
              Aligning international thermal equipment requirements with specialized manufacturing bays, precision CNC machining, and certified export packaging.
            </p>
          </div>
        </Container>
      </section>

      {/* Sourcing Ecosystem & Disclaimer */}
      <section className="py-16 sm:py-20 bg-white border-b border-silver/40">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                badge="Supply Chain Coordination"
                badgeVariant="copper"
                title="A Structured Sourcing Network Engineered for Export"
                subtitle="Bridging international procurement standards with the precision and cost-efficiencies of Indian industrial manufacturing."
                className="mb-4"
              />

              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  India—particularly the industrial belt of Gujarat—is home to some of the world&apos;s most advanced heavy engineering fabrication facilities, specialized pressure vessel fabricators, and certified machining shops. However, international buyers often struggle with vendor vetting, thermal design reconciliation, stage-wise inspection witnessing, and export logistics.
                </p>
                <p>
                  <strong className="text-navy">GSB Export</strong> provides an integrated supply management bridge. We maintain technical partnerships with pre-vetted fabrication shops equipped with certified ASME pressure vessel stamps, heavy plate rolling machinery, and clean room facilities for noble alloys.
                </p>
              </div>

              {/* Verified Positioning Box */}
              <div className="p-5 bg-offwhite border-l-4 border-steel rounded-r-lg text-sm text-slate-700 space-y-1.5">
                <span className="font-bold text-navy flex items-center gap-2 text-base">
                  <ShieldCheck className="w-4 h-4 text-[#C2410C]" />
                  <span>Transparent Operating Model</span>
                </span>
                <p className="leading-relaxed mb-0 text-sm sm:text-[15px]">
                  {CAPABILITIES.disclaimer}
                </p>
              </div>
            </div>

            {/* Right Card: Partner Capabilities */}
            <div className="lg:col-span-5 bg-navy rounded-xl p-6 lg:p-8 text-white border border-steel/60 shadow-industrial-lg">
              <h3 className="text-lg font-bold text-white border-b border-steel/40 pb-3 mb-4">
                Partner Facility Technical Capabilities
              </h3>
              <div className="space-y-4 text-sm">
                {CAPABILITIES.partnerCoordinationCapabilities.map((cap, idx) => (
                  <div key={idx} className="border-b border-steel/30 pb-3 last:border-0 last:pb-0">
                    <span className="font-bold text-[#FA8540] block text-base mb-0.5">
                      {cap.title}
                    </span>
                    <span className="text-slate-200 leading-relaxed block">
                      {cap.capacity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 7-Step End-to-End Supply Workflow */}
      <section className="py-16 sm:py-20 bg-offwhite border-b border-silver/40">
        <Container>
          <SectionHeading
            badge="The Supply Cycle"
            badgeVariant="steel"
            title="Our End-to-End Seven-Stage Supply Workflow"
            subtitle="From initial process parameter review to final port dispatch, every step is governed by technical precision."
            className="max-w-2xl"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {CAPABILITIES.workflowSteps.map((ws, idx) => (
              <div
                key={idx}
                className="bg-white border border-silver/70 rounded-xl p-6 shadow-sm hover:border-steel/60 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span aria-hidden="true" className="text-3xl font-bold text-steel/25 block mb-2">
                    {ws.step}
                  </span>
                  <h3 className="text-lg font-bold text-navy mb-2">
                    {ws.name}
                  </h3>
                  <p className="text-sm text-[#C2410C] font-semibold mb-3">
                    {ws.summary}
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed mb-0">
                    {ws.details}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-silver/40 flex items-center gap-2 text-xs text-[#0F4C81] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#C2410C]" />
                  <span>Stage Verified</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Export Packaging Standards */}
      <section className="py-16 sm:py-20 bg-white border-b border-silver/40">
        <Container>
          <div className="max-w-3xl mb-10">
            <SectionHeading
              badge="Logistics Preservation"
              badgeVariant="copper"
              title="International Seaworthy Export Packaging"
              subtitle="Ensuring heavy, sensitive equipment arrives at international job sites free from transport damage, internal moisture condensation, or salt-air corrosion."
              className="mb-0"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.exportPackagingStandards.map((std, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 bg-offwhite rounded-xl border border-silver/70 flex items-start gap-3.5 text-sm"
              >
                <div className="w-8 h-8 rounded-full bg-steel/10 text-[#0F4C81] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  0{idx + 1}
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-navy block text-base">
                    {std.split(" ")[0]} Preservation
                  </span>
                  <p className="text-slate-700 leading-relaxed mb-0 text-sm">
                    {std}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Card */}
          <div className="mt-12 p-8 rounded-2xl bg-navy text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-steel/60 shadow-industrial-lg">
            <div className="space-y-1.5 text-center sm:text-left">
              <h3 className="text-xl font-bold text-white">Require High-Specification Equipment Supply?</h3>
              <p className="text-sm sm:text-base text-slate-200 mb-0">We coordinate specialized fabrication, non-destructive testing, and certified export packing from Gujarat.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <Link href="/quality-assurance" className="btn-outline-white text-sm font-bold px-5 py-2.5 rounded-full">Review QA &amp; ITP</Link>
              <Link href="/request-a-quote" className="btn-copper text-sm font-bold px-5 py-2.5 rounded-full">Request a Quote</Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

