import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/Container";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { projects } from "@/data/projects";

interface ProjectGalleryPageProps {
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
}: ProjectGalleryPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {
      title: "Project Gallery | Avondale Services & Supplies Limited",
    };
  }

  return {
    title: `${project.title} Gallery | Avondale Services & Supplies Limited`,
    description: `View images from the ${project.title} project.`,
  };
}

export default async function ProjectGalleryPage({
  params,
}: ProjectGalleryPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Gallery Header */}
      <section className="bg-slate-950">
        <Container>
          <div className="py-24 md:py-32">
            {/* Breadcrumb */}
            <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-white/60">
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

              <Link
                href={`/projects/${project.slug}`}
                className="transition hover:text-white"
              >
                {project.title}
              </Link>

              <span>/</span>

              <span className="text-white">
                Gallery
              </span>
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--secondary)]">
              Project Gallery
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-black leading-tight text-white md:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
              {project.location}
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery Images */}
      <section className="bg-slate-50 py-20 md:py-24">
        <Container>
          {project.gallery && project.gallery.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {project.gallery.map((image, index) => (
                <div
                  key={image}
                  className="group relative h-[320px] overflow-hidden rounded-[28px] bg-white shadow-sm"
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-sm font-medium text-white">
                      Image {index + 1}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg text-slate-600">
                No project images are currently available.
              </p>
            </div>
          )}

          {/* Back to Project */}
          <div className="mt-14">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-x-1 hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              ← Back to Project
            </Link>
          </div>
        </Container>
      </section>

      <CTA />

      <Footer />
    </>
  );
}