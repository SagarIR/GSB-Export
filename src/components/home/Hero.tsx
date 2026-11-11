import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileText, CheckCircle2, ShieldCheck, Globe2 } from "lucide-react";
import { COMPANY_INFO } from "@/content/company";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative bg-navy overflow-hidden py-16 sm:py-24 lg:py-28 text-white border-b border-steel/30">
      {/* Background Industrial Plant Photography */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <Image
          src="/images/hero/industrial-plant.png"
          alt="Industrial Thermal Transfer Plant & Refinery Complex"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Subtle Geometric Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80 z-0" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Credibility Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-steel/40 border border-steel-light/30 text-xs font-bold tracking-widest uppercase text-copper-light">
              <ShieldCheck className="w-4 h-4 text-copper" />
              <span>Industrial Sourcing &amp; Export Partner — India</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Engineering Heat. <br />
              <span className="text-copper">Connecting Industries.</span>
            </h1>

            {/* Approved Supporting Copy */}
            <p className="text-base sm:text-lg text-silver leading-relaxed max-w-2xl">
              {COMPANY_INFO.heroSupportText}
            </p>

            {/* Core Capability Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-silver-light">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-copper shrink-0" />
                <span>ASME, TEMA &amp; API Code Sizing Alignment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-copper shrink-0" />
                <span>Full Material Traceability &amp; 3.1 Certificates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-copper shrink-0" />
                <span>100% Hydrostatic &amp; NDT Witnessing Protocols</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-copper shrink-0" />
                <span>Seaworthy ISPM 15 Crating &amp; Global Logistics</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/products"
                className="btn-copper text-sm font-bold uppercase tracking-wider px-7 py-4 rounded shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/request-a-quote"
                className="btn-outline-white text-sm font-bold uppercase tracking-wider px-7 py-4 rounded flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-copper" />
                <span>Request a Quotation</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Industrial Equipment Schematic Card */}
          <div className="lg:col-span-5">
            <div className="bg-navy-900/80 border border-steel/60 rounded-xl p-5 shadow-industrial-lg backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-steel/40 pb-3 mb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-copper">
                    Equipment Spotlight
                  </span>
                  <h3 className="text-base font-bold text-white">
                    Shell &amp; Tube Heat Exchanger
                  </h3>
                </div>
                <span className="text-[11px] font-semibold bg-steel/30 text-silver px-2 py-1 rounded border border-steel/40">
                  TEMA Class R / C / B
                </span>
              </div>

              {/* Schematic Graphic */}
              <div className="relative aspect-[16/10] bg-navy-950 rounded-lg overflow-hidden border border-silver/20 mb-4">
                <Image
                  src="/images/products/shell-and-tube.png"
                  alt="Shell and Tube Heat Exchanger Schematic"
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Technical Indicator Badges */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-navy/70 border border-silver/10 rounded p-2.5">
                  <span className="text-silver/60 block text-[10px] uppercase">Design Pressure</span>
                  <span className="text-white font-semibold">Vacuum to 300+ bar(g)</span>
                </div>
                <div className="bg-navy/70 border border-silver/10 rounded p-2.5">
                  <span className="text-silver/60 block text-[10px] uppercase">Temperature Range</span>
                  <span className="text-white font-semibold">-196°C to +650°C</span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-steel/30 flex items-center justify-between text-xs text-silver">
                <span className="flex items-center gap-1.5 text-copper-light">
                  <Globe2 className="w-3.5 h-3.5 text-copper" />
                  <span>Vadodara Supply Hub</span>
                </span>
                <Link
                  href="/products/shell-and-tube"
                  className="text-copper hover:text-copper-light font-bold flex items-center gap-1"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

