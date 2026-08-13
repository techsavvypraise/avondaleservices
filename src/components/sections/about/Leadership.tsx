import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const directors = [
  {
    name: "Dr. Ayibatonye Owei",
    role: "Chairman/CEO",
    image: "/images/about/ayibatonye-owei.jpg",
    bio: "Dr. Ayibatonye Owei is a consultant obstetrician and gynecologist with over 30 years of clinical experience, combining medical expertise with a strong entrepreneurial vision. He holds a Master’s in Business Administration and has built a distinguished career as a visionary leader and international businessman.",
  },
  {
    name: "Mrs. Ngozika Owei",
    role: "MD/Business Development Director",
    image: "/images/about/ngozika-owei.jpg",
    bio: "Mrs. Ngozika Owei is a meticulous and accomplished business leader with an MBA from the University of Cape Town Graduate School of Business (GSB), South Africa. As Managing Director and Business Development Director of Avondale Services & Supplies Limited, Nigeria, and Medical Rescue 911 Limited, she brings strategic vision, operational excellence, financial intelligence and a results-driven approach to every aspect of the business.",
  },
];

export function Leadership() {
  return (
    <Section className="bg-slate-50 py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
            Board of Directors
          </p>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
            Leadership With Experience, Vision and Purpose
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our leadership brings together professional expertise,
            entrepreneurial vision and international experience to guide
            Avondale&apos;s continued growth and impact.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {directors.map((director) => (
            <article
              key={director.name}
              className="overflow-hidden rounded-[36px] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Director Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                <Image
                  src={director.image}
                  alt={director.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>

              {/* Director Details */}
              <div className="p-8 md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
                  {director.role}
                </p>

                <h3 className="mt-3 text-3xl font-bold text-slate-900">
                  {director.name}
                </h3>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  {director.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}