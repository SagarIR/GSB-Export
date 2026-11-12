import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Clock, MapPin, ShieldCheck, ArrowUpRight, ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/content/products";
import { INDUSTRIES } from "@/content/industries";
import { COMPANY_INFO } from "@/content/company";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050E1A] text-slate-200 border-t-2 border-[#F36C21] relative overflow-hidden">
      {/* Upper Main Footer Grid */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Company Profile & Verification (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block bg-white px-4 py-2.5 rounded-xl shadow-sm">
              <Image
                src="/logo/gsb-logo.png"
                alt="GSB Export — Industrial Heat Exchanger Solutions"
                width={260}
                height={85}
                className="w-auto h-9 sm:h-10 object-contain"
              />
            </Link>

            <p className="text-sm sm:text-[15px] text-slate-200 leading-relaxed pr-4 font-sans">
              GSB Export coordinates custom industrial heat exchangers, precision thermal sizing, ASME/TEMA verification, and quality-witnessed international supply for global process plants.
            </p>

            <div className="pt-2 space-y-3 text-sm text-slate-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F36C21] shrink-0 mt-1" />
                <span>
                  Supply Hub: <strong className="text-white">Vadodara, Gujarat, India</strong>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F36C21] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-slate-100 hover:text-white hover:underline transition-colors">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F36C21] shrink-0" />
                <a href={`tel:${COMPANY_INFO.contact.phoneRaw}`} className="text-slate-100 hover:text-white hover:underline transition-colors">
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#F36C21] shrink-0" />
                <span>{COMPANY_INFO.contact.workingHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs sm:text-[13px] text-orange-200">
                <ShieldCheck className="w-4 h-4 text-[#F36C21] shrink-0" />
                <span>ISO &amp; ASME Standards Alignment in Partner Facilities</span>
              </span>
            </div>
          </div>

          {/* Column 2: Equipment Range (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#FA8540] border-b border-slate-800 pb-2">
              Equipment Range
            </h2>
            <ul className="space-y-2.5 text-sm">
              {PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <Link
                    href={`/products/${prod.slug}`}
                    className="text-slate-300 hover:text-white transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span>{prod.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#FA8540]" />
                  </Link>
                </li>
              ))}
              <li className="pt-1.5">
                <Link
                  href="/products"
                  className="text-[#FA8540] hover:text-orange-200 font-semibold block"
                >
                  All Products Overview &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Technical & Quality (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#FA8540] border-b border-slate-800 pb-2">
              Technical &amp; Quality
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/engineering-solutions"
                  className="text-slate-300 hover:text-white transition-colors flex items-center justify-between group py-0.5"
                >
                  <span>Engineering Solutions</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#FA8540]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/quality-assurance"
                  className="text-slate-300 hover:text-white transition-colors flex items-center justify-between group py-0.5"
                >
                  <span>Quality Assurance &amp; ITP</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#FA8540]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/manufacturing-supply"
                  className="text-slate-300 hover:text-white transition-colors flex items-center justify-between group py-0.5"
                >
                  <span>Manufacturing &amp; Supply</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#FA8540]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/global-markets"
                  className="text-slate-300 hover:text-white transition-colors flex items-center justify-between group py-0.5"
                >
                  <span>Global Export Corridors</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#FA8540]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-slate-300 hover:text-white transition-colors flex items-center justify-between group py-0.5"
                >
                  <span>Projects &amp; Applications</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#FA8540]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-slate-300 hover:text-white transition-colors flex items-center justify-between group py-0.5"
                >
                  <span>Technical Knowledge Base</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#FA8540]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & RFQ (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#FA8540] border-b border-slate-800 pb-2">
              Company &amp; RFQ
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about-us" className="text-slate-300 hover:text-white transition-colors block py-0.5">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-slate-300 hover:text-white transition-colors block py-0.5">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-slate-300 hover:text-white transition-colors block py-0.5">
                  Contact Us
                </Link>
              </li>
              <li className="pt-3">
                <Link
                  href="/request-a-quote"
                  className="btn-brand-orange text-sm font-bold py-2.5 px-5 rounded-full w-full text-center flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="bg-[#02060D] border-t border-slate-900 py-4 text-xs sm:text-sm text-slate-300 relative z-10">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs sm:text-sm mb-0">
            &copy; {currentYear} {COMPANY_INFO.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/request-a-quote" className="text-[#FA8540] hover:text-orange-200 transition-colors font-medium">
              Request RFQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
