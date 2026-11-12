import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ShieldCheck, FileCheck, Clock, CheckCircle2, Building2, PhoneCall, Loader2 } from "lucide-react";
import { RfqForm } from "@/components/forms/RfqForm";
import { Container } from "@/components/ui/Container";
import { COMPANY_INFO } from "@/content/company";

export const metadata: Metadata = {
  title: "Request a Quote (RFQ) | Industrial Heat Exchanger Sizing & Pricing | GSB Export",
  description:
    "Submit your technical requirements, operating pressures, temperatures, and drawings for custom industrial heat exchangers. Fast engineering review within 1-2 business days.",
};

export default function RequestAQuotePage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy py-14 sm:py-18 text-white relative overflow-hidden border-b border-steel/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold tracking-wider uppercase bg-copper/20 text-copper-light border border-copper/40 mb-4">
              Direct Technical Coordination
            </span>
            <h1 className="text-h1 font-bold text-white leading-tight">
              Request a Quotation (RFQ)
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed mb-0">
              Submit your heat exchanger process conditions, duty parameters, and technical drawings for comprehensive thermal sizing, metallurgy review, and an itemized commercial proposal.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Form & Guidelines Grid */}
      <section className="py-16 sm:py-20 bg-offwhite">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 8 Cols: Interactive RFQ Form */}
            <div className="lg:col-span-8">
              <Suspense
                fallback={
                  <div className="p-12 text-center bg-white rounded-2xl border border-silver/60">
                    <Loader2 className="w-8 h-8 animate-spin mx-auto text-[#F36C21] mb-2" />
                    <span className="text-sm text-slate-600">Loading Quotation Form...</span>
                  </div>
                }
              >
                <RfqForm />
              </Suspense>
            </div>

            {/* Right 4 Cols: Procurement Support Sidebar */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              {/* Engineering Review Process */}
              <div className="bg-white border border-silver/70 rounded-xl p-6 shadow-sm">
                <h3 className="text-base font-bold text-navy uppercase tracking-wider border-b border-silver/40 pb-2.5 mb-4">
                  Estimation &amp; Proposal Timeline
                </h3>
                <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-navy text-[#FA8540] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-navy block mb-0.5">Data Sheet Ingestion:</strong>
                      Thermal duty, flow rates, and allowable pressure drops evaluated within 24 hours.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-navy text-[#FA8540] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-navy block mb-0.5">Mechanical Sizing Alignment:</strong>
                      Tubesheet thickness, shell diameter, and baffle spacing verified against ASME/TEMA codes.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-navy text-[#FA8540] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-navy block mb-0.5">Itemized Proposal Delivery:</strong>
                      Commercial offer, preliminary GA drawing, and Inspection &amp; Test Plan (ITP) issued.
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Standards Card */}
              <div className="bg-navy rounded-xl p-6 text-white border border-steel/60 shadow-industrial-lg">
                <span className="text-[#FA8540] text-xs font-bold uppercase tracking-wider block mb-1">
                  Compliance Assurance
                </span>
                <h3 className="text-lg font-bold text-white mb-3">
                  Code Alignment in Partner Facilities
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FA8540] shrink-0" />
                    <span>ASME BPVC Section VIII Div 1 &amp; Div 2</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FA8540] shrink-0" />
                    <span>TEMA Standards (Class R, C, B)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FA8540] shrink-0" />
                    <span>API 660 (Shell-and-Tube for Refineries)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FA8540] shrink-0" />
                    <span>API 661 (Air-Cooled Fin-Fan Coolers)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FA8540] shrink-0" />
                    <span>EN 10204 3.1 Mill Test Traceability</span>
                  </li>
                </ul>
              </div>

              {/* Direct Assistance Contact */}
              <div className="p-6 bg-white border border-silver/70 rounded-xl text-sm text-slate-700 space-y-2">
                <span className="font-bold text-navy block text-base">
                  Prefer Email or Direct Phone?
                </span>
                <p className="text-slate-600 mb-2">
                  You can also email your engineering datasheets directly to our estimating desk:
                </p>
                <p className="mb-1">
                  Email:{" "}
                  <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-[#0F4C81] font-bold hover:underline">
                    {COMPANY_INFO.contact.email}
                  </a>
                </p>
                <p className="mb-1">
                  Direct Phone:{" "}
                  <a href={`tel:${COMPANY_INFO.contact.phoneRaw}`} className="text-[#0F4C81] font-bold hover:underline">
                    {COMPANY_INFO.contact.phone}
                  </a>
                </p>
                <p className="text-slate-600 text-xs pt-1 mb-0">
                  Location: Vadodara, Gujarat, India (UTC +5:30)
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

