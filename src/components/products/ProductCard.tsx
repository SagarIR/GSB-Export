import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Product } from "@/content/products";

export interface ProductCardProps {
  product: Product;
  index: number;
  className?: string;
}

export function ProductCard({ product, index, className = "" }: ProductCardProps) {
  const numberStr = String(index + 1).padStart(2, "0");

  // Extract 3 highlight bullet points
  const bullets =
    product.highlights && product.highlights.length >= 3
      ? product.highlights.slice(0, 3)
      : product.indicativeSpecs && product.indicativeSpecs.length >= 3
      ? product.indicativeSpecs
          .slice(0, 3)
          .map((s) => `${s.label}: ${s.indicativeValue.split("(")[0].trim()}`)
      : product.keyFeatures.slice(0, 3);

  const categoryTag =
    product.categoryTag || product.name.toUpperCase();

  return (
    <div
      className={`bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(10,28,51,0.12)] hover:border-slate-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5 h-full ${className}`}
    >
      {/* Top Visual Area with soft background and top-right number badge */}
      <div className="relative h-48 sm:h-52 bg-[#F3F5F8] p-4 flex items-center justify-center overflow-hidden border-b border-slate-100">
        {/* Number Badge */}
        <span className="absolute top-3.5 right-3.5 z-10 text-[11px] font-mono font-bold tracking-wider bg-[#0A1C33] text-white px-2.5 py-0.5 rounded-md shadow-xs">
          {numberStr}
        </span>

        {/* Product Image */}
        <Link
          href={`/products/${product.slug}`}
          className="relative w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
        >
          <Image
            src={product.image}
            alt={product.name}
            width={320}
            height={200}
            className="max-h-36 sm:max-h-40 w-auto object-contain drop-shadow-md"
          />
        </Link>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Subtitle / Category Label */}
          <p className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 line-clamp-1">
            {categoryTag}
          </p>

          {/* Product Title */}
          <h3 className="text-lg sm:text-[19px] font-bold font-sans text-[#0A1C33] group-hover:text-[#F36C21] transition-colors mb-2 leading-snug">
            <Link href={`/products/${product.slug}`}>{product.name}</Link>
          </h3>

          {/* Short Description */}
          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-4 line-clamp-2">
            {product.shortDescription}
          </p>

          {/* 3 Green Dot Highlights */}
          <ul className="space-y-2 mb-6">
            {bullets.map((bullet, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2.5 text-xs text-slate-700 font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#52B72A] shrink-0" />
                <span className="line-clamp-1">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 mt-auto">
          <Link
            href={`/products/${product.slug}`}
            className="text-xs sm:text-sm font-bold text-[#0A1C33] hover:text-[#F36C21] transition-colors py-1"
          >
            View Details
          </Link>

          <Link
            href={`/request-a-quote?category=${encodeURIComponent(product.name)}`}
            className="inline-flex items-center gap-1.5 px-4 sm:px-4.5 py-2 rounded-full text-xs font-semibold text-white bg-[#0A3D78] hover:bg-[#F36C21] active:scale-95 transition-all duration-200 shadow-sm hover:shadow"
          >
            <span>Get Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

