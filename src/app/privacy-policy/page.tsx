import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { COMPANY_INFO } from "@/content/company";

export const metadata: Metadata = {
  title: "Privacy Policy | GSB Export",
  description: "Read the Privacy Policy of GSB Export governing customer information, RFQ submissions, technical data handling, and cookies.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl mx-auto space-y-8 text-sm text-graphite/85 leading-relaxed">
          <div>
            <span className="text-copper text-xs font-bold uppercase tracking-wider block mb-1">
              Legal Information
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-navy">
              Privacy Policy
            </h1>
            <p className="text-xs text-graphite/60 mt-2">
              Last updated: October 2026
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-navy border-b border-silver/50 pb-2">
              1. Introduction
            </h2>
            <p>
              GSB Export (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting the privacy of industrial clients, procurement professionals, and visitors to our corporate website. This Privacy Policy outlines how we collect, store, process, and safeguard information submitted through our contact and Request for Quotation (RFQ) forms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-navy border-b border-silver/50 pb-2">
              2. Information We Collect
            </h2>
            <p>
              When you submit a quotation request or contact form on our website, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>Contact details: Name, company name, corporate email address, phone number, and country of operation.</li>
              <li>Technical project requirements: Fluid types, operating pressures, design temperatures, flow rates, metallurgy preferences, and delivery destinations.</li>
              <li>Technical documents: Engineering drawings, process data sheets, and specifications uploaded to support your RFQ.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-navy border-b border-silver/50 pb-2">
              3. Use of Information
            </h2>
            <p>
              Information collected is used strictly for legitimate commercial and engineering purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>Evaluating thermal duties and generating engineering and commercial proposals.</li>
              <li>Communicating with you regarding your inquiry, technical clarifications, and quotation milestones.</li>
              <li>Coordinating export logistics, shipping schedules, and customs documentation.</li>
              <li>We never sell, rent, or lease your corporate contact information to third-party marketing companies.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-navy border-b border-silver/50 pb-2">
              4. Data Protection &amp; Technical File Security
            </h2>
            <p>
              Uploaded engineering drawings, datasheets, and client specifications are stored in secure, private object storage repositories. Access is restricted strictly to authorized engineering and estimation personnel. We implement server-side validation and encryption protocols to protect your proprietary process data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-navy border-b border-silver/50 pb-2">
              5. Contact Information
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to request data updates, please contact our administrative desk:
            </p>
            <p className="text-xs font-semibold text-navy">
              GSB Export<br />
              Email: <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-steel underline">{COMPANY_INFO.contact.email}</a><br />
              Location: Vadodara, Gujarat, India
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
