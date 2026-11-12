"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Industry, INDUSTRIES } from "@/content/industries";
import { IndustryCard } from "@/components/industries/IndustryCard";

type IndustryFilterTab = "ALL" | "ENERGY" | "CHEMICAL_PHARMA" | "SANITARY_UTILITIES";

interface FilterOption {
  key: IndustryFilterTab;
  label: string;
  count: number;
}

export function IndustriesCatalogue() {
  const [activeTab, setActiveTab] = useState<IndustryFilterTab>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filterOptions: FilterOption[] = [
    { key: "ALL", label: "All Sectors", count: INDUSTRIES.length },
    {
      key: "ENERGY",
      label: "Hydrocarbon & Energy",
      count: INDUSTRIES.filter(
        (i) => i.slug === "oil-gas" || i.slug === "power-generation"
      ).length,
    },
    {
      key: "CHEMICAL_PHARMA",
      label: "Chemical & Pharma",
      count: INDUSTRIES.filter(
        (i) => i.slug === "chemical-petrochemical" || i.slug === "pharmaceutical"
      ).length,
    },
    {
      key: "SANITARY_UTILITIES",
      label: "Sanitary & Utilities",
      count: INDUSTRIES.filter(
        (i) =>
          i.slug === "food-beverage" ||
          i.slug === "hvac-refrigeration" ||
          i.slug === "water-wastewater"
      ).length,
    },
  ];

  const filteredIndustries = INDUSTRIES.filter((industry) => {
    // 1. Tab filter
    if (activeTab === "ENERGY") {
      const isEnergy =
        industry.slug === "oil-gas" || industry.slug === "power-generation";
      if (!isEnergy) return false;
    } else if (activeTab === "CHEMICAL_PHARMA") {
      const isChemPharma =
        industry.slug === "chemical-petrochemical" ||
        industry.slug === "pharmaceutical";
      if (!isChemPharma) return false;
    } else if (activeTab === "SANITARY_UTILITIES") {
      const isSanitary =
        industry.slug === "food-beverage" ||
        industry.slug === "hvac-refrigeration" ||
        industry.slug === "water-wastewater";
      if (!isSanitary) return false;
    }

    // 2. Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchName = industry.name.toLowerCase().includes(q);
      const matchTagline = industry.tagline.toLowerCase().includes(q);
      const matchDesc = industry.shortDescription.toLowerCase().includes(q);
      const matchOverview = industry.overview.toLowerCase().includes(q);
      const matchStandards = industry.standardsAndCompliance.some((s) =>
        s.toLowerCase().includes(q)
      );
      const matchRoles = industry.exchangerRoles.some((r) =>
        r.toLowerCase().includes(q)
      );
      return matchName || matchTagline || matchDesc || matchOverview || matchStandards || matchRoles;
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
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all flex items-center gap-2 ${
                activeTab === opt.key
                  ? "bg-[#0A1C33] text-white shadow-sm"
                  : "bg-slate-100 text-slate-800 hover:bg-slate-200"
              }`}
            >
              <span>{opt.label}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-mono leading-none ${
                  activeTab === opt.key
                    ? "bg-white/20 text-white"
                    : "bg-slate-200 text-slate-700"
                }`}
              >
                {opt.count}
              </span>
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-72 shrink-0">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            aria-label="Search industry sector, duty, or code"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search sector, duty, or code..."
            className={`w-full pl-10 ${
              searchQuery ? "pr-9" : "pr-4"
            } py-2.5 text-base sm:text-sm bg-white border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0F4C81] focus:border-[#0F4C81] text-slate-900 placeholder:text-slate-500 shadow-2xs`}
          />
          {searchQuery && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-600 hover:text-slate-900 font-bold px-1"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Industries Grid (3 Columns) */}
      {filteredIndustries.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredIndustries.map((industry, idx) => (
            <IndustryCard
              key={industry.id}
              industry={industry}
              index={idx}
              featuredIndex={0}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300 p-8">
          <p className="text-base font-semibold text-slate-800 mb-2">
            No industry sector matching &quot;{searchQuery}&quot; in this category.
          </p>
          <p className="text-sm text-slate-600 mb-6">
            Try clearing the search query or selecting &quot;All Sectors&quot;.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveTab("ALL");
              setSearchQuery("");
            }}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-[#0A1C33] hover:bg-[#CC4B08] transition-colors"
          >
            <span>Reset Sector Filters</span>
          </button>
        </div>
      )}
    </div>
  );
}

