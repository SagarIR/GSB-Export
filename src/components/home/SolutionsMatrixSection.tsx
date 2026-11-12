import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  Factory,
  SearchCheck,
  PackageCheck,
  Anchor,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";
import { COMPANY_INFO } from "@/content/company";

export function SolutionsMatrixSection() {
  const matrixItems = [
    {
      title: "Code & Thermal Sizing",
      icon: SearchCheck,
      desc: "Rigorous thermal calculations ensuring process duty, heat transfer coefficients, and allowable pressure drops meet TEMA and ASME Section VIII Div 1 criteria.",
      points: ["TEMA Class R, C & B sizing", "HTRI thermal verification", "Allowable \u0394P optimization"],
      href: "/engineering-solutions",
      cta: "Explore engineering solutions",
    },
    {
      title: "Metallurgical Traceability",
      icon: FileCheck2,
      desc: "Complete heat number tracking, Positive Material Identification (PMI), and EN 10204 3.1 Mill Test Certificates for every shell, tube, and flange.",
      points: ["100% PMI testing before rolling", "EN 10204 3.1 certified raw material", "Duplex, Super Duplex & Titanium"],
      href: "/quality-assurance",
      cta: "Review quality assurance",
    },
    {
      title: "Audited Partner Fabrication",
      icon: Factory,
      desc: "Coordination with specialized fabrication bays in Vadodara, Gujarat equipped with CNC tube sheet drilling, automatic orbital welding, and clean bays.",
      points: ["Qualified fabrication infrastructure", "ASME-trained welding operators", "WPS & PQR code alignment"],
      href: "/manufacturing-supply",
      cta: "Explore supply capabilities",
    },
    {
      title: "Rigorous QA/QC Witnessing",
      icon: ShieldCheck,
      desc: "Hold-point inspections per agreed Inspection Test Plans (ITP): non-destructive testing (NDT), radiography, ultrasonic examination, and hydrotesting.",
      points: ["100% Hydrostatic test witnessing", "Radiography (RT) on longitudinal seams", "Client & TPI witnessing accommodated"],
      href: "/quality-assurance",
      cta: "Inspect QA protocols",
    },
    {
      title: "Engineering Dossier & Docs",
      icon: CheckCircle2,
      desc: "Complete technical submittal packages including General Arrangement (GA) drawings, thermal datasheets, design calculations, and hydrotest charts.",
      points: ["Clear CAD / 3D model submittals", "As-built documentation packages", "Certificate of Origin & customs clearance"],
      href: "/global-markets",
      cta: "View compliance dossier",
    },
    {
      title: "Seaworthy Transit Packing",
      icon: Anchor,
      desc: "Industrial export protection engineered for long oceanic voyages and tropical humidity: nitrogen purging, vapor-phase inhibitors, and ISPM 15 timber.",
      points: ["ISPM 15 heat-treated wood crating", "VCI moisture barrier wrapping", "Dispatch to Nhava Sheva / Mundra ports"],
      href: "/manufacturing-supply",
      cta: "Review export packaging",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column (High-Contrast, Non-Sticky on small screens to prevent clipping) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C2410C] bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/80 inline-block">
              Operational Certainty
            </span>

            <h2 className="text-h2 font-bold font-sans text-[#0A1C33] leading-[1.18]">
              Procuring heat exchangers is complex. <br />
              <span className="text-[#D9550D] font-bold">GSB Export makes it seamless.</span>
            </h2>

            <p className="text-base text-slate-700 leading-relaxed font-sans">
              International industrial buyers often face fabricator communication barriers, documentation delays, and unexpected quality drift. GSB Export bridges this gap by acting as your dedicated technical coordination, QA witnessing, and export management team on the ground in India.
            </p>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0A1C33]">
                Direct Technical Coordination Hub
              </h3>
              <div className="text-sm text-slate-700 space-y-2 font-sans">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#F36C21] shrink-0" />
                  <span>Engineering Desk: Vadodara, Gujarat, India</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#0F4C81] shrink-0" />
                  <span>Standard Delivery Terms: Ex-Works, FOB, CFR, CIF</span>
                </div>
              </div>

              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-sm">
                <span className="text-slate-600">Fast Technical Response:</span>
                <span className="font-bold text-[#0A1C33]">Within 24 Hours</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/contact-us"
                className="btn-brand-orange text-sm sm:text-base font-semibold tracking-wide px-7 py-3 rounded-full inline-flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
              >
                <span>Talk to our Engineering Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/quality-assurance"
                className="btn-outline-navy text-sm sm:text-base font-semibold px-6 py-3 rounded-full text-center"
              >
                <span>Our Quality Commitment</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 2-Column Matrix Cards - Clean, Crisp, 100% Visible */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {matrixItems.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#F36C21]/60 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 text-[#0F4C81] flex items-center justify-center group-hover:bg-[#0A1C33] group-hover:text-white transition-colors duration-200">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <Link
                        href={item.href}
                        className="text-xs text-slate-600 group-hover:text-[#C2410C] transition-colors p-1.5 rounded-lg"
                        aria-label={`Learn more about ${item.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>

                    <h3 className="text-lg font-bold text-[#0A1C33] font-sans group-hover:text-[#C2410C] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                      {item.desc}
                    </p>

                    <ul className="pt-3 space-y-2 border-t border-slate-100 text-sm text-slate-700">
                      {item.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#C2410C] shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0A1C33] group-hover:text-[#C2410C] transition-colors"
                    >
                      <span>{item.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
