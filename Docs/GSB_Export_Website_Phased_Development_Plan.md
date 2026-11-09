# GSB Export Website --- Phased Development Master Plan

**Document type:** Website requirements, architecture and phased
implementation specification\
**Project:** GSB Export\
**Version:** 1.0\
**Status:** Approved project baseline\
**Development environment:** Google Antigravity\
**Primary business model:** Industrial heat exchanger supplier and
exporter\
**Website type:** Public-facing international B2B corporate website

------------------------------------------------------------------------

## 1. Project Overview

Build a premium, responsive corporate website for **GSB Export**, an
India-based industrial B2B business focused on heat exchangers and
industrial heat-transfer equipment.

The website must:

1.  Establish a credible and professional international industrial
    brand.
2.  Present products and their applications clearly.
3.  Explain the company's supply, sourcing and technical coordination
    approach accurately.
4.  Attract industrial buyers, procurement teams, distributors and EPC
    contractors.
5.  Generate qualified enquiries through contact and Request for
    Quotation (RFQ) forms.
6.  Provide useful technical resources that support buyer education and
    organic search visibility.

### 1.1 Confirmed decisions

  Item                Confirmed decision
  ------------------- -------------------------------------------------
  Brand name          GSB Export
  Website style       Premium industrial corporate
  Website scope       Public company website only
  Admin dashboard     Not required
  Customer login      Not required
  Frontend            Next.js and React
  Language            TypeScript
  Styling             Tailwind CSS
  UI components       shadcn/ui where useful
  Database            PostgreSQL
  ORM                 Prisma
  Backend             Next.js server-side code and Route Handlers
  Deployment target   Vercel-compatible
  Enquiry handling    Secure database storage and email notifications

**Scope restriction:** Do not build an admin dashboard, CRM, ERP,
customer portal, internal order management system or public login system
in this phase.

### 1.2 Business positioning

Position GSB Export as an industrial heat exchanger equipment supplier
and exporter focused on reliable sourcing, technical coordination,
quality-focused supply and customer support.

Do not claim that GSB Export owns a factory, manufactures products,
holds certifications, has completed projects, serves named customers or
maintains overseas offices unless the owner verifies those facts.

Use honest wording such as "manufacturing partners", "sourcing network",
"supply capabilities" or "target markets" where appropriate. Do not
imply third-party capabilities are owned by GSB Export.

------------------------------------------------------------------------

## 2. Target Customers and Markets

### 2.1 Target customer groups

-   Oil and gas companies
-   Chemical and petrochemical plants
-   Pharmaceutical manufacturers
-   Food and beverage processors
-   Dairy processors
-   Power generation companies
-   HVAC contractors and system integrators
-   Water and wastewater operators
-   Industrial equipment distributors
-   EPC (Engineering, Procurement and Construction) contractors
-   Industrial procurement teams

### 2.2 Initial target markets

Potential markets to research and approach:

-   United Arab Emirates
-   Saudi Arabia
-   Oman
-   Bangladesh
-   Vietnam
-   Malaysia
-   Selected African markets
-   Selected European markets

These are target markets, not proof of existing operations or confirmed
demand. Avoid unsupported claims such as "serving 30 countries".

------------------------------------------------------------------------

## 3. Product Scope

The initial website catalogue will contain five product categories:

1.  Shell and Tube Heat Exchanger
2.  Plate Heat Exchanger
3.  Air-Cooled Heat Exchanger
4.  Double Pipe Heat Exchanger
5.  Spiral Heat Exchanger

### 3.1 Product catalogue requirements

Each product entry should support:

-   Product name
-   URL slug
-   Short introduction
-   Detailed description
-   Main product image
-   Optional image gallery
-   Working principle
-   Typical applications
-   Key features
-   Material options
-   Technical specification fields
-   Related products
-   Request a Quote link

Do not invent exact operating pressure, temperature, capacity,
dimensions, materials, standards compliance or performance ratings. Use
verified manufacturer data or clearly label information as indicative
and subject to engineering confirmation.

