interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

export function FooterColumn({
  title,
  children,
}: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-white/60">
        {title}
      </h3>

      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}