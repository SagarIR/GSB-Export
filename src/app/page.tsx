import { ReferenceHero } from "@/components/home/ReferenceHero";
import { ThreeStepsSection } from "@/components/home/ThreeStepsSection";
import { PersonaCardsSection } from "@/components/home/PersonaCardsSection";
import { ProductsGridSection } from "@/components/home/ProductsGridSection";
import { SolutionsMatrixSection } from "@/components/home/SolutionsMatrixSection";
import { FaqAccordionSection } from "@/components/home/FaqAccordionSection";
import { PreFooterCtaSection } from "@/components/home/PreFooterCtaSection";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* 1. Curved Hero Canvas with Twin Dashboard Visual & Center Node */}
      <ReferenceHero />

      {/* 2. "Three steps, three clicks." + Quick Thermal Sizing Estimator */}
      <ThreeStepsSection />

      {/* 3. "Built for international industrial procurement" (4 Persona Gradient Cards) */}
      <PersonaCardsSection />

      {/* 4. "Find the Products that fit your work." (3x3 Grid + Callout Banner) */}
      <ProductsGridSection />

      {/* 5. "Procuring heat exchangers is complex. GSB Export makes it seamless." (Sticky Split Matrix) */}
      <SolutionsMatrixSection />

      {/* 6. "Before you explore the Products." (FAQ Accordion) */}
      <FaqAccordionSection />

      {/* 7. "Let's engineer your heat transfer solution." (Pre-Footer Curved CTA) */}
      <PreFooterCtaSection />
    </div>
  );
}
