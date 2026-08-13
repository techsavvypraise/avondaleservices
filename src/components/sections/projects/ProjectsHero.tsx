import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";

export function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background Image */}
      <Image
        src="/images/hero/infrastructure.jpg"
        alt="Avondale infrastructure project"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/45" />

      <Container>
        <div className="relative z-10 flex min-h-[680px] items-center py-32">
          <div className="max-w-4xl">
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
                Projects
              </span>
            </div>

            {/* Eyebrow */}
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--secondary)]">
              Our Projects
            </p>

            {/* Heading */}
            <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white md:text-6xl xl:text-7xl">
              Engineering Projects That Deliver Lasting Value
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-3xl text-xl leading-9 text-white/85">
              Explore Avondale Services &amp; Supplies Limited&apos;s
              portfolio of environmental remediation, road construction,
              healthcare infrastructure, marine engineering and
              environmental restoration projects successfully delivered
              across Nigeria.
            </p>

            {/* CTAs */}
            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                href="/services"
                className="rounded-full bg-[var(--primary)] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
              >
                View Our Services
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                Contact Us
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-14 grid max-w-3xl grid-cols-3 gap-6 border-t border-white/20 pt-10">
              <div>
                <p className="text-3xl font-black text-white md:text-4xl">
                  11+
                </p>

                <p className="mt-2 text-sm text-white/65">
                  Featured Projects
                </p>
              </div>

              <div>
                <p className="text-3xl font-black text-white md:text-4xl">
                  30+
                </p>

                <p className="mt-2 text-sm text-white/65">
                  Years Experience
                </p>
              </div>

              <div>
                <p className="text-3xl font-black text-white md:text-4xl">
                  Nationwide
                </p>

                <p className="mt-2 text-sm text-white/65">
                  Project Delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}