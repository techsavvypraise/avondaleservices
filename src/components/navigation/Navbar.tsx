"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === "/";

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isHome
          ? "bg-slate-950/90 backdrop-blur-xl"
          : "border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8 xl:px-12">
        {/* Logo */}

        <Link
          href="/"
          onClick={closeMenu}
          className="shrink-0"
          aria-label="Avondale Services & Supplies Limited"
        >
          <Image
            src="/logos/logo.png"
            alt="Avondale Services & Supplies Limited"
            width={210}
            height={60}
            priority
            className="h-11 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}

        <nav
          className={`hidden items-center gap-8 rounded-full px-8 py-3 lg:flex ${
            isHome
              ? "border border-white/10 bg-white/10"
              : "border border-slate-200 bg-slate-50"
          }`}
        >
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition duration-300 ${
                  isHome
                    ? isActive
                      ? "text-[var(--secondary)]"
                      : "text-white hover:text-[var(--secondary)]"
                    : isActive
                      ? "text-[var(--primary)]"
                      : "text-slate-700 hover:text-[var(--primary)]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}

        <Link
          href="/contact"
          className="hidden rounded-full bg-[var(--primary)] px-8 py-3.5 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-700 lg:block"
        >
          Get a Quote
        </Link>

        {/* Mobile Menu Button */}

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className={`flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden ${
            isHome
              ? "border-white/20 bg-white/10 text-white"
              : "border-slate-200 bg-slate-50 text-slate-900"
          }`}
        >
          <span className="sr-only">
            {menuOpen ? "Close menu" : "Open menu"}
          </span>

          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-0.5 w-full transition-transform duration-300 ${
                isHome ? "bg-white" : "bg-slate-900"
              } ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />

            <span
              className={`block h-0.5 w-full transition-opacity duration-300 ${
                isHome ? "bg-white" : "bg-slate-900"
              } ${menuOpen ? "opacity-0" : "opacity-100"}`}
            />

            <span
              className={`block h-0.5 w-full transition-transform duration-300 ${
                isHome ? "bg-white" : "bg-slate-900"
              } ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className={`border-t px-6 pb-6 pt-4 ${
            isHome
              ? "border-white/10 bg-slate-950/95"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="space-y-2">
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={`block rounded-xl px-5 py-3.5 text-base font-semibold transition ${
                    isHome
                      ? isActive
                        ? "bg-white/10 text-[var(--secondary)]"
                        : "text-white hover:bg-white/10 hover:text-[var(--secondary)]"
                      : isActive
                        ? "bg-slate-100 text-[var(--primary)]"
                        : "text-slate-700 hover:bg-slate-50 hover:text-[var(--primary)]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-4 flex items-center justify-center rounded-xl bg-[var(--primary)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}