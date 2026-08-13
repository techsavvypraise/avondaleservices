import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import type { Project } from "@/data/projects";

interface ProjectGalleryProps {
  project: Project;
}

export function ProjectGallery({
  project,
}: ProjectGalleryProps) {
  if (!project.gallery || project.gallery.length === 0) {
    return null;
  }

  // Only show a small selection on the individual project page.
  const previewImages = project.gallery.slice(0, 6);

  return (
    <Section className="bg-white">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
            Project Gallery
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Project Highlights
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A selection of images from this project.
          </p>
        </div>

        {/* Preview Images */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {previewImages.map((image, index) => (
            <div
              key={image}
              className="group relative h-[300px] overflow-hidden rounded-[28px] bg-slate-100"
            >
              <Image
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                loading={index === 0 ? "eager" : "lazy"}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* View More */}
        {project.gallery.length > 6 && (
          <div className="mt-10 flex justify-center">
            <Link
              href={`/projects/gallery/${project.slug}`}
              className="inline-flex items-center gap-3 rounded-full bg-[var(--primary)] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
            >
              View More Gallery
              <span className="text-lg">→</span>
            </Link>
          </div>
        )}
      </Container>
    </Section>
  );
}