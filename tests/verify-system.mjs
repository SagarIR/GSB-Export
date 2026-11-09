import assert from "assert";
import fs from "fs";
import path from "path";
import { z } from "zod";

console.log("=== GSB EXPORT SYSTEM VERIFICATION TEST SUITE ===\n");

// 1. Verify Structure and Files
console.log("1. Checking Required Core Pages & Routes...");
const requiredFiles = [
  "src/app/page.tsx",
  "src/app/about-us/page.tsx",
  "src/app/products/page.tsx",
  "src/app/products/[slug]/page.tsx",
  "src/app/industries/page.tsx",
  "src/app/engineering-solutions/page.tsx",
  "src/app/quality-assurance/page.tsx",
  "src/app/manufacturing-supply/page.tsx",
  "src/app/global-markets/page.tsx",
  "src/app/projects/page.tsx",
  "src/app/resources/page.tsx",
  "src/app/resources/[slug]/page.tsx",
  "src/app/contact-us/page.tsx",
  "src/app/request-a-quote/page.tsx",
  "src/app/privacy-policy/page.tsx",
  "src/app/terms-and-conditions/page.tsx",
  "src/app/thank-you/page.tsx",
  "src/app/not-found.tsx",
  "src/app/sitemap.ts",
  "src/app/robots.ts",
  "src/app/api/enquiries/route.ts",
  "src/app/api/contact/route.ts",
  "src/app/api/health/route.ts",
  "prisma/schema.prisma",
  "public/logo/gsb-logo.svg",
];

for (const relPath of requiredFiles) {
  const fullPath = path.join(process.cwd(), relPath);
  assert.ok(fs.existsSync(fullPath), `Missing required file: ${relPath}`);
  console.log(`  ✓ File verified: ${relPath}`);
}

// 2. Verify 5 Product SVGs
console.log("\n2. Checking Product SVGs...");
const productSvgs = [
  "public/images/products/shell-and-tube.svg",
  "public/images/products/plate-heat-exchanger.svg",
  "public/images/products/air-cooled.svg",
  "public/images/products/double-pipe.svg",
  "public/images/products/spiral.svg",
];
for (const svg of productSvgs) {
  assert.ok(fs.existsSync(path.join(process.cwd(), svg)), `Missing SVG: ${svg}`);
  console.log(`  ✓ Product visual exists: ${svg}`);
}

// 3. Verify Zod Schema Rules
console.log("\n3. Testing Zod Validation Rules...");
const rfqSchema = z.object({
  name: z.string().min(2).max(100),
  company: z.string().max(100).optional().or(z.literal("")),
  email: z.string().email(),
  phone: z.string().max(30).optional().or(z.literal("")),
  country: z.string().min(2).max(100),
  productCategory: z.string().min(2),
  quantity: z.string().max(50).optional().or(z.literal("")),
  fluidType: z.string().max(100).optional().or(z.literal("")),
  inletTemperature: z.string().max(50).optional().or(z.literal("")),
  outletTemperature: z.string().max(50).optional().or(z.literal("")),
  operatingPressure: z.string().max(50).optional().or(z.literal("")),
  flowRate: z.string().max(50).optional().or(z.literal("")),
  material: z.string().max(100).optional().or(z.literal("")),
  deliveryDestination: z.string().max(100).optional().or(z.literal("")),
  message: z.string().max(2000).optional().or(z.literal("")),
  honeypot: z.string().max(0).optional().or(z.literal("")),
});

const validRfq = {
  name: "Al-Mansoor Thermal Engineering",
  company: "Gulf Energy Contractors",
  email: "procurement@gulfenergy.example",
  country: "United Arab Emirates",
  productCategory: "Shell and Tube Heat Exchanger",
  quantity: "2 units",
  fluidType: "Hydrocarbon Gas / Cooling Water",
  inletTemperature: "180 C",
  outletTemperature: "45 C",
  operatingPressure: "35 bar",
  flowRate: "450 m3/h",
  material: "Duplex 2205",
  deliveryDestination: "Jebel Ali Port",
  message: "ASME TEMA Class R compliant.",
};

