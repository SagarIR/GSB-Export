import React from "react";
import Link from "next/link";
import { ArrowRight, Building2, FlaskConical, Fuel, Milk } from "lucide-react";

export function PersonaCardsSection() {
  const personas = [
    {
      id: "epc",
      badge: "EPC & Turnkey Contractors",
      badgeColor: "bg-blue-50 text-[#0F4C81] border-blue-200",
      bgGradient: "from-blue-50/70 via-slate-50/30 to-white",
      borderColor: "border-slate-200",
      hoverBorder: "hover:border-[#0F4C81]",
      icon: Building2,
      iconBg: "bg-[#0F4C81] text-white",
      title: "Critical-Path Project Supply",
      description:
        "Full alignment with project specifications, approved manufacturer vendor lists (AVL), TEMA Class R calculations, and complete QA/QC documentation dossiers.",
      metric: "100% Code Verified",
      link: "/industries",
    },
    {
      id: "chemical",
      badge: "Chemical & Petrochemical",
      badgeColor: "bg-orange-50 text-[#C2410C] border-orange-200",
      bgGradient: "from-orange-50/70 via-slate-50/30 to-white",
      borderColor: "border-slate-200",
      hoverBorder: "hover:border-[#F36C21]",
      icon: FlaskConical,
      iconBg: "bg-[#F36C21] text-white",
      title: "Corrosive & High-Pressure Media",
      description:
        "Specialized metallurgy coordination for severe chemical environments: Duplex 2205, Hastelloy C-276, Titanium Gr 2, and ASME Section VIII Div 1 pressure shells.",
      metric: "Duplex & Exotic Alloys",
      link: "/industries/chemical-petrochemical",
    },
    {
      id: "oilgas",
      badge: "Oil, Gas & Refineries",
      badgeColor: "bg-slate-100 text-[#0A1C33] border-slate-200",
      bgGradient: "from-slate-100/70 via-slate-50/30 to-white",
      borderColor: "border-slate-200",
      hoverBorder: "hover:border-[#0A1C33]",
      icon: Fuel,
      iconBg: "bg-[#0A1C33] text-white",
      title: "Heavy Hydrocarbon Heat Recovery",
      description:
        "High-pressure shell & tube exchangers and induced-draft fin-fan air coolers engineered to API 660, API 661, and international refinery process codes.",
      metric: "Up to 300+ bar(g)",
      link: "/industries/oil-gas",
    },
    {
      id: "foodpharma",
      badge: "Food, Dairy & Pharma",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
      bgGradient: "from-emerald-50/70 via-slate-50/30 to-white",
      borderColor: "border-slate-200",
      hoverBorder: "hover:border-emerald-500",
      icon: Milk,
      iconBg: "bg-emerald-600 text-white",
      title: "Hygienic Sanitary Systems",
      description:
        "Sanitary gasketed plate heat exchangers, CIP cleanability, electro-polished stainless steel 316L, and FDA-grade elastomer gaskets with zero cross-contamination.",
      metric: "Sanitary CIP Compatible",
      link: "/industries/food-beverage",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-50/50 border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C2410C] bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/80 inline-block">
            Tailored Coordination
          </span>
          <h2 className="text-h2 font-bold font-sans text-[#0A1C33] leading-[1.18]">
            Built for international <br />
            <span className="text-[#D9550D] font-bold">industrial procurement.</span>
          </h2>
          <p className="text-base text-slate-700 leading-relaxed font-sans">
            Whether you manage complex refinery revamps, multi-phase EPC contracts, or hygienic food processing lines, our coordination model conforms to your technical parameters.
          </p>
        </div>

        {/* 4 Persona Cards Grid - 100% Guaranteed Visible */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {personas.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className={`rounded-3xl bg-gradient-to-br ${item.bgGradient} border ${item.borderColor} ${item.hoverBorder} p-7 sm:p-9 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden hover:-translate-y-1`}
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={`text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full border ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono font-semibold text-slate-700 bg-white/95 px-2.5 py-1 rounded-full border border-slate-200 shadow-xs">
                      {item.metric}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <div className={`w-11 h-11 rounded-2xl ${item.iconBg} flex items-center justify-center shrink-0 shadow-sm`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-h4 sm:text-h3 font-bold font-sans text-[#0A1C33]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans pt-1">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0A1C33] group-hover:text-[#C2410C] transition-colors"
                  >
                    <span>View application standards</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <span className="text-xs sm:text-sm text-slate-600 font-mono">Verified Supply</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
