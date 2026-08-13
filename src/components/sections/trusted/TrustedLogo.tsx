import Image from "next/image";

interface TrustedLogoProps {
  src: string;
  alt: string;
}

export function TrustedLogo({
  src,
  alt,
}: TrustedLogoProps) {
  return (
    <div className="group flex h-28 items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-xl">
      <div className="relative h-16 w-36">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="180px"
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  );
}