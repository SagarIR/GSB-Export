import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Flame,
  FlaskConical,
  Utensils,
  Pill,
  Zap,
  Wind,
  Waves,
  FileText,
} from "lucide-react";
import { Industry } from "@/content/industries";

const iconMap: Record<string, React.ElementType> = {
  "oil-gas": Flame,
  "chemical-petrochemical": FlaskConical,
  "food-beverage": Utensils,
  pharmaceutical: Pill,
  "power-generation": Zap,
  "hvac-refrigeration": Wind,
  "water-wastewater": Waves,
};

export interface IndustryCardProps {
  industry: Industry;
  index: number;
  className?: string;
  featuredIndex?: number;
}

export function IndustryCard({
  industry,
  index,
  className = "",
  featuredIndex = 0,
}: IndustryCardProps) {
  const Icon = iconMap[industry.id] || Flame;
  const numberStr = String(index + 1).padStart(2, "0");
  const isDefaultFeatured = index === featuredIndex;

  // 3 Key highlights with green dots (matching ProductCard reference)
  const bullets = [
    industry.exchangerRoles[0] || "Process heating & cooling",
    industry.keyChallenges[0] || "High-pressure & corrosive fluid containment",
    industry.standardsAndCompliance[0] || "ASME Section VIII & API Standards",
  ];

  return (
    <div className={`relative group h-full flex flex-col ${className}`}>
      {/* Offset Teal Decorative Backdrop (Inspired by Davar ChemTech reference design) */}
      <div
        className={`absolute -inset-2 sm:-inset-2.5 bg-[#2B7A78] rounded-2xl sm:rounded-3xl -z-10 transition-all duration-300 pointer-events-none ${
          isDefaultFeatured
            ? "opacity-100 translate-x-2 -translate-y-2 sm:translate-x-3 sm:-translate-y-3"
            : "opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2"
        }`}
      />

      {/* Main Card Container */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:shadow-[0_16px_36px_rgba(10,28,51,0.12)] hover:border-slate-300 transition-all duration-300 flex-1 flex flex-col justify-between overflow-hidden group-hover:-translate-y-1">
        {/* Top Visual Area with Real Photography */}
        <Link
          href={`/industries/${industry.slug}`}
          className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-900 block"
        >
          <Image
            src={industry.image}
            alt={`Industrial heat exchanger applications in ${industry.name}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />

          {/* Top-Right Number Badge (Matching ProductCard pattern) */}
          <span className="absolute top-3.5 right-3.5 z-10 text-xs font-mono font-bold tracking-wider bg-[#0A1C33]/90 backdrop-blur-xs text-white px-2.5 py-0.5 rounded-md shadow-xs border border-white/20">
            Sector {numberStr}
          </span>
        </Link>

        {/* Card Body */}
        <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
          <div>
            {/* Header Row: Teal Line Icon (Left) & Giant Watermark Number (Right) */}
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-xl bg-[#F0F7F7] border border-[#D2E7E9] text-[#2B7A78] flex items-center justify-center group-hover:bg-[#2B7A78] group-hover:text-white transition-colors duration-300 shadow-2xs">
                <Icon className="w-6 h-6 stroke-[1.8]" />
              </div>

              {/* Large Faint Number Watermark (from Davar ChemTech reference) */}
              <span
                aria-hidden="true"
                className="text-4xl sm:text-5xl font-sans font-bold text-slate-200 group-hover:text-slate-300/80 transition-colors select-none tracking-tight"
              >
                {numberStr}
              </span>
            </div>

            {/* Subtitle / Category Label */}
            <p className="text-xs font-bold uppercase tracking-wider text-[#C2410C] mb-1.5 line-clamp-1">
              {industry.tagline}
            </p>

            {/* Industry Title */}
            <h3 className="text-lg sm:text-xl font-bold font-sans text-[#0A1C33] group-hover:text-[#1F5F5D] transition-colors leading-snug mb-2">
              <Link href={`/industries/${industry.slug}`}>{industry.name}</Link>
            </h3>

            {/* Short Description */}
            <p className="text-sm text-slate-700 leading-relaxed line-clamp-2 mb-4">
              {industry.shortDescription}
            </p>

            {/* 3 Green Dot Highlights (Matching ProductCard Pattern) */}
            <ul className="space-y-2 mb-6">
              {bullets.map((bullet, bIdx) => (
                <li
                  key={bIdx}
                  className="flex items-start gap-2.5 text-sm text-slate-700 font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#52B72A] shrink-0 mt-2" />
                  <span className="line-clamp-1">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons Footer (Matching ProductCard Pattern) */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 mt-auto">
            <Link
              href={`/industries/${industry.slug}`}
              className="text-sm font-bold text-[#0A1C33] group-hover:text-[#1F5F5D] transition-colors py-1 inline-flex items-center gap-1"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href={`/request-a-quote?industry=${encodeURIComponent(industry.name)}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-white bg-[#0A3D78] hover:bg-[#CC4B08] active:scale-95 transition-all duration-200 shadow-sm hover:shadow"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Get Quote</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

