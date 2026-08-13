import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export function Section({
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      {...props}
      className={cn(
        "scroll-mt-28 py-24 lg:py-32",
        className
      )}
    >
      {children}
    </section>
  );
}
