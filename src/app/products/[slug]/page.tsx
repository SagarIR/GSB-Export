import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  FileText,
  ShieldCheck,
  Ruler,
  Layers,
  Flame,
  CheckCircle2,
  Factory,
  Cpu,
} from "lucide-react";
import { PRODUCTS, getProductBySlug } from "@/content/products";
import { INDUSTRIES } from "@/content/industries";
import { Container } from "@/components/ui/Container";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return {
      title: "Product Not Found | GSB Export",
    };
  }

  return {
    title: `${product.name} | Industrial Heat Exchanger Solutions | GSB Export`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | GSB Export`,
      description: product.shortDescription,
      type: "website",
    },
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  // Related products
  const relatedProducts = PRODUCTS.filter((p) =>
    product.relatedSlugs?.includes(p.slug)
  );

  // Industries that use this product
  const relevantIndustries = INDUSTRIES.filter((ind) =>
    ind.recommendedExchangers.some((rec) => rec.slug === product.slug)
  );

  return (
    <div className="bg-white">
      {/* Product Header & Breadcrumb */}
      <section className="bg-navy py-12 sm:py-16 text-white relative border-b border-steel/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-silver mb-4">
              <Link href="/" className="hover:text-copper transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/products" className="hover:text-copper transition-colors">
                Products
              </Link>
              <span>/</span>
              <span className="text-copper font-medium">{product.name}</span>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold tracking-widest uppercase bg-copper/20 text-copper-light border border-copper/40 mb-3">
              {product.schematicType}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-sans">
              {product.name}
            </h1>

            <p className="mt-3 text-base sm:text-lg text-copper-light font-medium">
              {product.tagline}
            </p>

            <p className="mt-4 text-sm sm:text-base text-silver leading-relaxed max-w-3xl">
              {product.shortDescription}
            </p>

            {/* Quick Highlights Pills */}
            {product.highlights && product.highlights.length > 0 && (
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {product.highlights.map((h, hIdx) => (
                  <span
                    key={hIdx}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/10 text-white border border-white/15 px-3 py-1 rounded-full"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52B72A]" />
                    {h}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href={`/request-a-quote?category=${encodeURIComponent(product.name)}`}
                className="btn-copper text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Request a Quote for this Unit</span>
              </Link>

              <Link
                href="#specifications"
                className="btn-outline-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full"
              >
                <span>Jump to Specifications</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Details Body */}
      <section className="py-14 sm:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Technical Schematic / Product Image Showcase */}
              <div>
                <div className="flex items-center justify-between border-b border-silver/40 pb-2.5 mb-4">
                  <h2 className="text-lg font-bold text-navy">
                    Equipment Layout &amp; Configuration
                  </h2>
                  <span className="text-xs font-mono font-bold text-copper">
                    {product.categoryTag}
                  </span>
                </div>
                <div className="relative aspect-[16/10] bg-[#F7F9FC] rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm p-6 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={`${product.name} Technical Visual`}
                    fill
                    className="object-contain p-4 drop-shadow-md"
                    priority
                  />
                </div>
              </div>

              {/* Overview & Engineering Context */}
              <div>
                <h2 className="text-xl font-bold text-navy border-b border-silver/40 pb-2.5 mb-3 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-copper" />
                  <span>Engineering Overview</span>
                </h2>
                <p className="text-sm sm:text-base text-graphite/90 leading-relaxed">
                  {product.overview}
                </p>
              </div>

              {/* Working Principle */}
              <div>
                <h2 className="text-xl font-bold text-navy border-b border-silver/40 pb-2.5 mb-3 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-copper" />
                  <span>Thermodynamics &amp; Working Principle</span>
                </h2>
                <div className="text-sm sm:text-base text-graphite/85 leading-relaxed bg-offwhite p-5 sm:p-6 rounded-2xl border border-silver/60">
                  {product.workingPrinciple}
                </div>
              </div>

              {/* Key Features & Advantages */}
              <div>
                <h2 className="text-xl font-bold text-navy border-b border-silver/40 pb-2.5 mb-4">
                  Key Engineering Features &amp; Mechanical Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {product.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-offwhite rounded-xl border border-silver/60 flex items-start gap-2.5 text-xs text-graphite"
                    >
                      <Check className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Material Options */}
              <div>
                <h2 className="text-xl font-bold text-navy border-b border-silver/40 pb-2.5 mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-copper" />
                  <span>Available Metallurgy &amp; Material Options</span>
                </h2>
                <div className="space-y-4 mt-4">
                  {product.materials.map((mat, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl border border-silver/60 bg-white shadow-2xs"
                    >
                      <span className="font-bold text-navy text-xs uppercase tracking-wider block mb-2.5">
                        {mat.category}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {mat.options.map((opt, oIdx) => (
                          <span
                            key={oIdx}
                            className="text-xs bg-offwhite border border-silver/70 text-slate-700 px-3 py-1 rounded-full font-medium"
                          >
                            {opt}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Indicative Technical Specifications Table */}
              <div id="specifications" className="scroll-mt-24">
                <h2 className="text-xl font-bold text-navy border-b border-silver/40 pb-2.5 mb-2 flex items-center gap-2">
                  <Ruler className="w-5 h-5 text-copper" />
                  <span>Indicative Technical Parameters</span>
                </h2>
                <p className="text-xs text-graphite/70 mb-4">
                  The values below represent typical operational benchmarks. Equipment sizing is custom calculated to exact project process conditions.
                </p>

                <div className="overflow-x-auto border border-silver/60 rounded-xl overflow-hidden shadow-2xs">
                  <table className="tech-table">
                    <thead>
                      <tr>
                        <th className="w-1/3">Parameter</th>
                        <th className="w-1/3">Indicative Range / Values</th>
                        <th>Engineering Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.indicativeSpecs.map((spec, sIdx) => (
                        <tr key={sIdx} className="hover:bg-offwhite/50">
                          <td className="font-bold text-navy">{spec.label}</td>
                          <td className="font-semibold text-copper-dark">
                            {spec.indicativeValue}
                          </td>
                          <td className="text-xs text-graphite/70">{spec.notes || "—"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Disclaimer Note */}
                <div className="mt-3 p-3.5 bg-offwhite rounded-xl border border-silver/50 text-[11px] text-graphite/80 flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                  <p>
                    <strong>Engineering Clarification:</strong> Design parameters are confirmed upon review of client process flow diagrams (PFD), heat &amp; material balances (HMB), and target pressure vessel codes.
                  </p>
                </div>
              </div>

              {/* Design Standards */}
              <div>
                <h2 className="text-xl font-bold text-navy border-b border-silver/40 pb-2.5 mb-4">
                  Applicable International Standards &amp; Codes
                </h2>
                <ul className="space-y-2.5 text-xs sm:text-sm text-graphite">
                  {product.designStandards.map((std, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                      <span className="font-medium text-slate-800">{std}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Primary Sectors Serving This Product */}
              {relevantIndustries.length > 0 && (
                <div className="pt-4 border-t border-silver/40">
                  <h2 className="text-xl font-bold text-navy mb-2 flex items-center gap-2">
                    <Factory className="w-5 h-5 text-copper" />
                    <span>Key Industry Sectors for {product.name}</span>
                  </h2>
                  <p className="text-xs text-slate-600 mb-4">
                    Explore how this heat exchanger architecture is deployed across critical industry sectors:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {relevantIndustries.map((ind) => (
                      <Link
                        key={ind.id}
                        href={`/industries/${ind.slug}`}
                        className="p-3.5 rounded-xl border border-slate-200/90 bg-offwhite hover:border-[#F36C21] hover:bg-white transition-all group flex items-start justify-between gap-3"
                      >
                        <div>
                          <span className="text-xs font-bold text-navy group-hover:text-[#F36C21] transition-colors block">
                            {ind.name}
                          </span>
                          <span className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            {ind.tagline}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#F36C21] group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sticky Sidebar: Applications & Quotation CTA */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              {/* Quick RFQ Box */}
              <div className="bg-navy rounded-2xl p-6 text-white border border-steel/60 shadow-industrial-lg">
                <span className="text-copper text-xs font-bold uppercase tracking-wider block mb-1">
                  Procurement &amp; Inquiries
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  Request a Quote for {product.name}
                </h3>
                <p className="text-xs text-silver leading-relaxed mb-5">
                  Have thermal duty parameters or technical drawings? Submit your inquiry directly to our engineering coordination desk.
                </p>

                <Link
                  href={`/request-a-quote?category=${encodeURIComponent(product.name)}`}
                  className="btn-copper text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-full w-full text-center flex items-center justify-center gap-1.5 shadow"
                >
                  <FileText className="w-4 h-4" />
                  <span>Configure RFQ Details</span>
                </Link>

                <div className="mt-4 pt-3 border-t border-steel/40 text-[11px] text-silver/80 space-y-1.5">
                  <p>• Fast technical evaluation (24-48 hours)</p>
                  <p>• Engineering drawing review (PDF, DWG)</p>
                  <p>• Vadodara, Gujarat supply coordination</p>
                </div>
              </div>

              {/* Typical Applications Card */}
              <div className="bg-white border border-silver/70 rounded-2xl p-6 shadow-2xs">
                <h3 className="text-sm font-bold text-navy uppercase tracking-wider border-b border-silver/40 pb-2.5 mb-4">
                  Typical Industrial Applications
                </h3>
                <ul className="space-y-2.5 text-xs text-graphite/85">
                  {product.applications.map((app, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-copper shrink-0 mt-1.5" />
                      <span className="leading-relaxed font-medium">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Products Card */}
              {relatedProducts.length > 0 && (
                <div className="bg-offwhite border border-silver/60 rounded-2xl p-6">
                  <h3 className="text-xs font-bold text-navy uppercase tracking-wider border-b border-silver/40 pb-2 mb-3">
                    Alternative Equipment
                  </h3>
                  <div className="space-y-3">
                    {relatedProducts.map((rel) => (
                      <Link
                        key={rel.id}
                        href={`/products/${rel.slug}`}
                        className="block p-3 bg-white rounded-xl border border-silver/50 hover:border-steel/60 transition-colors group"
                      >
                        <span className="text-xs font-bold text-navy group-hover:text-copper transition-colors block">
                          {rel.name}
                        </span>
                        <span className="text-[11px] text-graphite/70 line-clamp-1 mt-0.5 block">
                          {rel.tagline}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to Catalogue */}
              <div className="text-center pt-2">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-copper transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Full Products Catalogue</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
