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
  HelpCircle,
  CheckCircle2,
} from "lucide-react";
import { PRODUCTS, getProductBySlug } from "@/content/products";
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
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | Industrial Heat Exchanger Solutions`,
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
    product.relatedSlugs.includes(p.slug)
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

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              {product.name}
            </h1>

            <p className="mt-3 text-base sm:text-lg text-copper-light font-medium">
              {product.tagline}
            </p>

            <p className="mt-4 text-sm sm:text-base text-silver leading-relaxed max-w-3xl">
              {product.shortDescription}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href={`/request-a-quote?category=${encodeURIComponent(product.name)}`}
                className="btn-copper text-xs font-bold uppercase tracking-wider px-6 py-3 rounded shadow flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Request a Quote for this Product</span>
              </Link>

              <Link
                href="#specifications"
                className="btn-outline-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded"
              >
                <span>Jump to Specifications</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Details Body */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-14">
              {/* Technical Schematic Illustration */}
              <div>
                <h2 className="text-lg font-bold text-navy border-b border-silver/40 pb-2.5 mb-4">
                  Engineering Schematic &amp; Component Layout
                </h2>
                <div className="relative aspect-[16/10] bg-offwhite rounded-xl overflow-hidden border border-silver/70 shadow-sm p-4">
                  <Image
                    src={product.image}
                    alt={`${product.name} Technical Schematic`}
                    fill
                    className="object-contain p-2"
                    priority
                  />
                </div>
              </div>

              {/* Working Principle */}
              <div>
                <h2 className="text-xl font-bold text-navy border-b border-silver/40 pb-2.5 mb-4 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-copper" />
                  <span>Thermodynamics &amp; Working Principle</span>
                </h2>
                <p className="text-sm sm:text-base text-graphite/85 leading-relaxed bg-offwhite/60 p-5 rounded-xl border border-silver/50">
                  {product.workingPrinciple}
                </p>
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
                      className="p-3.5 bg-offwhite rounded-lg border border-silver/50 flex items-start gap-2.5 text-xs text-graphite"
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
                      className="p-4 rounded-xl border border-silver/60 bg-white shadow-sm"
                    >
                      <span className="font-bold text-navy text-xs uppercase tracking-wider block mb-2">
                        {mat.category}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {mat.options.map((opt, oIdx) => (
                          <span
                            key={oIdx}
                            className="text-xs bg-offwhite border border-silver/70 text-graphite px-2.5 py-1 rounded font-medium"
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
                  The values below represent typical operational benchmarks. Equipment sizing is custom engineered to exact project process conditions.
                </p>

                <div className="overflow-x-auto border border-silver/60 rounded-xl overflow-hidden shadow-sm">
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
                <div className="mt-3 p-3 bg-offwhite rounded-lg border border-silver/50 text-[11px] text-graphite/80 flex items-start gap-2">
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
                <ul className="space-y-2 text-xs sm:text-sm text-graphite">
                  {product.designStandards.map((std, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                      <span>{std}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Sticky Sidebar: Applications & Quotation CTA */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              {/* Quick RFQ Box */}
              <div className="bg-navy rounded-xl p-6 text-white border border-steel/60 shadow-industrial-lg">
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
                  className="btn-copper text-xs font-bold uppercase tracking-wider py-3 px-4 rounded w-full text-center flex items-center justify-center gap-1.5 shadow"
                >
                  <FileText className="w-4 h-4" />
                  <span>Configure RFQ Details</span>
                </Link>

                <div className="mt-4 pt-3 border-t border-steel/40 text-[11px] text-silver/80 space-y-1">
                  <p>• Fast technical evaluation (1-2 days)</p>
                  <p>• Drawing uploads supported (PDF, DWG)</p>
                  <p>• Vadodara, India supply coordination</p>
                </div>
              </div>

              {/* Typical Applications Card */}
              <div className="bg-white border border-silver/70 rounded-xl p-6 shadow-sm">
                <h3 className="text-sm font-bold text-navy uppercase tracking-wider border-b border-silver/40 pb-2.5 mb-4">
                  Typical Industrial Applications
                </h3>
                <ul className="space-y-2 text-xs text-graphite/85">
                  {product.applications.map((app, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-copper shrink-0 mt-1.5" />
                      <span className="leading-relaxed">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Products Card */}
              {relatedProducts.length > 0 && (
                <div className="bg-offwhite border border-silver/60 rounded-xl p-6">
                  <h3 className="text-xs font-bold text-navy uppercase tracking-wider border-b border-silver/40 pb-2 mb-3">
                    Alternative Equipment
                  </h3>
                  <div className="space-y-3">
                    {relatedProducts.map((rel) => (
                      <Link
                        key={rel.id}
                        href={`/products/${rel.slug}`}
                        className="block p-2.5 bg-white rounded border border-silver/50 hover:border-steel/60 transition-colors group"
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
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-navy text-white">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Need a Custom Configuration or Sizing Review?
              </h3>
              <p className="text-xs sm:text-sm text-silver max-w-xl">
                Submit your process stream data for thermal sizing calculation and quotation.
              </p>
            </div>
            <Link
              href={`/request-a-quote?category=${encodeURIComponent(product.name)}`}
              className="btn-copper text-xs font-bold uppercase tracking-wider px-6 py-3 rounded shrink-0"
            >
              Request a Quotation
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
