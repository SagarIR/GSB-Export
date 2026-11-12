"use client";

import React, { useEffect, useState } from "react";
import { ListOrdered, Printer, CheckCircle2 } from "lucide-react";

export interface LegalTocItem {
  id: string;
  number: string;
  title: string;
  shortLabel?: string;
}

interface LegalTableOfContentsProps {
  sections: LegalTocItem[];
  documentCode: string;
  lastUpdated: string;
}

/**
 * Interactive sticky table of contents with scroll-spy tracking and print-to-PDF trigger.
 */
export function LegalTableOfContents({
  sections,
  documentCode,
  lastUpdated,
}: LegalTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    if (sections.length === 0 || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0 && visible[0].target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-115px 0px -60% 0px",
        threshold: [0, 0.25, 0.5],
      }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const activeIndex = Math.max(
    0,
    sections.findIndex((sec) => sec.id === activeId)
  );
  const progressPct =
    sections.length > 1
      ? Math.round(((activeIndex + 1) / sections.length) * 100)
      : 100;

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm print:hidden">
      {/* Header + Progress Indicator */}
      <div className="flex items-center justify-between gap-2 border-b border-slate-200/80 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#C2410C]">
            <ListOrdered className="w-4 h-4" />
          </span>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#0A1C33]">
              Document Contents
            </h3>
            <p className="text-xs text-slate-600 mb-0">
              {documentCode} &bull; {lastUpdated}
            </p>
          </div>
        </div>
        <span className="text-xs font-mono font-bold text-[#0F4C81] bg-blue-50 border border-blue-200/80 px-2.5 py-0.5 rounded-full">
          {activeIndex + 1}/{sections.length}
        </span>
      </div>

      {/* Section Progress Bar */}
      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-[#0F4C81] to-[#F36C21] rounded-full transition-all duration-300"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Section Links */}
      <nav aria-label="Document sections" className="space-y-1">
        {sections.map((sec) => {
          const isActive = sec.id === activeId;
          return (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              onClick={() => setActiveId(sec.id)}
              className={`flex items-center justify-between gap-2.5 px-3 py-2 rounded-xl text-sm transition-all border ${
                isActive
                  ? "bg-[#F6F9FC] border-[#F36C21]/40 text-[#0A1C33] font-bold shadow-sm"
                  : "border-transparent text-slate-700 hover:bg-slate-50 hover:text-[#0A1C33]"
              }`}
            >
              <span className="flex items-center gap-2.5 min-w-0">
                <span
                  className={`font-mono text-xs px-1.5 py-0.5 rounded shrink-0 ${
                    isActive
                      ? "bg-[#CC4B08] text-white font-bold"
                      : "bg-slate-100 text-slate-700 font-semibold"
                  }`}
                >
                  {sec.number}
                </span>
                <span className="truncate">{sec.shortLabel || sec.title}</span>
              </span>
              {isActive && (
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C2410C] shrink-0" />
              )}
            </a>
          );
        })}
      </nav>

      {/* Print / Save PDF Button */}
      <div className="mt-5 pt-4 border-t border-slate-200/80">
        <button
          type="button"
          onClick={() => window.print()}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold text-[#0A1C33] bg-[#F6F9FC] hover:bg-[#0A1C33] hover:text-white border border-slate-200/90 hover:border-[#0A1C33] transition-all cursor-pointer"
        >
          <Printer className="w-4 h-4" />
          <span>Print or Save as PDF</span>
        </button>
      </div>
    </div>
  );
}
