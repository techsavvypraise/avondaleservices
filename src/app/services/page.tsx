import type { Metadata } from "next";

import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServicesGrid } from "@/components/sections/services/ServicesGrid";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Services | Avondale Services & Supplies Limited",
  description:
    "Engineering, environmental, construction, marine, healthcare and industrial solutions delivered across Nigeria.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      <ServicesGrid />

      <CTA />

      <Footer />
    </>
  );
}