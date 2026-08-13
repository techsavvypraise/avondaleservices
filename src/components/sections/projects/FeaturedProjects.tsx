import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <Section className="bg-slate-50 py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
            Featured Projects
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
            Engineering Projects That Deliver Results
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            From environmental remediation and healthcare infrastructure to
            road construction and environmental restoration, our projects
            demonstrate Avondale's commitment to engineering excellence,
            quality delivery and sustainable development across Nigeria.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              category={project.category}
              image={project.heroImage}
              location={project.location}
              description={project.overview}
              href={`/projects/${project.slug}`}
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button href="/projects">
            View All Projects
          </Button>
        </div>
      </Container>
    </Section>
  );
}