### 3.2 Product detail URL structure

-   `/products/shell-and-tube`
-   `/products/plate-heat-exchanger`
-   `/products/air-cooled`
-   `/products/double-pipe`
-   `/products/spiral`

Use a reusable product detail template driven by structured TypeScript
content.

------------------------------------------------------------------------

## 4. Sitemap and Page Requirements

The site will have 12 main pages, five product detail routes and
essential legal/utility pages.

### 4.1 Main pages

  ----------------------------------------------------------------------------------
                    No. Page             Suggested route            Main purpose
  --------------------- ---------------- -------------------------- ----------------
                      1 Home             `/`                        Brand
                                                                    introduction and
                                                                    lead generation

                      2 About Us         `/about-us`                Company profile,
                                                                    mission and
                                                                    approach

                      3 Products         `/products`                Product category
                                                                    catalogue

                      4 Industries We    `/industries`              Explain
                        Serve                                       industrial
                                                                    applications

                      5 Engineering      `/engineering-solutions`   Explain
                        Solutions                                   technical
                                                                    coordination and
                                                                    solutions

                      6 Quality          `/quality-assurance`       Explain quality
                        Assurance                                   and inspection
                                                                    approach

                      7 Manufacturing &  `/manufacturing-supply`    Explain sourcing
                        Supply                                      and supply
                        Capabilities                                workflow

                      8 Global Markets   `/global-markets`          Explain export
                                                                    focus and
                                                                    logistics

                      9 Projects &       `/projects`                Verified case
                        Applications                                studies or
                                                                    labelled
                                                                    illustrative
                                                                    applications

                     10 Resources        `/resources`               Technical guides
                                                                    and educational
                                                                    articles

                     11 Contact Us       `/contact-us`              General
                                                                    enquiries and
                                                                    contact
                                                                    information

                     12 Request a Quote  `/request-a-quote`         Technical RFQ
                                                                    lead capture
  ----------------------------------------------------------------------------------

### 4.2 Additional pages

-   `/privacy-policy`
-   `/terms-and-conditions`
-   `/thank-you`
-   A custom 404 page
-   Appropriate error states

### 4.3 Homepage section order

1.  Header and navigation
2.  Industrial hero image, headline and calls to action
3.  Company introduction
4.  Featured products
5.  Industries served
6.  Engineering solutions
7.  Quality assurance
8.  Why choose GSB Export
9.  Global supply capabilities
10. Technical resources
11. Final RFQ call to action
12. Footer

Suggested hero headline:

**Engineering Heat. Connecting Industries.**

Suggested supporting text:

"GSB Export provides industrial heat exchanger solutions and equipment
supply services for businesses across diverse industrial sectors through
reliable sourcing, technical coordination and quality-focused supply."

Primary calls to action:

-   Explore Our Products
-   Request a Quotation

### 4.4 About Us

Include:

-   Company introduction
-   Who we are
-   Vision and mission
-   Business model
-   Sourcing and supply approach
-   Commitment to quality
-   International business objectives
-   Contact call to action

Do not fabricate the company's founding date, staff, factory, history,
customer list or turnover.

### 4.5 Industries We Serve

Create sections for:

-   Oil and Gas
-   Chemical and Petrochemical
-   Food and Beverage
-   Pharmaceutical
-   Power Generation
-   HVAC and Refrigeration
-   Water and Wastewater

Explain the role of heat exchangers in each industry without claiming
unverified customer experience.

### 4.6 Engineering Solutions

Potential content:

-   Thermal design considerations
-   Heat-transfer calculations
-   Material selection
-   Operating temperature and pressure considerations
-   Custom equipment requirements
-   Engineering drawings and documentation
-   Technical consultation

Clearly distinguish services GSB Export itself provides from those
performed by external engineering or manufacturing partners.

### 4.7 Quality Assurance

Potential content:

-   Material traceability
-   Welding inspection
-   Pressure testing
-   Non-destructive testing (NDT)
-   Dimensional inspection
-   Inspection and test documentation
-   Applicable ASME, TEMA and API requirements

