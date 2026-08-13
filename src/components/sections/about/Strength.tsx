import {
  Award,
  Globe2,
  HardHat,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const strengths = [
  {
    title: "Experienced Team",
    description:
      "A multidisciplinary team of experienced professionals with the technical expertise required to deliver complex projects.",
    icon: Users,
  },
  {
    title: "Technical Expertise",
    description:
      "Strong technical capabilities across engineering, environmental services, construction and infrastructure development.",
    icon: HardHat,
  },
  {
    title: "Quality & Safety",
    description:
      "A strong commitment to quality, health, safety and environmental responsibility throughout project delivery.",
    icon: ShieldCheck,
  },
  {
    title: "International Standards",
    description:
      "Global best practices combined with a deep understanding of Nigeria's local environmental, regulatory and operational realities.",
    icon: Award,
  },
  {
    title: "Strategic Partnerships",
    description:
      "International collaborations that strengthen our capabilities and enable us to deliver specialised solutions.",
    icon: Globe2,
  },
  {
    title: "Integrated Solutions",
    description:
      "A multidisciplinary approach that brings together complementary expertise to deliver reliable and value-driven solutions.",
    icon: Workflow,
  },
];

export function Strength() {
  return (
    <Section className="bg-slate-950 py-28 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--secondary)]">
            Our Strength
          </p>

          <h2 className="mt-5 text-5xl font-bold leading-tight">
            Built on Experience, Expertise and Strong Partnerships
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Our strength lies in the people, expertise, partnerships and
            integrated capabilities that enable us to deliver quality
            solutions across diverse sectors.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {strengths.map((strength) => {
            const Icon = strength.icon;

            return (
              <div
                key={strength.title}
                className="group rounded-[30px] border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.08]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[var(--secondary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mt-7 text-2xl font-bold">
                  {strength.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-300">
                  {strength.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}