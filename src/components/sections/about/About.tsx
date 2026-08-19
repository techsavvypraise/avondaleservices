import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

const highlights = [
  "Wholly Indigenous Nigerian Company Since 1994",
  "Infrastructure Development",
  "Environmental Remediation",
  "Construction",
  "Healthcare-Supporting Equipment Supply",
  "Local Insight with International Strategic Partnerships",
];

export function About() {
  return (
    <Section className="bg-white py-28">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
              Since 1994
            </p>

            <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
              Avondale Services &amp; Supplies Limited
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              Avondale Services &amp; Supplies Limited is a wholly indigenous
              Nigerian company incorporated in 1994, delivering integrated
              solutions across infrastructure development, environmental
              remediation, construction, and healthcare-supporting equipment
              supply. For over three decades, the company has completed
              projects that strengthen Nigeria&apos;s essential systems through
              an impact-driven approach grounded in technical excellence and
              responsible delivery.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Rooted in deep local knowledge and strengthened by strategic
              partnerships with international collaborators, Avondale combines
              global best practices with on-the-ground understanding of
              Nigeria&apos;s environmental, regulatory, and operational
              realities. This dual perspective enables the company to deliver
              complex projects to internationally recognised standards while
              remaining responsive to local communities and conditions.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Avondale is driven by a multidisciplinary team of experienced
              professionals who work collaboratively to provide reliable,
              high-quality, and value-driven services. Across its work, the
              company is committed to building, restoring, and supporting
              systems that improve everyday life and create durable value for
              clients, partners, and communities.
            </p>

            <div className="mt-10 grid gap-5">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] font-bold text-white">
                    ✓
                  </div>

                  <span className="text-lg font-medium leading-8 text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* ACTIONS */}
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Button href="/about">
                Learn More About Us
              </Button>

              <a
                href="/documents/avondale-company-profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[var(--primary)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--primary)] hover:text-white hover:shadow-lg"
              >
                Download Company Profile
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative">
            <div className="relative h-[680px] overflow-hidden rounded-[36px] shadow-2xl">
              <Image
                src="/images/about/about.jpg"
                alt="Avondale Services & Supplies Limited"
                fill
                priority
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 rounded-[32px] bg-[var(--primary)] p-8 text-white shadow-2xl">
              <h3 className="text-5xl font-black">
                Since
              </h3>

              <p className="mt-2 text-3xl font-bold">
                1994
              </p>

              <p className="mt-3 text-lg">
                Delivering Excellence
              </p>
            </div>

            <div className="absolute -top-8 -right-8 rounded-[32px] bg-white p-8 shadow-2xl">
              <h3 className="text-4xl font-black text-[var(--primary)]">
                30+
              </h3>

              <p className="mt-2 text-lg font-medium text-slate-700">
                Years of Experience
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}