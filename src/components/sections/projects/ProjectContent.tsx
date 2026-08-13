import {
  CheckCircle2,
  Target,
  Wrench,
  AlertTriangle,
  Trophy,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import type { Project } from "@/data/projects";

interface ProjectContentProps {
  project: Project;
}

export function ProjectContent({
  project,
}: ProjectContentProps) {
  return (
    <Section className="bg-white py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Main Content */}

          <div>
            {/* Overview */}

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
                Project Overview
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                {project.title}
              </h2>

              <p className="mt-8 text-lg leading-9 text-slate-600">
                {project.overview}
              </p>
            </div>

            {/* Objectives */}

            {project.objectives.length > 0 && (
              <div className="mt-20">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)]">
                    <Target size={25} />
                  </div>

                  <h3 className="text-3xl font-bold text-slate-900">
                    Project Objectives
                  </h3>
                </div>

                <div className="mt-8 space-y-5">
                  {project.objectives.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-4"
                    >
                      <CheckCircle2
                        size={22}
                        className="mt-1 shrink-0 text-[var(--primary)]"
                      />

                      <p className="text-lg leading-8 text-slate-700">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Scope */}

            {project.scope.length > 0 && (
              <div className="mt-20">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)]">
                    <Wrench size={25} />
                  </div>

                  <h3 className="text-3xl font-bold text-slate-900">
                    Scope of Work
                  </h3>
                </div>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {project.scope.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-[var(--primary)]/30 hover:bg-white hover:shadow-sm"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2
                          size={20}
                          className="mt-1 shrink-0 text-[var(--primary)]"
                        />

                        <span className="leading-7 text-slate-700">
                          {item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Methodology */}

            {project.methodology.length > 0 && (
              <div className="mt-20">
                <h3 className="text-3xl font-bold text-slate-900">
                  Methodology
                </h3>

                <div className="mt-8 space-y-5">
                  {project.methodology.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-4"
                    >
                      <CheckCircle2
                        size={22}
                        className="mt-1 shrink-0 text-[var(--primary)]"
                      />

                      <p className="text-lg leading-8 text-slate-700">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges */}

            {project.challenges.length > 0 && (
              <div className="mt-20">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                    <AlertTriangle size={25} />
                  </div>

                  <h3 className="text-3xl font-bold text-slate-900">
                    Challenges
                  </h3>
                </div>

                <div className="mt-8 space-y-5">
                  {project.challenges.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-4"
                    >
                      <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-500" />

                      <p className="text-lg leading-8 text-slate-700">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Achievements */}

            {project.achievements.length > 0 && (
              <div className="mt-20">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                    <Trophy size={25} />
                  </div>

                  <h3 className="text-3xl font-bold text-slate-900">
                    Achievements
                  </h3>
                </div>

                <div className="mt-8 space-y-5">
                  {project.achievements.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-4"
                    >
                      <CheckCircle2
                        size={22}
                        className="mt-1 shrink-0 text-emerald-600"
                      />

                      <p className="text-lg leading-8 text-slate-700">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}

          <aside className="h-fit">
            <div className="sticky top-28 rounded-[32px] border border-slate-200 bg-slate-50 p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
                Project Details
              </p>

              <h3 className="mt-4 text-2xl font-bold text-slate-900">
                Project Information
              </h3>

              <div className="mt-8 space-y-7">
                {/* Client */}

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                    Client
                  </p>

                  <p className="mt-2 text-lg font-semibold leading-7 text-slate-900">
                    {project.client}
                  </p>
                </div>

                {/* Location */}

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                    Location
                  </p>

                  <p className="mt-2 text-lg font-semibold leading-7 text-slate-900">
                    {project.location}
                  </p>
                </div>

                {/* Status */}

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                    Status
                  </p>

                  <span className="mt-2 inline-flex rounded-full bg-[var(--primary)]/10 px-4 py-2 text-sm font-semibold text-[var(--primary)]">
                    {project.status}
                  </span>
                </div>

                {/* Services */}

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                    Services Delivered
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}

              <div className="mt-10 rounded-[28px] bg-[var(--primary)] p-7 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                  Work With Us
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  Have a similar project?
                </h3>

                <p className="mt-4 leading-7 text-white/90">
                  Talk to our team about your engineering,
                  environmental or infrastructure requirements.
                </p>

                <a
                  href="/contact"
                  className="mt-7 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-[var(--primary)] transition hover:-translate-y-1 hover:shadow-lg"
                >
                  Contact Avondale
                </a>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
}