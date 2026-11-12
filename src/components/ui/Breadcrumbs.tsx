import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-600">
        <li className="flex items-center">
          <Link
            href="/"
            className="hover:text-[#C2410C] transition-colors flex items-center gap-1"
            title="Home"
          >
            <Home className="w-4 h-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              {isLast || !item.href ? (
                <span className="font-semibold text-navy truncate max-w-[200px] sm:max-w-md" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-[#C2410C] transition-colors truncate max-w-[150px] sm:max-w-none"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

