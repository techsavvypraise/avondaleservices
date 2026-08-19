import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featuredSlugs = [
    "ajeokpori-2-ogale-remediation",
    "nkeleoken-alode-remediation",
    "construction-supply-marine-vessels-house-patrol",
  ];

  const featuredProjects = featuredSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project));

  return (
    <Section className="bg-slate-50 py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
            Featured Projects
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
            Projects That Deliver Results
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            From environmental remediation to marine assets and infrastructure
            development, our project portfolio reflects Avondale&apos;s
            commitment to quality delivery, practical solutions and lasting
            impact across Nigeria.
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