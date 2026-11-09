"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Mail, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { PRODUCTS } from "@/content/products";
import { COMPANY_INFO } from "@/content/company";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Products", href: "/products", hasDropdown: true },
    { label: "Industries", href: "/industries" },
    { label: "Engineering", href: "/engineering-solutions" },
    { label: "Quality", href: "/quality-assurance" },
    { label: "Supply Capabilities", href: "/manufacturing-supply" },
    { label: "Global Markets", href: "/global-markets" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact-us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm transition-all duration-200">
      {/* Top Industrial Verification Bar */}
      <div className="hidden lg:block bg-navy text-silver text-xs py-2 border-b border-navy-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-silver-light">
              <ShieldCheck className="w-3.5 h-3.5 text-copper" />
              <span>International Industrial Heat Exchanger Solutions &amp; Export</span>
            </span>
            <span className="flex items-center gap-1.5 text-silver">
              <Mail className="w-3.5 h-3.5 text-copper" />
              <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-white transition-colors">
                {COMPANY_INFO.contact.email}
              </a>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-silver">
              <Clock className="w-3.5 h-3.5 text-copper" />
              <span>{COMPANY_INFO.contact.workingHours}</span>
            </span>
            <span className="text-copper font-medium tracking-wide">
              Export Base: Vadodara, Gujarat, India
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-200", scrolled ? "py-2.5" : "py-3.5")}>
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-steel rounded">
            <div className="relative w-48 sm:w-56 h-12 flex items-center">
              <Image
                src="/logo/gsb-logo.svg"
                alt="GSB Export — Industrial Heat Exchanger Solutions"
                width={260}
                height={65}
                className="w-auto h-10 object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-[13.5px] font-semibold text-graphite">
            {navLinks.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-flex items-center gap-1 py-2 hover:text-copper transition-colors",
                        isActive ? "text-steel font-bold" : "text-graphite"
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                    </Link>

                    {/* Products Dropdown Panel */}
                    <div
                      className={cn(
                        "absolute top-full left-0 w-80 bg-white rounded-lg shadow-industrial-lg border border-silver/80 p-2 transition-all duration-150 z-50",
                        productsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
                      )}
                    >
                      <div className="px-3 py-2 border-b border-silver/40 text-xs font-bold uppercase text-navy tracking-wider">
                        Heat Exchanger Equipment
                      </div>
                      <div className="py-1">
                        {PRODUCTS.map((prod) => (
                          <Link
                            key={prod.id}
                            href={`/products/${prod.slug}`}
                            className="flex flex-col px-3 py-2 rounded hover:bg-offwhite transition-colors group/item"
                          >
                            <span className="text-xs font-bold text-navy group-hover/item:text-copper transition-colors">
                              {prod.name}
                            </span>
                            <span className="text-[11px] text-graphite/70 line-clamp-1 mt-0.5">
                              {prod.tagline}
                            </span>
                          </Link>
                        ))}
                      </div>
                      <div className="p-2 border-t border-silver/40 mt-1 bg-offwhite/60 rounded">
                        <Link
                          href="/products"
                          className="text-xs font-bold text-steel hover:text-navy flex items-center justify-between"
                        >
                          <span>View Complete Catalogue</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "py-2 hover:text-copper transition-colors relative",
                    isActive ? "text-steel font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-copper" : "text-graphite"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Action: RFQ CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/request-a-quote"
              className="btn-copper text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded shadow hover:shadow-md transition-all flex items-center gap-1.5"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <Link
              href="/request-a-quote"
              className="btn-copper text-xs font-bold uppercase px-3 py-2 rounded"
            >
              RFQ
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-navy hover:bg-offwhite focus:outline-none focus:ring-2 focus:ring-steel"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-silver/60 shadow-lg px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col divide-y divide-silver/30 text-sm font-semibold text-graphite">
            <Link href="/" className="py-2.5 text-navy hover:text-copper">
              Home
            </Link>
            <Link href="/about-us" className="py-2.5 text-navy hover:text-copper">
              About Us
            </Link>

            {/* Products Accordion in Mobile Menu */}
            <div className="py-2.5">
              <div
                className="flex items-center justify-between text-navy cursor-pointer"
                onClick={() => setProductsOpen(!productsOpen)}
              >
                <span className="font-bold">Products Catalogue</span>
                <ChevronDown className={cn("w-4 h-4 transition-transform", productsOpen ? "rotate-180 text-copper" : "")} />
              </div>
              {productsOpen && (
                <div className="pl-3 pt-2 space-y-1.5 border-l-2 border-copper/40 mt-2">
                  {PRODUCTS.map((prod) => (
                    <Link
                      key={prod.id}
                      href={`/products/${prod.slug}`}
                      className="block py-1.5 text-xs text-graphite hover:text-copper"
                    >
                      {prod.name}
                    </Link>
                  ))}
                  <Link
                    href="/products"
                    className="block pt-1 text-xs font-bold text-steel hover:underline"
                  >
                    All Products Overview →
                  </Link>
                </div>
              )}
            </div>

            <Link href="/industries" className="py-2.5 text-navy hover:text-copper">
              Industries We Serve
            </Link>
            <Link href="/engineering-solutions" className="py-2.5 text-navy hover:text-copper">
              Engineering Solutions
            </Link>
            <Link href="/quality-assurance" className="py-2.5 text-navy hover:text-copper">
              Quality Assurance
            </Link>
            <Link href="/manufacturing-supply" className="py-2.5 text-navy hover:text-copper">
              Manufacturing &amp; Supply
            </Link>
            <Link href="/global-markets" className="py-2.5 text-navy hover:text-copper">
              Global Markets
            </Link>
            <Link href="/projects" className="py-2.5 text-navy hover:text-copper">
              Projects &amp; Applications
            </Link>
            <Link href="/resources" className="py-2.5 text-navy hover:text-copper">
              Technical Resources
            </Link>
            <Link href="/contact-us" className="py-2.5 text-navy hover:text-copper">
              Contact Us
            </Link>
          </div>

          <div className="mt-5 pt-4 border-t border-silver/60">
            <Link
              href="/request-a-quote"
              className="btn-copper w-full text-center text-sm font-bold uppercase tracking-wider py-3 rounded block shadow"
            >
              Request a Quotation (RFQ)
            </Link>
            <div className="mt-4 text-center text-xs text-graphite/70">
              <p>Email: <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-steel font-medium">{COMPANY_INFO.contact.email}</a></p>
              <p className="mt-1">Export Hub: Vadodara, Gujarat, India</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

