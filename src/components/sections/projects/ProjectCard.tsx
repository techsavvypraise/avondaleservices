import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  category: string;
  image: string;
  href: string;
  description: string;
  location?: string;
  large?: boolean;
};

export function ProjectCard({
  title,
  category,
  image,
  href,
  description,
  location,
  large = false,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className={`group relative block overflow-hidden rounded-[28px] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
        large ? "h-[560px]" : "h-[430px]"
      }`}
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes={
          large
            ? "(max-width: 1280px) 100vw, 1200px"
            : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        }
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/10" />

      {/* Content */}
      <div
        className={`absolute inset-x-0 bottom-0 z-10 ${
          large ? "p-8 md:p-10" : "p-7"
        }`}
      >
        {/* Category */}
        <div
          className={`inline-flex rounded-full bg-[var(--primary)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg ${
            large ? "" : "max-w-full"
          }`}
        >
          {category}
        </div>

        {/* Location — ONLY on the large card */}
        {large && location && (
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
            {location}
          </p>
        )}

        {/* Title */}
        <h3
          className={`mt-4 font-bold leading-tight text-white ${
            large
              ? "text-4xl md:text-5xl"
              : "line-clamp-2 text-2xl"
          }`}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={`mt-5 text-white/85 ${
            large
              ? "line-clamp-3 text-lg leading-8"
              : "line-clamp-2 text-base leading-7"
          }`}
        >
          {description}
        </p>

        {/* View Project */}
        <div
          className={`flex items-center justify-between ${
            large ? "mt-8" : "mt-6"
          }`}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/75 transition-colors group-hover:text-white">
            View Project
          </span>

          <span
            className={`flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white/20 ${
              large ? "h-14 w-14" : "h-12 w-12"
            }`}
          >
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}