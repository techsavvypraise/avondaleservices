import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ServiceCard } from "./ServiceCard";
import { services } from "@/data/services";

export function Services() {
  const featuredServices = services.slice(0, 4);

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
            Avondale Services &amp; Supplies Limited provides specialised
            engineering, environmental, construction, marine, healthcare
            and industrial solutions across Nigeria.
          </p>
        </div>

        {/* Featured Services */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              image={service.heroImage}
              description={service.shortDescription}
              href={`/services/${service.slug}`}
            />
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="rounded-full bg-[var(--primary)] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg"
          >
            View All Services
          </Link>
        </div>
      </Container>
    </Section>
  );
}