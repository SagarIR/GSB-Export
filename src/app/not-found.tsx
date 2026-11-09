import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, FileText, Search } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="bg-offwhite py-20 sm:py-28 min-h-[70vh] flex items-center">
      <Container>
        <div className="max-w-xl mx-auto bg-white border border-silver/70 rounded-2xl p-8 sm:p-12 shadow-sm text-center">
          <span className="text-copper text-xs font-bold uppercase tracking-widest block mb-2">
            Error 404 — Page Not Found
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-navy mb-4">
            Specification Unavailable
          </h1>
          <p className="text-sm text-graphite/80 leading-relaxed mb-8">
            The technical document, equipment page, or resource you requested cannot be located or may have been relocated.
          </p>

          <div className="p-4 bg-offwhite rounded-xl border border-silver/50 mb-8 text-left text-xs text-graphite space-y-2">
            <span className="font-bold text-navy block text-sm mb-1">
              Popular Destinations:
            </span>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/products" className="text-steel hover:text-copper hover:underline">
                • Products Catalogue
              </Link>
              <Link href="/industries" className="text-steel hover:text-copper hover:underline">
                • Industries We Serve
              </Link>
              <Link href="/engineering-solutions" className="text-steel hover:text-copper hover:underline">
                • Engineering Solutions
              </Link>
              <Link href="/resources" className="text-steel hover:text-copper hover:underline">
                • Technical Knowledge Base
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="btn-navy text-xs font-bold uppercase tracking-wider px-6 py-3 rounded flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Home className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>

            <Link
              href="/request-a-quote"
              className="btn-copper text-xs font-bold uppercase tracking-wider px-6 py-3 rounded flex items-center gap-2 w-full sm:w-auto justify-center"
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

