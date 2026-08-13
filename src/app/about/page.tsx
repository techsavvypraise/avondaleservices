import { AboutHero } from "@/components/sections/about/AboutHero";
import { CompanyOverview } from "@/components/sections/about/CompanyOverview";
import { MissionVision } from "@/components/sections/about/MissionVision";
import { Objectives } from "@/components/sections/about/Objectives";
import { Strength } from "@/components/sections/about/Strength";
import { StrategicPartners } from "@/components/sections/about/StrategicPartners";
import { Leadership } from "@/components/sections/about/Leadership";
import { HSEQuality } from "@/components/sections/about/HSEQuality";
import { Clients } from "@/components/sections/about/Clients";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <CompanyOverview />

      <MissionVision />

      <Objectives />

      <Strength />

      <StrategicPartners />

      <Leadership />

      <HSEQuality />

      <Clients />

      <CTA />

      <Footer />
    </>
  );
}