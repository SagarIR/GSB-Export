import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Clock, MapPin, ShieldCheck, ArrowUpRight, ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/content/products";
import { INDUSTRIES } from "@/content/industries";
import { COMPANY_INFO } from "@/content/company";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050E1A] text-slate-300 border-t-2 border-[#F36C21] relative overflow-hidden">
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

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pr-4 font-sans">
              GSB Export coordinates custom industrial heat exchangers, precision thermal sizing, ASME/TEMA verification, and quality-witnessed international supply for global process plants.
            </p>

            <div className="pt-2 space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F36C21] shrink-0 mt-0.5" />
                <span>
                  Supply Hub: <strong className="text-white">Vadodara, Gujarat, India</strong>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F36C21] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-slate-200 hover:text-white transition-colors">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#F36C21] shrink-0" />
                <span>{COMPANY_INFO.contact.workingHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs text-orange-200">
                <ShieldCheck className="w-4 h-4 text-[#F36C21]" />
                <span>ISO &amp; ASME Standards Alignment in Partner Facilities</span>
              </span>
            </div>
          </div>

          {/* Column 2: Equipment Range (3 Cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#F36C21] border-b border-slate-800 pb-2">
              Equipment Range
            </h3>
            <ul className="space-y-2.5 text-xs">
              {PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <Link
                    href={`/products/${prod.slug}`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{prod.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#F36C21]" />
                  </Link>
                </li>
              ))}
              <li className="pt-1.5">
                <Link
                  href="/products"
                  className="text-[#F36C21] hover:text-orange-300 font-semibold block"
                >
                  All Products Overview &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Industries Served (3 Cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#F36C21] border-b border-slate-800 pb-2">
              Industries Served
            </h3>
            <ul className="space-y-2.5 text-xs">
              {INDUSTRIES.slice(0, 6).map((ind) => (
                <li key={ind.id}>
                  <Link
                    href="/industries"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {ind.name.split("(")[0].trim()}
                  </Link>
                </li>
              ))}
              <li className="pt-1.5">
                <Link
                  href="/industries"
                  className="text-[#F36C21] hover:text-orange-300 font-semibold block"
                >
                  View All Industries &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Quick RFQ (2 Cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#F36C21] border-b border-slate-800 pb-2">
              Company &amp; RFQ
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/about-us" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-slate-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li className="pt-3">
                <Link
                  href="/request-a-quote"
                  className="btn-brand-orange text-xs font-bold uppercase py-2.5 px-5 rounded-full w-full text-center flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="bg-[#02060D] border-t border-slate-900 py-4 text-xs text-slate-400 relative z-10">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            &copy; {currentYear} {COMPANY_INFO.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-slate-200 transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/request-a-quote" className="hover:text-[#F36C21] transition-colors">
              Request RFQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