Do not display a certification logo, certificate number or compliance
claim unless verified and authorised. Explain that applicable standards
depend on equipment design, destination, buyer specification and
regulatory requirements.

### 4.8 Manufacturing & Supply Capabilities

Explain the supply workflow:

Enquiry → Technical Evaluation → Manufacturer Selection →
Production/Sourcing → Inspection → Export Packing → Shipment.

If GSB Export is not the manufacturer, say so clearly. Do not describe
partner facilities as company-owned.

### 4.9 Global Markets

Include:

-   India as the business/supply base, once confirmed
-   Target export regions
-   Export documentation coordination
-   Logistics and delivery coordination
-   International buyer support

Label unserved locations as target markets, not active offices or
established service locations.

### 4.10 Projects & Applications

Initially use technical application examples rather than invented
customer case studies.

Examples may include:

-   Shell and tube exchanger for process cooling
-   Plate heat exchanger for food processing
-   Air-cooled exchanger for industrial cooling

Clearly label these as "Illustrative Application" or "Typical
Application" unless actual project evidence is supplied.

### 4.11 Resources

Initial article topics:

-   What Is a Heat Exchanger?
-   Shell and Tube vs Plate Heat Exchanger
-   How Does a Heat Exchanger Work?
-   Counterflow vs Parallel Flow
-   Heat Exchanger Material Selection
-   Heat Exchanger Maintenance Guide
-   Understanding LMTD
-   Heat Exchanger Applications

Each article should have useful technical content, author/reviewer
details when available, metadata and relevant internal links.

### 4.12 Contact Us

Include only verified contact details:

-   Business email
-   Telephone
-   WhatsApp, if configured
-   Office address, once confirmed
-   Contact form
-   Map embed, only after the address is verified

Use placeholders during development rather than inventing contact
details.

### 4.13 Request a Quote

Create a professional, accessible RFQ form with customer details,
product selection and technical requirements. Full details are specified
in Section 9.

------------------------------------------------------------------------

## 5. Design System and Brand Direction

### 5.1 Visual direction

Create a premium industrial corporate website inspired by the clarity
and technical presentation of established industrial brands such as Alfa
Laval, Kelvion and API Heat Transfer. These are design references only.
Do not copy their layouts, branding, images, text or proprietary assets.

### 5.2 Brand colours

  Name                Hex         Use
  ------------------- ----------- -----------------------
  Deep Navy           `#10263D`   Primary brand colour
  Steel Blue          `#234D70`   Secondary colour
  Off White           `#F3F5F7`   Background
  Industrial Silver   `#D8DEE5`   Borders and surfaces
  Copper Accent       `#D88B35`   Restrained highlights
  Graphite            `#202A35`   Main text

### 5.3 Typography

-   Headings: Manrope or Plus Jakarta Sans
-   Body: Inter
-   Technical tables: Inter with tabular numerals

Use locally hosted or properly licensed fonts where possible.

### 5.4 Design principles

-   Spacious layouts
-   Clear information hierarchy
-   Strong typography
-   High-quality industrial photography
-   Consistent spacing
-   Clear product cards
-   Subtle borders and shadows
-   Minimal purposeful animation
-   Accessible colour contrast
-   Responsive galleries and tables
-   Strong, consistent CTA styling

Avoid excessive gradients, decorative animations, generic AI-looking
illustrations, cluttered layouts and unnecessary rounded cards.

### 5.5 Header

-   GSB Export wordmark on the left
-   Main navigation
-   Products dropdown
-   Prominent Request a Quote button
-   Mobile menu with accessible controls

### 5.6 Footer

-   Short company introduction
-   Product links
-   Industry links
-   Useful pages
-   Verified contact information
-   Configured social links
-   Privacy Policy and Terms
-   Copyright statement

------------------------------------------------------------------------

## 6. Technology Stack and Architecture

