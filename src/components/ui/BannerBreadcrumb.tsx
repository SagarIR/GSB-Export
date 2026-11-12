import React from "react";
import Link from "next/link";

export interface BannerBreadcrumbItem {
  label: string;
  href?: string;
}

interface BannerBreadcrumbProps {
  items: BannerBreadcrumbItem[];
}

/**
 * Consistent dark-banner breadcrumb navigation for subpages.
 */
export function BannerBreadcrumb({ items }: BannerBreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 text-sm text-slate-200 mb-4"
    >
      <Link href="/" className="hover:text-[#FA8540] transition-colors">
        Home
      </Link>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={item.label}>
            <span aria-hidden="true">/</span>
            {isLast || !item.href ? (
              <span className="text-[#FA8540] font-semibold" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-[#FA8540] transition-colors">
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

