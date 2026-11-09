import { Hero } from "@/components/home/Hero";
import { CompanyIntro } from "@/components/home/CompanyIntro";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { EngineeringSection } from "@/components/home/EngineeringSection";
import { QualitySection } from "@/components/home/QualitySection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { GlobalSupplySection } from "@/components/home/GlobalSupplySection";
import { ResourcesSection } from "@/components/home/ResourcesSection";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <FeaturedProducts />
      <IndustriesSection />
      <EngineeringSection />
      <QualitySection />
      <WhyChooseUs />
      <GlobalSupplySection />
      <ResourcesSection />
      <FinalCta />
    </>
  );
}
