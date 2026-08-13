import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { company } from "@/data/company";

export function AboutHero() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <Image
        src="/images/about/about.png"
        alt={company.name}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-slate-950/70" />

      <Container>
        <div className="relative z-10 max-w-4xl py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--secondary)]">
            About Avondale
          </p>

          <h1 className="mt-6 text-6xl font-black leading-tight text-white">
            Engineering Excellence Since 1994
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-white/90">
            {company.overview}
          </p>
        </div>
      </Container>
    </section>
  );
}