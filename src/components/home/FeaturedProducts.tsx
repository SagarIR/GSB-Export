import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, FileText } from "lucide-react";
import { PRODUCTS } from "@/content/products";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedProducts() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-silver/50">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            badge="Product Catalogue"
            badgeVariant="steel"
            title="Industrial Heat Exchanger Equipment Range"
            subtitle="Engineered heat transfer equipment tailored for petrochemical, chemical, dairy, power generation, and environmental processing."
            className="mb-0 max-w-2xl"
          />
          <div className="mt-4 md:mt-0">
            <Link
              href="/products"
              className="text-xs font-bold uppercase tracking-wider text-steel hover:text-copper flex items-center gap-1.5 transition-colors"
            >
              <span>View All 5 Categories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 5 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, idx) => (
            <div
              key={product.id}
              className={`bg-white border border-silver/70 rounded-xl overflow-hidden shadow-sm hover:shadow-industrial-lg hover:border-steel/60 transition-all duration-300 flex flex-col ${
                idx === 0 ? "lg:col-span-2 lg:flex-row" : ""
              }`}
            >
              {/* Product Visual */}
              <div
                className={`relative bg-offwhite border-b lg:border-b-0 lg:border-r border-silver/40 flex items-center justify-center p-6 ${
                  idx === 0 ? "lg:w-1/2 aspect-[16/10]" : "aspect-[16/10]"
                }`}
              >
                <div className="relative w-full h-full min-h-[180px]">
                  <Image
                    src={product.image}
                    alt={`${product.name} Schematic`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-navy/90 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-white/20">
                    Category {idx + 1}
                  </span>
                </div>
              </div>

              {/* Product Info & Specifications */}
              <div className={`p-6 flex-1 flex flex-col justify-between ${idx === 0 ? "lg:w-1/2" : ""}`}>
                <div>
                  <h3 className="text-lg font-bold text-navy hover:text-copper transition-colors">
                    <Link href={`/products/${product.slug}`}>{product.name}</Link>
                  </h3>
                  <p className="text-xs text-copper-dark font-medium mt-1 mb-3">
                    {product.tagline}
                  </p>
                  <p className="text-xs text-graphite/80 leading-relaxed mb-4 line-clamp-3">
                    {product.shortDescription}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-1.5 mb-5 text-xs text-graphite">
                    {product.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-copper shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Indicative Spec Pills */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] bg-offwhite/80 p-2.5 rounded border border-silver/50 mb-5">
                    <div>
                      <span className="text-graphite/60 block text-[10px] uppercase">Pressure</span>
                      <span className="font-semibold text-navy truncate block">
                        {product.indicativeSpecs[0]?.indicativeValue.split("(")[0]}
                      </span>
                    </div>
                    <div>
                      <span className="text-graphite/60 block text-[10px] uppercase">Temperature</span>
                      <span className="font-semibold text-navy truncate block">
                        {product.indicativeSpecs[1]?.indicativeValue.split("(")[0]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 border-t border-silver/40 flex items-center justify-between gap-3">
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-xs font-bold text-steel hover:text-copper flex items-center gap-1 transition-colors"
                  >
                    <span>Technical Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`/request-a-quote?category=${encodeURIComponent(product.name)}`}
                    className="btn-copper text-xs font-bold uppercase px-3 py-1.5 rounded flex items-center gap-1 shadow-sm"
                  >
                    <FileText className="w-3 h-3" />
                    <span>Quote</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

