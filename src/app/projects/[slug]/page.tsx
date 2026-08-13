import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { projects } from "@/data/projects";

import { ProjectHero } from "@/components/sections/projects/ProjectHero";
import { ProjectContent } from "@/components/sections/projects/ProjectContent";
import { ProjectGallery } from "@/components/sections/projects/ProjectGallery";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {
      title:
        "Project Not Found | Avondale Services & Supplies Limited",
    };
  }

  return {
    title: `${project.title} | Avondale Services & Supplies Limited`,
    description: project.overview,
  };
}

export default async function ProjectPage({
  params,
}: Props) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectHero project={project} />

      <ProjectContent project={project} />

      <ProjectGallery project={project} />

      <CTA />

      <Footer />
    </>
  );
}