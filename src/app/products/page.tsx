import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Cpu,
  Layers,
  Award,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ProductsCatalogue } from "@/components/products/ProductsCatalogue";

export const metadata: Metadata = {
  title: "Industrial Heat Exchanger Products | GSB Export",
  description:
    "Explore our complete range of precision heat exchangers: Shell and Tube, Plate Heat Exchangers, Air-Cooled Fin-Fan Coolers, Finned Tube, U-Tube Bundles, Double Pipe Hairpin, and Spiral Exchangers.",
};

export default function ProductsOverviewPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy py-14 sm:py-18 text-white relative overflow-hidden border-b border-steel/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-200 mb-4">
              <Link href="/" className="hover:text-[#FA8540] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#FA8540] font-semibold">Products</span>
            </nav>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold tracking-wider uppercase bg-copper/20 text-copper-light border border-copper/40 mb-4">
              Equipment Range &amp; Specifications
            </span>

            <h1 className="text-h1 font-bold text-white leading-tight font-sans">
              Industrial Heat Exchangers
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-3xl">
              Precision thermal transfer equipment engineered strictly to ASME Section VIII,
              TEMA Class R/C/B, and API 660/661 codes for high-pressure refining,
              chemical synthesis, food processing, and power generation.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-100">
              <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
                <ShieldCheck className="w-4 h-4 text-[#FA8540]" />
                <span>ASME U &amp; U2 Partner Facility Network</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
                <Award className="w-4 h-4 text-[#FA8540]" />
                <span>100% NDT &amp; Hydrostatic Verification</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
                <Layers className="w-4 h-4 text-[#FA8540]" />
                <span>Exotic Alloys: Duplex, Titanium, Hastelloy</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Catalogue Grid with Filter Tabs & Search */}
      <section className="py-14 sm:py-20 bg-offwhite">
        <Container>
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C2410C] bg-orange-50 px-3.5 py-1 rounded-full border border-orange-200/80 inline-block mb-2">
              Browse Equipment
            </span>
            <h2 className="text-h2 font-bold text-[#0A1C33]">
              Tailored Configurations for Every Process Duty
            </h2>
            <p className="mt-2.5 text-base text-slate-700 mb-0">
              Select an architecture below to review operating parameters, construction metallurgy,
              and engineering specifications, or request an instant technical RFQ.
            </p>
          </div>

          {/* Interactive Products Catalogue */}
          <ProductsCatalogue />
        </Container>
      </section>
    </div>
  );
}
