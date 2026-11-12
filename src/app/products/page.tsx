import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Layers,
  Award,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BannerBreadcrumb } from "@/components/ui/BannerBreadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProductsCatalogue } from "@/components/products/ProductsCatalogue";
import {
  buildPageMetadata,
  buildBreadcrumbJsonLd,
  buildWebPageJsonLd,
} from "@/lib/seo";

const PAGE_DESCRIPTION =
  "Browse ASME & TEMA industrial heat exchangers: Shell & Tube, Plate, Air-Cooled Fin-Fan, Finned Tube, U-Tube Bundles, Double Pipe Hairpin & Spiral units.";

export const metadata: Metadata = buildPageMetadata({
  title: "Industrial Heat Exchanger Products",
  description: PAGE_DESCRIPTION,
  path: "/products",
  keywords: [
    "Industrial Heat Exchanger Products",
    "Shell and Tube Heat Exchanger",
    "Plate Heat Exchanger",
    "Air Cooled Heat Exchanger",
    "Finned Tube Heat Exchanger",
    "U-Tube Bundle",
    "Double Pipe Heat Exchanger",
    "Spiral Heat Exchanger",
  ],
});

export default function ProductsOverviewPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
  ]);
  const collectionJsonLd = buildWebPageJsonLd({
    name: "Industrial Heat Exchanger Products",
    description: PAGE_DESCRIPTION,
    path: "/products",
    type: "CollectionPage",
  });

  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={collectionJsonLd} />

      {/* Header Banner */}
      <section className="bg-navy py-14 sm:py-18 text-white relative overflow-hidden border-b border-steel/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <BannerBreadcrumb items={[{ label: "Products" }]} />

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

          {/* Engineering & Quality Cross-Links */}
          <div className="mt-14 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-2xl">
              <h2 className="text-h3 font-bold text-[#0A1C33]">
                Compare Thermal Architectures &amp; Engineering Standards
              </h2>
              <p className="text-sm sm:text-base text-slate-700 mb-0">
                Review our ASME/TEMA engineering workflow, inspection &amp; test plans (ITP), or read our technical comparison guides before issuing an RFQ.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/resources/shell-and-tube-vs-plate"
                className="btn-outline-navy text-sm font-semibold px-5 py-2.5 rounded-full inline-flex items-center gap-1.5"
              >
                <span>Shell &amp; Tube vs Plate Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/engineering-solutions"
                className="btn-copper text-sm font-bold px-5 py-2.5 rounded-full inline-flex items-center gap-1.5"
              >
                <span>Engineering Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
