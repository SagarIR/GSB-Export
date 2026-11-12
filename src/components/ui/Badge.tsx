import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "copper" | "steel" | "navy" | "silver";
  children: React.ReactNode;
}

export function Badge({ variant = "steel", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold tracking-wider uppercase border",
        variant === "copper" && "bg-orange-50 text-[#C2410C] border-orange-200/80",
        variant === "steel" && "bg-steel/10 text-[#0F4C81] border-steel/30",
        variant === "navy" && "bg-navy/10 text-navy border-navy/20",
        variant === "silver" && "bg-offwhite text-graphite border-silver",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

