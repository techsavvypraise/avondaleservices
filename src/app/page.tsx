import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { FeaturedProjects } from "@/components/sections/projects";
import { WhyChoose } from "@/components/sections/why";
import { TrustedBy } from "@/components/sections/trusted";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <>
      <Hero />

      <About />

      <Services />

      <FeaturedProjects />

      <WhyChoose />

      <TrustedBy />

      <CTA />

      <Footer />
    </>
  );
}