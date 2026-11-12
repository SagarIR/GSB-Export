import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  FileCheck2,
  Server,
  EyeOff,
  Mail,
  Building2,
} from "lucide-react";
import { COMPANY_INFO } from "@/content/company";
import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { LegalSection } from "@/components/legal/LegalSection";
import { LegalFaqAccordion } from "@/components/legal/LegalFaqAccordion";

export const metadata: Metadata = {
  title: "Privacy Policy | Data Protection & Technical File Confidentiality",
  description:
    "Read GSB Export's Privacy Policy governing B2B procurement inquiries, RFQ submissions, proprietary CAD/datasheet handling, private storage safeguards, and client data rights.",
};

const SECTIONS = [
  {
    id: "introduction",
    number: "01",
    title: "Scope & Data Controller Identity",
    shortLabel: "Scope & Controller",
  },
  {
    id: "data-collection",
    number: "02",
    title: "Information & Technical Data We Collect",
    shortLabel: "Data Collected",
  },
  {
    id: "purpose-use",
    number: "03",
    title: "Legitimate Commercial & Engineering Use",
    shortLabel: "Use of Data",
  },
  {
    id: "file-security",
    number: "04",
    title: "Technical File Security & Storage Safeguards",
    shortLabel: "File Security",
  },
  {
    id: "controlled-sharing",
    number: "05",
    title: "Controlled Sharing & Partner Coordination",
    shortLabel: "Partner Sharing",
  },
  {
    id: "cookies-logs",
    number: "06",
    title: "Cookies, Query Routing & Server Logs",
    shortLabel: "Cookies & Logs",
  },
  {
    id: "retention-rights",
    number: "07",
    title: "Data Retention & Client Control Rights",
    shortLabel: "Retention & Rights",
  },
  {
    id: "privacy-contact",
    number: "08",
    title: "Privacy Desk & Data Inquiries",
    shortLabel: "Privacy Contact",
  },
];

const DATA_CATEGORIES = [
  {
    category: "Corporate Contact Profile",
    fields:
      "Full name, company name, business email, telephone number, country, and optional company website URL.",
    source: "Contact Form & RFQ Intake",
    purpose:
      "Client verification, proposal issuance, and regional export desk assignment.",
  },
  {
    category: "Process & Thermal Duty Data",
    fields:
      "Equipment category, unit quantity, fluid streams, inlet/outlet temperatures, operating pressure, flow rate, preferred metallurgy, and target delivery port.",
    source: "RFQ Form & Quick Sizing Estimator",
    purpose:
      "Thermodynamic sizing review, TEMA/ASME code alignment, and preliminary GA evaluation.",
  },
  {
    category: "Uploaded Engineering Dossiers",
    fields:
      "Process data sheets, P&ID extracts, General Arrangement drawings, and specifications (.pdf, .dwg, .dxf, .doc/.docx, .xls/.xlsx, images; max 5 files, 15 MB each).",
    source: "RFQ Document Uploader",
    purpose:
      "Mechanical design verification, nozzle orientation checking, and partner fabrication estimation.",
  },
  {
    category: "Security & Reference Telemetry",
    fields:
      "Unique reference code (GSB-RFQ / GSB-GEN), submission timestamp, and transient IP address for rate limiting.",
    source: "API Submission Handlers",
    purpose:
      "Anti-spam honeypot screening, abuse rate limiting (5 submissions / 10 min), and inquiry tracking.",
  },
];

const USE_CASES = [
  {
    code: "01",
    title: "Thermal Sizing & Estimation",
    desc: "Evaluating heat duty, LMTD, allowable pressure drops, and alloy selection to prepare an itemized engineering and commercial proposal.",
  },
  {
    code: "02",
    title: "Technical Clarifications",
    desc: "Communicating directly with your procurement or process engineering team regarding datasheet revisions, ASME/TEMA compliance, and delivery timelines.",
  },
  {
    code: "03",
    title: "Quality & Fabrication Coordination",
    desc: "Matching approved project specifications with qualified fabrication bays and coordinating ITP witness/hold points when an order proceeds.",
  },
  {
    code: "04",
    title: "Export & Customs Documentation",
    desc: "Preparing commercial invoices, packing lists, certificates of origin, and port dispatch schedules (Mundra, Hazira, JNPT) under agreed Incoterms®.",
  },
];

