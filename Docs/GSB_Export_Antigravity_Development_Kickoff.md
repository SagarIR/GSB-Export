# GSB Export --- Antigravity Website Development Kickoff

**Document type:** Start-development instruction and execution prompt\
**Project:** GSB Export\
**Version:** 1.0\
**Use:** Give this file to Google Antigravity at the start of website
development.

------------------------------------------------------------------------

# 1. Your Role

Act as a Senior Full-Stack Developer, UI/UX Designer, Software Architect
and QA Engineer.

You are responsible for developing the GSB Export corporate website
using the approved requirements in:

**`GSB_Export_Website_Phased_Development_Plan.md`**

Read that complete document before making implementation decisions. It
is the source of truth for scope, pages, brand, technical architecture,
database design, features, phases and acceptance criteria.

Do not replace the approved requirements with a generic template or a
different technology stack.

# 2. Project Objective

Develop a premium, international B2B corporate website for **GSB
Export**, an industrial heat exchanger equipment supplier and exporter.

The website must:

-   Build industrial buyer confidence.
-   Showcase five heat exchanger product categories.
-   Explain industries and applications.
-   Present engineering, quality and supply information accurately.
-   Generate RFQ and general enquiries.
-   Store enquiries securely in PostgreSQL.
-   Send business and customer email notifications when configured.
-   Be responsive, accessible, SEO-friendly and production-ready.

# 3. Confirmed Scope

Brand: GSB Export

Design: Premium industrial corporate

Website: Public-facing company website only

Admin dashboard: Not required

Customer login: Not required

Technology:

-   Next.js App Router
-   React
-   TypeScript
-   Tailwind CSS
-   shadcn/ui
-   PostgreSQL
-   Prisma
-   Zod
-   Next.js Route Handlers
-   Resend or configurable SMTP
-   S3-compatible private file storage
-   Vercel-compatible deployment

**Do not build:** admin dashboard, CRM, ERP, customer portal, public
authentication, internal order management or unnecessary back-office
features.

# 4. First Action --- Inspect the Workspace

Before writing or changing code:

1.  Inspect the current workspace and repository.
2.  Determine whether a project already exists.
3.  Read `package.json`, lockfile, Next.js configuration, TypeScript
    configuration, Tailwind configuration and existing source files.
4.  Identify the package manager and installed versions.
5.  Check existing routes, components, styles and assets.
6.  Identify existing working functionality that must be preserved.
7.  Check whether PostgreSQL, Prisma, email and storage credentials are
    available, without exposing secret values.
8.  Identify missing company assets and business information.
9.  Run existing lint, type-check and build commands if available.
10. Record the findings.

Do not delete, overwrite or recreate existing project files blindly.

If the workspace is empty, create the project using a stable Next.js App
Router setup with TypeScript.

# 5. Create Project Documentation

Create and maintain:

-   `README.md`
-   `PROJECT_PROGRESS.md`
-   `IMPLEMENTATION_NOTES.md`
-   `.env.example`

`PROJECT_PROGRESS.md` must record:

-   Current phase
-   Completed tasks
-   In-progress tasks
-   Pending tasks
-   Tests executed
-   Test results
-   Blockers
-   Next steps

Update this file after each phase.

Never include real secrets in documentation.

# 6. Implementation Sequence

Follow the approved phased development plan.

## Phase 0 --- Discovery

-   Inspect workspace.
-   Audit current setup.
-   Identify missing information.
-   Establish implementation plan.
-   Record baseline test/build status.

Stop and report any critical blocker before making risky changes.

## Phase 1 --- Foundation

-   Configure Next.js App Router.
-   Configure TypeScript.
-   Configure Tailwind CSS.
-   Configure shadcn/ui where appropriate.
-   Add fonts.
-   Add design tokens.
-   Add global layout.
-   Add reusable UI primitives.

Use the approved colours:

-   Deep Navy: `#10263D`
-   Steel Blue: `#234D70`
-   Off White: `#F3F5F7`
-   Industrial Silver: `#D8DEE5`
-   Copper Accent: `#D88B35`
-   Graphite: `#202A35`

