import { ShieldCheck, HardHat, Leaf, BadgeCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const commitments = [
  { icon: ShieldCheck, title: "Health & Safety", description: "We maintain a strong safety culture by implementing internationally recognised health and safety practices across our operations and projects." },
  { icon: HardHat, title: "Quality Assurance", description: "We are committed to delivering reliable, high-quality solutions that meet the requirements of our clients and applicable standards." },
  { icon: Leaf, title: "Environmental Responsibility", description: "Our approach to project delivery recognises the importance of environmental protection, sustainability and responsible development." },
  { icon: BadgeCheck, title: "Professional Excellence", description: "Our multidisciplinary professionals bring technical expertise, experience and a commitment to excellence to every project we undertake." },
];

export function HSEQuality() {
  return (
    <Section id="hse-quality" className="bg-slate-50 py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">HSE &amp; Quality</p>
          <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">Safety, Quality &amp; Environmental Responsibility</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">We are committed to responsible project delivery, maintaining high standards of safety, quality and environmental stewardship across our operations.</p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {commitments.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="group rounded-[30px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white"><Icon size={28} /></div>
                <h3 className="mt-7 text-2xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-4 leading-8 text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}