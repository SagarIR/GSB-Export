import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Layers,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BannerBreadcrumb } from "@/components/ui/BannerBreadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { IndustriesCatalogue } from "@/components/industries/IndustriesCatalogue";
import {
  buildPageMetadata,
  buildBreadcrumbJsonLd,
  buildWebPageJsonLd,
} from "@/lib/seo";

const PAGE_DESCRIPTION =
  "Heat exchanger solutions engineered for oil & gas, chemical, pharmaceutical, dairy, food, power generation, HVAC district cooling & wastewater treatment.";

export const metadata: Metadata = buildPageMetadata({
  title: "Industries & Process Applications",
  description: PAGE_DESCRIPTION,
  path: "/industries",
  keywords: [
    "Industrial Heat Exchanger Applications",
    "Oil and Gas Heat Exchangers",
    "Chemical Process Heat Exchangers",
    "Pharmaceutical Sanitary Heat Exchangers",
    "Power Generation Condensers",
  ],
});

export default function IndustriesPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
  ]);
  const collectionJsonLd = buildWebPageJsonLd({
    name: "Industries & Process Applications",
    description: PAGE_DESCRIPTION,
    path: "/industries",
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
            <BannerBreadcrumb items={[{ label: "Industries" }]} />

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold tracking-wider uppercase bg-copper/20 text-copper-light border border-copper/40 mb-4">
              Sector Engineering Solutions
            </span>

            <h1 className="text-h1 font-bold text-white leading-tight font-sans">
              Industries We Serve
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-3xl">
              Thermal heat-transfer equipment custom-engineered to exact process duties, chemical compatibility,
              high pressure containment, and international sanitary regulations.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-100">
              <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
                <ShieldCheck className="w-4 h-4 text-[#FA8540]" />
                <span>7 Mission-Critical Industrial Sectors</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
                <Award className="w-4 h-4 text-[#FA8540]" />
                <span>ASME, API, TEMA &amp; 3-A Sanitary Alignment</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
                <Layers className="w-4 h-4 text-[#FA8540]" />
                <span>High-Pressure &amp; Severe Service Metallurgy</span>
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
              Browse Sectors
            </span>
            <h2 className="text-h2 font-bold text-[#0A1C33]">
              Engineered Thermal Solutions for Global Process Plants
            </h2>
            <p className="mt-2.5 text-base text-slate-700 mb-0">
              Select an industrial sector below to review operating parameters, process exchanger duties,
              and metallurgy recommendations, or request an application-specific RFQ.
            </p>
          </div>

          {/* Interactive Industries Catalogue */}
          <IndustriesCatalogue />

          {/* Application Benchmarks & Technical Resources Cross-Links */}
          <div className="mt-14 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-2xl">
              <h2 className="text-h3 font-bold text-[#0A1C33]">
                Explore Technical Benchmarks &amp; Application Guides
              </h2>
              <p className="text-sm sm:text-base text-slate-700 mb-0">
                Inspect illustrative process applications across refining, dairy, and wastewater, or review our sector-specific thermal engineering articles.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/projects"
                className="btn-outline-navy text-sm font-semibold px-5 py-2.5 rounded-full inline-flex items-center gap-1.5"
              >
                <span>Projects &amp; Applications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/resources/heat-exchanger-applications-sectors"
                className="btn-copper text-sm font-bold px-5 py-2.5 rounded-full inline-flex items-center gap-1.5"
              >
                <span>Sector Application Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
