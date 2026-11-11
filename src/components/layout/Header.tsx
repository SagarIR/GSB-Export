"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Mail,
  Phone,
  Clock,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Cog,
  Factory,
  Briefcase,
  Layers,
  Sparkles,
} from "lucide-react";
import { PRODUCTS } from "@/content/products";
import { COMPANY_INFO } from "@/content/company";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm transition-all duration-200">
      {/* Top Industrial Verification Bar */}
      <div className="hidden lg:block bg-[#0A1C33] text-slate-300 text-[11.5px] py-2 border-b border-navy-950">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-slate-200 font-medium tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F36C21] shrink-0" />
              <span>International Industrial Heat Exchanger Solutions &amp; Export</span>
            </span>
            <span className="h-3 w-px bg-white/20" />
            <span className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#F36C21] shrink-0" />
              <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:underline">
                {COMPANY_INFO.contact.email}
              </a>
            </span>
            <span className="h-3 w-px bg-white/20" />
            <span className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#F36C21] shrink-0" />
              <a href={`tel:${COMPANY_INFO.contact.phoneRaw}`} className="hover:underline font-medium">
                {COMPANY_INFO.contact.phone}
              </a>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#F36C21] shrink-0" />
              <span>Mon–Sat: 09:00–18:00 IST (UTC+5:30)</span>
            </span>
            <span className="h-3 w-px bg-white/20" />
            <span className="flex items-center gap-1.5 text-white font-semibold">
              <MapPin className="w-3.5 h-3.5 text-[#F36C21] shrink-0" />
              <span>Vadodara, Gujarat, India</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={cn(
          "mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 transition-all duration-200",
          scrolled ? "py-2 sm:py-2.5" : "py-3 sm:py-3.5"
        )}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0 focus:outline-none focus:ring-2 focus:ring-[#F36C21]/40 rounded py-1"
          >
            <div className="relative h-11 sm:h-12 w-48 sm:w-60 flex items-center">
              <Image
                src="/logo/gsb-logo.png"
                alt="GSB Export — Industrial Heat Exchanger Solutions"
                width={280}
                height={93}
                className="w-auto h-10 sm:h-11 object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 2xl:gap-4 text-[13px] xl:text-[13.5px] 2xl:text-[14px] font-semibold text-graphite">
            {/* Home */}
            <Link
              href="/"
              className={cn(
                "px-2.5 py-2 rounded-md hover:text-copper transition-colors whitespace-nowrap relative",
                pathname === "/"
                  ? "text-navy font-bold after:absolute after:bottom-0 after:left-2.5 after:right-2.5 after:h-0.5 after:bg-copper after:rounded-full"
                  : "text-graphite/90"
              )}
            >
              Home
            </Link>

            {/* About Us */}
            <Link
              href="/about-us"
              className={cn(
                "px-2.5 py-2 rounded-md hover:text-copper transition-colors whitespace-nowrap relative",
                pathname === "/about-us"
                  ? "text-navy font-bold after:absolute after:bottom-0 after:left-2.5 after:right-2.5 after:h-0.5 after:bg-copper after:rounded-full"
                  : "text-graphite/90"
              )}
            >
              About Us
            </Link>

            {/* Products Dropdown */}
            <div className="relative group">
              <Link
                href="/products"
                className={cn(
                  "inline-flex items-center gap-1 px-2.5 py-2 rounded-md hover:text-copper transition-colors whitespace-nowrap relative",
                  pathname.startsWith("/products")
                    ? "text-navy font-bold after:absolute after:bottom-0 after:left-2.5 after:right-2.5 after:h-0.5 after:bg-copper after:rounded-full"
                    : "text-graphite/90"
                )}
              >
                <span>Products</span>
                <ChevronDown className="w-3.5 h-3.5 text-graphite/60 group-hover:text-copper group-hover:rotate-180 transition-transform duration-200" />
              </Link>

              {/* Products Megamenu Dropdown */}
              <div className="absolute top-full -left-20 xl:-left-12 pt-2.5 w-[680px] xl:w-[720px] max-w-[90vw] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 -translate-y-1 z-50 pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden">
                  {/* Dropdown Header */}
                  <div className="px-5 py-3.5 bg-slate-50/70 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#F36C21]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0A1C33]">
                        Heat Exchanger Equipment
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-[#F36C21] bg-orange-50 border border-orange-200/80 px-2.5 py-0.5 rounded-full">
                      {PRODUCTS.length} Product Lines
                    </span>
                  </div>

                  {/* 2-Column Product Grid */}
                  <div className="p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {PRODUCTS.map((prod) => (
                      <Link
                        key={prod.id}
                        href={`/products/${prod.slug}`}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/80 transition-all group/item"
                      >
                        {/* Equipment Visual Thumbnail */}
                        <div className="w-11 h-11 rounded-lg bg-slate-100/80 border border-slate-200/70 p-1 flex items-center justify-center shrink-0 group-hover/item:border-[#F36C21]/40 group-hover/item:bg-orange-50/40 transition-colors">
                          <Image
                            src={prod.image}
                            alt={prod.name}
                            width={40}
                            height={40}
                            className="max-h-8 w-auto object-contain group-hover/item:scale-105 transition-transform"
                          />
                        </div>

                        {/* Title & Architecture Subtitle */}
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-[#0A1C33] group-hover/item:text-[#F36C21] transition-colors truncate">
                            {prod.name}
                          </div>
                          <div className="text-[11px] text-slate-500 truncate mt-0.5">
                            {prod.schematicType}
                          </div>
                        </div>
                      </Link>
                    ))}

                    {/* 8th Slot: Custom Thermal Sizing Card to balance 2x4 grid */}
                    <Link
                      href="/request-a-quote"
                      className="flex items-center gap-3 p-2.5 rounded-xl bg-gradient-to-br from-orange-50/60 to-amber-50/30 border border-orange-200/70 hover:border-[#F36C21] transition-all group/cta"
                    >
                      <div className="w-11 h-11 rounded-lg bg-[#F36C21]/10 text-[#F36C21] flex items-center justify-center shrink-0 group-hover/cta:bg-[#F36C21] group-hover/cta:text-white transition-colors">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-[#0A1C33] group-hover/cta:text-[#F36C21] transition-colors">
                          Custom Thermal Sizing
                        </div>
                        <div className="text-[11px] text-slate-500 truncate mt-0.5">
                          HTRI simulation &amp; fast RFQ
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Dropdown Footer Bar */}
                  <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-4">
                    <Link
                      href="/products"
                      className="text-xs font-bold text-[#0A1C33] hover:text-[#F36C21] transition-colors flex items-center gap-1.5"
                    >
                      <span>Explore Full Equipment Catalogue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <span className="text-[11px] text-slate-500 hidden sm:inline">
                      ASME Sec VIII &bull; TEMA R/C/B &bull; API 660/661
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Industries */}
            <Link
              href="/industries"
              className={cn(
                "px-2.5 py-2 rounded-md hover:text-copper transition-colors whitespace-nowrap relative",
                pathname === "/industries"
                  ? "text-navy font-bold after:absolute after:bottom-0 after:left-2.5 after:right-2.5 after:h-0.5 after:bg-copper after:rounded-full"
                  : "text-graphite/90"
              )}
            >
              Industries
            </Link>

            {/* Contact */}
            <Link
              href="/contact-us"
              className={cn(
                "px-2.5 py-2 rounded-md hover:text-copper transition-colors whitespace-nowrap relative",
                pathname === "/contact-us"
                  ? "text-navy font-bold after:absolute after:bottom-0 after:left-2.5 after:right-2.5 after:h-0.5 after:bg-copper after:rounded-full"
                  : "text-graphite/90"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Right Header Action: Request a Quote CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/request-a-quote"
              className="btn-brand-orange text-xs sm:text-sm font-semibold tracking-wide px-5 py-2.5 rounded-full whitespace-nowrap shadow-sm hover:shadow-md transition-all flex items-center gap-2 group"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2.5">
            <Link
              href="/request-a-quote"
              className="btn-brand-orange text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap"
            >
              RFQ
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-800 hover:bg-neutral-100 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-forest/40"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-silver/60 shadow-xl px-4 pt-3 pb-8 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col divide-y divide-silver/40 text-sm font-semibold text-graphite">
            <Link href="/" className="py-3 text-navy hover:text-copper">
              Home
            </Link>
            <Link href="/about-us" className="py-3 text-navy hover:text-copper">
              About Us
            </Link>

            {/* Products Accordion in Mobile Menu */}
            <div className="py-3">
              <button
                type="button"
                className="w-full flex items-center justify-between text-navy cursor-pointer font-bold focus:outline-none"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              >
                <span>Products Catalogue</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    mobileProductsOpen ? "rotate-180 text-copper" : "text-graphite/60"
                  )}
                />
              </button>
              {mobileProductsOpen && (
                <div className="pl-3 pt-2.5 space-y-2 border-l-2 border-copper/40 mt-2">
                  {PRODUCTS.map((prod) => (
                    <Link
                      key={prod.id}
                      href={`/products/${prod.slug}`}
                      className="block py-1 text-xs text-graphite hover:text-copper font-medium"
                    >
                      {prod.name}
                    </Link>
                  ))}
                  <Link
                    href="/products"
                    className="block pt-1.5 text-xs font-bold text-steel hover:text-copper"
                  >
                    All Products Overview &rarr;
                  </Link>
                </div>
              )}
            </div>

            <Link href="/industries" className="py-3 text-navy hover:text-copper">
              Industries We Serve
            </Link>

            <Link href="/contact-us" className="py-3 text-navy hover:text-copper">
              Contact Us
            </Link>
          </div>

          <div className="mt-6 pt-5 border-t border-silver/60 space-y-4">
            <Link
              href="/request-a-quote"
              className="btn-copper w-full text-center text-sm font-bold uppercase tracking-wider py-3.5 rounded-lg block shadow-sm"
            >
              Request a Quotation (RFQ)
            </Link>
            <div className="text-center text-xs text-graphite/75 space-y-1">
              <p>
                Email:{" "}
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="text-steel font-semibold hover:underline"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                  className="text-steel font-semibold hover:underline"
                >
                  {COMPANY_INFO.contact.phone}
                </a>
              </p>
              <p className="text-[11px] text-graphite/60">
                Vadodara, Gujarat, India (IST UTC+5:30)
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
