import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "copper" | "steel" | "navy";
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  badge,
  badgeVariant = "copper",
  title,
  subtitle,
  align = "left",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "mb-10 lg:mb-14",
        isCenter ? "text-center max-w-3xl mx-auto" : "max-w-3xl",
        className
      )}
    >
      {badge && (
        <div className="mb-3">
          <span
            className={cn(
              "inline-flex items-center px-3 py-1 rounded text-xs font-bold tracking-widest uppercase border",
              badgeVariant === "copper" &&
                (isDark
                  ? "bg-copper/20 text-copper-light border-copper/40"
                  : "bg-copper/10 text-copper-dark border-copper/30"),
              badgeVariant === "steel" &&
                (isDark
                  ? "bg-steel-light/20 text-silver-light border-steel-light/40"
                  : "bg-steel/10 text-steel border-steel/30"),
              badgeVariant === "navy" &&
                (isDark
                  ? "bg-white/10 text-silver-light border-white/20"
                  : "bg-navy/10 text-navy border-navy/20")
            )}
          >
            {badge}
          </span>
        </div>
      )}
      <h2
        className={cn(
          "text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight",
          isDark ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed",
            isDark ? "text-silver" : "text-graphite/80"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

