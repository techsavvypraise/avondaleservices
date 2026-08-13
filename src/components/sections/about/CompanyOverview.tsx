import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { company } from "@/data/company";

export function CompanyOverview() {
  return (
    <Section className="bg-white py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}

          <div className="relative">
            <div className="relative h-[600px] overflow-hidden rounded-[36px]">
              <Image
                src="/images/about/about.png"
                alt="Avondale Services & Supplies Limited"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 rounded-[28px] bg-[var(--primary)] px-8 py-7 text-white shadow-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
                Established
              </p>

              <p className="mt-2 text-4xl font-black">
                1994
              </p>
            </div>
          </div>

          {/* Content */}

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
              Company Overview
            </p>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
              Delivering Engineering Excellence Across Nigeria.
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              {company.overview}
            </p>

            {company.statistics?.length > 0 && (
              <div className="mt-12 grid grid-cols-2 gap-5">
                {company.statistics.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[28px] border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <h3 className="text-4xl font-black text-[var(--primary)]">
                      {item.value}
                    </h3>

                    <p className="mt-3 text-base font-medium leading-7 text-slate-700">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}