"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

const services = [
  { name: "Environmental Site Characterization", href: "/services/environmental-site-characterization" },
  { name: "Soil & Groundwater Remediation", href: "/services/soil-groundwater-remediation" },
  { name: "Construction of Roads", href: "/services/construction-of-roads" },
  { name: "Construction & Supply of Marine Vessels", href: "/services/construction-supply-marine-vessels" },
  { name: "Construction of Buildings", href: "/services/construction-of-buildings" },
  { name: "Dredging & Land Reclamation", href: "/services/dredging-land-reclamation" },
  { name: "Shoreline Protection", href: "/services/shoreline-protection" },
  { name: "Medical Equipment Supply", href: "/services/medical-equipment-supply" },
  { name: "Specialized Vehicles & Heavy-Duty Machinery", href: "/services/specialized-vehicles-heavy-duty-machinery" },
  { name: "Environmental Restoration Services", href: "/services/environmental-restoration-services" },
];

const aboutLinks = [
  { name: "Company Overview", href: "/about#company-overview" },
  { name: "Mission, Vision & Philosophy", href: "/about#mission-vision" },
  { name: "Objectives", href: "/about#objectives" },
  { name: "Our Strength", href: "/about#strength" },
  { name: "Strategic Partners", href: "/about#strategic-partners" },
  { name: "Board of Directors", href: "/about#leadership" },
  { name: "HSE & Quality", href: "/about#hse-quality" },
  { name: "Clients", href: "/about#clients" },
];

const projectCategories = [
  "Soil & Groundwater Remediation",
  "Road Construction",
  "Road Rehabilitation",
  "Building Construction",
  "Healthcare Infrastructure",
  "Environmental Restoration",
  "Community Development & Marine Support",
  "Marine Engineering",
  "Renewable Energy",
  "Industrial Equipment & Procurement",
];

const mainLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about", children: aboutLinks },
  { name: "Services", href: "/services", children: services },
  { name: "Projects", href: "/projects", children: projectCategories.map((category) => ({
    name: category,
    href: `/projects?category=${encodeURIComponent(category)}`,
  })) },
  { name: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);

  const isHome = pathname === "/";

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileOpen(null);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isHome
          ? "bg-slate-950/90 backdrop-blur-xl"
          : "border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-8 xl:px-12">
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
            className="h-10 w-auto object-contain sm:h-11"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={`hidden items-center gap-1 rounded-full px-3 py-2 lg:flex ${
            isHome
              ? "border border-white/10 bg-white/10"
              : "border border-slate-200 bg-slate-50"
          }`}
        >
          {mainLinks.map((link) => {
            const active = isActive(link.href);
            const hasChildren = Boolean(link.children?.length);

            return (
              <div key={link.name} className="group relative">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold transition duration-300 ${
                    isHome
                      ? active
                        ? "text-[var(--secondary)]"
                        : "text-white hover:bg-white/10 hover:text-[var(--secondary)]"
                      : active
                        ? "text-[var(--primary)]"
                        : "text-slate-700 hover:bg-white hover:text-[var(--primary)]"
                  }`}
                >
                  {link.name}
                  {hasChildren && <ChevronDown size={15} className="transition-transform duration-200 group-hover:rotate-180" />}
                </Link>

                {hasChildren && (
                  <div className="invisible absolute left-1/2 top-full z-[60] w-[360px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl">
                      <div className="mb-2 flex items-center justify-between px-3 py-2">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
                          {link.name}
                        </p>
                        <ChevronRight size={15} className="text-slate-400" />
                      </div>

                      <div className="grid max-h-[65vh] overflow-y-auto sm:grid-cols-2">
                        {link.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="rounded-2xl px-3 py-3 text-sm font-medium leading-5 text-slate-700 transition hover:bg-slate-50 hover:text-[var(--primary)]"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>

                      <Link
                        href={link.href}
                        className="mt-2 flex items-center justify-between rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary)]"
                      >
                        View All {link.name}
                        <ChevronRight size={16} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full bg-[var(--primary)] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-700 lg:block"
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
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span className={`block h-0.5 w-full transition-transform duration-300 ${isHome ? "bg-white" : "bg-slate-900"} ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-full transition-opacity duration-300 ${isHome ? "bg-white" : "bg-slate-900"} ${menuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`block h-0.5 w-full transition-transform duration-300 ${isHome ? "bg-white" : "bg-slate-900"} ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className={`max-h-[85vh] overflow-y-auto border-t px-5 pb-6 pt-4 sm:px-6 ${
            isHome
              ? "border-white/10 bg-slate-950/95"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="space-y-2">
            {mainLinks.map((link) => {
              const active = isActive(link.href);
              const hasChildren = Boolean(link.children?.length);
              const open = mobileOpen === link.name;

              if (!hasChildren) {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className={`block rounded-xl px-5 py-3.5 text-base font-semibold transition ${
                      isHome
                        ? active
                          ? "bg-white/10 text-[var(--secondary)]"
                          : "text-white hover:bg-white/10 hover:text-[var(--secondary)]"
                        : active
                          ? "bg-slate-100 text-[var(--primary)]"
                          : "text-slate-700 hover:bg-slate-50 hover:text-[var(--primary)]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              }

              return (
                <div key={link.name} className="rounded-xl">
                  <button
                    type="button"
                    onClick={() => setMobileOpen(open ? null : link.name)}
                    aria-expanded={open}
                    className={`flex w-full items-center justify-between rounded-xl px-5 py-3.5 text-left text-base font-semibold transition ${
                      isHome
                        ? active
                          ? "bg-white/10 text-[var(--secondary)]"
                          : "text-white hover:bg-white/10"
                        : active
                          ? "bg-slate-100 text-[var(--primary)]"
                          : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                    <ChevronDown size={18} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
                  </button>

                  <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="min-h-0 overflow-hidden pl-3 pt-1">
                      {link.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeMenu}
                          className={`block rounded-lg px-5 py-2.5 text-sm leading-5 transition ${
                            isHome
                              ? "text-white/75 hover:bg-white/10 hover:text-white"
                              : "text-slate-600 hover:bg-slate-50 hover:text-[var(--primary)]"
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}

                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`mt-1 block rounded-lg px-5 py-2.5 text-sm font-bold ${
                          isHome ? "text-[var(--secondary)]" : "text-[var(--primary)]"
                        }`}
                      >
                        View All {link.name} →
                      </Link>
                    </div>
                  </div>
                </div>
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
