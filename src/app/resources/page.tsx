import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { ARTICLES } from "@/content/resources";
import { Container } from "@/components/ui/Container";
import { BannerBreadcrumb } from "@/components/ui/BannerBreadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildPageMetadata,
  buildBreadcrumbJsonLd,
  buildWebPageJsonLd,
} from "@/lib/seo";

const PAGE_DESCRIPTION =
  "Technical heat exchanger engineering guides: LMTD calculation, Shell & Tube vs Plate comparisons, corrosion metallurgy selection, and preventive maintenance.";

export const metadata: Metadata = buildPageMetadata({
  title: "Technical Resources & Heat Exchanger Guides",
  description: PAGE_DESCRIPTION,
  path: "/resources",
  keywords: [
    "Heat Exchanger Engineering Guides",
    "LMTD Calculation Guide",
    "Shell and Tube vs Plate Heat Exchanger",
    "Heat Exchanger Material Selection",
  ],
});

export default function ResourcesPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Technical Resources", path: "/resources" },
  ]);
  const collectionJsonLd = buildWebPageJsonLd({
    name: "Technical Resources & Heat Exchanger Guides",
    description: PAGE_DESCRIPTION,
    path: "/resources",
    type: "CollectionPage",
  });

  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={collectionJsonLd} />

      {/* Header Banner */}
      <section className="bg-navy py-16 sm:py-20 text-white relative overflow-hidden border-b border-steel/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <BannerBreadcrumb items={[{ label: "Technical Resources" }]} />
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold tracking-wider uppercase bg-copper/20 text-copper-light border border-copper/40 mb-4">
              Engineering Knowledge Base
            </span>
            <h1 className="text-h1 font-bold text-white leading-tight">
              Technical Resources &amp; Guides
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed mb-0">
              In-depth engineering articles on thermodynamics, equipment comparison, metallurgy for harsh corrosive service, and heat exchanger maintenance best practices.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Articles Listing */}
      <section className="py-16 sm:py-20 bg-offwhite">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map((article) => (
              <article
                key={article.id}
                className="bg-white border border-silver/70 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-steel/60 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between text-xs text-slate-600 mb-3">
                    <span className="bg-steel/10 text-[#0F4C81] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded text-xs">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs">
                      <Clock className="w-3.5 h-3.5 text-[#C2410C]" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-navy group-hover:text-[#C2410C] transition-colors mb-3 line-clamp-2 leading-snug">
                    <Link href={`/resources/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-slate-700 leading-relaxed line-clamp-3 mb-4">
                    {article.summary}
                  </p>

                  <div className="bg-offwhite p-3.5 rounded-lg border border-silver/50 text-xs sm:text-sm text-slate-700">
                    <span className="font-bold text-navy block mb-1">Key Takeaway:</span>
                    <p className="text-slate-700 line-clamp-2 mb-0 text-xs sm:text-sm leading-relaxed">
                      {article.keyTakeaways[0]}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3.5 border-t border-silver/40 flex items-center justify-between">
                  <span className="text-xs text-slate-600">
                    {article.publishDate}
                  </span>
                  <Link
                    href={`/resources/${article.slug}`}
                    className="text-sm font-bold text-[#0F4C81] group-hover:text-[#C2410C] flex items-center gap-1 transition-colors"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

