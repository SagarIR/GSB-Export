import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Clock, MapPin, ShieldCheck, ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "@/content/products";
import { INDUSTRIES } from "@/content/industries";
import { COMPANY_INFO } from "@/content/company";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-silver-light border-t-4 border-copper">
      {/* Upper Main Footer Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Company Profile & Verification */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block bg-white p-2.5 rounded shadow-sm">
              <Image
                src="/logo/gsb-logo.svg"
                alt="GSB Export — Industrial Heat Exchanger Solutions"
                width={220}
                height={55}
                className="w-auto h-9 object-contain"
              />
            </Link>
            <p className="text-sm text-silver leading-relaxed pr-4">
              {COMPANY_INFO.heroSupportText}
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-silver">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                <span>
                  Business / Supply Base: <strong className="text-white">Vadodara, Gujarat, India</strong>
                  <br />
                  <span className="text-silver/70">{COMPANY_INFO.headquarters.addressPlaceholder}</span>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-copper shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-silver-light hover:text-white transition-colors">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-copper shrink-0" />
                <span>{COMPANY_INFO.contact.workingHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-navy-900 border border-steel/60 text-xs text-silver">
                <ShieldCheck className="w-4 h-4 text-copper" />
                <span>ISO &amp; ASME Standards Alignment in Partner Facilities</span>
              </span>
            </div>
          </div>

          {/* Column 2: Heat Exchanger Products */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-steel/40 pb-2.5 mb-4">
              Equipment Range
            </h3>
            <ul className="space-y-2 text-xs">
              {PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <Link
                    href={`/products/${prod.slug}`}
                    className="text-silver hover:text-copper transition-colors flex items-center justify-between group"
                  >
                    <span>{prod.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-copper" />
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/products"
                  className="text-copper hover:text-copper-light font-semibold block"
                >
                  All Products Overview →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Industries We Serve */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-steel/40 pb-2.5 mb-4">
              Industries Served
            </h3>
            <ul className="space-y-2 text-xs">
              {INDUSTRIES.slice(0, 6).map((ind) => (
                <li key={ind.id}>
                  <Link
                    href="/industries"
                    className="text-silver hover:text-copper transition-colors"
                  >
                    {ind.name.split("(")[0].trim()}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/industries"
                  className="text-copper hover:text-copper-light font-semibold block"
                >
                  View All Industries →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Solutions & Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-steel/40 pb-2.5 mb-4">
              Company &amp; Supply
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about-us" className="text-silver hover:text-copper transition-colors">
                  About GSB Export
                </Link>
              </li>
              <li>
                <Link href="/engineering-solutions" className="text-silver hover:text-copper transition-colors">
                  Engineering Solutions
                </Link>
              </li>
              <li>
                <Link href="/quality-assurance" className="text-silver hover:text-copper transition-colors">
                  Quality Assurance &amp; ITP
                </Link>
              </li>
              <li>
                <Link href="/manufacturing-supply" className="text-silver hover:text-copper transition-colors">
                  Manufacturing &amp; Supply
                </Link>
              </li>
              <li>
                <Link href="/global-markets" className="text-silver hover:text-copper transition-colors">
                  Global Markets &amp; Export
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-silver hover:text-copper transition-colors">
                  Projects &amp; Applications
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-silver hover:text-copper transition-colors">
                  Technical Knowledge Base
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-silver hover:text-copper transition-colors">
                  Contact Us
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/request-a-quote"
                  className="btn-copper text-xs font-bold uppercase py-2 px-3 rounded w-full text-center block"
                >
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Transparent Disclaimer & Business Accuracy Banner */}
      <div className="bg-navy-950 border-t border-navy-900 py-4 text-xs text-silver/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="leading-relaxed">
            <strong className="text-silver-light">Notice of Commercial Positioning:</strong> GSB Export operates as an industrial thermal solutions supplier, international sourcing coordinator, and export facilitator based in India. Technical manufacturing, heavy pressure vessel fabrication, and certified ASME/TEMA stamping are performed in coordination with vetted, certified partner manufacturing facilities.
          </p>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="bg-navy-950/90 border-t border-navy-900/60 py-4 text-xs text-silver/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            &copy; {currentYear} {COMPANY_INFO.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-silver transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-silver transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/request-a-quote" className="hover:text-copper transition-colors">
              Request RFQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
