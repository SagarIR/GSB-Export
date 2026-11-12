"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export interface LegalFaqItem {
  question: string;
  answer: string;
}

interface LegalFaqAccordionProps {
  title: string;
  subtitle: string;
  items: LegalFaqItem[];
}

/**
 * Interactive procurement & compliance clarification accordion matching the homepage FAQ styling.
 */
export function LegalFaqAccordion({
  title,
  subtitle,
  items,
}: LegalFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-[#F6F9FC] border border-slate-200/90 rounded-2xl p-6 sm:p-8 print:hidden">
      <div className="flex items-start gap-3 border-b border-slate-200/80 pb-4 mb-5">
        <span className="w-9 h-9 rounded-xl bg-white border border-slate-200/90 text-[#0F4C81] flex items-center justify-center shrink-0 shadow-sm">
          <HelpCircle className="w-4 h-4" />
        </span>
        <div>
          <h3 className="text-lg font-bold text-[#0A1C33]">
            {title}
          </h3>
          <p className="text-sm text-slate-600 mt-0.5 mb-0">{subtitle}</p>
        </div>
      </div>

      <div className="divide-y divide-slate-200/80">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={item.question} className="py-4 first:pt-0 last:pb-0">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between text-left gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C81] focus-visible:ring-offset-2 rounded-lg py-1 group"
              >
                <span className="text-base font-bold text-[#0A1C33] group-hover:text-[#C2410C] transition-colors">
                  {item.question}
                </span>
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen
                      ? "bg-[#0A1C33] text-white"
                      : "bg-white border border-slate-200 text-slate-700 group-hover:border-[#C2410C] group-hover:text-[#C2410C]"
                  }`}
                >
                  {isOpen ? (
                    <Minus className="w-3.5 h-3.5" />
                  ) : (
                    <Plus className="w-3.5 h-3.5" />
                  )}
                </span>
              </button>

              {isOpen && (
                <p className="pt-2.5 pr-8 text-sm sm:text-base text-slate-700 leading-relaxed mb-0">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
