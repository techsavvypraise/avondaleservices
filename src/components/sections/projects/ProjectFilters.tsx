"use client";

interface ProjectFiltersProps {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
}

export function ProjectFilters({
  categories,
  activeCategory,
  onChange,
}: ProjectFiltersProps) {
  return (
    <div className="mt-10">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onChange(category)}
              className={`rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "border-[var(--primary)] bg-[var(--primary)] text-white shadow-md"
                  : "border-slate-300 bg-white text-slate-700 hover:border-[var(--primary)] hover:text-[var(--primary)]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}