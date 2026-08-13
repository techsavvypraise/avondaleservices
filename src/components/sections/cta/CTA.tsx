import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-[#111A33]">
      <div className="mx-auto max-w-7xl px-6 py-28 text-center lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--secondary)]">
          LET'S BUILD TOGETHER
        </p>

        <h2 className="mx-auto mt-6 max-w-5xl text-5xl font-extrabold leading-tight text-white md:text-6xl">
          Delivering Engineering
          <br />
          Excellence Across Nigeria.
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
          Whether you're planning infrastructure, marine,
          environmental or institutional projects, our team is ready
          to deliver innovative engineering solutions backed by over
          three decades of proven experience.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-[#0E4A84] px-10 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#0C3D6E]"
          >
            Request a Consultation
          </Link>

          <Link
            href="/projects"
            className="rounded-full border border-white/25 bg-white/10 px-10 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-slate-900"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}