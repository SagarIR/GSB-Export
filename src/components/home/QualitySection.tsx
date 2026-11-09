import React from "react";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Gauge, FileSpreadsheet, Eye, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QUALITY_SYSTEM } from "@/content/quality";

export function QualitySection() {
  const qPillars = [
    {
      icon: FileSpreadsheet,
      title: "Material Traceability (EN 10204 3.1)",
      desc: "Heat-number correlation from mill ingot to final tubesheet, backed by PMI spectral chemical analysis."
    },
    {
      icon: Gauge,
      title: "Hydrostatic Pressure Proof Testing",
      desc: "Mandatory pressure containment verification up to 1.5x design pressure with calibrated electronic chart logging."
    },
    {
      icon: ShieldCheck,
      title: "Certified NDT Non-Destructive Examination",
      desc: "Level II/III ASNT radiographic (RT), ultrasonic (UT), dye-penetrant (PT), and magnetic particle (MT) testing."
    },
    {
      icon: Eye,
      title: "Third-Party Inspection Agency (TPIA)",
      desc: "Stage-wise witnessing and final release with recognized agencies including TÜV, Bureau Veritas, DNV, and Lloyds."
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-navy text-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <SectionHeading
            badge="Inspection & Testing Governance"
            badgeVariant="copper"
            theme="dark"
            align="center"
            title="Quality Without Compromise"
            subtitle="Industrial process plants cannot afford unexpected downtime or pressure boundary failure. Our comprehensive Inspection & Test Plans (ITP) ensure every stage of fabrication is witnessed and validated."
          />
        </div>

        {/* 4 Quality Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {qPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-navy-900/90 border border-steel/50 rounded-xl p-6 hover:border-copper/60 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg bg-steel/30 text-copper flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-silver leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-steel/30 flex items-center gap-1.5 text-[11px] text-copper-light font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-copper" />
                  <span>Documented in Dossier</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Inspection Stage Workflow Bar */}
        <div className="bg-navy-950/80 border border-steel/40 rounded-xl p-6 lg:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-copper">
                Comprehensive QA Dossier
              </span>
              <h4 className="text-base font-bold text-white">
                Every Export Heat Exchanger Includes Full Manufacturing Records
              </h4>
              <p className="text-xs text-silver max-w-2xl">
                {QUALITY_SYSTEM.standardsDisclaimer}
              </p>
            </div>
            <Link
              href="/quality-assurance"
              className="btn-copper text-xs font-bold uppercase tracking-wider px-6 py-3 rounded shrink-0 flex items-center gap-2"
            >
              <span>View Quality &amp; ITP Protocols</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
