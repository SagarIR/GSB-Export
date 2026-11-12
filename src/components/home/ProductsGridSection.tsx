"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Cpu } from "lucide-react";
import { PRODUCTS } from "@/content/products";
import { ProductCard } from "@/components/products/ProductCard";

export function ProductsGridSection() {
  const [filterCategory, setFilterCategory] = useState<
    "ALL" | "TUBULAR" | "AIR_COOLED" | "PLATE_SPECIALTY"
  >("ALL");

  const filteredProducts = PRODUCTS.filter((p) => {
    if (filterCategory === "TUBULAR") {
      return (
        p.slug === "shell-and-tube" ||
        p.slug === "u-tube-bundle" ||
        p.slug === "double-pipe"
      );
    }
    if (filterCategory === "AIR_COOLED") {
      return p.slug === "air-cooled" || p.slug === "finned-tube";
    }
    if (filterCategory === "PLATE_SPECIALTY") {
      return p.slug === "plate-heat-exchanger" || p.slug === "spiral";
    }
    return true;
  });

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C2410C] bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/80 inline-block">
              Industrial Equipment Range
            </span>
            <h2 className="text-h2 font-bold font-sans text-[#0A1C33] leading-[1.18]">
              Find the Heat Exchanger Systems <br />
              <span className="text-[#D9550D] font-bold">
                Engineered for Your Process.
              </span>
            </h2>
            <p className="text-base text-slate-700 leading-relaxed font-sans">
              Precision-engineered heat transfer equipment custom-sized to process
              conditions, fluid chemistry, and international pressure codes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#0A1C33] hover:text-[#C2410C] transition-colors py-2 group"
            >
              <span>View full technical catalog</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-3 border-b border-slate-200/80">
          <button
            type="button"
            onClick={() => setFilterCategory("ALL")}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all ${
              filterCategory === "ALL"
                ? "bg-[#0A1C33] text-white shadow-sm"
                : "bg-slate-100 text-slate-800 hover:bg-slate-200"
            }`}
          >
            All Products ({PRODUCTS.length})
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory("TUBULAR")}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all ${
              filterCategory === "TUBULAR"
                ? "bg-[#0A1C33] text-white shadow-sm"
                : "bg-slate-100 text-slate-800 hover:bg-slate-200"
            }`}
          >
            Tubular &amp; Bundles
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory("AIR_COOLED")}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all ${
              filterCategory === "AIR_COOLED"
                ? "bg-[#0A1C33] text-white shadow-sm"
                : "bg-slate-100 text-slate-800 hover:bg-slate-200"
            }`}
          >
            Air-Cooled &amp; Finned Tube
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory("PLATE_SPECIALTY")}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all ${
              filterCategory === "PLATE_SPECIALTY"
                ? "bg-[#0A1C33] text-white shadow-sm"
                : "bg-slate-100 text-slate-800 hover:bg-slate-200"
            }`}
          >
            Plate &amp; Specialty Spiral
          </button>
        </div>

        {/* Product Cards Grid - 4 Columns on Large Screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((prod, idx) => (
            <ProductCard key={prod.id} product={prod} index={idx} />
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-50/80 via-slate-50 to-orange-50/60 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0A1C33] text-white flex items-center justify-center shrink-0 shadow-sm">
              <Cpu className="w-6 h-6 text-[#F36C21]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-sans text-[#0A1C33] mb-1">
                Need customized thermal sizing for your operating conditions?
              </h3>
              <p className="text-sm sm:text-base text-slate-700 mb-0">
                Our thermal engineering team verifies duty, temperatures, and
                metallurgy to ASME Section VIII and TEMA standards within 24
                hours.
              </p>
            </div>
          </div>

          <Link
            href="/request-a-quote"
            className="btn-brand-orange text-sm sm:text-base font-semibold tracking-wide px-7 py-3 rounded-full whitespace-nowrap shadow-sm hover:shadow-md shrink-0"
          >
            <span>Request Technical Sizing</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
