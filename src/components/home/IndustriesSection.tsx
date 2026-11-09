import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Flame, Droplets, Utensils, Pill, Zap, Wind, Waves } from "lucide-react";
import { INDUSTRIES } from "@/content/industries";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function IndustriesSection() {
  const iconMap: Record<string, React.ElementType> = {
    "oil-gas": Flame,
    "chemical-petrochemical": Droplets,
    "food-beverage": Utensils,
    pharmaceutical: Pill,
    "power-generation": Zap,
    "hvac-refrigeration": Wind,
    "water-wastewater": Waves,
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-offwhite border-b border-silver/50">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            badge="Process Sectors"
            badgeVariant="copper"
            title="Industries We Serve"
            subtitle="Engineered thermal solutions tailored to aggressive chemicals, strict sanitary regulations, extreme pressures, and harsh ambient environments."
            className="mb-0 max-w-2xl"
          />
          <div className="mt-4 md:mt-0">
            <Link
              href="/industries"
              className="text-xs font-bold uppercase tracking-wider text-steel hover:text-copper flex items-center gap-1.5 transition-colors"
            >
              <span>Explore All Sectors</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind) => {
            const Icon = iconMap[ind.id] || Flame;
            return (
              <div
                key={ind.id}
                className="bg-white border border-silver/70 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-steel/60 transition-all duration-200 flex flex-col justify-between group"
              >
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] bg-navy overflow-hidden">
                  <Image
                    src={ind.image}
                    alt={ind.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                  <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-sm p-1.5 rounded border border-white/20 text-copper">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-navy group-hover:text-steel transition-colors mb-1.5">
                      {ind.name.split("(")[0].trim()}
                    </h3>
                    <p className="text-xs text-copper-dark font-medium mb-2.5">
                      {ind.tagline}
                    </p>
                    <p className="text-xs text-graphite/80 leading-relaxed line-clamp-3 mb-4">
                      {ind.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-silver/40">
                    <Link
                      href="/industries"
                      className="text-xs font-bold text-steel hover:text-copper flex items-center justify-between"
                    >
                      <span>Application Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

