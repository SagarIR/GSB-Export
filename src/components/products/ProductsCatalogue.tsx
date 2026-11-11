"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Filter, ArrowRight } from "lucide-react";
import { Product, PRODUCTS } from "@/content/products";
import { ProductCard } from "@/components/products/ProductCard";

type FilterTab = "ALL" | "TUBULAR" | "AIR_COOLED" | "PLATE_SPECIALTY";

interface FilterOption {
  key: FilterTab;
  label: string;
  count: number;
}

export function ProductsCatalogue() {
  const [activeTab, setActiveTab] = useState<FilterTab>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filterOptions: FilterOption[] = [
    { key: "ALL", label: "All Equipment", count: PRODUCTS.length },
    {
      key: "TUBULAR",
      label: "Tubular & Bundles",
      count: PRODUCTS.filter(
        (p) =>
          p.slug === "shell-and-tube" ||
          p.slug === "u-tube-bundle" ||
          p.slug === "double-pipe"
      ).length,
    },
    {
      key: "AIR_COOLED",
      label: "Air-Cooled & Finned Tube",
      count: PRODUCTS.filter(
        (p) => p.slug === "air-cooled" || p.slug === "finned-tube"
      ).length,
    },
    {
      key: "PLATE_SPECIALTY",
      label: "Plate & Specialty Spiral",
      count: PRODUCTS.filter(
        (p) => p.slug === "plate-heat-exchanger" || p.slug === "spiral"
      ).length,
    },
  ];

  const filteredProducts = PRODUCTS.filter((product) => {
    // 1. Tab filter
    if (activeTab === "TUBULAR") {
      const isTubular =
        product.slug === "shell-and-tube" ||
        product.slug === "u-tube-bundle" ||
        product.slug === "double-pipe";
      if (!isTubular) return false;
    } else if (activeTab === "AIR_COOLED") {
      const isAirCooled =
        product.slug === "air-cooled" || product.slug === "finned-tube";
      if (!isAirCooled) return false;
    } else if (activeTab === "PLATE_SPECIALTY") {
      const isPlate =
        product.slug === "plate-heat-exchanger" || product.slug === "spiral";
      if (!isPlate) return false;
    }

    // 2. Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchName = product.name.toLowerCase().includes(q);
      const matchTag = product.categoryTag?.toLowerCase().includes(q);
      const matchDesc = product.shortDescription.toLowerCase().includes(q);
      const matchOverview = product.overview.toLowerCase().includes(q);
      return matchName || matchTag || matchDesc || matchOverview;
    }

    return true;
  });

  return (
    <div>
      {/* Controls Bar: Filter Tabs & Search */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200/80">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              type="button"
              onClick={() => setActiveTab(opt.key)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                activeTab === opt.key
                  ? "bg-[#0A1C33] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <span>{opt.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  activeTab === opt.key
                    ? "bg-white/20 text-white"
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                {opt.count}
              </span>
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search equipment or code..."
            className="w-full pl-10 pr-4 py-2 text-xs bg-white border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#F36C21] focus:border-transparent text-slate-800 placeholder-slate-400 shadow-2xs"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Product Cards Grid - 4 Columns */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300 p-8">
          <p className="text-sm font-semibold text-slate-700 mb-2">
            No equipment matching &quot;{searchQuery}&quot; in this category.
          </p>
          <p className="text-xs text-slate-500 mb-6">
            Try clearing the search query or selecting &quot;All Equipment&quot;.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveTab("ALL");
              setSearchQuery("");
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-[#0A1C33] hover:bg-[#F36C21] transition-colors"
          >
            <span>Reset Catalogue Filters</span>
          </button>
        </div>
      )}
    </div>
  );
}

