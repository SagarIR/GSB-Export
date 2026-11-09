import React from "react";
import Link from "next/link";
import { ArrowRight, FileText, Mail, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { COMPANY_INFO } from "@/content/company";

export function FinalCta() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-navy via-navy to-navy-900 text-white relative overflow-hidden">
      {/* Background Subtle Thermal Circuit Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-copper/20 border border-copper/40 text-xs font-bold tracking-widest uppercase text-copper-light">
            <ShieldCheck className="w-4 h-4 text-copper" />
            <span>Direct Technical Coordination &amp; RFQ Evaluation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ready to Discuss Your Heat Exchanger Requirements?
          </h2>

          <p className="text-base sm:text-lg text-silver leading-relaxed max-w-2xl mx-auto">
            Submit your thermal datasheets, process stream parameters, or project specifications. Our engineering coordinators and partner technical specialists will evaluate your requirements and deliver a comprehensive proposal.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/request-a-quote"
              className="btn-copper text-sm font-bold uppercase tracking-wider px-8 py-4 rounded shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <FileText className="w-4 h-4" />
              <span>Submit RFQ &amp; Technical Drawings</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact-us"
              className="btn-outline-white text-sm font-bold uppercase tracking-wider px-8 py-4 rounded flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Mail className="w-4 h-4 text-copper" />
              <span>Contact Engineering Sales</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-steel/30 flex flex-wrap items-center justify-center gap-8 text-xs text-silver">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-copper" />
              <span>Confidential Drawing &amp; Specification Handling</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-copper" />
              <span>ASME, TEMA &amp; API Engineering Verification</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-copper" />
              <span>Dedicated International Export Packaging</span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

