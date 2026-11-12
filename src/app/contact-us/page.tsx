import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Clock, MapPin, Phone, ShieldCheck, FileText } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { COMPANY_INFO } from "@/content/company";
import { Container } from "@/components/ui/Container";
import { BannerBreadcrumb } from "@/components/ui/BannerBreadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildPageMetadata,
  buildBreadcrumbJsonLd,
  buildWebPageJsonLd,
} from "@/lib/seo";

const PAGE_DESCRIPTION =
  "Contact GSB Export in Vadodara, Gujarat, India for general inquiries, thermal engineering coordination, and industrial heat exchanger supply consultation.";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Us — Engineering & Export Desk",
  description: PAGE_DESCRIPTION,
  path: "/contact-us",
  keywords: [
    "Contact GSB Export",
    "Heat Exchanger Supplier Vadodara Contact",
    "Industrial Thermal Equipment Inquiry India",
  ],
});

export default function ContactUsPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Contact Us", path: "/contact-us" },
  ]);
  const contactJsonLd = buildWebPageJsonLd({
    name: "Contact GSB Export",
    description: PAGE_DESCRIPTION,
    path: "/contact-us",
    type: "ContactPage",
  });

  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={contactJsonLd} />

      {/* Header Banner */}
      <section className="bg-navy py-16 sm:py-20 text-white relative overflow-hidden border-b border-steel/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <BannerBreadcrumb items={[{ label: "Contact Us" }]} />
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold tracking-wider uppercase bg-copper/20 text-copper-light border border-copper/40 mb-4">
              Get in Touch
            </span>
            <h1 className="text-h1 font-bold text-white leading-tight">
              Contact GSB Export
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed mb-0">
              Connect with our engineering coordination and export desk for equipment specifications, partnerships, or general corporate inquiries.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content Grid: Form + Contact Info */}
      <section className="py-16 sm:py-20 bg-offwhite">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <span className="text-[#C2410C] text-xs font-bold uppercase tracking-wider block mb-1">
                  General Inquiries
                </span>
                <h2 className="text-h2 font-bold text-navy">
                  Send a Direct Message
                </h2>
                <p className="text-sm sm:text-base text-slate-700 mt-1.5 mb-0">
                  Looking for a formal quotation with technical drawings? Please use our dedicated{" "}
                  <Link href="/request-a-quote" className="text-[#0F4C81] font-bold hover:text-[#C2410C] underline underline-offset-2">
                    Request a Quote (RFQ) Form
                  </Link>
                  .
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Right Column: Verified Details & Placeholders */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-silver/70 rounded-xl p-6 sm:p-8 shadow-sm">
                <h3 className="text-lg font-bold text-navy border-b border-silver/40 pb-3 mb-6">
                  Corporate &amp; Supply Coordination Office
                </h3>

                <div className="space-y-5 text-sm text-graphite">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#C2410C] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-navy block text-base mb-0.5">
                        Operational Headquarters:
                      </span>
                      <p className="font-medium text-slate-700 mb-0">
                        Vadodara, Gujarat, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#C2410C] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-navy block text-base mb-0.5">
                        Electronic Mail:
                      </span>
                      <p className="mb-1">
                        General &amp; RFQ:{" "}
                        <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-[#0F4C81] font-semibold hover:underline">
                          {COMPANY_INFO.contact.email}
                        </a>
                      </p>
                      <p className="mb-0">
                        Support:{" "}
                        <a href={`mailto:${COMPANY_INFO.contact.supportEmail}`} className="text-[#0F4C81] font-semibold hover:underline">
                          {COMPANY_INFO.contact.supportEmail}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#C2410C] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-navy block text-base mb-0.5">
                        Telephone Coordination:
                      </span>
                      <p className="text-slate-700 font-medium mb-0">
                        <a
                          href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                          className="hover:text-[#C2410C] transition-colors"
                        >
                          {COMPANY_INFO.contact.phone}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#C2410C] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-navy block text-base mb-0.5">
                        Working Hours (IST / UTC +5:30):
                      </span>
                      <p className="text-slate-700 mb-0">
                        {COMPANY_INFO.contact.workingHours}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-silver/40">
                  <div className="p-3.5 bg-offwhite rounded-lg border border-silver/50 text-xs sm:text-sm text-slate-700 flex items-start gap-2.5 leading-relaxed">
                    <ShieldCheck className="w-4 h-4 text-[#C2410C] shrink-0 mt-0.5" />
                    <span>
                      All technical specifications, drawings, and customer communications are treated with strict commercial confidentiality.
                    </span>
                  </div>
                </div>
              </div>

              {/* RFQ Prompt Box */}
              <div className="bg-navy rounded-xl p-6 sm:p-7 text-white border border-steel/60">
                <span className="text-[#FA8540] text-xs font-bold uppercase tracking-wider block mb-1">
                  Fast-Track Technical RFQ
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  Need a Comprehensive Equipment Quotation?
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed mb-5">
                  Our specialized RFQ system lets you input technical process parameters (temperatures, pressures, flow rates, fluids) and upload engineering drawings directly.
                </p>
                <Link
                  href="/request-a-quote"
                  className="btn-copper text-sm font-bold py-3 px-4 rounded-full w-full text-center flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Open Dedicated RFQ Form</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

