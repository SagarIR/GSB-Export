import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Flame,
  Droplets,
  Utensils,
  Pill,
  Zap,
  Wind,
  Waves,
  Factory,
  Cpu,
  Layers,
  AlertTriangle,
} from "lucide-react";
import { INDUSTRIES, getIndustryBySlug } from "@/content/industries";
import { PRODUCTS, getProductBySlug } from "@/content/products";
import { Container } from "@/components/ui/Container";

interface IndustryPageProps {
  params: {
    slug: string;
  };
}

const iconMap: Record<string, React.ElementType> = {
  "oil-gas": Flame,
  "chemical-petrochemical": Droplets,
  "food-beverage": Utensils,
  pharmaceutical: Pill,
  "power-generation": Zap,
  "hvac-refrigeration": Wind,
  "water-wastewater": Waves,
};

export function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({
    slug: industry.slug,
  }));
}

export function generateMetadata({ params }: IndustryPageProps): Metadata {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) {
    return {
      title: "Industry Not Found | GSB Export",
    };
  }

  return {
    title: `${industry.name} | Heat Exchanger Solutions | GSB Export`,
    description: industry.shortDescription,
    openGraph: {
      title: `${industry.name} | GSB Export`,
      description: industry.shortDescription,
      type: "website",
    },
  };
}

