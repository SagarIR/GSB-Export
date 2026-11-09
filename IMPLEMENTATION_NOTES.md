# GSB Export — Implementation Notes & Technical Decisions

**Document Type:** Architectural Decisions, Technical Constraints & Schemas  
**Last Updated:** 2026-11-09  
**Status:** Complete & Production Ready  

---

## 1. Architectural Decisions

### 1.1 Strict Project Scope
- **Public-Facing B2B Corporate Website Only:** In strict accordance with the master plan, no admin dashboard, customer portal, authentication, or ERP integrations were created.
- **Server/Client Separation:** All content pages leverage React Server Components (RSC) for maximum performance, minimal JavaScript bundle, and superior SEO indexing. Client Components (`'use client'`) are reserved strictly for interactive UI elements (navigation drawer, dropdown menus, quotation forms, filters).
- **Type-Safe Static Content Architecture:** Product specifications, industry overviews, technical articles, and company information are maintained in structured TypeScript modules under `src/content/`. This guarantees immediate performance, zero database latency for content queries, full type safety, and painless future migration to a headless CMS if needed.

### 1.2 Color Palette & Design Tokens
In accordance with section 5.2 of the master plan:
- **Deep Navy:** `#10263D` (Primary brand color, dark surfaces, headers)
- **Steel Blue:** `#234D70` (Secondary corporate brand color, accents, borders)
- **Off White:** `#F3F5F7` (Primary background, section contrast)
- **Industrial Silver:** `#D8DEE5` (Subtle borders, technical dividers, muted surfaces)
- **Copper Accent:** `#D88B35` (High-visibility action calls, highlights, badges)
- **Graphite:** `#202A35` (Primary body text, high-contrast readable typography)

### 1.3 Database Architecture (Prisma + PostgreSQL)
Target schema for Enquiry and Attachment management:
- **Models:**
  - `Enquiry`: Stores both `RFQ` and `GENERAL` contact inquiries. Fields include reference number (`GSB-RFQ-2026-XXXXX`), contact info, detailed technical heat transfer parameters (fluid type, temperatures, pressure, flow rate, materials), and status.
  - `EnquiryAttachment`: Secure metadata storage for uploaded technical drawings and specifications (storage key, file name, mime type, size). Binaries are stored in private object storage, never in PostgreSQL.
- **Enums:**
  - `EnquiryType`: `RFQ`, `GENERAL`
  - `EnquiryStatus`: `NEW`, `REVIEWED`, `REPLIED`, `CLOSED`

### 1.4 API & Security Strategy
- **Zod Schema Validation:** Dual client and server-side validation ensuring complete sanitization and type enforcement.
- **Rate Limiting & Honeypot:** Spam mitigation via IP-based rate limiting (5 requests per 10 minutes) and invisible honeypot inputs.
- **Private Data Protection:** Zero public endpoints for enquiry retrieval. Server-only database queries.

---

## 2. API Endpoints
- `POST /api/enquiries`: Handles multipart/form-data and JSON RFQ submissions, validates parameters, uploads attachments to private storage, persists records to PostgreSQL, generates reference numbers, and dispatches notification emails.
- `POST /api/contact`: Handles general inquiry submissions.
- `GET /api/health`: Health-check endpoint reporting server and database connection status.

---

## 3. External Services & Configuration Requirements
- **PostgreSQL:** Connection string via `DATABASE_URL`.
- **Email Delivery:** Resend (`RESEND_API_KEY`) or SMTP credentials (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`).
- **Object Storage:** S3-compatible private bucket (`S3_BUCKET`, `S3_REGION`, `S3_ACCESS_KEY_ID`, `S3_SECRET_ACCESS_KEY`).
- **Offline / Graceful Fallback:** If database or SMTP credentials are not yet configured in local environments, the system safely logs transactions without failing or crashing.
