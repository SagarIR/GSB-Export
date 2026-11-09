import React from "react";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { ARTICLES } from "@/content/resources";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ResourcesSection() {
  const featuredArticles = ARTICLES.slice(0, 3);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-offwhite border-b border-silver/50">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            badge="Engineering Knowledge Base"
            badgeVariant="steel"
            title="Technical Insights &amp; Thermal Guides"
            subtitle="Authoritative articles on thermodynamics, equipment comparison, ASME/TEMA sizing considerations, and plant maintenance best practices."
            className="mb-0 max-w-2xl"
          />
          <div className="mt-4 md:mt-0">
            <Link
              href="/resources"
              className="text-xs font-bold uppercase tracking-wider text-steel hover:text-copper flex items-center gap-1.5 transition-colors"
            >
              <span>Explore All Technical Guides</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 3 Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white border border-silver/70 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-steel/60 transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-graphite/60 mb-3">
                  <span className="bg-steel/10 text-steel font-bold uppercase tracking-wider px-2.5 py-0.5 rounded text-[10px]">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-copper" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-navy group-hover:text-copper transition-colors mb-2.5 line-clamp-2">
                  <Link href={`/resources/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className="text-xs text-graphite/80 leading-relaxed line-clamp-3 mb-4">
                  {article.summary}
                </p>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-silver/40 flex items-center justify-between">
                <span className="text-[11px] text-graphite/60 font-medium">
                  {article.publishDate}
                </span>
                <Link
                  href={`/resources/${article.slug}`}
                  className="text-xs font-bold text-steel group-hover:text-copper flex items-center gap-1 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
