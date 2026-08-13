import type { Metadata } from "next";

import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Contact Us | Avondale Services & Supplies Limited",
  description:
    "Contact Avondale Services & Supplies Limited for engineering, environmental, construction, marine, healthcare and industrial solutions across Nigeria.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="bg-slate-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <ContactInfo />

          <ContactForm />
        </div>
      </section>

      <CTA />

      <Footer />
    </>
  );
}