Use Manrope or Plus Jakarta Sans for headings and Inter for body text.

## Phase 2 --- Global Layout and Homepage

Build:

-   Header
-   Desktop navigation
-   Products dropdown
-   Mobile menu
-   Footer
-   Homepage hero
-   Company introduction
-   Product highlights
-   Industry highlights
-   Engineering section
-   Quality section
-   Global supply section
-   Resources section
-   Enquiry CTA

Homepage headline:

**Engineering Heat. Connecting Industries.**

Homepage supporting copy:

"GSB Export provides industrial heat exchanger solutions and equipment
supply services for businesses across diverse industrial sectors through
reliable sourcing, technical coordination and quality-focused supply."

CTA buttons:

-   Explore Our Products
-   Request a Quotation

The homepage must look premium and industrial, not like a generic
small-business template.

## Phase 3 --- Corporate Pages

Implement:

-   `/about-us`
-   `/industries`
-   `/engineering-solutions`
-   `/quality-assurance`
-   `/manufacturing-supply`
-   `/global-markets`
-   `/projects`
-   `/resources`
-   `/contact-us`

Follow the page-specific requirements in the phased plan.

Do not invent company history, customer projects, certifications, staff,
factory ownership or international offices.

Use clear placeholders for information the owner has not supplied.

## Phase 4 --- Product Catalogue

Implement:

-   `/products`
-   `/products/shell-and-tube`
-   `/products/plate-heat-exchanger`
-   `/products/air-cooled`
-   `/products/double-pipe`
-   `/products/spiral`

Create reusable product components and structured content in TypeScript.

Each detail page must include:

-   Product introduction
-   Main image and gallery
-   Working principle
-   Applications
-   Features
-   Materials
-   Technical specifications when verified
-   Related products
-   Request a Quote CTA

Never invent technical ratings.

## Phase 5 --- Database and Forms

Configure PostgreSQL and Prisma.

Implement the `Enquiry` and `EnquiryAttachment` models specified in the
phased plan.

Create:

-   RFQ form
-   General contact form
-   Zod schemas
-   Server-side Route Handlers
-   Unique RFQ reference generation
-   Database persistence
-   Rate limiting
-   Spam protection
-   Safe validation and error handling

All enquiry submissions must be saved server-side.

Do not create public endpoints that retrieve private enquiries.

## Phase 6 --- File Uploads and Emails

Implement private object storage for technical documents.

Requirements:

-   Validate allowed file types.
-   Validate file size and number of files.
-   Verify actual file type where feasible.
-   Generate safe storage keys.
-   Keep files private.
-   Save attachment metadata in PostgreSQL.
-   Do not store raw file binaries in the database.

Implement email templates for:

1.  Internal business enquiry notification.
2.  Customer acknowledgement.
3.  RFQ reference confirmation.
4.  General contact notification.

If credentials are missing, implement the integration safely, document
the required configuration and mark the live integration as pending. Do
not simulate a successful email.

## Phase 7 --- SEO and Optimisation

Implement:

-   Unique metadata
-   Canonical URLs
-   XML sitemap
-   robots.txt
-   Open Graph
-   Structured data where appropriate
-   Semantic HTML
-   Image optimisation
-   Internal linking
-   Accessible forms
-   Responsive image sizing
-   Performance optimisation

## Phase 8 --- Testing

Test:

-   All routes
-   Header and footer
-   Mobile navigation
-   Product cards
-   Product detail pages
-   RFQ form
-   Contact form
-   Required field validation
-   Invalid email
-   Technical values
-   File uploads
-   Database persistence
-   Unique reference generation
-   Email integration
-   Rate limiting
-   Error states
-   Mobile and tablet layouts
-   Broken links
-   Missing images
-   Browser console
-   Production build

Fix issues before marking a phase complete.

## Phase 9 --- Deployment Preparation

Prepare:

-   Production environment variables
-   PostgreSQL connection
-   Prisma production migration instructions
-   Email provider configuration
-   Object storage configuration
-   Vercel deployment instructions
-   Domain and HTTPS setup instructions
-   Database backup instructions
-   Final README and handover notes

