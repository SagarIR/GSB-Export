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
        variant === "copper" && "bg-copper/10 text-copper-dark border-copper/30",
        variant === "steel" && "bg-steel/10 text-steel border-steel/30",
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
