const stats = [
  {
    value: "30+",
    label: "Years of Experience",
  },
  {
    value: "200+",
    label: "Projects Delivered",
  },
  {
    value: "100%",
    label: "Commitment",
  },
];

export function HeroStats() {
  return (
    <div className="mt-16 grid grid-cols-3 gap-10 border-t border-gray-200 pt-10">
      {stats.map((item) => (
        <div key={item.label}>
          <h3 className="text-3xl font-bold">
            {item.value}
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}