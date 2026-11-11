import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, FileText, ShieldCheck, Ruler, Layers } from "lucide-react";
import { PRODUCTS } from "@/content/products";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/products/ProductCard";

export const metadata: Metadata = {
  title: "Industrial Heat Exchanger Products Catalogue | GSB Export",
  description:
    "Explore our complete range of industrial heat exchangers: Shell and Tube, Plate Heat Exchangers, Air-Cooled Fin-Fan Coolers, Double Pipe Hairpin, and Spiral Exchangers.",
};

export default function ProductsOverviewPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy py-16 sm:py-20 text-white relative overflow-hidden border-b border-steel/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold tracking-widest uppercase bg-copper/20 text-copper-light border border-copper/40 mb-4">
              Equipment Range &amp; Catalogue
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Industrial Heat Exchangers
            </h1>
            <p className="mt-4 text-base sm:text-lg text-silver leading-relaxed">
              Precision thermal transfer equipment engineered for demanding petrochemical, chemical, food, pharmaceutical, and energy processing.
            </p>
          </div>
        </Container>
      </section>

      {/* Catalogue Grid */}
      <section className="py-16 sm:py-20 bg-offwhite">
        <Container>
          <div className="max-w-2xl mb-10">
            <SectionHeading
              badge="Equipment Range &amp; Architectures"
              badgeVariant="copper"
              title="Tailored Solutions for Every Thermal Duty"
              subtitle="From extreme high pressures and temperatures to severe slurries and tight 1°C temperature approaches."
              className="mb-0"
            />
          </div>

          {/* Product Cards Grid - 4 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {PRODUCTS.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>

          <div className="border-t border-slate-200/80 pt-16 mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A1C33]">
              Engineering Dossiers &amp; In-Depth Specifications
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Detailed construction metallurgy, TEMA designations, operating parameters, and design codes for each architecture.
            </p>
          </div>

          <div className="space-y-12">
            {PRODUCTS.map((product, idx) => (
              <div
                key={product.id}
                id={product.slug}
                className="bg-white border border-silver/70 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-steel/60 transition-all p-6 sm:p-8 lg:p-10 scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Schematic Graphic */}
                  <div className="lg:col-span-5">
                    <div className="relative aspect-[16/10] bg-offwhite rounded-xl overflow-hidden border border-silver/60 p-4 mb-4">
                      <Image
                        src={product.image}
                        alt={`${product.name} Schematic Graphic`}
                        fill
                        className="object-contain p-2"
                      />
                      <div className="absolute top-3 left-3 bg-navy text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded">
                        Category 0{idx + 1}
                      </div>
                    </div>

                    {/* Quick Specs Badges */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-offwhite p-2.5 rounded border border-silver/50">
                        <span className="text-graphite/60 block text-[10px] uppercase">Operating Pressure</span>
                        <span className="font-semibold text-navy truncate block">
                          {product.indicativeSpecs[0]?.indicativeValue.split("(")[0]}
                        </span>
                      </div>
                      <div className="bg-offwhite p-2.5 rounded border border-silver/50">
                        <span className="text-graphite/60 block text-[10px] uppercase">Temperature Range</span>
                        <span className="font-semibold text-navy truncate block">
                          {product.indicativeSpecs[1]?.indicativeValue.split("(")[0]}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Product Narrative & Features */}
                  <div className="lg:col-span-7 space-y-5">
                    <div>
                      <span className="text-copper text-xs font-bold uppercase tracking-wider block mb-1">
                        {product.schematicType}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                        <Link href={`/products/${product.slug}`} className="hover:text-copper transition-colors">
                          {product.name}
                        </Link>
                      </h2>
                      <p className="text-sm text-copper-dark font-medium mt-1">
                        {product.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-graphite/85 leading-relaxed">
                      {product.overview}
                    </p>

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-navy mb-2">
                        Key Engineering Advantages:
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-graphite">
                        {product.keyFeatures.slice(0, 4).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-copper shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 border-t border-silver/40 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/products/${product.slug}`}
                        className="btn-navy text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded flex items-center gap-1.5"
                      >
                        <span>Full Technical Specifications</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <Link
                        href={`/request-a-quote?category=${encodeURIComponent(product.name)}`}
                        className="btn-copper text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded flex items-center gap-1.5"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Request a Quote</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Engineering Disclaimer */}
      <section className="py-10 bg-white border-b border-silver/50 text-xs text-graphite/80">
        <Container>
          <div className="p-4 bg-offwhite rounded-xl border border-silver/60 flex items-start gap-3 max-w-4xl mx-auto">
            <ShieldCheck className="w-5 h-5 text-copper shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Technical Sizing &amp; Compliance Notice:</strong> Operating parameters, materials, and dimensional envelope values displayed on this catalogue are indicative. Exact equipment configurations are calculated and certified based on project thermodynamic datasheets, client engineering standards, and target pressure vessel codes.
            </p>
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-navy text-white">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Need Guidance Selecting the Optimal Exchanger Architecture?
              </h3>
              <p className="text-xs sm:text-sm text-silver max-w-xl">
                Our thermal coordination engineers compare heat transfer coefficients, foot-print limitations, and fouling tendencies to recommend the right equipment.
              </p>
            </div>
            <Link
              href="/request-a-quote"
              className="btn-copper text-xs font-bold uppercase tracking-wider px-6 py-3 rounded shrink-0"
            >
              Consult an Engineer
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}