### 6.1 Required stack

  Layer          Technology                     Purpose
  -------------- ------------------------------ --------------------------------
  Framework      Next.js App Router             Website and server rendering
  UI             React                          Reusable components
  Language       TypeScript                     Type safety
  Styling        Tailwind CSS                   Responsive styling
  Components     shadcn/ui                      Accessible UI components
  Icons          Lucide React                   Interface icons
  Validation     Zod                            Form and server validation
  Database       PostgreSQL                     Enquiry records
  ORM            Prisma                         Database access and migrations
  Backend        Next.js Route Handlers         Enquiry endpoints
  Email          Resend or configurable SMTP    Notifications
  File storage   S3-compatible object storage   Secure attachments
  Hosting        Vercel-compatible              Application deployment

Use stable, mutually compatible package versions. Inspect the existing
project before changing dependencies or configuration.

### 6.2 Architecture

Public visitors → Next.js pages and components → server-side Route
Handlers and validation → PostgreSQL through Prisma.

For RFQ attachments, use secure object storage. Store file metadata and
storage keys in PostgreSQL, not file binaries.

Email notifications are sent server-side after successful database
persistence.

### 6.3 Server/client boundaries

-   Prefer React Server Components for content-first pages.
-   Use Client Components only where interaction requires them.
-   Keep Prisma and secrets server-only.
-   Never import server-only database code into browser components.
-   Do not expose private enquiry data through public endpoints.

------------------------------------------------------------------------

## 7. Suggested Project Structure

