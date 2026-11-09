import React from "react";
import Link from "next/link";
import { ShieldCheck, Compass, Cog, PackageCheck, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { COMPANY_INFO } from "@/content/company";

export function CompanyIntro() {
  const pillars = [
    {
      icon: Compass,
      title: "Technical Sourcing & Coordination",
      description: "We evaluate thermodynamic process datasheets, aligning buyer design parameters with specialized Indian manufacturing facilities capable of exact dimensional and metallurgical execution."
    },
    {
      icon: Cog,
      title: "Engineering Alignment",
      description: "Coordination of thermal ratings, pressure vessel calculations, and GA drawing reviews ensuring compliance with ASME Section VIII, TEMA, and API codes."
    },
    {
      icon: ShieldCheck,
      title: "Quality Oversight & Witnessing",
      description: "Strict enforcement of Inspection & Test Plans (ITP), material test certificates (EN 10204 3.1), non-destructive testing (RT/UT/PT), and hydrostatic pressure tests."
    },
    {
      icon: PackageCheck,
      title: "Export Packing & Logistics",
      description: "Specialized preservation, nitrogen blanketing, ISPM 15 seaworthy wooden packaging, and end-to-end export documentation coordination from major Indian container ports."
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-offwhite border-b border-silver/50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mission & Positioning */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              badge="About GSB Export"
              badgeVariant="copper"
              title="A Dependable Gateway to Industrial Thermal Engineering"
              subtitle="Connecting international procurement teams, EPC contractors, and engineering companies with certified industrial manufacturing capabilities in India."
              className="mb-6"
            />

            <p className="text-sm text-graphite/80 leading-relaxed">
              {COMPANY_INFO.businessModel.description}
            </p>

            <div className="p-4 rounded-lg bg-white border-l-4 border-copper shadow-sm text-xs text-graphite/90">
              <strong className="text-navy font-bold block mb-1">Our Core Commitment:</strong>
              We do not simply broker equipment. We provide rigorous technical evaluation and stage-wise quality oversight, ensuring every heat exchanger delivered matches strict international plant engineering specifications.
            </div>

            <div className="pt-2">
              <Link
                href="/about-us"
                className="btn-navy text-xs font-bold uppercase tracking-wider px-6 py-3 rounded inline-flex items-center gap-2"
              >
                <span>Read Our Full Company Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Strategic Capability Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-silver/60 rounded-lg p-6 shadow-sm hover:border-steel/60 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="w-11 h-11 rounded-lg bg-steel/10 text-steel group-hover:bg-copper group-hover:text-white transition-colors duration-200 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-navy mb-2 group-hover:text-steel transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-graphite/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
