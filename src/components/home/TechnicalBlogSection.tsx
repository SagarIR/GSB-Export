"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, FileText } from "lucide-react";
import { ARTICLES, ResourceArticle } from "@/content/resources";

export function TechnicalBlogSection() {
  const featuredArticles = ARTICLES.slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-neutral-50/60 border-b border-neutral-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/60 px-3 py-1 rounded-full border border-emerald-200/60 inline-block">
              Engineering Insights
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-sans text-[#0A1C33] tracking-tight leading-[1.15]">
              From the technical <br />
              <span className="text-[#F36C21] font-extrabold">knowledge base.</span>
            </h2>
          </div>

          <div>
            <Link
              href="/resources"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-forest hover:text-emerald-700 transition-colors group"
            >
              <span>Explore all engineering guides</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 3 Blog Cards matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((art, idx) => (
            <article
              key={art.slug}
              className="rounded-3xl bg-white border border-neutral-200/80 hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 sm:p-7 space-y-4">
                {/* Visual Banner placeholder */}
                <div className="h-40 rounded-2xl bg-gradient-to-br from-emerald-950 via-slate-900 to-forest p-5 text-white flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                      {art.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-slate-300 font-mono">
                      <Clock className="w-3 h-3" />
                      <span>{art.readTime}</span>
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] text-emerald-400/80 uppercase font-mono block">
                      GSB Technical Guide #{idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-slate-200 line-clamp-1">
                      ASME, TEMA &amp; API Code Standards
                    </span>
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <h3 className="text-lg font-bold font-sans text-slate-900 group-hover:text-[#F36C21] transition-colors leading-snug">
                    <Link href={`/resources/${art.slug}`}>
                      {art.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {art.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-7 py-4 border-t border-slate-100 bg-neutral-50/50 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  {art.publishDate}
                </span>

                <Link
                  href={`/resources/${art.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-forest group-hover:underline"
                >
                  <span>Read article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
