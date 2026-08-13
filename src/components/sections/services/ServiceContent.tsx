import {
  CheckCircle2,
  ShieldCheck,
  Award,
  BriefcaseBusiness,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import type { Service } from "@/data/services";

interface ServiceContentProps {
  service: Service;
}

const highlights = [
  {
    icon: ShieldCheck,
    title: "Safety & Compliance",
    description:
      "We maintain strong health, safety, environmental and quality standards throughout project delivery.",
  },
  {
    icon: Award,
    title: "Proven Experience",
    description:
      "Our multidisciplinary teams bring extensive experience across engineering, construction and environmental projects.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Delivery",
    description:
      "Experienced professionals work closely with clients to deliver solutions that meet project requirements.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Solutions",
    description:
      "We focus on dependable, practical and sustainable solutions that create long-term value.",
  },
];

export function ServiceContent({
  service,
}: ServiceContentProps) {
  return (
    <Section className="bg-white py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left Content */}

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
              Service Overview
            </p>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              {service.title}
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              {service.description}
            </p>

            {/* Highlights */}

            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <Icon
                      className="text-[var(--primary)]"
                      size={32}
                    />

                    <h3 className="mt-6 text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Sidebar */}

          <aside className="h-fit rounded-[36px] border border-slate-200 bg-slate-50 p-8 md:p-10 lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
              What We Deliver
            </p>

            <h3 className="mt-5 text-3xl font-bold text-slate-900">
              Our Capabilities
            </h3>

            <div className="mt-10 space-y-5">
              {service.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2
                    className="mt-1 shrink-0 text-[var(--primary)]"
                    size={21}
                  />

                  <span className="text-base leading-7 text-slate-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact CTA */}

            <div className="mt-12 rounded-[28px] bg-[var(--primary)] p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Start a Project
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Need this service?
              </h3>

              <p className="mt-4 leading-7 text-white/90">
                Tell us about your requirements and our team will work
                with you to develop the right solution.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-[var(--primary)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Contact Us
              </a>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
}