import { Button } from "@/components/ui/Button";

export function HeroContent() {
  return (
    <div className="pt-16 lg:pt-20">
      <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-[var(--secondary)]">
        Engineering Excellence Since 1994
      </p>

      <h1 className="max-w-6xl text-6xl font-black leading-[0.9] tracking-[-0.04em] text-white md:text-7xl xl:text-[7rem]">
        Building Infrastructure That Powers Progress.
      </h1>

      <p className="mt-10 max-w-xl text-xl leading-9 text-white/80">
        Delivering engineering, marine, environmental and infrastructure
        solutions that transform industries and strengthen communities across
        Nigeria.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button href="/projects">
          Explore Projects
        </Button>

        <Button
          href="/contact"
          className="border border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:border-white/50"
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
}