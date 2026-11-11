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

              {/* Products Dropdown Menu */}
              <div className="absolute top-full left-0 pt-2 w-[340px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 -translate-y-1 z-50 pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-white rounded-xl shadow-2xl border border-silver/70 p-3 overflow-hidden">
                  <div className="px-3 py-2 border-b border-silver/40 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-navy">
                      Heat Exchanger Solutions
                    </span>
                    <span className="text-[10px] font-semibold text-copper bg-copper/10 px-2 py-0.5 rounded">
                      5 Product Lines
                    </span>
                  </div>

                  <div className="py-1.5 space-y-0.5">
                    {PRODUCTS.map((prod) => (
                      <Link
                        key={prod.id}
                        href={`/products/${prod.slug}`}
                        className="flex items-start gap-2.5 px-3 py-2 rounded-lg hover:bg-offwhite transition-colors group/item"
                      >
                        <div className="w-7 h-7 rounded-md bg-navy/5 text-steel flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-copper/10 group-hover/item:text-copper transition-colors">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-navy group-hover/item:text-copper transition-colors truncate">
                            {prod.name}
                          </div>
                          <div className="text-[11px] text-graphite/70 truncate">
                            {prod.schematicType}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="p-2.5 border-t border-silver/40 mt-1 bg-offwhite/70 rounded-lg">
                    <Link
                      href="/products"
                      className="text-xs font-bold text-steel hover:text-navy flex items-center justify-between"
                    >
                      <span>Explore Full Equipment Catalogue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
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
