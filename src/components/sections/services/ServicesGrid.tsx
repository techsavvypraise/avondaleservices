import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ServiceCard } from "./ServiceCard";
import { services } from "@/data/services";

export function ServicesGrid() {
  return (
    <Section className="bg-white py-28">
      <Container>
        {/* Section Header */}
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
            Our Services
          </p>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Engineering, Environmental &amp; Industrial Solutions
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            Explore our full range of engineering, environmental,
            construction, marine, healthcare and industrial solutions
            delivered across Nigeria.
          </p>
        </div>

        {/* All 10 Services */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              image={service.heroImage}
              description={service.shortDescription}
              href={`/services/${service.slug}`}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}