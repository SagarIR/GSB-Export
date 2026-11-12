import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, FileText, Search } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="bg-offwhite py-20 sm:py-28 min-h-[70vh] flex items-center">
      <Container>
        <div className="max-w-xl mx-auto bg-white border border-silver/70 rounded-2xl p-8 sm:p-12 shadow-sm text-center">
          <span className="text-[#C2410C] text-xs font-bold uppercase tracking-wider block mb-2">
            Error 404 — Page Not Found
          </span>
          <h1 className="text-h1 font-bold text-navy mb-4">
            Specification Unavailable
          </h1>
          <p className="text-base text-slate-700 leading-relaxed mb-8">
            The technical document, equipment page, or resource you requested cannot be located or may have been relocated.
          </p>

          <div className="p-5 bg-offwhite rounded-xl border border-silver/50 mb-8 text-left text-sm text-graphite space-y-2.5">
            <span className="font-bold text-navy block text-base mb-1">
              Popular Destinations:
            </span>
            <div className="grid grid-cols-2 gap-2.5">
              <Link href="/products" className="text-[#0F4C81] font-medium hover:text-[#C2410C] hover:underline">
                • Products
              </Link>
              <Link href="/industries" className="text-[#0F4C81] font-medium hover:text-[#C2410C] hover:underline">
                • Industries
              </Link>
              <Link href="/about-us" className="text-[#0F4C81] font-medium hover:text-[#C2410C] hover:underline">
                • About Us
              </Link>
              <Link href="/contact-us" className="text-[#0F4C81] font-medium hover:text-[#C2410C] hover:underline">
                • Contact Us
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="btn-navy text-sm font-bold px-6 py-3 rounded-full flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Home className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>

            <Link
              href="/request-a-quote"
              className="btn-copper text-sm font-bold px-6 py-3 rounded-full flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <FileText className="w-4 h-4" />
              <span>Request a Quote</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

