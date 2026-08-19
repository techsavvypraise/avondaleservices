import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";

interface HeroSlideProps {
  slide: {
    image: string;
    eyebrow: string;
    title: string;
    description: string;
    primary: {
      text: string;
      href: string;
    };
    secondary: {
      text: string;
      href: string;
    };
    featured: {
      eyebrow: string;
      title: string;
      description: string;
      sector: string;
      status: string;
      href: string;
    };
  };
  priority?: boolean;
}

export function HeroSlide({
  slide,
  priority = false,
}: HeroSlideProps) {
  return (
    <div className="relative h-full w-full shrink-0 overflow-hidden">
      {/* Background Image */}
      <Image
        src={slide.image}
        alt={slide.title}
        fill
        preload={priority}
        loading={priority ? "eager" : "lazy"}
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/65 to-slate-900/30" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6 md:px-8 lg:px-12">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.15fr_430px] lg:gap-20">

          {/* LEFT CONTENT */}
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--secondary)] md:text-sm md:tracking-[0.35em]">
              {slide.eyebrow}
            </p>

            <h1 className="mt-6 text-4xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl md:mt-8 md:text-6xl xl:text-[5.8rem]">
              {slide.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg md:mt-8 md:text-xl md:leading-9">
              {slide.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 md:mt-12 md:gap-5">
              <Button href={slide.primary.href}>
                {slide.primary.text}
              </Button>

              <Button
                href={slide.secondary.href}
                variant="outline"
              >
                {slide.secondary.text}
              </Button>
            </div>
          </div>

          {/* FEATURED PROJECT CARD */}
          <Link
            href={slide.featured.href}
            className="group hidden rounded-[36px] border border-white/20 bg-slate-800/70 p-10 text-white backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-slate-800/80 lg:block"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-white/60">
              {slide.featured.eyebrow}
            </p>

            <h3 className="mt-6 text-3xl font-bold leading-tight transition-colors group-hover:text-[var(--secondary)]">
              {slide.featured.title}
            </h3>

            <p className="mt-6 leading-8 text-white/75">
              {slide.featured.description}
            </p>

            <div className="mt-8 border-t border-white/20 pt-6">
              <div className="flex justify-between py-2">
                <span className="text-white/60">
                  Sector
                </span>

                <span className="text-right">
                  {slide.featured.sector}
                </span>
              </div>

              <div className="flex justify-between py-2">
                <span className="text-white/60">
                  Status
                </span>

                <span className="text-[var(--secondary)]">
                  {slide.featured.status}
                </span>
              </div>
            </div>

            <div className="mt-8 text-sm font-semibold uppercase tracking-[0.2em]">
              View Project →
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}