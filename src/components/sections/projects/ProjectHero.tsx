import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import type { Project } from "@/data/projects";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background Image */}
      <Image
        src={project.heroImage}
        alt={project.title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/35" />

      <Container>
        <div className="relative z-10 flex min-h-[680px] items-center py-32">
          <div className="max-w-5xl">
            {/* Breadcrumb */}

            <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-white/70">
              <Link
                href="/"
                className="transition hover:text-white"
              >
                Home
              </Link>

              <span>/</span>

              <Link
                href="/projects"
                className="transition hover:text-white"
              >
                Projects
              </Link>

              <span>/</span>

              <span className="text-white">
                {project.title}
              </span>
            </div>

            {/* Category */}

            <span className="inline-flex rounded-full bg-[var(--primary)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-lg">
              {project.category}
            </span>

            {/* Title */}

            <h1 className="mt-8 max-w-5xl text-5xl font-black leading-[0.95] tracking-tight text-white md:text-6xl xl:text-7xl">
              {project.title}
            </h1>

            {/* Overview */}

            <p className="mt-8 max-w-4xl text-xl leading-9 text-white/85">
              {project.overview}
            </p>

            {/* Project Details */}

            <div className="mt-14 grid gap-8 border-t border-white/20 pt-10 md:grid-cols-3">
              {/* Client */}

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  Client
                </p>

                <h3 className="mt-3 text-lg font-semibold leading-7 text-white">
                  {project.client}
                </h3>
              </div>

              {/* Location */}

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  Location
                </p>

                <h3 className="mt-3 text-lg font-semibold leading-7 text-white">
                  {project.location}
                </h3>
              </div>

              {/* Status */}

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  Status
                </p>

                <span className="mt-3 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[var(--secondary)] backdrop-blur-md">
                  {project.status}
                </span>
              </div>
            </div>

            {/* Services */}

            {project.services.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-md"
                  >
                    {service}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}