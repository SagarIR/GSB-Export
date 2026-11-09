# GSB Export — Industrial Heat Exchanger Solutions & Supply

A professional, high-performance, international B2B corporate website for **GSB Export**, an India-based industrial heat exchanger equipment supplier and exporter.

---

## 1. Project Overview

GSB Export coordinates sourcing, technical evaluation, engineering consultation, quality assurance, and international supply for industrial heat exchanger systems, including:
- **Shell and Tube Heat Exchangers** (TEMA Class R, C, B)
- **Plate Heat Exchangers** (Gasketed, Semi-Welded, Brazed)
- **Air-Cooled Heat Exchangers** (Fin-Fan Coolers to API 661)
- **Double Pipe Heat Exchangers** (Hairpin Multitube)
- **Spiral Heat Exchangers** (Single-channel anti-fouling geometry)

---

## 2. Technology Stack

- **Framework:** Next.js 14 App Router (React Server Components)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom industrial design tokens
- **Brand Colors:** Deep Navy (`#10263D`), Steel Blue (`#234D70`), Off White (`#F3F5F7`), Industrial Silver (`#D8DEE5`), Copper Accent (`#D88B35`), Graphite (`#202A35`)
- **Icons:** Lucide React
- **Validation:** Zod
- **Database:** PostgreSQL with Prisma ORM
- **Email:** Nodemailer / SMTP / Resend (configurable)
- **File Storage:** Private S3-compatible object storage with local fallback

---

## 3. Directory Structure

```text
gsb-export/
├── prisma/
│   └── schema.prisma           # Prisma PostgreSQL schema (Enquiry & Attachments)
├── public/
│   ├── logo/
│   │   └── gsb-logo.svg        # Vector brand emblem & wordmark
│   └── images/
│       ├── hero/               # Industrial plant schematics
│       ├── products/           # 5 engineering product layout SVGs
│       └── industries/         # 7 industrial application SVGs
├── src/
│   ├── app/
│   │   ├── page.tsx            # 11-section industrial corporate homepage
│   │   ├── layout.tsx          # Global layout, header, footer & JSON-LD
│   │   ├── about-us/           # Corporate profile, mission, transparent model
│   │   ├── products/           # Products catalogue & 5 detail pages
│   │   │   └── [slug]/         # Dynamic SSG product detail template
│   │   ├── industries/         # 7 process sectors & equipment roles
│   │   ├── engineering-solutions/ # Thermal sizing, LMTD & codes
│   │   ├── quality-assurance/  # 6-pillar QA system & 5-stage ITP
│   │   ├── manufacturing-supply/ # 7-stage supply workflow & packing
│   │   ├── global-markets/     # Export hubs & target corridors
│   │   ├── projects/           # 4 technical application benchmarks
│   │   ├── resources/          # Knowledge base & 8 technical guides
│   │   │   └── [slug]/         # Dynamic SSG technical article template
│   │   ├── contact-us/         # General contact form & verified details
│   │   ├── request-a-quote/    # Multi-section RFQ form & drawing upload
│   │   ├── privacy-policy/     # Legal privacy & data security terms
│   │   ├── terms-and-conditions/ # Commercial terms of use
│   │   ├── thank-you/          # Submission acknowledgement with ref no.
│   │   ├── not-found.tsx       # Custom industrial 404 page
│   │   ├── sitemap.ts          # XML sitemap indexing all 36 routes
│   │   ├── robots.ts           # Robots.txt configuration
│   │   └── api/
│   │       ├── enquiries/      # RFQ submission & attachment handler
│   │       ├── contact/        # General contact handler
│   │       └── health/         # Healthcheck endpoint
│   ├── components/
│   │   ├── layout/             # Header, Footer, Mobile Navigation
│   │   ├── home/               # Modular homepage sections
│   │   ├── forms/              # RFQ and Contact form components
│   │   └── ui/                 # Container, SectionHeading, Badges
│   ├── content/                # Structured TypeScript data modules
│   │   ├── products.ts
│   │   ├── industries.ts
│   │   ├── engineering.ts
│   │   ├── quality.ts
│   │   ├── capabilities.ts
│   │   ├── projects.ts
│   │   ├── resources.ts
│   │   └── company.ts
│   ├── lib/
│   │   ├── prisma.ts           # PrismaClient singleton & health check
│   │   ├── validation.ts       # Zod schemas for RFQ & Contact
│   │   ├── rate-limit.ts       # In-memory IP rate limiter
│   │   ├── storage.ts          # Attachment upload validator & storage
│   │   ├── email.ts            # Branded notification email templates
│   │   └── utils.ts            # Styling & reference formatter utilities
│   └── styles/
│       └── globals.css         # Tailwind base styles & industrial tokens
├── tests/
│   └── verify-system.mjs       # Automated system verification test suite
├── .env.example                # Environment variables template
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 4. Getting Started

### Prerequisites
- Node.js 18.18+ or 20.x (tested on v20.12.1)
- npm or pnpm
- PostgreSQL database (optional for offline mock mode, required for persistence)

### Installation
```bash
# Install dependencies
npm install

# Copy environment variables template
cp .env.example .env

# Generate Prisma client
npx prisma generate

# Run database migrations (when PostgreSQL is configured)
npx prisma db push

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

---

## 5. Verification & Testing

Execute the automated test suite to verify all content schemas, Zod validation rules, rate limiting, and file upload validation:
```bash
node tests/verify-system.mjs
```

Run TypeScript compilation check:
```bash
npx tsc --noEmit
```

Run production build:
```bash
npm run build
```

---

## 6. Deployment Guide

### Vercel Deployment
1. Connect your GitHub/GitLab repository to Vercel.
2. In the Vercel Project Settings, add the environment variables defined in `.env.example`:
   - `DATABASE_URL` (e.g. from Neon, Supabase, or AWS RDS)
   - `BUSINESS_NOTIFICATION_EMAIL`
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` (or Resend credentials)
   - `S3_BUCKET_NAME`, `S3_REGION`, `S3_ACCESS_KEY_ID`, `S3_SECRET_ACCESS_KEY`
3. Build command: `npm run build`
4. Output directory: `.next`

### Database Backups & Maintenance
- Nightly PostgreSQL logical backups via `pg_dump` are recommended for the `Enquiry` and `EnquiryAttachment` tables.
- Attachments in private object storage should be retained according to project document retention policies.