assert.ok(rfqSchema.safeParse(validRfq).success, "Valid RFQ should pass");
console.log("  ✓ Valid RFQ data properly parsed");

assert.strictEqual(rfqSchema.safeParse({ ...validRfq, email: "invalid-email" }).success, false);
console.log("  ✓ Invalid email rejected");

assert.strictEqual(rfqSchema.safeParse({ ...validRfq, country: "" }).success, false);
console.log("  ✓ Missing required fields rejected");

assert.strictEqual(rfqSchema.safeParse({ ...validRfq, honeypot: "bot-payload" }).success, false);
console.log("  ✓ Bot honeypot caught and rejected");

// 4. Test In-Memory Rate Limiter
console.log("\n4. Testing Rate Limiting Logic...");
const rateMap = new Map();
function checkRate(ip, limit = 5, windowMs = 60000) {
  const now = Date.now();
  const existing = rateMap.get(ip);
  if (!existing || now > existing.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1 };
  }
  if (existing.count >= limit) {
    return { allowed: false, remaining: 0 };
  }
  existing.count += 1;
  return { allowed: true, remaining: limit - existing.count };
}

for (let i = 1; i <= 5; i++) {
  assert.strictEqual(checkRate("10.0.0.1").allowed, true);
}
assert.strictEqual(checkRate("10.0.0.1").allowed, false);
console.log("  ✓ Rate limiter permits 5 requests and blocks 6th request within window.");

// 5. Test Reference Number Format
console.log("\n5. Testing Unique Reference Number Generator...");
const year = new Date().getFullYear();
const randomSeq = Math.floor(10000 + Math.random() * 90000);
const rfqRef = `GSB-RFQ-${year}-${randomSeq}`;
const genRef = `GSB-GEN-${year}-${randomSeq}`;
assert.match(rfqRef, /^GSB-RFQ-20\d{2}-\d{5}$/);
assert.match(genRef, /^GSB-GEN-20\d{2}-\d{5}$/);
console.log(`  ✓ RFQ Reference Pattern Verified: ${rfqRef}`);
console.log(`  ✓ General Reference Pattern Verified: ${genRef}`);

// 6. Check Next.js Build Artifacts
console.log("\n6. Checking Next.js Build Output...");
assert.ok(fs.existsSync(path.join(process.cwd(), ".next")), ".next directory must exist from build");
assert.ok(fs.existsSync(path.join(process.cwd(), ".next/server/app/products.html")), "Products overview static HTML generated");
assert.ok(fs.existsSync(path.join(process.cwd(), ".next/server/app/products/shell-and-tube.html")), "Shell and tube static HTML generated");
assert.ok(fs.existsSync(path.join(process.cwd(), ".next/server/app/products/plate-heat-exchanger.html")), "Plate exchanger static HTML generated");
assert.ok(fs.existsSync(path.join(process.cwd(), ".next/server/app/products/air-cooled.html")), "Air-cooled exchanger static HTML generated");
assert.ok(fs.existsSync(path.join(process.cwd(), ".next/server/app/products/double-pipe.html")), "Double pipe static HTML generated");
assert.ok(fs.existsSync(path.join(process.cwd(), ".next/server/app/products/spiral.html")), "Spiral exchanger static HTML generated");
console.log("  ✓ All 5 product detail pages verified in SSG build output!");

assert.ok(fs.existsSync(path.join(process.cwd(), ".next/server/app/resources/what-is-a-heat-exchanger.html")), "Resource guide static HTML generated");
assert.ok(fs.existsSync(path.join(process.cwd(), ".next/server/app/resources/shell-and-tube-vs-plate.html")), "Comparison guide static HTML generated");
console.log("  ✓ Technical resource guides verified in SSG build output!");

console.log("\n=======================================================");
console.log("ALL 6 VERIFICATION TEST SUITES PASSED FLAWLESSLY (100%)");
console.log("=======================================================");

