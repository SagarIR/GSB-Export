import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Flame, Droplets, Utensils, Pill, Zap, Wind, Waves, FileText } from "lucide-react";
import { INDUSTRIES } from "@/content/industries";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Industries We Serve | Industrial Heat Exchanger Applications",
  description:
    "Explore heat exchanger solutions engineered for oil & gas, petrochemical, pharmaceutical, dairy, food, power generation, district cooling, and wastewater industries.",
};

export default function IndustriesPage() {
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
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy py-16 sm:py-20 text-white relative overflow-hidden border-b border-steel/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold tracking-widest uppercase bg-copper/20 text-copper-light border border-copper/40 mb-4">
              Sector Engineering Solutions
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Industries We Serve
            </h1>
            <p className="mt-4 text-base sm:text-lg text-silver leading-relaxed">
              Tailoring thermal heat-transfer equipment to exact process duties, chemical compatibility, pressure containment, and international hygiene regulations.
            </p>
          </div>
        </Container>
      </section>

      {/* Industries Detailed Section */}
      <section className="py-16 sm:py-20 bg-offwhite">
        <Container>
          <div className="space-y-16">
            {INDUSTRIES.map((industry, index) => {
              const Icon = iconMap[industry.id] || Flame;
              const isEven = index % 2 === 1;

              return (
                <div
                  key={industry.id}
                  id={industry.slug}
                  className="bg-white border border-silver/70 rounded-2xl overflow-hidden shadow-sm p-6 sm:p-8 lg:p-10 scroll-mt-24"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Visual & Highlights */}
                    <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="relative aspect-[16/11] bg-slate-900 rounded-xl overflow-hidden border border-slate-200/80 shadow-md mb-6 group">
                        <Image
                          src={industry.image}
                          alt={`${industry.name} Industrial Facility`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute top-4 left-4 bg-white/15 backdrop-blur-md p-2 rounded-lg border border-white/20 text-[#F36C21] shadow-sm">
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>

                      {/* Standards Box */}
                      <div className="p-4 bg-offwhite rounded-lg border border-silver/60">
                        <span className="text-xs font-bold uppercase tracking-wider text-navy block mb-2">
                          Applicable Codes &amp; Standards
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {industry.standardsAndCompliance.map((std, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[11px] bg-white border border-silver/70 text-graphite px-2 py-0.5 rounded font-medium"
                            >
                              {std}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Technical Content */}
                    <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"} space-y-6`}>
                      <div>
                        <span className="text-copper text-xs font-bold tracking-widest uppercase block mb-1">
                          Industry Sector 0{index + 1}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                          {industry.name}
                        </h2>
                        <p className="text-sm text-copper-dark font-medium mt-1">
                          {industry.tagline}
                        </p>
                      </div>

                      <p className="text-sm text-graphite/85 leading-relaxed">
                        {industry.overview}
                      </p>

                      {/* Primary Exchanger Duties */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-2.5">
                          Primary Exchanger Roles &amp; Duties:
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-graphite">
                          {industry.exchangerRoles.map((role, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-copper shrink-0 mt-0.5" />
                              <span>{role}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Recommended Configurations */}
                      <div className="pt-4 border-t border-silver/50">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-3">
                          Recommended Equipment Architectures:
                        </h4>
                        <div className="space-y-2">
                          {industry.recommendedExchangers.map((rec, rIdx) => (
                            <div
                              key={rIdx}
                              className="p-3 bg-offwhite/80 rounded border border-silver/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                            >
                              <div>
                                <Link
                                  href={`/products/${rec.slug}`}
                                  className="font-bold text-navy hover:text-copper transition-colors"
                                >
                                  {rec.name}
                                </Link>
                                <p className="text-graphite/70 text-[11px] mt-0.5">
                                  {rec.reason}
                                </p>
                              </div>
                              <Link
                                href={`/products/${rec.slug}`}
                                className="text-copper hover:underline font-semibold shrink-0 text-[11px] flex items-center gap-1"
                              >
                                <span>Specs</span>
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action */}
                      <div className="pt-2 flex items-center gap-4">
                        <Link
                          href={`/request-a-quote?industry=${encodeURIComponent(industry.name)}`}
                          className="btn-copper text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded flex items-center gap-1.5"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>Request Sector RFQ</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-navy text-white">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Need an Application-Specific Thermal Assessment?
              </h3>
              <p className="text-xs sm:text-sm text-silver max-w-xl">
                Submit your process stream data or industry specifications for direct technical review and quotation.
              </p>
            </div>
            <Link
              href="/request-a-quote"
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

