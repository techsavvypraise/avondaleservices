import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { services } from "@/data/services";

import { ServiceHero } from "@/components/sections/services/ServiceHero";
import { ServiceContent } from "@/components/sections/services/ServiceContent";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return {
      title:
        "Service Not Found | Avondale Services & Supplies Limited",
    };
  }

  return {
    title: `${service.title} | Avondale Services & Supplies Limited`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({
  params,
}: Props) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceHero service={service} />

      <ServiceContent service={service} />

      <CTA />

      <Footer />
    </>
  );
}