Do not deploy with placeholder credentials or claim integrations work
when they have not been tested.

# 7. Design Quality Expectations

Use premium industrial photography and a restrained corporate design.

The website should have:

-   Strong typography
-   Spacious sections
-   Clear visual hierarchy
-   Professional product photography
-   Consistent image ratios
-   Responsive product cards
-   Technical specification tables
-   Subtle motion
-   Accessible navigation
-   Clear enquiry CTAs

Study these references for inspiration:

-   https://www.alfalaval.com/
-   https://www.kelvion.com/
-   https://www.apiheattransfer.com/
-   https://www.heatexchanger.ae/
-   https://www.alfalaval.in/

Do not copy their source code, images, logos, text or proprietary
designs.

Use properly licensed or owner-supplied images. If temporary stock
images are used, make them easy to replace and do not present them as
photographs of GSB Export's own factory or products.

# 8. Business Accuracy Rules

This is an essential requirement.

Do not invent:

-   Company founding year
-   Company address
-   Telephone number
-   Business email
-   Certifications
-   ASME stamps
-   ISO certification
-   Manufacturing facilities
-   Manufacturing capacity
-   Staff numbers
-   Customer testimonials
-   Project references
-   Export statistics
-   International offices
-   Product performance specifications

Use clearly marked placeholders and maintain a list of information
requiring owner approval.

Distinguish between:

-   GSB Export's own services
-   Third-party manufacturer capabilities
-   Proposed or target markets
-   Actual completed projects
-   Illustrative technical applications

# 9. Engineering Standards and Technical Content

Mention ASME, TEMA, API and other relevant standards only in an accurate
contextual way.

Do not state that every product complies with every standard.

Applicable standards depend on the product, design, operating
conditions, destination and buyer specification.

Technical content must be checked for accuracy and must not present
unverified values as guaranteed capabilities.

# 10. Development Discipline

Follow these rules throughout the project:

1.  Work phase by phase.
2.  Inspect before modifying.
3.  Use reusable components.
4.  Keep TypeScript types meaningful.
5.  Keep database code server-only.
6.  Validate data on the server.
7.  Protect all secrets.
8.  Avoid unnecessary dependencies.
9.  Do not create admin functionality.
10. Do not leave buttons or forms nonfunctional.
11. Do not use fake data to simulate successful production workflows.
12. Run tests and builds regularly.
13. Update progress documentation.
14. Report blockers honestly.
15. Do not claim completion before acceptance tests pass.

# 11. How to Work With the Owner

At the beginning:

-   Present the workspace audit.
-   Present the proposed implementation plan.
-   List missing assets, business information and credentials.
-   Identify any assumptions.
-   Ask only for information that is genuinely required before the
    relevant implementation step.

Do not stop all frontend development merely because final contact
details or credentials are not yet available. Use clearly labelled
placeholders where safe.

Do not make irreversible changes without explaining the impact.

# 12. Final Definition of Done

The project is complete only when:

-   All 12 main pages work.
-   All five product detail pages work.
-   Navigation works on desktop and mobile.
-   Responsive design has been checked.
-   RFQ submissions are saved in PostgreSQL.
-   General contact submissions are saved in PostgreSQL.
-   RFQ references are unique.
-   Email notifications work with real configured credentials.
-   Secure attachments work with real configured storage.
-   SEO fundamentals are implemented.
-   No critical runtime errors remain.
-   Production build passes.
-   Deployment documentation is complete.
-   Known limitations are documented.
-   All public business claims have owner approval.

# 13. START NOW --- REQUIRED FIRST RESPONSE

Before coding, do the following:

1.  Read the complete `GSB_Export_Website_Phased_Development_Plan.md`.
2.  Inspect the current Antigravity workspace.
3.  Report the existing project structure and technology versions.
4.  Report what is already implemented, if anything.
5.  Identify missing assets, information and credentials.
6.  Provide a phase-by-phase implementation plan.
7.  Identify any risks or conflicts with the existing project.

Then begin Phase 1 when the workspace is ready.

**Do not attempt to build the entire website in one unstructured
code-generation step. Build, test and document each phase before moving
to the next.**
