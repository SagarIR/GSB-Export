"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Activity,
  Box,
  Truck,
  FileCheck2,
} from "lucide-react";
import gsap from "gsap";

export function ReferenceHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const floatPill1Ref = useRef<HTMLDivElement>(null);
  const floatPill2Ref = useRef<HTMLDivElement>(null);
  const floatPill3Ref = useRef<HTMLDivElement>(null);
  const floatPill4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Gentle continuous floating animation on decorative micro-badges only (keeps LCP text visible immediately)
      const floatingPills = [
        floatPill1Ref.current,
        floatPill2Ref.current,
        floatPill3Ref.current,
        floatPill4Ref.current,
      ].filter(Boolean);

      floatingPills.forEach((el, idx) => {
        gsap.to(el, {
          y: idx % 2 === 0 ? -8 : 8,
          duration: 2.5 + idx * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="pt-4 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      {/* Curved Hero Canvas Card matching the reference aesthetic with GSB Brand Colors */}
      <div className="relative rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] bg-gradient-to-b from-[#F0F5FA] via-[#F6F9FC] to-white border border-slate-200/90 p-6 sm:p-10 lg:p-16 overflow-hidden shadow-soft-card">
        {/* Subtle Ambient Radial Glow */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-b from-blue-200/25 via-orange-100/15 to-transparent blur-3xl rounded-full pointer-events-none"
        />

        {/* Ambient Subtle Grid */}
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          {/* Centered Credibility Pill Badge */}
          <div className="hero-anim-item inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-slate-200 shadow-xs text-xs font-semibold text-[#0A1C33] tracking-wide">
            <span className="flex h-2 w-2 rounded-full bg-[#F36C21] animate-pulse" />
            <span>Industrial Sourcing &amp; Technical Coordination — Vadodara, India</span>
          </div>

          {/* Master Heading */}
          <h1 className="hero-anim-item text-h1 font-bold font-sans text-[#0A1C33] leading-[1.15]">
            Industrial heat exchanger solutions on one global{" "}
            <span className="text-[#D9550D] font-bold underline decoration-[#F36C21]/40 decoration-2 underline-offset-8">
              standard.
            </span>
          </h1>

          {/* Supporting Technical Copy */}
          <p className="hero-anim-item text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed font-sans">
            GSB Export coordinates custom industrial heat exchangers, precision thermal sizing, ASME/TEMA verification, and quality-witnessed international supply for global process plants.
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="hero-anim-item flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/request-a-quote"
              className="btn-brand-orange text-sm sm:text-base font-semibold tracking-wide px-7 py-3 rounded-full flex items-center gap-2 group w-full sm:w-auto shadow-md hover:shadow-lg transition-all"
            >
              <span>Request Sizing Proposal</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/products"
              className="btn-outline-navy text-sm sm:text-base font-semibold px-6 py-3 rounded-full w-full sm:w-auto bg-white/90 backdrop-blur-sm"
            >
              <span>Explore Equipment Catalogue</span>
            </Link>
          </div>

          {/* Mini Trust Highlights */}
          <div className="hero-anim-item pt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-600 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#C2410C] shrink-0" />
              <span>ASME Sec VIII &amp; TEMA Alignment</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#C2410C] shrink-0" />
              <span>100% NDT &amp; Hydrostatic Witnessing</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#C2410C] shrink-0" />
              <span>ISPM 15 Export Crating</span>
            </span>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* The Signature Twin-Card Dashboard Showcase with Center Node  */}
        {/* ------------------------------------------------------------- */}
        <div className="relative z-10 mt-12 lg:mt-16 max-w-5xl mx-auto">
          {/* Micro Floating Badges */}
          <div
            ref={floatPill1Ref}
            className="hidden md:flex absolute -top-4 left-6 z-20 items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-emerald-200 shadow-md text-xs font-semibold text-slate-800"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>TEMA Class R &amp; C</span>
          </div>

          <div
            ref={floatPill2Ref}
            className="hidden md:flex absolute -bottom-3 left-10 z-20 items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-emerald-200 shadow-md text-xs font-semibold text-slate-800"
          >
            <Activity className="w-4 h-4 text-emerald-700" />
            <span>100% Radiography &amp; Hydrotest</span>
          </div>

          <div
            ref={floatPill3Ref}
            className="hidden md:flex absolute -top-4 right-6 z-20 items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-emerald-200 shadow-md text-xs font-semibold text-slate-800"
          >
            <FileCheck2 className="w-4 h-4 text-emerald-700" />
            <span>EN 10204 3.1 Certification</span>
          </div>

          <div
            ref={floatPill4Ref}
            className="hidden md:flex absolute -bottom-3 right-10 z-20 items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-emerald-200 shadow-md text-xs font-semibold text-slate-800"
          >
            <Box className="w-4 h-4 text-emerald-700" />
            <span>Seaworthy ISPM 15 Crating</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch relative">
            {/* Center Connecting Bridge & Node (visible on desktop) */}
            <div
              className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex-col items-center justify-center"
            >
              <div className="w-14 h-14 rounded-full bg-white shadow-xl border-2 border-[#F36C21] flex items-center justify-center relative group">
                <div className="absolute inset-0 rounded-full bg-[#F36C21]/20 animate-ping" />
                <Cpu className="w-6 h-6 text-[#0A1C33] relative z-10" />
              </div>
              <span className="mt-2 text-xs font-bold tracking-wider uppercase bg-white/95 text-[#0A1C33] px-2.5 py-0.5 rounded-full border border-slate-200 shadow-sm whitespace-nowrap">
                GSB Technical Gate
              </span>
            </div>

            {/* Left Card: Process Parameter Sizing Engine */}
            <div
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Card Window Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 border-b border-slate-100">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 ml-1 font-mono truncate">
                    asme-thermal-sizing-module
                  </span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200/70 shrink-0">
                  Shell &amp; Tube AES
                </span>
              </div>

              {/* Card Body: Process Parameters */}
              <div className="py-4 space-y-3.5">
                <div className="grid grid-cols-2 gap-2.5 text-xs sm:text-sm">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-600 uppercase font-semibold block">
                      Thermal Duty
                    </span>
                    <span className="text-base sm:text-lg font-bold text-slate-900 font-mono">
                      1,450 kW
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-600 uppercase font-semibold block">
                      Design Pressure
                    </span>
                    <span className="text-base sm:text-lg font-bold text-slate-900 font-mono">
                      45 bar(g)
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-emerald-50/50 border border-emerald-100 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-1 text-xs sm:text-sm">
                    <span className="text-slate-700 font-medium">Shell Stream:</span>
                    <span className="font-semibold text-slate-900">Hydrocarbon Gas (180°C &rarr; 45°C)</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-1 text-xs sm:text-sm">
                    <span className="text-slate-700 font-medium">Tube Stream:</span>
                    <span className="font-semibold text-slate-900">Cooling Water (32°C &rarr; 42°C)</span>
                  </div>
                </div>

                {/* Simulated Thermal Profile Bars */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between text-xs text-slate-600 font-medium">
                    <span>Heat Transfer Efficiency</span>
                    <span className="font-mono text-emerald-800 font-bold">96.8%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full w-[96.8%]" />
                  </div>
                </div>
              </div>

              {/* Card Footer Status */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
                <span className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  ASME Section VIII Div 1 Verified
                </span>
                <span className="font-mono">HTRI Sized</span>
              </div>
            </div>

            {/* Right Card: Manufacturing & Export Dispatch Bay */}
            <div
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Card Window Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 border-b border-slate-100">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 ml-1 font-mono truncate">
                    export-dispatch-hub.log
                  </span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F4C81] bg-sky-50 px-2.5 py-0.5 rounded border border-sky-200/70 shrink-0">
                  Vadodara Supply Hub
                </span>
              </div>

              {/* Card Body: Inspection & Dispatch Progress */}
              <div className="py-4 space-y-3">
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex flex-wrap items-center justify-between gap-1 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-slate-700">Material Grade:</span>
                    <span className="font-bold text-slate-900">Duplex 2205 / ASTM A516 Gr 70</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-1 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-slate-700">Hydrostatic Test:</span>
                    <span className="font-bold text-emerald-800">100% Passed (58.5 bar)</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-1 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-slate-700">Packing Protocol:</span>
                    <span className="font-bold text-slate-900">ISPM 15 Treated Timber Crates</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-sky-50/60 border border-sky-100 flex items-center gap-3">
                  <Truck className="w-5 h-5 text-[#0F4C81] shrink-0" />
                  <div className="text-xs sm:text-sm">
                    <span className="font-bold text-slate-900 block">Export Destination Routing:</span>
                    <span className="text-slate-700 text-xs">
                      FOB Nhava Sheva &rarr; CIF Jebel Ali / Haiphong / Rotterdam
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer Status */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
                <span className="flex items-center gap-1.5 text-[#0F4C81] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F4C81]" />
                  Customs &amp; Mill 3.1 Dossier Ready
                </span>
                <span className="font-mono">In Transit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

