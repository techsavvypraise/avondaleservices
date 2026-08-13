import { Target, Eye, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function MissionVision() {
  return (
    <Section className="bg-slate-50 py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
            Our Purpose &amp; Guiding Principles
          </p>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
            Purpose, Vision and Philosophy
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* Mission */}

          <div className="rounded-[32px] bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--primary)] text-white">
              <Target size={32} />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-slate-900">
              Our Mission
            </h3>

            <p className="mt-6 leading-8 text-slate-600">
              At Avondale Services &amp; Supplies Limited, we are committed to
              empowering communities and creating lasting impact through
              sustainable job creation and transformative infrastructural
              development.
            </p>
          </div>

          {/* Vision */}

          <div className="rounded-[32px] bg-[var(--primary)] p-10 text-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
              <Eye size={32} />
            </div>

            <h3 className="mt-8 text-3xl font-bold">
              Our Vision
            </h3>

            <p className="mt-6 leading-8 text-white/90">
              Our vision is to be a leading provider of innovative,
              people-centered products and services that enrich lives and
              strengthen communities.
            </p>
          </div>

          {/* Philosophy */}

          <div className="rounded-[32px] bg-slate-950 p-10 text-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
              <ShieldCheck size={32} />
            </div>

            <h3 className="mt-8 text-3xl font-bold">
              Our Philosophy
            </h3>

            <p className="mt-6 leading-8 text-white/90">
              Guided by a philosophy of excellence without compromise, we
              deliver results efficiently, responsibly, and with integrity,
              always respecting the needs of the people and stakeholders we
              serve. Every project we undertake is driven by our dedication to
              quality, timeliness, and fairness, ensuring meaningful outcomes
              that benefit both our clients and the wider community.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}