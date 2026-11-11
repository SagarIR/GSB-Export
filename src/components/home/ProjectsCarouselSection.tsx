"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Layers, ShieldCheck, MapPin, Gauge } from "lucide-react";

export function ProjectsCarouselSection() {
  const [activeTab, setActiveTab] = useState(0);

  const projects = [
    {
      id: "gas-cooler",
      title: "Duplex 2205 Gas Cooler",
      category: "Petrochemical",
      region: "United Arab Emirates",
      duty: "1,850 kW Thermal Duty",
      pressure: "45 bar(g) Design Pressure",
      standard: "ASME Sec VIII Div 1 / TEMA R",
      desc: "Severe sour gas condensing service requiring high chloride stress-corrosion resistance and 100% radiographic weld testing.",
      color: "bg-emerald-500",
    },
    {
      id: "slurry-heater",
      title: "Self-Cleaning Spiral Heater",
      category: "Chemical Processing",
      region: "Vietnam",
      duty: "920 kW Thermal Duty",
      pressure: "16 bar(g) Operating Pressure",
      standard: "Single-Channel Concentric Flow",
      desc: "High-solids chemical slurry heating with continuous circular turbulence preventing particulate settling and fouling.",
      color: "bg-sky-500",
    },
    {
      id: "fin-fan",
      title: "Induced Draft Fin-Fan Cooler",
      category: "Oil Refinery",
      region: "Saudi Arabia",
      duty: "3,200 kW Heat Dissipation",
      pressure: "32 bar(g) Process Pressure",
      standard: "API 661 / ASME Code",
      desc: "Water-free air cooling array engineered for extreme desert ambient temperatures (+52°C) with variable-pitch aerodynamic fans.",
      color: "bg-indigo-500",
    },
    {
      id: "pasteurizer",
      title: "Sanitary Plate Pasteurizer",
      category: "Food & Dairy Processing",
      region: "Bangladesh",
      duty: "Continuous Milk Processing",
      pressure: "10 bar(g) Steam & Product",
      standard: "FDA & 3-A Sanitary Guidelines",
      desc: "Electro-polished 316L corrugated plates with food-grade EPDM clip-on gaskets and automated CIP cleaning sequence.",
      color: "bg-amber-500",
    },
  ];

  const handleNext = () => {
    setActiveTab((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveTab((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-neutral-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Carousel Controls matching the reference */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 inline-block">
              Case Applications
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-sans text-[#0A1C33] tracking-tight leading-[1.15]">
              Proven equipment in <br />
              <span className="text-[#F36C21] font-extrabold">critical operations.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous Project"
              className="w-10 h-10 rounded-full border border-slate-300 hover:border-forest text-slate-700 hover:text-forest flex items-center justify-center transition-colors shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Project"
              className="w-10 h-10 rounded-full border border-slate-300 hover:border-forest text-slate-700 hover:text-forest flex items-center justify-center transition-colors shadow-xs"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={proj.id}
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                idx === activeTab
                  ? "bg-emerald-50/40 border-emerald-500 shadow-md ring-1 ring-emerald-500/20"
                  : "bg-white border-neutral-200/80 hover:border-slate-300 hover:shadow-sm"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {proj.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                    <MapPin className="w-3 h-3 text-emerald-600" />
                    <span>{proj.region}</span>
                  </span>
                </div>

                <div className="h-32 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-4 text-white flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-wider text-emerald-400">
                      {proj.standard}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${proj.color} animate-pulse`} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-mono">
                      Operating Conditions
                    </span>
                    <span className="text-xs font-bold text-slate-100">
                      {proj.pressure}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold font-sans text-slate-900">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {proj.desc}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-700 font-semibold">
                  {proj.duty}
                </span>
                <Link
                  href="/projects"
                  className="text-xs font-semibold text-slate-800 hover:text-forest flex items-center gap-1 transition-colors"
                >
                  <span>Specs</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

