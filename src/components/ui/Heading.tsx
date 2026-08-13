interface HeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function Heading({
  eyebrow,
  title,
  description,
}: HeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}