const RETENTION_SCHEDULE = [
  {
    recordType: "General Contact Inquiries (GSB-GEN)",
    retention: "Retained for active correspondence and commercial audit trails, or deleted sooner upon verified written request.",
    access: "Coordination & Admin Desk",
  },
  {
    recordType: "Technical RFQs & Process Datasheets (GSB-RFQ)",
    retention: "Maintained during quotation validity, project execution, and standard engineering warranty/traceability windows.",
    access: "Authorized Thermal & Estimation Engineers",
  },
  {
    recordType: "Uploaded CAD / PFD Attachments",
    retention: "Stored in isolated private storage; permanently purged upon written client request if an inquiry does not proceed to order.",
    access: "Restricted Private Storage Keys Only",
  },
  {
    recordType: "In-Memory Rate-Limiting Counters",
    retention: "Transient 10-minute rolling memory window for endpoint protection; not persisted as long-term user behavioral profiles.",
    access: "Automated Server Middleware",
  },
];

const PRIVACY_FAQS = [
  {
    question: "Can we execute a bilateral NDA before sharing proprietary PFDs or CAD files?",
    answer:
      "Yes. While every RFQ uploaded through our website is already treated under strict commercial confidentiality, EPC contractors and process licensors may request a signed mutual Non-Disclosure Agreement by emailing enquiry@gsbexport.com prior to transmitting sensitive process flow diagrams.",
  },
  {
    question: "Are uploaded engineering drawings ever indexed or publicly accessible via URL?",
    answer:
      "No. Uploaded attachments are validated server-side for permitted formats and size limits, assigned randomized UUID storage keys, and written to private object storage or isolated server directories outside the public web root.",
  },
  {
    question: "Does GSB Export sell or share procurement contact lists with third-party marketers?",
    answer:
      "Never. GSB Export strictly prohibits selling, renting, or brokering corporate emails, phone numbers, or project specifications to marketing aggregators or unrelated third parties.",
  },
  {
    question: "How can we request deletion of an RFQ dossier we previously submitted?",
    answer:
      "Simply email enquiry@gsbexport.com from your corporate domain referencing your inquiry ID (e.g., GSB-RFQ-2026-XXXXX), and our administrative desk will verify and permanently purge the associated drawings and records unless retention is required for an active Purchase Order.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      badge="Legal & Data Governance"
      title="Privacy Policy"
      subtitle="How GSB Export collects, safeguards, and processes corporate contact records, thermal process parameters, and uploaded engineering drawings submitted through our global RFQ and inquiry systems."
      breadcrumbLabel="Privacy Policy"
      documentCode="GSB-DOC-PP-01"
      lastUpdated="November 2026"
      effectiveSince="October 2026"
      jurisdiction="Vadodara, Gujarat, India"
      highlights={[
        "NDA-Aligned RFQ Handling",
        "Private Isolated File Storage",
        "Zero Third-Party Data Selling",
        "No Ad-Tech Behavioral Tracking",
      ]}
      primaryCta={{
        label: "Submit Confidential RFQ",
        href: "/request-a-quote",
      }}
      secondaryCta={{
        label: "Read Terms & Conditions",
        href: "/terms-and-conditions",
      }}
      sections={SECTIONS}
      summaryCards={[
        {
          icon: "lock",
          eyebrow: "Technical Drawings",
          title: "Private Isolated Storage",
          description:
            "Uploaded PDF, DWG, DXF, and datasheet files are assigned randomized UUID keys in private storage—never exposed on public URLs.",
        },
        {
          icon: "shield",
          eyebrow: "Confidentiality",
          title: "Strict Need-to-Know Access",
          description:
            "Process parameters and PFDs are accessed exclusively by authorized thermal estimation coordinators and vetted manufacturing evaluators.",
        },
        {
          icon: "check",
          eyebrow: "Zero Brokerage",
          title: "No Commercial Resale",
          description:
            "We never sell, rent, or lease client contact details or procurement telemetry to marketing brokers or third-party ad networks.",
        },
      ]}
      companionDoc={{
        badge: "Companion Framework",
        title: "Terms & Conditions",
        description:
          "Review how GSB Export structures preliminary equipment parameters, RFQ non-binding status, Incoterms® 2020, and governing jurisdiction.",
        href: "/terms-and-conditions",
        ctaLabel: "View Terms & Conditions",
      }}
      ctaBanner={{
        eyebrow: "Secure Engineering Intake",
        title: "Need to Submit Process Datasheets Under Confidentiality?",
        description:
          "Upload your thermal parameters and engineering files securely through our validated RFQ portal, or request a pre-RFQ bilateral NDA from our Vadodara desk.",
        primaryLabel: "Open Secure RFQ Portal",
        primaryHref: "/request-a-quote",
        secondaryLabel: "Request Bilateral NDA",
        secondaryHref: "/contact-us",
      }}
    >
      {/* Section 01 */}
      <LegalSection
        id="introduction"
        number="01"
        title="Scope & Data Controller Identity"
        icon="shield"
        badge="B2B Corporate Policy"
      >
        <p>
          <strong>{COMPANY_INFO.legalName}</strong> (&quot;GSB Export&quot;,
          &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), headquartered in{" "}
          <strong>
            {COMPANY_INFO.headquarters.city}, {COMPANY_INFO.headquarters.state},{" "}
            {COMPANY_INFO.headquarters.country}
          </strong>
          , is committed to safeguarding the corporate privacy and proprietary
          technical documentation of industrial clients, EPC contractors,
          procurement managers, and visitors interacting with our website.
        </p>
        <p>
          This Privacy Policy governs all corporate contact records, thermal
          sizing inputs, and engineering attachments submitted through our{" "}
          <Link
            href="/request-a-quote"
            className="text-[#0F4C81] font-semibold hover:text-[#F36C21] underline underline-offset-2"
          >
            Request a Quote (RFQ)
          </Link>{" "}
          portal, our{" "}
          <Link
            href="/contact-us"
            className="text-[#0F4C81] font-semibold hover:text-[#F36C21] underline underline-offset-2"
          >
            Contact Us
          </Link>{" "}
          desk, and direct corporate email communications.
        </p>

        <div className="p-5 bg-[#F6F9FC] rounded-2xl border border-slate-200/90 border-l-4 border-l-[#0F4C81] text-sm text-slate-700 flex items-start gap-3">
          <Building2 className="w-5 h-5 text-[#0F4C81] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#0A1C33] block mb-1">
              Business-to-Business (B2B) Focus
            </strong>
            Our services and equipment portals are engineered exclusively for
            commercial industrial procurement and engineering evaluation. We do
            not knowingly solicit or process personal consumer profiles or data
            from minors.
          </div>
        </div>
      </LegalSection>

      {/* Section 02 */}
      <LegalSection
        id="data-collection"
        number="02"
        title="Information & Technical Data We Collect"
        icon="database"
        badge="Transparent Inventory"
      >
        <p>
          We collect only the corporate contact and technical duty information
          voluntarily provided by you when submitting an engineering quotation
          request, general inquiry, or supporting datasheet upload:
        </p>

        <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="tech-table min-w-[580px]">
              <thead>
                <tr>
                  <th className="w-[22%]">Data Category</th>
                  <th className="w-[34%]">Specific Fields Collected</th>
                  <th className="w-[20%]">Collection Point</th>
                  <th className="w-[24%]">Engineering Purpose</th>
                </tr>
              </thead>
              <tbody>
                {DATA_CATEGORIES.map((row) => (
                  <tr key={row.category}>
                    <td className="font-bold text-[#0A1C33]">{row.category}</td>
                    <td className="text-slate-700">{row.fields}</td>
                    <td className="font-semibold text-[#0F4C81]">
                      {row.source}
                    </td>
                    <td className="text-slate-600">{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </LegalSection>

      {/* Section 03 */}
      <LegalSection
        id="purpose-use"
        number="03"
        title="Legitimate Commercial & Engineering Use"
        icon="contract"
      >
        <p>
          Information submitted to GSB Export is processed strictly for
          legitimate industrial engineering, quotation evaluation, and
          international export coordination:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {USE_CASES.map((item) => (
            <div
              key={item.code}
              className="p-5 rounded-2xl bg-[#F6F9FC] border border-slate-200/90 hover:border-[#F36C21]/50 transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#0A1C33] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  {item.code}
                </span>
                <h3 className="text-base font-bold text-[#0A1C33]">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed pl-9 mb-0">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="p-5 bg-orange-50/60 rounded-2xl border border-orange-200/80 border-l-4 border-l-[#F36C21] text-sm text-slate-700 flex items-start gap-3">
          <EyeOff className="w-5 h-5 text-[#C2410C] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#0A1C33] block mb-1">
              Strict Prohibition on Data Resale
            </strong>
            We never sell, rent, lease, or trade your corporate email addresses,
            telephone numbers, or process engineering requirements to
            third-party advertising platforms or commercial mailing brokers.
          </div>
        </div>
      </LegalSection>

      {/* Section 04 */}
      <LegalSection
        id="file-security"
        number="04"
        title="Technical File Security & Storage Safeguards"
        icon="lock"
        badge="Private Architecture"
      >
        <p>
          Industrial procurement frequently requires sharing sensitive Process
          Flow Diagrams (PFDs), Heat &amp; Material Balances (HMBs), CAD
          drawings, and plant constraints. Our platform enforces multi-layered
          technical safeguards:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {[
            {
              title: "Encrypted Transport & Server Validation",
              body: "All form submissions and attachments are transmitted over HTTPS/TLS and validated server-side via strict Zod schemas, file-extension allowlists, and 15 MB per-file caps before storage.",
            },
            {
              title: "Randomized Private Storage Keys",
              body: "Uploaded engineering documents are renamed with randomized UUID prefixes and stored in private object storage or isolated server directories outside public web routes.",
            },
            {
              title: "Restricted Engineering Access",
              body: "Access to stored RFQ dossiers and attachments is limited strictly to authorized GSB Export thermal coordination and estimation personnel.",
            },
            {
              title: "Anti-Spam & Endpoint Protection",
              body: "Submission routes deploy hidden honeypot screening and transient IP rate limiting (up to 5 requests per 10-minute window) to prevent automated abuse.",
            },
          ].map((guard) => (
            <div
              key={guard.title}
              className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200/90 shadow-sm flex items-start gap-3"
            >
              <span className="w-6 h-6 rounded-full bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#C2410C] shrink-0 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </span>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#0A1C33] mb-1">
                  {guard.title}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-0">
                  {guard.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 sm:p-5 bg-[#F6F9FC] rounded-xl border border-slate-200/90 text-sm text-slate-700 flex items-start gap-2.5">
          <Server className="w-4 h-4 text-[#0F4C81] shrink-0 mt-1" />
          <p className="leading-relaxed mb-0 text-sm">
            <strong className="text-[#0A1C33]">
              Transactional Resilience:
            </strong>{" "}
            Submitted enquiries are persisted to our encrypted database records
            (with private offline fallback queuing during scheduled database
            maintenance) and trigger instant internal engineering confirmation
            alerts with a unique reference number.
          </p>
        </div>
      </LegalSection>

      {/* Section 05 */}
      <LegalSection
        id="controlled-sharing"
        number="05"
        title="Controlled Sharing & Partner Coordination"
        icon="globe"
      >
        <p>
          As an international thermal solutions coordinator operating from
          Gujarat, India, executing an engineering proposal or confirmed export
          order requires sharing specific project scope strictly on a
          need-to-know basis with vetted execution partners:
        </p>

        <ul className="space-y-3">
          {[
            {
              label: "Vetted Indian Partner Fabrication Facilities:",
              text: "Relevant thermal duty parameters, metallurgy requirements, and mechanical drawings may be shared confidentially with pre-audited Indian pressure vessel shops to confirm fabrication feasibility, ASME/TEMA code compliance, and delivery lead times.",
            },
            {
              label: "Third-Party Inspection Authorities (TPIA):",
              text: "Where specified by your Inspection & Test Plan (ITP), quality dossiers and test schedules are coordinated with client-appointed agencies such as TÜV, Bureau Veritas, DNV, Lloyd's Register, SGS, or Intertek.",
            },
            {
              label: "Export Logistics & Customs Partners:",
              text: "For confirmed orders, consignee details, destination port instructions, and commercial packing declarations are shared with freight forwarders and customs brokers to execute EXW, FOB, CFR, CIF, or DDP shipments.",
            },
            {
              label: "Statutory & Legal Disclosures:",
              text: "We may disclose records solely if compelled by applicable Indian law, port customs authorities, or valid judicial order.",
            },
          ].map((item) => (
            <li
              key={item.label}
              className="flex items-start gap-3 p-4 rounded-xl bg-[#F6F9FC] border border-slate-200/80 text-sm sm:text-base"
            >
              <FileCheck2 className="w-4 h-4 text-[#C2410C] shrink-0 mt-1" />
              <div>
                <strong className="text-[#0A1C33]">{item.label}</strong>{" "}
                <span className="text-slate-700">{item.text}</span>
              </div>
            </li>
          ))}
        </ul>
      </LegalSection>

      {/* Section 06 */}
      <LegalSection
        id="cookies-logs"
        number="06"
        title="Cookies, Query Routing & Server Logs"
        icon="cookie"
      >
        <p>
          We maintain a minimalist, privacy-respecting web architecture built
          for fast technical browsing rather than intrusive tracking:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
            <h3 className="text-base font-bold text-[#0A1C33] mb-1.5">
              Essential Functional State Only
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-0">
              Interactive features—such as pre-selecting a heat exchanger model
              from our product catalogue or transferring quick sizing parameters
              into the{" "}
              <Link
                href="/request-a-quote"
                className="text-[#0F4C81] font-semibold hover:underline"
              >
                RFQ Form
              </Link>
              —operate via standard URL query parameters and transient browser
              memory without cross-site advertising cookies.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
            <h3 className="text-base font-bold text-[#0A1C33] mb-1.5">
              Zero Ad-Tech &amp; Retargeting Trackers
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-0">
              This website does not embed third-party behavioral advertising
              pixels or sell browsing telemetry. Standard web server error and
              security logs are maintained solely to ensure uptime and protect
              against malicious requests.
            </p>
          </div>
        </div>
      </LegalSection>

      {/* Section 07 */}
      <LegalSection
        id="retention-rights"
        number="07"
        title="Data Retention & Client Control Rights"
        icon="clock"
      >
        <p>
          We retain corporate contact records and technical files only for as
          long as required to evaluate your quotation, execute contracted
          equipment supply, or fulfill statutory export record-keeping duties:
        </p>

        <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="tech-table min-w-[520px]">
              <thead>
                <tr>
                  <th className="w-[30%]">Record Category</th>
                  <th className="w-[46%]">Retention Policy</th>
                  <th className="w-[24%]">Authorized Access</th>
                </tr>
              </thead>
              <tbody>
                {RETENTION_SCHEDULE.map((row) => (
                  <tr key={row.recordType}>
                    <td className="font-bold text-[#0A1C33]">
                      {row.recordType}
                    </td>
                    <td className="text-slate-700">{row.retention}</td>
                    <td className="font-semibold text-[#0F4C81]">
                      {row.access}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-sm sm:text-base text-slate-700">
          <strong>Your Data Control Rights:</strong> Upon verifiable corporate
          request, you may ask GSB Export to (1) confirm what contact or project
          records we hold for your organization, (2) update inaccurate corporate
          or technical details, (3) execute a project-specific NDA, or (4)
          permanently delete submitted RFQ files where no binding commercial
          contract or statutory retention obligation applies.
        </p>
      </LegalSection>

      {/* Section 08 */}
      <LegalSection
        id="privacy-contact"
        number="08"
        title="Privacy Desk & Data Inquiries"
        icon="mail"
      >
        <p>
          If you have any questions regarding this Privacy Policy, wish to
          request deletion or correction of submitted RFQ records, or require a
          mutual NDA prior to sharing proprietary datasheets, please contact our
          administrative and privacy desk:
        </p>

        <div className="p-6 rounded-2xl bg-[#F6F9FC] border border-slate-200/90 grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C2410C] block">
              Data Controller &amp; Office
            </span>
            <p className="font-bold text-[#0A1C33] text-base mb-1">
              {COMPANY_INFO.legalName}
            </p>
            <p className="text-slate-700 mb-1">
              {COMPANY_INFO.headquarters.city},{" "}
              {COMPANY_INFO.headquarters.state},{" "}
              {COMPANY_INFO.headquarters.country}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 pt-1 mb-0">
              Hours: {COMPANY_INFO.contact.workingHours}
            </p>
          </div>

          <div className="space-y-2 sm:border-l sm:border-slate-200/80 sm:pl-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F4C81] block">
              Direct Privacy Channels
            </span>
            <p className="text-slate-700 mb-1">
              Primary Email:{" "}
              <a
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="font-bold text-[#0A1C33] hover:text-[#C2410C] underline underline-offset-2"
              >
                {COMPANY_INFO.contact.email}
              </a>
            </p>
            <p className="text-slate-700 mb-1">
              Support Desk:{" "}
              <a
                href={`mailto:${COMPANY_INFO.contact.supportEmail}`}
                className="font-bold text-[#0A1C33] hover:text-[#C2410C] underline underline-offset-2"
              >
                {COMPANY_INFO.contact.supportEmail}
              </a>
            </p>
            <p className="text-slate-700 mb-0">
              Telephone:{" "}
              <a
                href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                className="font-bold text-[#0A1C33] hover:text-[#C2410C]"
              >
                {COMPANY_INFO.contact.phone}
              </a>
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-600 flex items-center gap-2 mb-0">
          <Mail className="w-4 h-4 text-[#C2410C] shrink-0" />
          <span>
            Tip: Include your inquiry reference ID (e.g.,{" "}
            <span className="font-mono font-semibold text-[#0A1C33]">
              GSB-RFQ-2026-XXXXX
            </span>
            ) in the subject line for expedited record lookup.
          </span>
        </p>
      </LegalSection>

      {/* Interactive Clarification FAQ */}
      <LegalFaqAccordion
        title="Frequently Asked Data & NDA Questions"
        subtitle="Quick answers for procurement compliance teams and process engineers."
        items={PRIVACY_FAQS}
      />
    </LegalPageShell>
  );
}
