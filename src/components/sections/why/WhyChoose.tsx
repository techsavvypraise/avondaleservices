import Image from "next/image";
import {
  ShieldCheck,
  Award,
  HardHat,
  BadgeCheck,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function WhyChoose() {
  return (
    <Section className="bg-slate-50 py-28">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--secondary)]">
              Why Choose Avondale
            </p>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
              Engineering Excellence Built on Trust,
              Innovation & Proven Results.
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              For more than three decades, Avondale has successfully
              delivered marine engineering, environmental remediation,
              road construction and institutional infrastructure
              projects for government agencies, multinational
              organisations and private sector clients across Nigeria.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-[var(--primary)]/10 p-3 text-[var(--primary)]">
                  <Award size={22} />
                </div>

                <span className="text-lg font-medium text-slate-800">
                  30+ Years of Engineering Experience
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-full bg-[var(--primary)]/10 p-3 text-[var(--primary)]">
                  <ShieldCheck size={22} />
                </div>

                <span className="text-lg font-medium text-slate-800">
                  Complex Projects Successfully Delivered
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-full bg-[var(--primary)]/10 p-3 text-[var(--primary)]">
                  <HardHat size={22} />
                </div>

                <span className="text-lg font-medium text-slate-800">
                  Trusted by Government & Industry
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-full bg-[var(--primary)]/10 p-3 text-[var(--primary)]">
                  <BadgeCheck size={22} />
                </div>

                <span className="text-lg font-medium text-slate-800">
                  Safety, Quality & Environmental Compliance
                </span>
              </div>
            </div>
          </div>

          <div className="relative h-[650px] overflow-hidden rounded-[40px] shadow-2xl">
            <Image
              src="/images/projects/ogale.jpg"
              alt="Avondale Engineering Project"
              fill
              priority
              sizes="50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        <div className="mt-24 grid gap-6 md:grid-cols-3">
          <div className="rounded-[32px] bg-slate-900 p-10 text-white">
            <div className="text-6xl font-black">30+</div>
            <p className="mt-4 text-xl">
              Years of Engineering Excellence
            </p>
          </div>

          <div className="rounded-[32px] bg-[var(--primary)] p-10 text-white">
            <div className="text-6xl font-black">100+</div>
            <p className="mt-4 text-xl">
              Projects Successfully Delivered
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-10 shadow-lg">
            <div className="text-6xl font-black text-slate-900">
              HSE
            </div>

            <p className="mt-4 text-xl text-slate-700">
              Safety, Quality & Environmental Standards
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}