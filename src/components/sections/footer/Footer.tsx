import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Main Footer */}

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 xl:px-12">
  {/* CTA */}

<div className="relative overflow-hidden rounded-[32px] bg-[var(--primary)] px-8 py-9 md:px-12 md:py-10">
  {/* Decorative Elements */}

  <div className="absolute -right-20 -top-28 h-64 w-64 rounded-full border border-white/10" />

  <div className="absolute -bottom-32 right-20 h-72 w-72 rounded-full border border-white/10" />

  <div className="relative z-10 flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
        Let&apos;s Build Something That Lasts
      </p>

      <p className="mt-4 text-lg leading-8 text-white/90 md:text-xl">
        Talk to Avondale about your next project, infrastructure requirement
        or engineering solution.
      </p>
    </div>

    <Link
      href="/contact"
      className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      Start a Conversation
      <span className="ml-4 text-lg">→</span>
    </Link>
  </div>
</div>

        {/* Footer Content */}

        <div className="mt-24 grid gap-16 lg:grid-cols-[1.5fr_0.7fr_0.8fr]">
          {/* Brand */}

          <div>
            <Link
              href="/"
              aria-label="Avondale Services & Supplies Limited"
              className="inline-flex rounded-xl bg-white px-4 py-2"
            >
              <Image
                src="/logos/logo.png"
                alt="Avondale Services & Supplies Limited"
                width={210}
                height={60}
                className="h-11 w-auto object-contain"
              />
            </Link>

            <p className="mt-8 max-w-md text-lg leading-8 text-slate-400">
              A wholly indigenous Nigerian company delivering integrated
              solutions across infrastructure development, environmental
              remediation, construction and healthcare-supporting equipment
              supply.
            </p>

            <p className="mt-6 text-sm font-medium uppercase tracking-[0.25em] text-slate-600">
              Established 1994 · RC-237911
            </p>
          </div>

          {/* Navigation */}

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Explore
            </p>

            <nav className="mt-7 space-y-4">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-base font-medium text-slate-300 transition-colors duration-300 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Contact
            </p>

            <div className="mt-7 space-y-5 text-base leading-7 text-slate-300">
              <p>
                Plot 215B Woji Road,
                <br />
                GRA Phase 2,
                <br />
                Port Harcourt,
                <br />
                Rivers State, Nigeria.
              </p>

              <div>
                <a
                  href="mailto:info@avondale.ng"
                  className="transition-colors hover:text-white"
                >
                  info@avondale.ng
                </a>

                <a
                  href="tel:+2348063438894"
                  className="mt-2 block transition-colors hover:text-white"
                >
                  +234 806 343 8894
                </a>

                <a
                  href="tel:+2348065249712"
                  className="mt-2 block transition-colors hover:text-white"
                >
                  +234 806 524 9712
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}

        <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Avondale Services &amp; Supplies
            Limited. All Rights Reserved.
          </p>

          <p className="uppercase tracking-[0.2em]">
            Engineering · Infrastructure · Sustainability
          </p>
        </div>
      </div>
    </footer>
  );
}