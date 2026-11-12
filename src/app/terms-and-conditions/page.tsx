import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  Landmark,
} from "lucide-react";
import { COMPANY_INFO } from "@/content/company";
import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { LegalSection } from "@/components/legal/LegalSection";
import { LegalFaqAccordion } from "@/components/legal/LegalFaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildPageMetadata,
  buildBreadcrumbJsonLd,
  buildWebPageJsonLd,
} from "@/lib/seo";

const PAGE_DESCRIPTION =
  "Review GSB Export's Terms & Conditions governing indicative thermal specifications, partner manufacturing coordination, non-binding RFQs & Indian law.";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms & Conditions — Commercial & Website Use",
  description: PAGE_DESCRIPTION,
  path: "/terms-and-conditions",
});

const SECTIONS = [
  {
    id: "acceptance",
    number: "01",
    title: "Acceptance of Terms & Authorized Use",
    shortLabel: "Acceptance",
  },
  {
    id: "commercial-model",
    number: "02",
    title: "Commercial Positioning & Supply Scope",
    shortLabel: "Supply Scope",
  },
  {
    id: "indicative-specs",
    number: "03",
    title: "Indicative Engineering Data & Disclaimer",
    shortLabel: "Technical Data",
  },
  {
    id: "quotations-contracts",
    number: "04",
    title: "Quotations, RFQ Status & Commercial Contracts",
    shortLabel: "RFQs & Contracts",
  },
  {
    id: "quality-export",
    number: "05",
    title: "Quality Standards, Inspection & Incoterms®",
    shortLabel: "Quality & Export",
  },
  {
    id: "intellectual-property",
    number: "06",
    title: "Intellectual Property & Client Confidentiality",
    shortLabel: "Intellectual Property",
  },
  {
    id: "liability",
    number: "07",
    title: "Limitation of Liability & Force Majeure",
    shortLabel: "Liability",
  },
  {
    id: "governing-law",
    number: "08",
    title: "Governing Law, Jurisdiction & Revisions",
    shortLabel: "Governing Law",
  },
];

const COMMERCIAL_STAGES = [
  {
    stage: "01. Website RFQ / Contact Intake",
    binding: "Non-Binding Inquiry",
    engineering: "Preliminary duty intake & parameter screening",
    pricing: "No pricing commitment; generates reference ID (GSB-RFQ / GSB-GEN)",
  },
  {
    stage: "02. Formal Technical & Commercial Proposal",
    binding: "Offer Valid for Stated Window",
    engineering: "Preliminary sizing sheet, proposed metallurgy & code alignment",
    pricing: "Itemized pricing subject to raw material & alloy validity window",
  },
  {
    stage: "03. Executed Purchase Order / Contract",
    binding: "Legally Binding Agreement",
    engineering: "Approved GA drawings, final thermal calculation & signed ITP",
    pricing: "Fixed milestone terms, Incoterms® 2020 & contractual warranty",
  },
];

const TERMS_FAQS = [
  {
    question: "Does submitting the Request a Quote form create a binding purchase obligation?",
    answer:
      "No. Submitting an online RFQ initiates technical thermal evaluation and commercial estimation only. Binding supply obligations, prices, delivery schedules, and warranties arise solely upon execution of a separate written Purchase Order or commercial contract.",
  },
  {
    question: "Are the pressure, temperature, and flow ranges shown on product pages guaranteed for every order?",
    answer:
      "Values published across our product pages and application case studies are indicative engineering benchmarks. Final wall thicknesses, tubesheet ratings, nozzle sizes, and allowable pressure drops are determined strictly through project-specific thermodynamic and mechanical calculation against your PFD/HMB.",
  },
  {
    question: "How does GSB Export coordinate ASME or TEMA stamping?",
    answer:
      "GSB Export manages technical evaluation, specification alignment, stage-wise ITP witnessing, and export logistics. Heavy vessel fabrication and official ASME U/U2 code stamping (where ordered) are executed within our vetted, certified Indian partner manufacturing facilities.",
  },
  {
    question: "Which Incoterms® and governing jurisdiction apply?",
    answer:
      "International shipments are contracted under agreed Incoterms® 2020 rules (such as EXW, FOB Nhava Sheva/Mundra, CFR, CIF, CPT, CIP, or DDP). These website Terms & Conditions are governed by the laws of India with exclusive jurisdiction in Vadodara, Gujarat.",
  },
];

