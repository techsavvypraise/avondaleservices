import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background Image */}
      <Image
        src="/images/hero/industrial.jpg"
        alt="Avondale engineering and infrastructure services"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/40" />

      <Container>
        <div className="relative z-10 flex min-h-[620px] items-center py-32">
          <div className="max-w-5xl">
            {/* Breadcrumb */}

            <div className="mb-8 flex items-center gap-3 text-sm text-white/70">
              <Link
                href="/"
                className="transition hover:text-white"
              >
                Home
              </Link>

              <span>/</span>

              <span className="text-white">
                Services
              </span>
            </div>

            {/* Eyebrow */}

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--secondary)]">
              Our Services
            </p>

            {/* Heading */}

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white md:text-6xl xl:text-7xl">
              Engineering Solutions Built Around Your Needs
            </h1>

            {/* Description */}

            <p className="mt-8 max-w-3xl text-xl leading-9 text-white/85">
              Avondale Services &amp; Supplies Limited delivers
              specialised engineering, environmental, construction,
              marine, healthcare and industrial solutions across
              Nigeria.
            </p>

            {/* CTA */}

            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                href="/contact"
                className="rounded-full bg-[var(--primary)] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
              >
                Discuss Your Project
              </Link>

              <Link
                href="/projects"
                className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                Explore Our Projects
              </Link>
            </div>

            {/* Service Count */}

            <div className="mt-14 border-t border-white/15 pt-8">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-black text-white">
                  10
                </span>

                <span className="max-w-xs text-sm leading-6 text-white/65">
                  specialised services across engineering,
                  environmental, construction, marine, healthcare
                  and industrial sectors.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}