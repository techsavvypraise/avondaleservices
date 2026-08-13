"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  }

  return (
    <div className="h-full rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
          Send Us a Message
        </p>

        <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
          Let&apos;s Discuss Your Project
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Tell us about your project, requirements or enquiry and our
          team will get back to you.
        </p>
      </div>

      {submitted ? (
        <div className="mt-10 rounded-2xl bg-slate-50 p-8">
          <h3 className="text-xl font-bold text-slate-900">
            Message received
          </h3>

          <p className="mt-3 leading-7 text-slate-600">
            Thank you for contacting Avondale Services &amp; Supplies
            Limited. Our team will get back to you shortly.
          </p>

          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-6 rounded-full bg-[var(--primary)] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-semibold text-slate-900"
              >
                Full Name
              </label>

              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Your full name"
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[var(--primary)] focus:bg-white focus:ring-2 focus:ring-[var(--primary)]/10"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-900"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[var(--primary)] focus:bg-white focus:ring-2 focus:ring-[var(--primary)]/10"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="mt-6">
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-semibold text-slate-900"
            >
              Phone Number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+234 800 000 0000"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[var(--primary)] focus:bg-white focus:ring-2 focus:ring-[var(--primary)]/10"
            />
          </div>

          {/* Subject */}
          <div className="mt-6">
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-semibold text-slate-900"
            >
              Subject
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="How can we help?"
              required
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[var(--primary)] focus:bg-white focus:ring-2 focus:ring-[var(--primary)]/10"
            />
          </div>

          {/* Message */}
          <div className="mt-6">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold text-slate-900"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us about your project or enquiry..."
              required
              className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[var(--primary)] focus:bg-white focus:ring-2 focus:ring-[var(--primary)]/10"
            />
          </div>

          {/* Submit */}
          <div className="mt-6 flex items-center justify-between gap-5">
            <p className="text-sm text-slate-500">
              We&apos;ll get back to you as soon as possible.
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="shrink-0 rounded-full bg-[var(--primary)] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}