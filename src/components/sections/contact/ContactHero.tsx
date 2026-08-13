import Image from "next/image";

import { Container } from "@/components/layout/Container";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background Image */}
      <Image
        src="/images/hero/industrial.jpg"
        alt="Avondale industrial engineering services"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/45" />

      <Container>
        <div className="relative z-10 flex min-h-[560px] items-center py-28">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-3 text-sm text-white/70">
              <span>Home</span>

              <span>/</span>

              <span className="text-white">
                Contact
              </span>
            </div>

            {/* Eyebrow */}
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--secondary)]">
              Contact Us
            </p>

            {/* Heading */}
            <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight text-white md:text-6xl xl:text-7xl">
              Let&apos;s Discuss Your Next Project
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-3xl text-xl leading-9 text-white/85">
              Get in touch with Avondale Services &amp; Supplies
              Limited for engineering, environmental, construction,
              marine, healthcare, procurement and other project
              requirements.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}