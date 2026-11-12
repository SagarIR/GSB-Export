"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, CheckCircle2, Sliders, ShieldCheck, Clock, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ThreeStepsSection() {
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement>(null);

  const [calcData, setCalcData] = useState({
    category: "Shell and Tube Heat Exchanger",
    fluid: "Hydrocarbon Gas / Water",
    temp: "180",
    pressure: "25",
    country: "United Arab Emirates",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCalcData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSizingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = new URLSearchParams({
      category: calcData.category,
      fluid: calcData.fluid,
      temp: calcData.temp,
      pressure: calcData.pressure,
      country: calcData.country,
    }).toString();

    router.push(`/request-a-quote?${query}`);
  };

  useEffect(() => {
    // Keep elements fully visible with guaranteed render
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white border-b border-neutral-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Title & 3 Steps Progression */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C2410C] bg-orange-50 px-3.5 py-1 rounded-full border border-orange-200/80 inline-block">
                Streamlined Procurement
              </span>

              <h2 className="three-step-reveal text-h2 font-bold font-sans text-[#0A1C33] leading-[1.18]">
                Three steps, <br />
                <span className="text-[#D9550D] font-bold">three clicks.</span>
              </h2>

              <p className="three-step-reveal text-base text-slate-700 leading-relaxed max-w-xl">
                How EPC contractors, industrial plant managers, and procurement specialists eliminate technical delays and source certified heat transfer equipment with complete transparency.
              </p>

              <div>
                <Link
                  href="/products"
                  className="three-step-reveal inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#0A1C33] hover:text-[#C2410C] group transition-colors"
                >
                  <span>Explore industrial equipment catalogue</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* The 3 Steps Timeline */}
            <div className="space-y-5 pt-2">
              {/* Step 1 */}
              <div className="three-step-reveal p-5 sm:p-6 rounded-2xl bg-neutral-50/80 border border-neutral-200/70 hover:border-emerald-500/40 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="w-9 h-9 rounded-full bg-[#0A1C33] text-white font-sans font-bold text-sm flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    01
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-slate-900 font-sans">
                      Process Condition Analysis
                    </h3>
                    <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                      Submit your thermal datasheet, fluid properties, operating pressures, allowable pressure drop (&Delta;P), and preferred metallurgy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="three-step-reveal p-5 sm:p-6 rounded-2xl bg-neutral-50/80 border border-neutral-200/70 hover:border-emerald-500/40 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="w-9 h-9 rounded-full bg-[#0A1C33] text-white font-sans font-bold text-sm flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    02
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-slate-900 font-sans">
                      Sizing &amp; Fabricator Alignment
                    </h3>
                    <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                      Our engineers review ASME Section VIII &amp; TEMA calculations, optimize tube layouts or plate geometries, and align with qualified Indian fabrication bays.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="three-step-reveal p-5 sm:p-6 rounded-2xl bg-neutral-50/80 border border-neutral-200/70 hover:border-emerald-500/40 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="w-9 h-9 rounded-full bg-[#0A1C33] text-white font-sans font-bold text-sm flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    03
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-slate-900 font-sans">
                      QA Witnessing &amp; Export Dispatch
                    </h3>
                    <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                      100% hydrostatic and NDT radiography witnessing, EN 10204 3.1 material certificates, ISPM 15 treated seaworthy packing, and delivery to international ports.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Sizing Estimator Card (Matching Reference Widget) */}
          <div className="lg:col-span-6">
            <div className="three-step-reveal bg-white rounded-3xl border border-neutral-200 shadow-xl p-6 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

              <div className="border-b border-neutral-100 pb-5 mb-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/70">
                    Direct Engineering Estimate
                  </span>
                  <span className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 font-medium">
                    <Clock className="w-4 h-4 text-emerald-700" />
                    <span>24h Response</span>
                  </span>
                </div>
                <h3 className="text-h3 font-sans text-slate-900 font-bold">
                  Quick Thermal Sizing Estimator
                </h3>
                <p className="text-sm text-slate-600 mt-1.5">
                  Specify your preliminary process requirements to initiate technical sizing.
                </p>
              </div>

              <form onSubmit={handleSizingSubmit} className="space-y-4">
                <div>
                  <label htmlFor="estimator-category" className="form-label">
                    Equipment Classification
                  </label>
                  <select
                    id="estimator-category"
                    name="category"
                    value={calcData.category}
                    onChange={handleInputChange}
                    className="form-input rounded-xl border-neutral-300 bg-neutral-50/50 focus:bg-white"
                  >
                    <option value="Shell and Tube Heat Exchanger">Shell &amp; Tube Heat Exchanger (TEMA)</option>
                    <option value="Plate Heat Exchanger">Plate Heat Exchanger (Gasketed / Welded)</option>
                    <option value="Air-Cooled Heat Exchanger">Air-Cooled Heat Exchanger (Fin-Fan)</option>
                    <option value="Double Pipe Heat Exchanger">Double Pipe / Hairpin Heat Exchanger</option>
                    <option value="Spiral Heat Exchanger">Spiral Heat Exchanger (Slurry &amp; Viscous)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="estimator-fluid" className="form-label">
                      Process Fluid Stream
                    </label>
                    <input
                      id="estimator-fluid"
                      type="text"
                      name="fluid"
                      value={calcData.fluid}
                      onChange={handleInputChange}
                      placeholder="e.g. Crude Oil, Acid, Steam"
                      className="form-input rounded-xl border-neutral-300 bg-neutral-50/50 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="estimator-temp" className="form-label">
                      Max Operating Temp (&deg;C)
                    </label>
                    <input
                      id="estimator-temp"
                      type="text"
                      name="temp"
                      value={calcData.temp}
                      onChange={handleInputChange}
                      placeholder="e.g. 180"
                      className="form-input rounded-xl border-neutral-300 bg-neutral-50/50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="estimator-pressure" className="form-label">
                      Design Pressure (bar)
                    </label>
                    <input
                      id="estimator-pressure"
                      type="text"
                      name="pressure"
                      value={calcData.pressure}
                      onChange={handleInputChange}
                      placeholder="e.g. 25"
                      className="form-input rounded-xl border-neutral-300 bg-neutral-50/50 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="estimator-country" className="form-label">
                      Delivery Destination / Port
                    </label>
                    <input
                      id="estimator-country"
                      type="text"
                      name="country"
                      value={calcData.country}
                      onChange={handleInputChange}
                      placeholder="e.g. Jebel Ali, UAE"
                      className="form-input rounded-xl border-neutral-300 bg-neutral-50/50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="btn-brand-orange w-full py-3.5 text-sm sm:text-base font-semibold rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                  >
                    <span>Submit Sizing Parameters &amp; Request Quotation</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>
                </div>

                <div className="pt-2.5 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 border-t border-neutral-100">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <span>Non-Disclosure Assured</span>
                  </span>
                  <span>ASME &amp; TEMA Verification Included</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