``` text
gsb-export/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── products/
│   │   ├── industries/
│   │   ├── engineering/
│   │   └── company/
│   ├── logo/
│   ├── icons/
│   └── brochures/
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── about-us/
│   │   ├── products/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   ├── industries/
│   │   ├── engineering-solutions/
│   │   ├── quality-assurance/
│   │   ├── manufacturing-supply/
│   │   ├── global-markets/
│   │   ├── projects/
│   │   ├── resources/
│   │   ├── contact-us/
│   │   ├── request-a-quote/
│   │   ├── privacy-policy/
│   │   ├── terms-and-conditions/
│   │   ├── thank-you/
│   │   ├── api/
│   │   │   ├── enquiries/
│   │   │   └── contact/
│   │   ├── layout.tsx
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── layout/
│   │   ├── home/
│   │   ├── products/
│   │   ├── industries/
│   │   ├── forms/
│   │   ├── sections/
│   │   └── ui/
│   ├── content/
│   │   ├── products.ts
│   │   ├── industries.ts
│   │   ├── resources.ts
│   │   └── company.ts
│   ├── lib/
│   │   ├── prisma.ts
│   │   ├── email.ts
│   │   ├── storage.ts
│   │   ├── validation.ts
│   │   ├── rate-limit.ts
│   │   └── utils.ts
│   └── styles/
│       └── globals.css
├── .env.example
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

Adapt to the installed Next.js version and established project
conventions. Avoid creating duplicate configuration or unnecessary
abstraction.

------------------------------------------------------------------------

## 8. Database Design

The website does not require database-backed product or article
management in the first release. Maintain products, industries,
resources and company content in structured TypeScript files.

PostgreSQL stores customer enquiries and attachment metadata.

### 8.1 Enquiry model

Required fields:

-   `id`
-   `referenceNumber`
-   `type`
-   `status`
-   `fullName`
-   `companyName`
-   `email`
-   `phone`
-   `country`
-   `companyWebsite`
-   `productCategory`
-   `quantity`
-   `fluidType`
-   `inletTemperature`
-   `outletTemperature`
-   `operatingPressure`
-   `flowRate`
-   `material`
-   `deliveryDestination`
-   `message`
-   `createdAt`
-   `updatedAt`

Enums:

-   `EnquiryType`: `RFQ`, `GENERAL`
-   `EnquiryStatus`: `NEW`, `REVIEWED`, `REPLIED`, `CLOSED`

### 8.2 EnquiryAttachment model

Required fields:

-   `id`
-   `enquiryId`
-   `fileName`
-   `storageKey`
-   `mimeType`
-   `fileSize`
-   `createdAt`

Use a relation to `Enquiry`, with suitable deletion behaviour and
indexes.

### 8.3 Prisma requirements

-   Use PostgreSQL.
-   Use Prisma migrations.
-   Use Decimal for technical decimal values.
-   Add indexes for date, type, status and email where useful.
-   Generate unique RFQ references, for example `GSB-RFQ-2026-00001`.
-   Never expose enquiry records through public read APIs.
-   Do not create user, role, authentication or admin tables in this
    phase.

The RFQ status field is retained for future integration; it does not
imply an admin dashboard.

------------------------------------------------------------------------

## 9. Enquiry and RFQ Functionality

### 9.1 RFQ customer information

-   Full name (required)
-   Company name
-   Business email (required)
-   Contact number
-   Country
-   Company website (optional)

### 9.2 RFQ technical requirements

-   Product category (required)
-   Quantity
-   Fluid type
-   Inlet temperature
-   Outlet temperature
-   Operating pressure
-   Flow rate
-   Material requirements
-   Delivery destination
-   Additional requirements/message
-   Technical drawing or specification attachment

Do not force customers to provide every technical value if they do not
know it. Allow optional technical fields and explain that missing
information can be clarified later.

### 9.3 Contact form

-   Full name
-   Company name
-   Email
-   Phone
-   Country
-   Subject
-   Message

Store as `GENERAL` enquiry using the same enquiry model.

### 9.4 Submission flow

1.  Validate fields in the browser for usability.
2.  Validate all fields again on the server with Zod.
3.  Apply rate limiting and spam controls.
4.  Validate attachment type, size and count.
5.  Upload attachments to private object storage.
6.  Save enquiry and attachment metadata in PostgreSQL.
7.  Generate a unique enquiry reference.
8.  Send an internal notification to the configured GSB Export email.
9.  Send a customer acknowledgement.
10. Show a success page with the enquiry reference.

If email delivery fails after the database write, do not discard the
enquiry. Log the failure safely and provide an operationally appropriate
retry or alert mechanism.

### 9.5 File security

-   Allow only explicitly approved file types, such as PDF, JPG, PNG and
    selected office document formats if required.
-   Enforce configurable file size and count limits.
-   Verify file type rather than trusting filename extensions alone.
-   Use randomised storage keys.
-   Keep uploaded objects private.
-   Do not expose permanent public links to technical drawings.
-   Use short-lived signed URLs when access is required.
-   Never execute uploaded files.

### 9.6 Spam and abuse protection

-   Rate limiting
-   Honeypot field or suitable spam control
-   Server-side validation
-   Reasonable submission limits
-   Safe error responses
-   Avoid exposing database details

------------------------------------------------------------------------

## 10. Email System

Use Resend or a configurable SMTP provider.

Required email types:

1.  Internal new-enquiry notification
2.  Customer acknowledgement
3.  RFQ reference confirmation
4.  General contact notification

Use branded, responsive email templates.

Environment variables should include provider credentials, sender
address, business notification address and public site URL.

Never hardcode API keys, SMTP passwords or private credentials.

------------------------------------------------------------------------

## 11. SEO and Content Requirements

Implement:

-   Unique title and meta description per page
-   Semantic HTML
-   One descriptive H1 per page
-   Canonical URLs
-   XML sitemap
-   robots.txt
-   Open Graph metadata
-   Optimised images and descriptive alt text
-   Internal linking
-   Breadcrumbs where useful
-   Organisation structured data using verified business details
-   Product structured data only where the page and data qualify
-   Clean URLs

Initial keyword themes:

-   Industrial Heat Exchanger Supplier
-   Shell and Tube Heat Exchanger Supplier
-   Plate Heat Exchanger Supplier
-   Industrial Heat Exchanger Exporter India
-   Air Cooled Heat Exchanger
-   Heat Exchanger for Chemical Industry
-   Industrial Heat Transfer Solutions
-   Custom Heat Exchanger Solutions

Avoid keyword stuffing and unsupported claims.

------------------------------------------------------------------------

## 12. Performance, Accessibility and Security

### 12.1 Performance

-   Use Next.js image optimisation.
-   Use responsive image sizes.
-   Lazy-load below-the-fold media where appropriate.
-   Optimise fonts.
-   Minimise unnecessary client-side JavaScript.
-   Avoid layout shifts.
-   Optimise Core Web Vitals.

### 12.2 Accessibility

-   Semantic landmarks
-   Keyboard navigation
-   Visible focus states
-   Accessible labels
-   Helpful form errors
-   Appropriate contrast
-   Alt text for meaningful images
-   Accessible mobile navigation

### 12.3 Security

-   Server-only database access
-   Environment variable protection
-   HTTPS
-   Server-side validation
-   Rate limiting
-   Secure uploads
-   Safe error handling
-   Database backups
-   Dependency review
-   No public enquiry retrieval endpoint

------------------------------------------------------------------------

## 13. Development Phases and Deliverables

### Phase 0 --- Project Discovery and Readiness

Tasks:

-   Inspect the existing Antigravity workspace.
-   Identify whether a Next.js project already exists.
-   Inspect package versions and project structure.
-   Confirm Node.js and package manager.
-   Identify missing business assets and information.
-   Create a project implementation plan.
-   Establish baseline build and lint checks.

Deliverables:

-   Workspace audit
-   Missing-information list
-   Development plan
-   Confirmed technical baseline

Acceptance:

-   Existing project is understood before destructive changes.
-   No existing working files are overwritten without review.

### Phase 1 --- Foundation and Design System

Tasks:

-   Set up or verify Next.js App Router.
-   Configure TypeScript and Tailwind CSS.
-   Install and configure shadcn/ui where useful.
-   Establish fonts and brand colours.
-   Configure global styles.
-   Create reusable buttons, containers, headings, cards and section
    layouts.
-   Create global layout.

Deliverables:

-   Working project foundation
-   Brand design tokens
-   Reusable UI components
-   Global layout

Acceptance:

-   Production build passes.
-   No unnecessary dependencies or duplicated configuration.

### Phase 2 --- Global Navigation and Homepage

Tasks:

-   Build desktop header.
-   Build mobile navigation.
-   Build dropdown navigation.
-   Build footer.
-   Build homepage hero.
-   Build company introduction.
-   Build featured products.
-   Build industries section.
-   Build engineering and quality sections.
-   Build global supply section.
-   Build final CTA.

Deliverables:

-   Fully responsive homepage
-   Functional header and footer

Acceptance:

-   All navigation links work.
-   CTA buttons route correctly.
-   Layout works on mobile, tablet and desktop.

### Phase 3 --- Corporate Pages

Build:

-   About Us
-   Industries
-   Engineering Solutions
-   Quality Assurance
-   Manufacturing & Supply
-   Global Markets
-   Projects & Applications
-   Resources
-   Contact Us

Acceptance:

-   Each page has a distinct purpose and useful content.
-   No fabricated company claims or project evidence.
-   Consistent design and responsive behaviour.

### Phase 4 --- Product Catalogue

Build:

-   Products overview
-   Five product cards
-   Five product detail routes
-   Reusable detail template
-   Technical tables
-   Image galleries
-   Applications
-   Related products
-   Product-specific RFQ links

Acceptance:

-   All five product routes work.
-   Product content is structured and reusable.
-   Unverified specifications are not presented as facts.

### Phase 5 --- Database and Enquiry Backend

Tasks:

-   Configure PostgreSQL.
-   Configure Prisma.
-   Implement schema and migrations.
-   Implement enquiry API Route Handlers.
-   Implement Zod validation.
-   Implement RFQ form.
-   Implement general contact form.
-   Generate unique references.
-   Add rate limiting and spam controls.

Acceptance:

-   Valid enquiry persists in PostgreSQL.
-   Invalid enquiry is rejected safely.
-   Public visitors cannot retrieve private enquiry records.
-   Errors are handled correctly.

### Phase 6 --- Attachments and Email

Tasks:

-   Configure private object storage.
-   Implement upload validation.
-   Store attachment metadata.
-   Implement internal email notification.
-   Implement customer acknowledgement.
-   Add failure logging and safe handling.

Acceptance:

-   Approved files upload successfully.
-   Invalid files are rejected.
-   Emails are sent when credentials are configured.
-   Database records remain intact if an email provider fails.

### Phase 7 --- SEO, Performance and Accessibility

Tasks:

-   Metadata
-   Canonicals
-   Sitemap
-   robots.txt
-   Open Graph
-   Structured data
-   Image optimisation
-   Accessibility review
-   Core Web Vitals review

Acceptance:

-   Pages are indexable as intended.
-   Metadata is unique and relevant.
-   No obvious accessibility or performance regressions.

### Phase 8 --- Testing and Quality Assurance

Test:

-   All navigation
-   All routes
-   Product cards and details
-   Forms
-   Validation
-   Database writes
-   RFQ reference generation
-   Email integration
-   File uploads
-   Mobile layouts
-   Broken links
-   Missing images
-   Console errors
-   Production build
-   Security controls

Deliverables:

-   Test report
-   Fixed defects
-   Remaining limitations list

### Phase 9 --- Deployment and Handover

Tasks:

-   Configure production environment variables.
-   Configure managed PostgreSQL.
-   Run production migrations safely.
-   Configure email provider.
-   Configure private object storage.
-   Deploy to Vercel or approved hosting.
-   Configure domain and HTTPS.
-   Verify production forms.
-   Document backups and maintenance.

Deliverables:

-   Production website
-   Deployment guide
-   Environment variable guide
-   README
-   Final acceptance report

------------------------------------------------------------------------

## 14. Reference Websites

Use these websites to study industrial B2B content, navigation, product
presentation and visual hierarchy:

1.  Alfa Laval --- https://www.alfalaval.com/
2.  Kelvion --- https://www.kelvion.com/
3.  API Heat Transfer --- https://www.apiheattransfer.com/
4.  United Cooling Systems --- https://www.heatexchanger.ae/
5.  Alfa Laval India --- https://www.alfalaval.in/

These are inspiration references only. Do not copy copyrighted text,
images, code or branding.

------------------------------------------------------------------------

## 15. Business Assets Required Before Launch

The owner should supply or approve:

-   Final GSB Export logo
-   Verified business name and legal entity details
-   Business address
-   Business email
-   Telephone and WhatsApp number
-   Company introduction
-   Approved product photographs
-   Manufacturer product catalogues
-   Verified technical specifications
-   Material and testing information
-   Applicable certifications and permissions
-   Target markets
-   Privacy and legal information
-   Domain name

Use clearly marked placeholders until details are confirmed. Do not
invent them.

------------------------------------------------------------------------

## 16. Final Acceptance Criteria

The website is ready for launch only when:

-   All 12 main pages are implemented.
-   All five product detail routes work.
-   Header, footer and mobile navigation work.
-   Responsive layouts are tested.
-   RFQ form works end to end.
-   Contact form works end to end.
-   Enquiries persist in PostgreSQL.
-   Unique enquiry references are generated.
-   Email notifications work with configured credentials.
-   Secure attachments work with configured storage.
-   SEO fundamentals are implemented.
-   No critical broken links or runtime errors remain.
-   Production build passes.
-   Environment and deployment documentation is complete.
-   All public business claims are verified.

**Definition of done:** A visually polished, technically functional,
secure and deployable international corporate website that generates
enquiries for GSB Export without an admin dashboard.

------------------------------------------------------------------------

## 17. Project Operating Rules for Antigravity

1.  Inspect before modifying.
2.  Work phase by phase.
3.  Do not skip acceptance checks.
4.  Keep a progress log.
5.  Use reusable components.
6.  Avoid unnecessary dependencies.
7.  Do not fabricate business data.
8.  Do not expose secrets.
9.  Do not create admin functionality.
10. Do not claim completion before testing.
11. Keep documentation current.
12. Report blockers and missing credentials clearly.
