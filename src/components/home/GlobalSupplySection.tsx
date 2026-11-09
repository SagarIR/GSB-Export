import React from "react";
import Link from "next/link";
import { Globe, Ship, Anchor, ArrowRight, ShieldCheck, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { COMPANY_INFO } from "@/content/company";

export function GlobalSupplySection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-silver/50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Export Capabilities */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              badge="International Supply"
              badgeVariant="copper"
              title="Global Export Coordination from India's Industrial Heartland"
              subtitle="Strategically located in Gujarat, India—one of the world's most dynamic fabrication ecosystems—GSB Export coordinates international delivery of heavy process equipment."
              className="mb-6"
            />

            <p className="text-sm text-graphite/80 leading-relaxed">
              Exporting heavy-duty pressure equipment demands flawless packaging, surface corrosion protection, and strict customs compliance. We coordinate end-to-end logistics from fabrication bays to international discharge ports.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-graphite">
              <div className="bg-offwhite p-3.5 rounded border border-silver/60">
                <span className="font-bold text-navy block mb-1 flex items-center gap-1.5">
                  <Ship className="w-4 h-4 text-copper" />
                  <span>Deepwater Port Proximity</span>
                </span>
                <p className="text-graphite/70">
                  Swift inland multimodal dispatch to Mundra Port, Hazira, and JNPT (Nhava Sheva) for global ocean container and breakbulk sailings.
                </p>
              </div>

              <div className="bg-offwhite p-3.5 rounded border border-silver/60">
                <span className="font-bold text-navy block mb-1 flex items-center gap-1.5">
                  <Anchor className="w-4 h-4 text-copper" />
                  <span>Seaworthy Preservation</span>
                </span>
                <p className="text-graphite/70">
                  ISPM 15 certified timber crating, VCI barrier bags, nitrogen blanketing at 0.5 bar, and heavy-duty flange cover blinds.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/global-markets"
                className="btn-navy text-xs font-bold uppercase tracking-wider px-6 py-3 rounded inline-flex items-center gap-2"
              >
                <span>View Export Corridors &amp; Target Markets</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Target Markets Grid */}
          <div className="lg:col-span-6">
            <div className="bg-navy rounded-xl p-6 lg:p-8 text-white border border-steel/60 shadow-industrial-lg">
              <div className="flex items-center justify-between border-b border-steel/40 pb-3 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-copper">
                    Commercial Focus
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Target Export Regions &amp; Industrial Corridors
                  </h3>
                </div>
                <Globe className="w-6 h-6 text-copper" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {COMPANY_INFO.targetMarkets.slice(0, 6).map((market, idx) => (
                  <div
                    key={idx}
                    className="bg-navy-900/90 border border-steel/40 rounded-lg p-3 hover:border-copper/50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white">
                        {market.name}
                      </span>
                      <span className="text-[10px] bg-copper/20 text-copper-light px-1.5 py-0.5 rounded">
                        {market.region}
                      </span>
                    </div>
                    <span className="text-[11px] text-silver/70 block">
                      {market.keySectors}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-steel/40 flex items-center justify-between text-xs text-silver">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-copper" />
                  <span>Standard Export Terms: FOB, CIF, CFR, DDP</span>
                </span>
                <Link
                  href="/global-markets"
                  className="text-copper hover:text-copper-light font-bold flex items-center gap-1"
                >
                  <span>Explore Markets</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
