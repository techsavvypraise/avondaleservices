import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "outline";
}

export function Button({
  href,
  children,
  className,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold transition-all duration-300",

        variant === "primary"
          ? "bg-[var(--primary)] text-white hover:-translate-y-0.5 hover:shadow-lg"
          : "border border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-slate-900",

        className
      )}
    >
      {children}
    </Link>
  );
}