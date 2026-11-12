"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { HOME_FAQS } from "@/content/home-faq";

export function FaqAccordionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-neutral-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/70 inline-block">
              Frequently Asked Questions
            </span>
            <h2 className="text-h2 font-bold font-sans text-[#0A1C33] leading-[1.18]">
              Frequently Asked <br />
              <span className="text-[#D9550D] font-bold">Procurement Questions.</span>
            </h2>
            <p className="text-base text-slate-700 leading-relaxed font-sans pt-1">
              Clear, transparent answers regarding our Indian export infrastructure, quality witnessing, ASME code compliance, and commercial terms.
            </p>
          </div>

          {/* Right Column: Clean Accordion */}
          <div className="lg:col-span-7 divide-y divide-slate-200/80">
            {HOME_FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={faq.question} className="py-5 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C81] focus-visible:ring-offset-2 rounded-lg py-1 group"
                  >
                    <span className="text-base sm:text-lg font-bold font-sans text-[#0A1C33] group-hover:text-[#C2410C] transition-colors">
                      {faq.question}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-neutral-100 group-hover:bg-orange-50 text-slate-700 group-hover:text-[#C2410C] flex items-center justify-center shrink-0 transition-colors">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pr-8 text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
                      {faq.answer}
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
