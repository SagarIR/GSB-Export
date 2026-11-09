import React from "react";
import Link from "next/link";
import { Check, ArrowRight, ShieldAlert, Cpu, Award, Globe } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChooseUs() {
  const differentiators = [
    {
      icon: Cpu,
      title: "Technical Engineering Depth",
      description: "We speak the language of plant process and thermal engineers. We evaluate duty requirements, LMTD, fouling factors, and allowable pressure drops before quoting, ensuring mechanical configurations match operational realities."
    },
    {
      icon: Award,
      title: "Vetted Indian Manufacturing Partners",
      description: "Our supply partners operate specialized heavy rolling equipment, multi-spindle CNC tubesheet drilling, and automated orbital TIG welding systems, strictly adhering to ASME and TEMA manufacturing guidelines."
    },
    {
      icon: ShieldAlert,
      title: "Zero Compromise on Verification",
      description: "From spectral PMI material testing and radiographic weld seam inspection to hydrostatic proof testing witnessed by third-party agencies, every unit is delivered with a complete quality dossier."
    },
    {
      icon: Globe,
      title: "Seaworthy Export Logistics",
      description: "Based in Gujarat with direct logistical access to major Indian deepwater container ports (Mundra, Nhava Sheva). We provide ISPM 15 fumigated wooden packaging, nitrogen blanketing, and comprehensive shipping documentation."
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-offwhite border-b border-silver/50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Value Prop */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              badge="Why Choose GSB Export"
              badgeVariant="copper"
              title="A Technically Credible Supply Partner for Global Industry"
              subtitle="Procuring critical heat transfer equipment across international borders requires transparency, engineering precision, and dependable quality oversight."
              className="mb-6"
            />

            <ul className="space-y-3 text-xs sm:text-sm text-graphite">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-copper/10 text-copper flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>No Generic Middlemen:</strong> Direct technical coordination between international buyers and certified Indian fabricators.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-copper/10 text-copper flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Factual Transparency:</strong> Clear distinction between our sourcing/export services and partner manufacturing operations.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-copper/10 text-copper flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Dedicated RFQ Engineering:</strong> Rapid technical turnaround on datasheets, GA drawings, and itemized commercial proposals.</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/manufacturing-supply"
                className="btn-navy text-xs font-bold uppercase tracking-wider px-6 py-3 rounded inline-flex items-center gap-2"
              >
                <span>Discover Our Supply Workflow</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Strategic Points */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {differentiators.map((diff, idx) => {
              const Icon = diff.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-silver/70 rounded-xl p-6 shadow-sm hover:border-steel/60 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-steel/10 text-steel flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-navy mb-2">
                    {diff.title}
                  </h3>
                  <p className="text-xs text-graphite/80 leading-relaxed">
                    {diff.description}
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

