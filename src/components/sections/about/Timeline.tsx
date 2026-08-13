import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const milestones = [
  {
    year: "1994",
    title: "Company Established",
    description:
      "Avondale Services & Supplies Limited was founded to provide engineering and technical services across Nigeria.",
  },
  {
    year: "2005",
    title: "Marine & Civil Expansion",
    description:
      "Expanded operations into marine engineering, civil infrastructure and project delivery.",
  },
  {
    year: "2015",
    title: "Major Infrastructure Projects",
    description:
      "Successfully executed large-scale government and private sector engineering projects nationwide.",
  },
  {
    year: "Today",
    title: "Engineering Excellence",
    description:
      "Continuing to deliver innovative engineering, environmental and infrastructure solutions across Nigeria.",
  },
];

export function Timeline() {
  return (
    <Section className="bg-white py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
            Our Journey
          </p>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
            More Than Three Decades of Engineering Excellence
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our journey reflects decades of innovation, growth and successful
            project delivery across multiple engineering disciplines.
          </p>
        </div>

        <div className="relative mt-20">
          {/* Timeline line */}

          <div className="absolute bottom-0 left-4 top-0 w-px bg-slate-200 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-14 md:space-y-20">
            {milestones.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex flex-col gap-8 pl-12 md:flex-row md:items-center md:gap-12 md:pl-0 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}

                <div className="w-full md:w-[calc(50%-3rem)]">
                  <div className="rounded-[30px] border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl md:p-10">
                    <span className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--primary)]">
                      {item.year}
                    </span>

                    <h3 className="mt-4 text-2xl font-bold text-slate-900 md:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Marker */}

                <div className="absolute left-4 top-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-[var(--primary)] ring-8 ring-white md:left-1/2 md:top-1/2 md:-translate-y-1/2" />

                {/* Empty side */}

                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}