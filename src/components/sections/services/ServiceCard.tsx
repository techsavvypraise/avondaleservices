import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  image: string;
  description?: string;
  href: string;
}

export function ServiceCard({
  title,
  image,
  description,
  href,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative block h-[460px] overflow-hidden rounded-[28px]"
    >
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/10" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-8">
        <div>
          <span className="inline-flex rounded-full bg-[var(--primary)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Service
          </span>
        </div>

        <div>
          <h3 className="max-w-sm text-3xl font-bold leading-tight text-white">
            {title}
          </h3>

          {description && (
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/80">
              {description.length > 90
                ? `${description.slice(0, 90)}...`
                : description}
            </p>
          )}

          <div className="mt-8 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              View Service
            </span>

            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-slate-900">
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}