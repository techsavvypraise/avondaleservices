import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const partners = [
  { name: "Sensatec GMBH", country: "Germany", logo: "/logos/strategic-partners/sensatec.png", description: "With over 18 years of expertise, Sensatec is a market leader in groundwater and soil remediation, including PFAS contamination removal. Their team of over 60 professionals has successfully executed more than 400 projects globally, providing cutting-edge environmental solutions." },
  { name: "BERKY MAHMASCHINEN", country: "Germany", logo: "/logos/strategic-partners/berky.png", description: "A world-renowned manufacturer with 50 years of experience, Berky produces state-of-the-art water maintenance and marine equipment, including dredgers, tugboats, marine weed harvesters, and water barges." },
  { name: "ETI HEALTH AND LEISURE LTD", country: "Nigeria", logo: "/logos/strategic-partners/etihealth.png", description: "A leading indigenous company known for excellence in health services and operations across the Niger Delta and Nigeria. EHL combines ultra-modern facilities, trained personnel, and unwavering professionalism to deliver consistent, high-quality outcomes." },
];

export function StrategicPartners() {
  return (
    <Section id="strategic-partners" className="bg-slate-50 py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">Strategic Partners</p>
          <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">Global Expertise. Local Impact.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">We collaborate with leading local and international partners to deliver innovative, high-quality solutions across multiple sectors.</p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {partners.map((partner) => (
            <article key={partner.name} className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-48 items-center justify-center border-b border-slate-100 bg-white p-10">
                <Image src={partner.logo} alt={`${partner.name} logo`} width={220} height={100} className="max-h-24 w-auto object-contain" />
              </div>
              <div className="p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">{partner.country}</p>
                <h3 className="mt-3 text-2xl font-bold text-slate-900">{partner.name}</h3>
                <p className="mt-5 leading-8 text-slate-600">{partner.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-4xl text-center">
          <p className="text-lg leading-8 text-slate-600">Together, these strategic partnerships strengthen our capabilities, enabling Avondale Services &amp; Supplies Limited to provide globally informed, locally adapted, and sustainable solutions for our clients and communities.</p>
        </div>
      </Container>
    </Section>
  );
}