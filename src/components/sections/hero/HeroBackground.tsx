import Image from "next/image";

export function HeroBackground() {
  return (
    <div className="absolute inset-0">
      <Image
        src="/images/services/marine.jpg"
        alt="Marine Engineering"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}