import React from "react";
import Link from "next/link";
import { Cpu, Layers, FileCheck, Ruler, ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ENGINEERING_SERVICES } from "@/content/engineering";

export function EngineeringSection() {
  const icons = [Cpu, Layers, ShieldCheck, Ruler];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-silver/50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Focus Areas */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              badge="Engineering Solutions"
              badgeVariant="steel"
              title="Rigorous Thermal & Mechanical Alignment"
              subtitle="Thermal design is not an afterthought. We bridge communication between plant process engineers and specialized equipment fabricators to ensure accurate equipment sizing."
              className="mb-6"
            />

            <p className="text-sm text-graphite/80 leading-relaxed">
              {ENGINEERING_SERVICES.overview}
            </p>

            <div className="p-4 bg-offwhite rounded-lg border border-silver/70 space-y-2 text-xs text-graphite">
              <span className="font-bold text-navy flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-copper" />
                <span>Transparent Engineering Governance</span>
              </span>
              <p className="text-graphite/80 leading-relaxed">
                {ENGINEERING_SERVICES.disclaimer}
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/engineering-solutions"
                className="btn-navy text-xs font-bold uppercase tracking-wider px-6 py-3 rounded inline-flex items-center gap-2"
              >
                <span>Explore Technical Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Engineering Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {ENGINEERING_SERVICES.capabilities.map((cap, idx) => {
              const Icon = icons[idx] || Cpu;
              return (
                <div
                  key={idx}
                  className="bg-offwhite border border-silver/70 rounded-xl p-6 shadow-sm hover:border-steel/60 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-navy text-copper flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-navy mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-graphite/80 leading-relaxed mb-4">
                      {cap.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-silver/40">
                    <ul className="space-y-1 text-[11px] text-steel font-medium">
                      {cap.focusAreas.slice(0, 2).map((fa, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-copper" />
                          <span>{fa}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