export default function IndustryDetailPage({ params }: IndustryPageProps) {
  const industry = getIndustryBySlug(params.slug);

  if (!industry) {
    notFound();
  }

  const Icon = iconMap[industry.id] || Flame;
  const otherIndustries = INDUSTRIES.filter((ind) => ind.slug !== industry.slug);

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy py-12 sm:py-16 text-white relative border-b border-steel/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-silver mb-4">
              <Link href="/" className="hover:text-copper transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/industries" className="hover:text-copper transition-colors">
                Industries
              </Link>
              <span>/</span>
              <span className="text-copper font-medium">{industry.name}</span>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold tracking-widest uppercase bg-copper/20 text-copper-light border border-copper/40 mb-3">
              Sector Application Engineering
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-sans">
              {industry.name}
            </h1>

            <p className="mt-3 text-base sm:text-lg text-copper-light font-medium">
              {industry.tagline}
            </p>

            <p className="mt-4 text-sm sm:text-base text-silver leading-relaxed max-w-3xl">
              {industry.shortDescription}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href={`/request-a-quote?industry=${encodeURIComponent(industry.name)}`}
                className="btn-copper text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Request Sector RFQ</span>
              </Link>

              <Link
                href="#recommended-equipment"
                className="btn-outline-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full"
              >
                <span>Recommended Equipment</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Hero Visual Banner */}
      <section className="bg-offwhite border-b border-slate-200/80 py-8 sm:py-12">
        <Container>
          <div className="relative aspect-[21/9] min-h-[260px] sm:min-h-[360px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-md">
            <Image
              src={industry.image}
              alt={`${industry.name} Facility Overview`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />

            {/* Top Badges */}
            <div className="absolute top-4 left-4 flex items-center gap-2.5">
              <div className="bg-white/20 backdrop-blur-md p-2.5 rounded-xl border border-white/30 text-[#F36C21] shadow-xs">
                <Icon className="w-6 h-6" />
              </div>
              <div className="hidden sm:block bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/20 text-xs font-semibold text-white">
                Industrial Process Environment
              </div>
            </div>

            {/* Bottom Floating Stats / Badges */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 text-white">
              <div className="max-w-xl">
                <p className="text-xs sm:text-sm font-medium text-silver drop-shadow">
                  Engineered to meet international quality, ASME Section VIII, and sanitary safety codes.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {industry.standardsAndCompliance.slice(0, 3).map((std, sIdx) => (
                  <span
                    key={sIdx}
                    className="bg-black/60 backdrop-blur-md border border-white/25 px-2.5 py-1 rounded text-[11px] font-mono font-medium text-white shadow-2xs"
                  >
                    {std}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Body */}
      <section className="py-14 sm:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Sector Technical Insights */}
            <div className="lg:col-span-8 space-y-12">
              {/* Process Overview & Thermal Context */}
              <div>
                <h2 className="text-xl font-bold text-navy border-b border-silver/40 pb-2.5 mb-3 flex items-center gap-2">
                  <Factory className="w-5 h-5 text-copper" />
                  <span>Sector Process Overview &amp; Thermal Demands</span>
                </h2>
                <div className="text-sm sm:text-base text-graphite/90 leading-relaxed bg-offwhite p-6 rounded-2xl border border-silver/60">
                  {industry.overview}
                </div>
              </div>

              {/* Primary Exchanger Roles & Process Duties */}
              <div>
                <h2 className="text-xl font-bold text-navy border-b border-silver/40 pb-2.5 mb-4 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-copper" />
                  <span>Primary Exchanger Roles &amp; Critical Process Duties</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-4">
                  Heat exchangers serve pivotal operational roles in {industry.name}, safeguarding process equilibrium and product yield:
                </p>

                <div className="space-y-3">
                  {industry.exchangerRoles.map((role, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-silver/60 bg-white shadow-2xs flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-copper shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs sm:text-sm font-semibold text-navy block">
                          Duty 0{idx + 1}
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-0.5">
                          {role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operating Challenges & Engineering Countermeasures */}
              <div>
                <h2 className="text-xl font-bold text-navy border-b border-silver/40 pb-2.5 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-[#F36C21]" />
                  <span>Operating Challenges &amp; Metallurgical Countermeasures</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-4">
                  Severe operating environments require specialized metallurgical selection, velocity control, and non-destructive examination:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {industry.keyChallenges.map((challenge, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-4 rounded-xl bg-offwhite border border-silver/70 flex flex-col justify-between"
                    >
                      <div className="flex items-start gap-2.5 mb-2">
                        <span className="w-2 h-2 rounded-full bg-[#F36C21] shrink-0 mt-1.5" />
                        <span className="text-xs sm:text-sm font-bold text-navy">
                          Challenge {cIdx + 1}
                        </span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed pl-4.5">
                        {challenge}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Equipment Architectures */}
              <div id="recommended-equipment" className="scroll-mt-24">
                <h2 className="text-xl font-bold text-navy border-b border-silver/40 pb-2.5 mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-copper" />
                  <span>Recommended Heat Exchanger Architectures</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Based on thermal profiles, allowable pressure drops, and corrosion dynamics in {industry.name}, we recommend the following equipment configurations:
                </p>

                <div className="space-y-4">
                  {industry.recommendedExchangers.map((rec, rIdx) => {
                    const matchedProduct = getProductBySlug(rec.slug);

                    return (
                      <div
                        key={rIdx}
                        className="p-5 sm:p-6 rounded-2xl border border-slate-200/90 bg-white hover:border-slate-300 shadow-2xs hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6 group"
                      >
                        <div className="flex items-start gap-4 flex-1">
                          {matchedProduct && (
                            <div className="relative w-20 h-20 bg-slate-50 rounded-xl overflow-hidden border border-slate-200 shrink-0 p-2 hidden sm:flex items-center justify-center">
                              <Image
                                src={matchedProduct.image}
                                alt={rec.name}
                                width={80}
                                height={80}
                                className="object-contain max-h-16 w-auto"
                              />
                            </div>
                          )}

                          <div className="space-y-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#F36C21] block">
                              Architecture Recommendation 0{rIdx + 1}
                            </span>
                            <h3 className="text-base sm:text-lg font-bold text-navy group-hover:text-[#F36C21] transition-colors">
                              <Link href={`/products/${rec.slug}`}>
                                {rec.name}
                              </Link>
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                              {rec.reason}
                            </p>
                          </div>
                        </div>

                        <div className="flex sm:flex-col items-center gap-2 shrink-0">
                          <Link
                            href={`/products/${rec.slug}`}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-[#0A1C33] bg-slate-100 hover:bg-[#0A1C33] hover:text-white transition-all w-full sm:w-auto text-center justify-center"
                          >
                            <span>Technical Specs</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>

                          <Link
                            href={`/request-a-quote?category=${encodeURIComponent(rec.name)}`}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#0A3D78] hover:bg-[#F36C21] transition-all w-full sm:w-auto text-center justify-center shadow-2xs"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            <span>Get Quote</span>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Applicable International Standards & Compliance */}
              <div>
                <h2 className="text-xl font-bold text-navy border-b border-silver/40 pb-2.5 mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-copper" />
                  <span>Applicable Codes &amp; Regulatory Standards</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {industry.standardsAndCompliance.map((std, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-offwhite rounded-xl border border-silver/60 flex items-center gap-2.5 text-xs text-graphite font-semibold"
                    >
                      <CheckCircle2 className="w-4 h-4 text-copper shrink-0" />
                      <span>{std}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              {/* Sector RFQ Box */}
              <div className="bg-navy rounded-2xl p-6 text-white border border-steel/60 shadow-industrial-lg">
                <span className="text-copper text-xs font-bold uppercase tracking-wider block mb-1">
                  Procurement Consultation
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  Request an RFQ for {industry.name.split("(")[0].trim()}
                </h3>
                <p className="text-xs text-silver leading-relaxed mb-5">
                  Have process conditions, heat duty sheets, or equipment revamp schedules? Submit your inquiry directly to our engineering coordination desk.
                </p>

                <Link
                  href={`/request-a-quote?industry=${encodeURIComponent(industry.name)}`}
                  className="btn-copper text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-full w-full text-center flex items-center justify-center gap-1.5 shadow"
                >
                  <FileText className="w-4 h-4" />
                  <span>Configure Sector RFQ</span>
                </Link>

                <div className="mt-4 pt-3 border-t border-steel/40 text-[11px] text-silver/80 space-y-1.5">
                  <p>• Fast technical evaluation (24-48 hours)</p>
                  <p>• Process datasheet review (PFD / HMB)</p>
                  <p>• Supply coordination in Vadodara, Gujarat</p>
                </div>
              </div>

              {/* Other Industries Navigation */}
              <div className="bg-offwhite border border-silver/60 rounded-2xl p-6">
                <h3 className="text-xs font-bold text-navy uppercase tracking-wider border-b border-silver/40 pb-2 mb-3">
                  Other Industry Sectors
                </h3>
                <div className="space-y-2">
                  {otherIndustries.map((other) => {
                    const OtherIcon = iconMap[other.id] || Factory;

                    return (
                      <Link
                        key={other.id}
                        href={`/industries/${other.slug}`}
                        className="flex items-center gap-3 p-2.5 bg-white rounded-xl border border-silver/50 hover:border-[#F36C21] transition-all group"
                      >
                        <div className="p-1.5 rounded-lg bg-offwhite text-slate-600 group-hover:text-[#F36C21] transition-colors">
                          <OtherIcon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-xs font-bold text-navy group-hover:text-[#F36C21] transition-colors block truncate">
                            {other.name.split("(")[0].trim()}
                          </span>
                          <span className="text-[10px] text-slate-500 block truncate">
                            {other.tagline}
                          </span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#F36C21] group-hover:translate-x-0.5 transition-all shrink-0" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Back to Industries Link */}
              <div className="text-center pt-2">
                <Link
                  href="/industries"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-copper transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to All Industries</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

