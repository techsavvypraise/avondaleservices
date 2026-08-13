interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
}

export function FeatureCard({
  number,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-10 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--primary)] hover:shadow-2xl">
      <div className="text-5xl font-black text-[var(--primary)]">
        {number}
      </div>

      <h3 className="mt-8 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}