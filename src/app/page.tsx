import type { Metadata } from "next";
import { ReferenceHero } from "@/components/home/ReferenceHero";
import { ThreeStepsSection } from "@/components/home/ThreeStepsSection";
import { PersonaCardsSection } from "@/components/home/PersonaCardsSection";
import { ProductsGridSection } from "@/components/home/ProductsGridSection";
import { SolutionsMatrixSection } from "@/components/home/SolutionsMatrixSection";
import { FaqAccordionSection } from "@/components/home/FaqAccordionSection";
import { PreFooterCtaSection } from "@/components/home/PreFooterCtaSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { HOME_FAQS } from "@/content/home-faq";
import {
  buildPageMetadata,
  buildFaqJsonLd,
  buildWebPageJsonLd,
} from "@/lib/seo";

const PAGE_DESCRIPTION =
  "Industrial heat exchanger supplier and exporter in Vadodara, India. Custom Shell & Tube, Plate, Air-Cooled, Finned Tube, Hairpin & Spiral units to ASME & TEMA.";

export const metadata: Metadata = buildPageMetadata({
  title: {
    absolute: "GSB Export | Industrial Heat Exchanger Supplier & Exporter India",
  },
  description: PAGE_DESCRIPTION,
  path: "/",
  keywords: [
    "Industrial Heat Exchanger Supplier",
    "Industrial Heat Exchanger Exporter India",
    "Shell and Tube Heat Exchanger",
    "Plate Heat Exchanger",
    "Air Cooled Heat Exchanger",
    "ASME TEMA Heat Exchanger Vadodara",
  ],
});

export default function HomePage() {
  const webPageJsonLd = buildWebPageJsonLd({
    name: "GSB Export — Industrial Heat Exchanger Solutions & Supply",
    description: PAGE_DESCRIPTION,
    path: "/",
    type: "WebPage",
  });
  const faqJsonLd = buildFaqJsonLd(HOME_FAQS);

  return (
    <div className="bg-white">
      <JsonLd data={webPageJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* 1. Curved Hero Canvas with Twin Dashboard Visual & Center Node */}
      <ReferenceHero />

      {/* 2. "Three steps, three clicks." + Quick Thermal Sizing Estimator */}
      <ThreeStepsSection />

      {/* 3. "Built for international industrial procurement" (4 Persona Gradient Cards) */}
      <PersonaCardsSection />

      {/* 4. "Find the Products that fit your work." (Equipment Grid + Callout Banner) */}
      <ProductsGridSection />

      {/* 5. "Procuring heat exchangers is complex. GSB Export makes it seamless." (Split Matrix) */}
      <SolutionsMatrixSection />

      {/* 6. "Frequently Asked Procurement Questions." (FAQ Accordion) */}
      <FaqAccordionSection />

      {/* 7. "Let's engineer your heat transfer solution." (Pre-Footer Curved CTA) */}
      <PreFooterCtaSection />
    </div>
  );
}
