import {
  Mail,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Intro */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
          Contact Us
        </p>

        <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900">
          Let&apos;s Work Together
        </h2>

        <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
          Whether you have a project to discuss, need more information
          about our services, or want to explore a partnership, our team
          is ready to hear from you.
        </p>
      </div>

      {/* Contact Details */}
      <div className="mt-10 space-y-5">
        {/* Address */}
        <div className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10">
            <MapPin
              size={22}
              className="text-[var(--primary)]"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Our Office
            </p>

            <p className="mt-2 leading-7 text-slate-700">
              Plot 215B Woji Road,
              <br />
              GRA Phase 2,
              <br />
              Port Harcourt, Rivers State
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10">
            <Phone
              size={22}
              className="text-[var(--primary)]"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Phone
            </p>

            <div className="mt-2 space-y-1">
              <a
                href="tel:+2348063438894"
                className="block font-medium text-slate-700 transition hover:text-[var(--primary)]"
              >
                +234 806 343 8894
              </a>

              <a
                href="tel:+2348065249712"
                className="block font-medium text-slate-700 transition hover:text-[var(--primary)]"
              >
                +234 806 524 9712
              </a>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10">
            <Mail
              size={22}
              className="text-[var(--primary)]"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Email
            </p>

            <a
              href="mailto:info@avondale.ng"
              className="mt-2 block font-medium text-slate-700 transition hover:text-[var(--primary)]"
            >
              info@avondale.ng
            </a>
          </div>
        </div>

        {/* Business Hours */}
        <div className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10">
            <Clock
              size={22}
              className="text-[var(--primary)]"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Business Hours
            </p>

            <p className="mt-2 leading-7 text-slate-700">
              Monday – Friday
              <br />
              8:00 AM – 5:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}