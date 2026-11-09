import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { COMPANY_INFO } from "@/content/company";

export const metadata: Metadata = {
  title: "Terms and Conditions | GSB Export",
  description: "Read the website terms of use and commercial coordination conditions for GSB Export.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-white py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl mx-auto space-y-8 text-sm text-graphite/85 leading-relaxed">
          <div>
            <span className="text-copper text-xs font-bold uppercase tracking-wider block mb-1">
              Legal Framework
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-navy">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs text-graphite/60 mt-2">
              Last updated: October 2026
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-navy border-b border-silver/50 pb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and browsing the website of GSB Export (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;), you acknowledge and agree to comply with these Terms and Conditions. If you do not accept these terms, please refrain from using this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-navy border-b border-silver/50 pb-2">
              2. Nature of Commercial Information
            </h2>
            <p>
              The content published on this website—including technical guides, equipment schematics, indicative specifications, and application case studies—is provided for informational and preliminary procurement guidance only.
            </p>
            <p>
              Indicative equipment parameters (such as design pressures, temperatures, and capacities) are illustrative. Final equipment ratings, dimensions, materials of construction, and design code compliance are strictly established upon detailed thermodynamic and mechanical engineering calculation and formal proposal issuance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-navy border-b border-silver/50 pb-2">
              3. Commercial Positioning &amp; Supply Scope
            </h2>
            <p>
              GSB Export operates as an industrial thermal solutions supplier, international sourcing coordinator, and export partner based in India. Manufacturing operations, heavy pressure vessel fabrication, and official ASME/TEMA stamping are executed in coordination with vetted, certified partner manufacturing facilities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-navy border-b border-silver/50 pb-2">
              4. Quotations &amp; Commercial Contracts
            </h2>
            <p>
              Website Request for Quotation (RFQ) submissions do not constitute binding commercial contracts. Formal proposals, commercial terms, delivery schedules, payment milestones, and warranty terms are subject to separate signed commercial contracts and agreed Incoterms (2020).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-navy border-b border-silver/50 pb-2">
              5. Intellectual Property
            </h2>
            <p>
              All original text, technical graphics, schematics, and branding displayed on this website are the intellectual property of GSB Export or used under authorized license. Unauthorized reproduction, scraping, or copying without prior written consent is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-navy border-b border-silver/50 pb-2">
              6. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any legal disputes arising out of the use of this website shall be subject to the exclusive jurisdiction of the competent courts in Vadodara, Gujarat, India.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}

