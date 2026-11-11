"use client";

import React, { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export function FaqAccordionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is GSB Export's business and operational model?",
      a: "GSB Export operates as an industrial thermal solutions supplier, engineering coordinator, and international export partner based in Vadodara, Gujarat, India. Rather than claiming single-plant manufacturing of every category, we coordinate with specialized, pre-audited Indian fabrication bays while our in-house engineers manage thermal sizing, ASME/TEMA verification, stage-wise QA witnessing, and seaworthy export logistics.",
    },
    {
      q: "Can equipment be supplied with ASME and TEMA certification?",
      a: "Yes. All equipment is engineered in strict compliance with ASME Section VIII Division 1 and TEMA Class R, C, or B standards. When official ASME code stamping is specified, fabrication is executed in partner facilities holding valid ASME U-stamp and National Board accreditations.",
    },
    {
      q: "What quality documentation is included with international orders?",
      a: "Every shipment is accompanied by a comprehensive technical dossier: Inspection Test Plan (ITP), EN 10204 3.1 Mill Test Certificates for all pressure parts, Positive Material Identification (PMI) logs, NDT reports (Radiography, Ultrasonic, Dye Penetrant), 100% hydrostatic test charts, weld maps, and Certificate of Origin.",
    },
    {
      q: "Which international export destinations and incoterms do you support?",
      a: "We support EPC contractors and plant operators across the UAE, Saudi Arabia, Oman, Vietnam, Bangladesh, Malaysia, Africa, and Europe. Shipments are professionally packed in ISPM 15 treated seaworthy timber crating and dispatched on Ex-Works, FOB (Nhava Sheva / Mundra), CFR, or CIF terms.",
    },
    {
      q: "How fast can our team receive an engineering quotation?",
      a: "Once you share your process datasheet (thermal duty, fluid streams, inlet/outlet temperatures, operating pressures, and metallurgy), our thermal engineers complete preliminary sizing and issue a formal itemized technical and commercial proposal within 24 to 48 hours.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-neutral-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column matching reference */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 inline-block">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-sans text-[#0A1C33] tracking-tight leading-[1.15]">
              Frequently Asked <br />
              <span className="text-[#F36C21] font-extrabold">Procurement Questions.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans pt-1">
              Clear, transparent answers regarding our Indian export infrastructure, quality witnessing, ASME code compliance, and commercial terms.
            </p>
          </div>

          {/* Right Column: Clean Accordion matching reference */}
          <div className="lg:col-span-7 divide-y divide-slate-200/80">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={faq.q} className="py-5 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 focus:outline-none group"
                  >
                    <span className="text-base sm:text-lg font-bold font-sans text-[#0A1C33] group-hover:text-[#F36C21] transition-colors">
                      {faq.q}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-neutral-100 group-hover:bg-emerald-50 text-slate-700 group-hover:text-forest flex items-center justify-center shrink-0 transition-colors">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pr-8 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