export default function TermsAndConditionsPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Terms & Conditions", path: "/terms-and-conditions" },
  ]);
  const pageJsonLd = buildWebPageJsonLd({
    name: "Terms & Conditions — GSB Export",
    description: PAGE_DESCRIPTION,
    path: "/terms-and-conditions",
    type: "WebPage",
  });

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={pageJsonLd} />
      <LegalPageShell
      badge="Commercial & Legal Framework"
      title="Terms & Conditions"
      subtitle="Terms of website access, preliminary engineering disclosures, partner manufacturing coordination, non-binding RFQ submissions, and governing commercial law for GSB Export."
      breadcrumbLabel="Terms & Conditions"
      documentCode="GSB-DOC-TC-02"
      lastUpdated="November 2026"
      effectiveSince="October 2026"
      jurisdiction="Courts of Vadodara, Gujarat, India"
      highlights={[
        "Non-Binding Online RFQ Intake",
        "Indicative Technical Benchmarks",
        "Incoterms® 2020 Export Basis",
        "Indian Law & Vadodara Jurisdiction",
      ]}
      primaryCta={{
        label: "Submit Technical RFQ",
        href: "/request-a-quote",
      }}
      secondaryCta={{
        label: "Read Privacy Policy",
        href: "/privacy-policy",
      }}
      sections={SECTIONS}
      summaryCards={[
        {
          icon: "file",
          eyebrow: "RFQ Submissions",
          title: "Non-Binding Intake",
          description:
            "Online RFQs initiate thermal sizing and proposal preparation; binding commitments require a separate signed commercial contract or PO.",
        },
        {
          icon: "scale",
          eyebrow: "Technical Scope",
          title: "Indicative Benchmarks",
          description:
            "Published pressure, temperature, and duty figures are illustrative. Final specifications depend on detailed PFD/HMB calculations.",
        },
        {
          icon: "globe",
          eyebrow: "Trade & Law",
          title: "Incoterms® 2020 & India Law",
          description:
            "Export contracts follow agreed Incoterms® 2020 rules; website terms are governed by Indian law in Vadodara, Gujarat.",
        },
      ]}
      companionDoc={{
        badge: "Data Governance",
        title: "Privacy Policy",
        description:
          "Understand how your uploaded engineering drawings, process parameters, and corporate contact details are secured in private storage.",
        href: "/privacy-policy",
        ctaLabel: "View Privacy Policy",
      }}
      ctaBanner={{
        eyebrow: "Commercial Alignment",
        title: "Ready to Discuss Project Specifications or Incoterms®?",
        description:
          "Reach our Vadodara engineering and export desk for formal quotation terms, alloy validity schedules, or Inspection & Test Plan coordination.",
        primaryLabel: "Request Formal Quotation",
        primaryHref: "/request-a-quote",
        secondaryLabel: "Contact Export Desk",
        secondaryHref: "/contact-us",
      }}
    >
      {/* Section 01 */}
      <LegalSection
        id="acceptance"
        number="01"
        title="Acceptance of Terms & Authorized Use"
        icon="scale"
        badge="Website Access"
      >
        <p>
          By accessing, browsing, or submitting data through the website of{" "}
          <strong>{COMPANY_INFO.legalName}</strong> (&quot;Company&quot;,
          &quot;GSB Export&quot;, &quot;we&quot;, or &quot;us&quot;), you
          confirm that you are acting in a legitimate business, engineering, or
          procurement capacity and agree to be bound by these Terms and
          Conditions alongside our{" "}
          <Link
            href="/privacy-policy"
            className="text-[#0F4C81] font-semibold hover:text-[#F36C21] underline underline-offset-2"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <p>
          If you do not accept these Terms and Conditions, please discontinue
          use of this website. You agree not to deploy automated scrapers,
          vulnerability scanners, or bulk extraction tools against our product
          catalogues, schematics, or API routes, nor submit fraudulent or
          malicious payloads through our forms.
        </p>
      </LegalSection>

      {/* Section 02 */}
      <LegalSection
        id="commercial-model"
        number="02"
        title="Commercial Positioning & Supply Scope"
        icon="factory"
        badge="Operating Model"
      >
        <p>
          <strong>{COMPANY_INFO.legalName}</strong> operates as an industrial
          thermal solutions supplier, technical sourcing coordinator, and
          international export partner headquartered in{" "}
          <strong>Vadodara, Gujarat, India</strong>. In keeping with our
          commitment to commercial transparency:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-[#F6F9FC] border border-slate-200/90">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C2410C] block mb-1.5">
              GSB Export Coordination Scope
            </span>
            <h3 className="text-base font-bold text-[#0A1C33] mb-2">
              Technical &amp; Export Oversight
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-0">
              We manage process parameter evaluation, thermal rating alignment,
              supplier qualification, Inspection &amp; Test Plan (ITP)
              witnessing, seaworthy crating verification, and port export
              documentation.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#F6F9FC] border border-slate-200/90">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F4C81] block mb-1.5">
              Fabrication Execution
            </span>
            <h3 className="text-base font-bold text-[#0A1C33] mb-2">
              Vetted Certified Partner Facilities
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-0">
              Heavy plate rolling, CNC tubesheet drilling, pressure vessel
              welding, and official ASME U/U2 or TEMA stamping (when specified)
              are executed through vetted, accredited Indian manufacturing
              partner facilities.
            </p>
          </div>
        </div>
      </LegalSection>

      {/* Section 03 */}
      <LegalSection
        id="indicative-specs"
        number="03"
        title="Indicative Engineering Data & Disclaimer"
        icon="ruler"
        badge="Preliminary Guide Only"
      >
        <p>
          All content published on this website—including product catalogue
          tables, engineering articles, equipment schematics, metallurgy
          overviews, and application case studies on our{" "}
          <Link
            href="/projects"
            className="text-[#0F4C81] font-semibold hover:text-[#F36C21] underline underline-offset-2"
          >
            Projects &amp; Applications
          </Link>{" "}
          page—is provided strictly for informational and preliminary
          procurement guidance.
        </p>

        <div className="p-5 bg-[#F6F9FC] rounded-2xl border border-slate-200/90 border-l-4 border-l-[#F36C21] text-sm text-slate-700 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-[#C2410C] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#0A1C33] block mb-1">
              Engineering Verification Notice
            </strong>
            Indicative operating ranges (design pressures, design temperatures,
            surface areas, and typical alloys) are illustrative benchmarks, not
            warranted performance guarantees for any specific plant duty. Final
            equipment ratings, dimensions, corrosion allowances, and code
            compliance are established solely upon detailed thermodynamic and
            mechanical engineering calculations and formal proposal sign-off.
          </div>
        </div>
      </LegalSection>

      {/* Section 04 */}
      <LegalSection
        id="quotations-contracts"
        number="04"
        title="Quotations, RFQ Status & Commercial Contracts"
        icon="contract"
      >
        <p>
          Submitting a Request for Quotation (RFQ) or contact inquiry via our
          website, or receiving an automated submission reference number (such
          as{" "}
          <span className="font-mono font-semibold text-[#0A1C33]">
            GSB-RFQ-YYYY-XXXXX
          </span>
          ), does not constitute an offer, acceptance, or binding supply
          contract.
        </p>

        <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="tech-table min-w-[580px]">
              <thead>
                <tr>
                  <th className="w-[26%]">Commercial Stage</th>
                  <th className="w-[20%]">Legal Status</th>
                  <th className="w-[27%]">Technical Authority</th>
                  <th className="w-[27%]">Pricing &amp; Terms Scope</th>
                </tr>
              </thead>
              <tbody>
                {COMMERCIAL_STAGES.map((row) => (
                  <tr key={row.stage}>
                    <td className="font-bold text-[#0A1C33]">{row.stage}</td>
                    <td className="font-semibold text-[#C2410C]">
                      {row.binding}
                    </td>
                    <td className="text-slate-700">{row.engineering}</td>
                    <td className="text-slate-600">{row.pricing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-sm sm:text-base text-slate-700">
          All formal commercial proposals issued by GSB Export remain valid only
          for the validity period stated within the quotation document, taking
          into account fluctuating international raw material and exotic alloy
          indices (such as Stainless Steel, Duplex, Nickel Alloys, and Titanium).
        </p>
      </LegalSection>

      {/* Section 05 */}
      <LegalSection
        id="quality-export"
        number="05"
        title="Quality Standards, Inspection & Incoterms®"
        icon="shield"
      >
        <p>
          Applicable manufacturing standards, third-party inspection schedules,
          shipping obligations, and risk transfer are governed exclusively by
          the executed Purchase Order or commercial supply agreement:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {[
            {
              title: "Code & ITP Governance",
              body: "Compliance with ASME Section VIII, TEMA Class R/C/B, API 660/661, or EN 13445, together with EN 10204 3.1/3.2 MTCs, NDT, and hydrostatic witnessing, applies strictly as contracted in the order-specific ITP.",
            },
            {
              title: "Incoterms® 2020 Delivery",
              body: "International deliveries are structured under agreed Incoterms® 2020 rules (EXW, FOB Nhava Sheva/Mundra/Hazira, CFR, CIF, CPT, CIP, or DDP), defining title, freight, insurance, and customs responsibilities.",
            },
            {
              title: "Export Packaging Standards",
              body: "Seaworthy VCI barrier protection, desiccant/nitrogen purging (where specified), and ISPM 15 heat-treated timber crating are executed per contracted export packing specifications.",
            },
            {
              title: "Warranties & Remedies",
              body: "Mechanical workmanship and thermal performance warranties—and exclusions for improper installation, fouling, or unapproved fluid chemistry—are set forth solely in the signed commercial contract.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-4 sm:p-5 bg-[#F6F9FC] rounded-xl border border-slate-200/80 flex items-start gap-3"
            >
              <CheckCircle2 className="w-4 h-4 text-[#C2410C] shrink-0 mt-1" />
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#0A1C33] mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-0">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </LegalSection>

      {/* Section 06 */}
      <LegalSection
        id="intellectual-property"
        number="06"
        title="Intellectual Property & Client Confidentiality"
        icon="copyright"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
            <h3 className="text-base font-bold text-[#0A1C33] mb-2">
              GSB Export Website &amp; Brand IP
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-0">
              All original technical copy, equipment illustrations, architectural
              schematics, interface designs, trademarks, and branding displayed
              on this website are the intellectual property of GSB Export or
              used under authorized license. Unauthorized reproduction,
              republication, or commercial scraping without prior written consent
              is strictly prohibited.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
            <h3 className="text-base font-bold text-[#0A1C33] mb-2">
              Ownership of Client Drawings &amp; PFDs
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-0">
              All Process Flow Diagrams (PFDs), CAD files, datasheets, and
              proprietary process specifications uploaded by clients remain the
              exclusive intellectual property of the submitting client. You
              warrant that you possess full authority to share such documents
              for quotation evaluation.
            </p>
          </div>
        </div>
      </LegalSection>

      {/* Section 07 */}
      <LegalSection
        id="liability"
        number="07"
        title="Limitation of Liability & Force Majeure"
        icon="alert"
      >
        <p>
          This website is provided on an &quot;as-is&quot; and
          &quot;as-available&quot; basis for B2B technical reference and
          quotation intake. To the fullest extent permitted under applicable
          law, GSB Export shall not be liable for any indirect, incidental,
          special, or consequential damages—including production downtime,
          procurement delay, or reliance on unverified preliminary parameters—arising
          from use of or inability to access this website.
        </p>
        <p>
          Neither GSB Export nor any party shall be held in breach for delays
          resulting from Force Majeure events beyond reasonable control,
          including port congestion, maritime route disruptions, raw alloy mill
          shortages, customs embargoes, acts of government, or natural
          calamities, subject to specific Force Majeure clauses in signed
          supply contracts.
        </p>
      </LegalSection>

      {/* Section 08 */}
      <LegalSection
        id="governing-law"
        number="08"
        title="Governing Law, Jurisdiction & Revisions"
        icon="landmark"
        badge="Vadodara, India"
      >
        <p>
          These Terms and Conditions shall be governed by and construed in
          accordance with the <strong>laws of India</strong>, without regard to
          conflict-of-law principles. Any legal claim or dispute arising out of
          or relating to access to or use of this website shall be subject to
          the exclusive jurisdiction of the competent courts located in{" "}
          <strong>Vadodara, Gujarat, India</strong>.
        </p>

        <div className="p-5 bg-[#F6F9FC] rounded-2xl border border-slate-200/90 flex items-start gap-3 text-sm text-slate-700">
          <Landmark className="w-5 h-5 text-[#0F4C81] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#0A1C33] block mb-1">
              Policy Updates &amp; Contact
            </strong>
            GSB Export reserves the right to revise these Terms and Conditions
            periodically to reflect regulatory updates or operational
            improvements. Questions regarding commercial or legal terms may be
            directed to{" "}
            <a
              href={`mailto:${COMPANY_INFO.contact.email}`}
              className="font-bold text-[#0F4C81] hover:text-[#C2410C] underline underline-offset-2"
            >
              {COMPANY_INFO.contact.email}
            </a>{" "}
            or{" "}
            <a
              href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
              className="font-bold text-[#0A1C33] hover:text-[#C2410C]"
            >
              {COMPANY_INFO.contact.phone}
            </a>
            .
          </div>
        </div>
      </LegalSection>

      {/* Interactive Clarification FAQ */}
      <LegalFaqAccordion
        title="Key Commercial & Legal Clarifications"
        subtitle="Common questions raised by EPC procurement teams and corporate legal reviewers."
        items={TERMS_FAQS}
      />
    </LegalPageShell>
    </>
  );
}
