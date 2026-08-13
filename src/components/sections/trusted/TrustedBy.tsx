import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { TrustedLogo } from "./TrustedLogo";

const clients = [
  {
    name: "Shell",
    logo: "/logos/clients/shell.png",
  },
  {
    name: "NIMASA",
    logo: "/logos/clients/nimasa.png",
  },
  {
    name: "NIWA",
    logo: "/logos/clients/niwa.png",
  },
  {
    name: "Bayelsa State Government",
    logo: "/logos/clients/bayelsa-state-government.png",
  },
  {
    name: "Agip",
    logo: "/logos/clients/agip.png",
  },
  {
    name: "NDDC",
    logo: "/logos/clients/nddc.png",
  },
  {
    name: "FERMA",
    logo: "/logos/clients/ferma.png",
  },
  {
    name: "Federal Ministry of Health",
    logo: "/logos/clients/federal-ministry-health.png",
  },
  {
    name: "Federal Ministry of Environment",
    logo: "/logos/clients/federal-ministry-of-environment.png",
  },
  {
    name: "Millennium Development Goals",
    logo: "/logos/clients/millennium-development-goals.png",
  },
  {
    name: "TotalEnergies",
    logo: "/logos/clients/totalenergies.png",
  },
];

export function TrustedBy() {
  return (
    <Section className="bg-white py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--secondary)]">
            Trusted By
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Delivering Engineering Excellence Across Nigeria
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We are proud to have partnered with government institutions,
            multinational companies and industry leaders on transformative
            engineering and infrastructure projects.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <TrustedLogo
              key={client.name}
              src={client.logo}
              alt={client.name}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}