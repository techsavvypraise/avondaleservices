"use client";

import { useMemo, useState } from "react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { projects } from "@/data/projects";

import { ProjectCard } from "./ProjectCard";
import { ProjectFilters } from "./ProjectFilters";

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(projects.map((project) => project.category)),
    ];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  if (filteredProjects.length === 0) {
    return null;
  }

  const [featured, ...others] = filteredProjects;

  return (
    <Section>
      <Container>
        {/* Section Header */}
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
            Our Projects
          </p>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Engineering Projects Across Nigeria
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            Explore our portfolio of environmental remediation,
            infrastructure development, healthcare construction,
            marine engineering and community development projects
            successfully delivered across Nigeria.
          </p>
        </div>

        {/* Filters */}
        <ProjectFilters
          categories={categories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        {/* Featured Project */}
        <div className="mt-16">
          <ProjectCard
            title={featured.title}
            category={featured.category}
            image={featured.heroImage}
            href={`/projects/${featured.slug}`}
            description={featured.overview}
            location={featured.location}
            large
          />
        </div>

        {/* Other Projects */}
        {others.length > 0 && (
          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {others.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                category={project.category}
                image={project.heroImage}
                href={`/projects/${project.slug}`}
                description={project.overview}
                location={project.location}
              />
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}