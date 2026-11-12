import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Award,
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
import { BannerBreadcrumb } from "@/components/ui/BannerBreadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildPageMetadata,
  buildBreadcrumbJsonLd,
  buildProductJsonLd,
} from "@/lib/seo";

function SectionTitle({
  icon: Icon,
  title,
  rightContent,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  rightContent?: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-3 mb-5">
      <h2 className="text-h3 font-bold text-[#0A1C33] flex items-center gap-2.5">
        <span className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#C2410C] shrink-0">
          <Icon className="w-4 h-4" />
        </span>
        <span>{title}</span>
      </h2>
      {rightContent}
    </div>
  );
}

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
      robots: { index: false, follow: false },
    };
  }

  const description = `${product.shortDescription} ${product.tagline}.`.slice(0, 160);

  return buildPageMetadata({
    title: product.name,
    description,
    path: `/products/${product.slug}`,
    image: product.image,
    imageAlt: `${product.name} — ${product.schematicType}`,
    keywords: [
      product.name,
      `${product.name} supplier India`,
      product.schematicType,
      "Industrial Heat Exchanger",
    ],
  });
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

  const hasSpecNotes = product.indicativeSpecs.some((spec) =>
    Boolean(spec.notes)
  );

  const sectionLinks = [
    { href: "#overview", label: "Overview" },
    { href: "#working-principle", label: "Working Principle" },
    { href: "#features", label: "Key Features" },
    { href: "#materials", label: "Metallurgy" },
    { href: "#specifications", label: "Technical Parameters" },
    { href: "#standards", label: "Standards" },
    ...(relevantIndustries.length > 0
      ? [{ href: "#sectors", label: "Industry Sectors" }]
      : []),
  ];

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: product.name, path: `/products/${product.slug}` },
  ]);
  const productJsonLd = buildProductJsonLd(product);

  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={productJsonLd} />

      {/* Product Header & Breadcrumb */}
      <section className="bg-navy py-12 sm:py-16 text-white relative overflow-hidden border-b border-steel/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <BannerBreadcrumb
              items={[
                { label: "Products", href: "/products" },
                { label: product.name },
              ]}
            />

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold tracking-wider uppercase bg-copper/20 text-copper-light border border-copper/40 mb-3">
              {product.schematicType}
            </span>

            <h1 className="text-h1 font-bold text-white leading-tight font-sans">
              {product.name}
            </h1>

            <p className="mt-3 text-base sm:text-lg text-[#FA8540] font-medium">
              {product.tagline}
            </p>

            <p className="mt-4 text-base text-slate-200 leading-relaxed max-w-3xl">
              {product.shortDescription}
            </p>

            {/* Quick Highlights Pills */}
            {product.highlights && product.highlights.length > 0 && (
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {product.highlights.map((h, hIdx) => (
                  <span
                    key={hIdx}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold bg-white/10 text-white border border-white/20 px-3 py-1 rounded-full"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52B72A]" />
                    {h}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href={`/request-a-quote?category=${encodeURIComponent(product.name)}`}
                className="btn-copper text-sm font-bold px-6 py-3 rounded-full shadow flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Request a Quote for this Unit</span>
              </Link>

              <Link
                href="#specifications"
                className="btn-outline-white text-sm font-bold px-6 py-3 rounded-full"
              >
                <span>Jump to Specifications</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Section Anchor Bar */}
      <div className="bg-[#F6F9FC] border-b border-slate-200/80">
        <Container>
          <nav
            aria-label="Product sections"
            className="flex items-center gap-2 py-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 mr-1 shrink-0">
              On this page:
            </span>
            {sectionLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-[#0A1C33] bg-white border border-slate-200/90 hover:border-[#F36C21] hover:text-[#C2410C] whitespace-nowrap shrink-0 transition-colors shadow-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>

      {/* Main Details Body */}
      <section className="py-12 sm:py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Technical Schematic / Product Image Showcase */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 border-b border-slate-200/80 pb-3 mb-4">
                  <h2 className="text-h3 font-bold text-[#0A1C33]">
                    Equipment Layout &amp; Configuration
                  </h2>
                  {product.categoryTag && (
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C2410C] bg-orange-50 border border-orange-200/80 px-3 py-1 rounded-full self-start sm:self-auto">
                      {product.categoryTag}
                    </span>
                  )}
                </div>

                <div className="bg-[#F6F9FC] rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm">
                  <div className="relative aspect-[16/10] bg-dot-pattern p-6 sm:p-8 flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={`${product.name} (${product.schematicType}) engineering layout`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      className="object-contain p-4 sm:p-6 drop-shadow-md"
                      priority
                    />
                  </div>
                  <div className="px-4 sm:px-5 py-3.5 bg-white border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-slate-700">
                    <span className="font-semibold text-[#0A1C33]">
                      Architecture:{" "}
                      <span className="font-normal text-slate-700">
                        {product.schematicType}
                      </span>
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-slate-600">
                      Custom-engineered to project PFD &amp; HMB
                    </span>
                  </div>
                </div>
              </div>

              {/* Overview & Engineering Context */}
              <div id="overview" className="scroll-mt-24">
                <SectionTitle icon={Cpu} title="Engineering Overview" />
                <p className="text-base text-slate-700 leading-relaxed mb-0">
                  {product.overview}
                </p>
              </div>

              {/* Working Principle */}
              <div id="working-principle" className="scroll-mt-24">
                <SectionTitle
                  icon={Flame}
                  title="Thermodynamics & Working Principle"
                />
                <div className="text-base text-slate-700 leading-relaxed bg-[#F6F9FC] p-5 sm:p-6 rounded-2xl border border-slate-200/90 border-l-4 border-l-[#0F4C81]">
                  {product.workingPrinciple}
                </div>
              </div>

              {/* Key Features & Advantages */}
              <div id="features" className="scroll-mt-24">
                <SectionTitle
                  icon={CheckCircle2}
                  title="Key Engineering Features & Mechanical Highlights"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {product.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 bg-[#F6F9FC] hover:bg-white rounded-xl border border-slate-200/80 hover:border-slate-300 transition-colors flex items-start gap-3 text-sm text-slate-700"
                    >
                      <span className="w-5 h-5 rounded-full bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#C2410C] shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </span>
                      <span className="leading-relaxed font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Material Options */}
              <div id="materials" className="scroll-mt-24">
                <SectionTitle
                  icon={Layers}
                  title="Available Metallurgy & Material Options"
                />
                <div className="space-y-4">
                  {product.materials.map((mat, idx) => (
                    <div
                      key={idx}
                      className="p-5 sm:p-6 rounded-2xl border border-slate-200/90 bg-white shadow-sm"
                    >
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="font-bold text-[#0A1C33] text-sm uppercase tracking-wider">
                          {mat.category}
                        </span>
                        <span className="text-xs font-medium text-slate-600">
                          {mat.options.length}{" "}
                          {mat.options.length === 1 ? "option" : "options"}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {mat.options.map((opt, oIdx) => (
                          <span
                            key={oIdx}
                            className="text-xs sm:text-sm bg-[#F6F9FC] border border-slate-200/90 text-slate-800 px-3 py-1.5 rounded-lg font-medium"
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
                <SectionTitle
                  icon={Ruler}
                  title="Indicative Technical Parameters"
                  rightContent={
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0F4C81] bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full">
                      Custom Sized Per Duty
                    </span>
                  }
                />
                <p className="text-sm sm:text-base text-slate-700 mb-4 leading-relaxed">
                  The values below represent typical operational benchmarks.
                  Equipment sizing is custom calculated to exact project process
                  conditions.
                </p>

                <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table
                      className={`tech-table ${
                        hasSpecNotes ? "min-w-[540px]" : "min-w-[400px]"
                      }`}
                    >
                      <thead>
                        <tr>
                          <th className={hasSpecNotes ? "w-[30%]" : "w-[42%]"}>
                            Parameter
                          </th>
                          <th className={hasSpecNotes ? "w-[36%]" : "w-[58%]"}>
                            Indicative Range / Values
                          </th>
                          {hasSpecNotes && (
                            <th className="w-[34%]">Engineering Notes</th>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {product.indicativeSpecs.map((spec, sIdx) => (
                          <tr key={sIdx}>
                            <td className="font-bold text-[#0A1C33]">
                              {spec.label}
                            </td>
                            <td className="font-semibold text-[#C2410C]">
                              {spec.indicativeValue}
                            </td>
                            {hasSpecNotes && (
                              <td className="text-sm text-slate-700">
                                {spec.notes || "—"}
                              </td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Disclaimer Note */}
                <div className="mt-4 p-4 sm:p-5 bg-[#F6F9FC] rounded-xl border border-slate-200/90 border-l-4 border-l-[#F36C21] text-sm text-slate-700 flex items-start gap-3 leading-relaxed">
                  <ShieldCheck className="w-4 h-4 text-[#C2410C] shrink-0 mt-1" />
                  <p className="mb-0 text-sm">
                    <strong className="text-[#0A1C33]">
                      Engineering Clarification:
                    </strong>{" "}
                    Design parameters are confirmed upon review of client
                    process flow diagrams (PFD), heat &amp; material balances
                    (HMB), and target pressure vessel codes.
                  </p>
                </div>
              </div>

              {/* Design Standards */}
              <div id="standards" className="scroll-mt-24">
                <SectionTitle
                  icon={Award}
                  title="Applicable International Standards & Codes"
                />
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                  {product.designStandards.map((std, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 p-4 rounded-xl bg-[#F6F9FC] border border-slate-200/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#C2410C] shrink-0 mt-1" />
                      <span className="font-medium text-slate-800 leading-relaxed">
                        {std}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Primary Sectors Serving This Product */}
              {relevantIndustries.length > 0 && (
                <div id="sectors" className="scroll-mt-24 pt-2">
                  <SectionTitle
                    icon={Factory}
                    title={`Key Industry Sectors for ${product.name}`}
                  />
                  <p className="text-sm sm:text-base text-slate-700 mb-4 leading-relaxed">
                    Explore how this heat exchanger architecture is deployed
                    across critical industry sectors:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {relevantIndustries.map((ind) => (
                      <Link
                        key={ind.id}
                        href={`/industries/${ind.slug}`}
                        className="p-4 sm:p-5 rounded-xl border border-slate-200/90 bg-[#F6F9FC] hover:border-[#F36C21] hover:bg-white hover:shadow-sm transition-all group flex items-start justify-between gap-3"
                      >
                        <div>
                          <span className="text-sm sm:text-base font-bold text-[#0A1C33] group-hover:text-[#C2410C] transition-colors block">
                            {ind.name}
                          </span>
                          <span className="text-xs text-slate-600 line-clamp-1 mt-1 block">
                            {ind.tagline}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#C2410C] group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
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
                <span className="text-[#FA8540] text-xs font-bold uppercase tracking-wider block mb-1">
                  Procurement &amp; Inquiries
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  Request a Quote for {product.name}
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed mb-5">
                  Have thermal duty parameters or technical drawings? Submit your
                  inquiry directly to our engineering coordination desk.
                </p>

                <Link
                  href={`/request-a-quote?category=${encodeURIComponent(product.name)}`}
                  className="btn-copper text-sm font-bold py-3 px-4 rounded-full w-full text-center flex items-center justify-center gap-2 shadow"
                >
                  <FileText className="w-4 h-4" />
                  <span>Configure RFQ Details</span>
                </Link>

                <ul className="mt-4 pt-4 border-t border-steel/40 text-xs sm:text-sm text-slate-200 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FA8540] shrink-0" />
                    <span>Fast technical evaluation (24–48 hours)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FA8540] shrink-0" />
                    <span>Engineering drawing review (PDF, DWG)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FA8540] shrink-0" />
                    <span>Vadodara, Gujarat supply coordination</span>
                  </li>
                </ul>
              </div>

              {/* Typical Applications Card */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm">
                <h3 className="text-sm font-bold text-[#0A1C33] uppercase tracking-wider border-b border-slate-200/80 pb-2.5 mb-4">
                  Typical Industrial Applications
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  {product.applications.map((app, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C2410C] shrink-0 mt-2" />
                      <span className="leading-relaxed font-medium">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Products Card */}
              {relatedProducts.length > 0 && (
                <div className="bg-[#F6F9FC] border border-slate-200/90 rounded-2xl p-6">
                  <h3 className="text-sm font-bold text-[#0A1C33] uppercase tracking-wider border-b border-slate-200/80 pb-2.5 mb-3.5">
                    Alternative Equipment
                  </h3>
                  <div className="space-y-3">
                    {relatedProducts.map((rel) => (
                      <Link
                        key={rel.id}
                        href={`/products/${rel.slug}`}
                        className="p-3.5 bg-white rounded-xl border border-slate-200/80 hover:border-[#F36C21] hover:shadow-sm transition-all group flex items-start justify-between gap-2.5"
                      >
                        <div>
                          <span className="text-sm font-bold text-[#0A1C33] group-hover:text-[#C2410C] transition-colors block">
                            {rel.name}
                          </span>
                          <span className="text-xs text-slate-600 line-clamp-1 mt-0.5 block">
                            {rel.tagline}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#C2410C] group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Engineering & QA Resources Links */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm space-y-3">
                <h3 className="text-sm font-bold text-[#0A1C33] uppercase tracking-wider border-b border-slate-200/80 pb-2.5 mb-2">
                  Engineering &amp; QA Reference
                </h3>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <Link
                      href="/engineering-solutions"
                      className="text-[#0F4C81] hover:text-[#C2410C] font-semibold flex items-center justify-between"
                    >
                      <span>Thermal Sizing &amp; ASME Alignment</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/quality-assurance"
                      className="text-[#0F4C81] hover:text-[#C2410C] font-semibold flex items-center justify-between"
                    >
                      <span>ITP &amp; Hydrotest Inspection Protocols</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resources/heat-exchanger-material-selection"
                      className="text-[#0F4C81] hover:text-[#C2410C] font-semibold flex items-center justify-between"
                    >
                      <span>Metallurgy Selection Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Back to Products */}
              <div className="text-center pt-1">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold text-[#0A1C33] bg-[#F6F9FC] border border-slate-200/90 hover:border-[#F36C21] hover:text-[#C2410C] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Products</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
