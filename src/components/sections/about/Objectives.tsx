import {
  BriefcaseBusiness,
  Building2,
  Globe2,
  Leaf,
  Users,
  Wrench,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const objectives = [
  {
    title: "Infrastructure Development",
    description:
      "To contribute meaningfully to infrastructure development through the delivery of reliable and sustainable projects.",
    icon: Building2,
  },
  {
    title: "Sustainable Development",
    description:
      "To promote sustainable solutions that create lasting value for communities and the environment.",
    icon: Leaf,
  },
  {
    title: "Job Creation",
    description:
      "To support sustainable employment opportunities and contribute to economic development.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Technical Excellence",
    description:
      "To apply technical expertise, innovation and internationally recognised standards across our projects.",
    icon: Wrench,
  },
  {
    title: "Community Impact",
    description:
      "To deliver projects that improve everyday life and strengthen the communities we serve.",
    icon: Users,
  },
  {
    title: "Local & Global Collaboration",
    description:
      "To combine deep local knowledge with strategic international partnerships to deliver effective solutions.",
    icon: Globe2,
  },
];

export function Objectives() {
  return (
    <Section className="bg-white py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
            Our Objectives
          </p>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
            Creating Value Through Purposeful Action
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our objectives are centred on delivering meaningful,
            sustainable and measurable impact through the work we undertake.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {objectives.map((objective) => {
            const Icon = objective.icon;

            return (
              <div
                key={objective.title}
                className="group rounded-[30px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-transparent hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mt-7 text-2xl font-bold text-slate-900">
                  {objective.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {objective.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}