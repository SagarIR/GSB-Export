"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Cpu, Layers, Sparkles } from "lucide-react";

export function PreFooterCtaSection() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      {/* Curved Dark Navy Container with GSB Brand Colors */}
      <div className="relative rounded-[28px] sm:rounded-[40px] bg-gradient-to-br from-[#061426] via-[#0A1C33] to-[#040D1A] text-white p-8 sm:p-14 lg:p-20 overflow-hidden shadow-2xl border border-blue-900/40 text-center">
        {/* Ambient Subtle Radial Glow */}
        <div
          aria-hidden="true"
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#F36C21]/15 rounded-full blur-3xl pointer-events-none"
        />

        {/* Decorative Floating Corner Icons */}
        <div className="hidden lg:flex absolute top-12 left-16 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md items-center justify-center transform -rotate-12 shadow-lg">
          <Layers className="w-7 h-7 text-[#F36C21]" />
        </div>

        <div className="hidden lg:flex absolute bottom-12 left-24 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md items-center justify-center transform rotate-6 shadow-lg">
          <ShieldCheck className="w-6 h-6 text-blue-400" />
        </div>

        <div className="hidden lg:flex absolute top-14 right-16 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md items-center justify-center transform rotate-12 shadow-lg">
          <Cpu className="w-7 h-7 text-[#F36C21]" />
        </div>

        <div className="hidden lg:flex absolute bottom-12 right-24 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md items-center justify-center transform -rotate-6 shadow-lg">
          <Sparkles className="w-6 h-6 text-amber-300" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-orange-200 tracking-wider uppercase">
            <span>Direct Technical Coordination</span>
          </div>

          <h2 className="text-h1 font-bold font-sans text-white leading-[1.15]">
            Let&apos;s engineer your <br />
            <span className="text-[#FA8540] font-bold">heat transfer solution.</span>
          </h2>

          <p className="text-base text-slate-200 max-w-xl mx-auto leading-relaxed font-sans">
            Connect directly with our thermal engineering team in Vadodara to evaluate process parameters, select optimal metallurgy, and receive an itemized proposal.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/request-a-quote"
              className="btn-brand-orange px-8 py-3.5 shadow-lg hover:shadow-xl text-sm sm:text-base font-bold tracking-wide group w-full sm:w-auto"
            >
              <span>Request a Quotation</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact-us"
              className="btn-outline-white px-7 py-3.5 text-sm sm:text-base font-semibold w-full sm:w-auto bg-white/10 hover:bg-white hover:text-[#0A1C33] border-white/30"
            >
              <span>Contact Engineering Desk</span>
            </Link>
          </div>

          <div className="pt-4 text-xs sm:text-sm text-slate-300 font-sans flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <span>Free initial thermal sizing</span>
            <span aria-hidden="true">&bull;</span>
            <span>Non-disclosure agreement guaranteed</span>
            <span aria-hidden="true">&bull;</span>
            <span>24h response time</span>
          </div>
        </div>
      </div>
    </section>
  );
}

