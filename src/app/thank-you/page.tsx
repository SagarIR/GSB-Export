import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, FileText, ArrowRight, Clock, ShieldCheck, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CopyReferenceButton } from "@/components/ui/CopyReferenceButton";
import { COMPANY_INFO } from "@/content/company";

export const metadata: Metadata = {
  title: "Thank You | Request Submitted Successfully",
  description: "Your Request for Quotation or message has been successfully received by GSB Export.",
};

interface ThankYouPageProps {
  searchParams: {
    ref?: string;
    type?: string;
  };
}

export default function ThankYouPage({ searchParams }: ThankYouPageProps) {
  const referenceNumber = searchParams.ref;
  const isRFQ = searchParams.type !== "contact";

  return (
    <div className="bg-offwhite py-16 sm:py-24">
      <Container>
        <div className="max-w-2xl mx-auto bg-white border border-silver/70 rounded-2xl p-8 sm:p-12 shadow-sm text-center">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <span className="text-copper text-xs font-bold uppercase tracking-wider block mb-2">
            Submission Confirmed
          </span>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4">
            {isRFQ ? "Request for Quotation Received" : "Thank You for Contacting Us"}
          </h1>

          <p className="text-sm text-graphite/85 leading-relaxed mb-6">
            Your inquiry has been registered in our engineering coordination queue. Our technical team is reviewing your process parameters and specifications.
          </p>

          {referenceNumber && (
            <div className="p-4 bg-offwhite border border-silver/60 rounded-xl mb-8 inline-block">
              <span className="text-xs text-graphite/60 block uppercase font-medium mb-1">
                Your Unique Inquiry Reference Number:
              </span>
              <div className="flex items-center justify-center gap-3">
                <span className="text-lg font-mono font-extrabold text-navy tracking-wider">
                  {referenceNumber}
                </span>
                <CopyReferenceButton referenceNumber={referenceNumber} />
              </div>
            </div>
          )}

          {/* Next Steps Workflow */}
          <div className="text-left bg-offwhite/80 rounded-xl p-6 border border-silver/50 mb-8 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-navy border-b border-silver/40 pb-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-copper" />
              <span>What Happens Next?</span>
            </h3>

            <div className="space-y-3 text-xs text-graphite">
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-navy text-copper font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <strong className="text-navy block">Data Sheet Review:</strong>
                  Our thermal engineers verify fluid properties, temperatures, pressures, and allowable pressure drops.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-navy text-copper font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <strong className="text-navy block">Technical Sizing &amp; Manufacturer Alignment:</strong>
                  Equipment sizing is reconciled with specialized partner fabrication bays to confirm delivery timelines and metallurgy.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-navy text-copper font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <strong className="text-navy block">Itemized Quotation Issuance:</strong>
                  You will receive a formal commercial and technical proposal via email within 1 to 2 business days.
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products"
              className="btn-copper text-xs font-bold uppercase tracking-wider px-6 py-3 rounded flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <span>Explore Products Catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/about-us"
              className="btn-outline-steel text-xs font-bold uppercase tracking-wider px-6 py-3 rounded w-full sm:w-auto justify-center"
            >
              <span>About Us</span>
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-silver/40 text-xs text-graphite/60 flex items-center justify-center gap-2">
            <Mail className="w-3.5 h-3.5 text-copper" />
            <span>
              Direct contact:{" "}
              <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-steel font-semibold underline">
                {COMPANY_INFO.contact.email}
              </a>
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}

