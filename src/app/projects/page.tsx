import type { Metadata } from "next";
import { Suspense } from "react";

import { ProjectsHero } from "@/components/sections/projects/ProjectsHero";
import { ProjectsGrid } from "@/components/sections/projects/ProjectsGrid";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Projects | Avondale Services & Supplies Limited",
  description:
    "Explore Avondale Services & Supplies Limited's portfolio of environmental remediation, healthcare infrastructure, road construction, marine engineering and community development projects delivered across Nigeria.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />

      <Suspense fallback={null}>
        <ProjectsGrid />
      </Suspense>

      <CTA />

      <Footer />
    </>
  );
}