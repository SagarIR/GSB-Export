import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Calendar, ArrowLeft, ArrowRight, CheckCircle2, FileText, Share2, BookOpen } from "lucide-react";
import { ARTICLES, getArticleBySlug } from "@/content/resources";
import { Container } from "@/components/ui/Container";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | GSB Export Resources`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      publishedTime: article.publishDate,
    },
  };
}

export default function ArticleDetailPage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  // Related articles
  const otherArticles = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <article className="bg-white">
      {/* Article Header */}
      <section className="bg-navy py-14 sm:py-18 text-white relative border-b border-steel/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link
              href="/resources"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FA8540] hover:text-orange-200 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Knowledge Base</span>
            </Link>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-200 mb-4">
              <span className="bg-steel/30 text-copper-light font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border border-steel/40">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#FA8540]" />
                <span>{article.readTime}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#FA8540]" />
                <span>Published: {article.publishDate}</span>
              </span>
            </div>

            <h1 className="text-h1 font-bold text-white leading-tight">
              {article.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed mb-0">
              {article.summary}
            </p>
          </div>
        </Container>
      </section>

      {/* Article Body Content */}
      <section className="py-14 sm:py-18 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Key Takeaways Card */}
            <div className="mb-10 p-6 sm:p-7 bg-offwhite rounded-xl border-l-4 border-[#F36C21] border-y border-r border-silver/60">
              <h2 className="text-lg sm:text-xl font-bold text-navy mb-3.5 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#C2410C]" />
                <span>Key Engineering Takeaways</span>
              </h2>
              <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 leading-relaxed">
                {article.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C2410C] shrink-0 mt-2.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sections */}
            <div className="space-y-10 text-base text-slate-700 leading-relaxed">
              {article.contentSections.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h2 className="text-h3 font-bold text-navy border-b border-silver/40 pb-2.5">
                    {section.heading}
                  </h2>
                  {section.body.map((paragraph, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* In-Article Call to Action Box */}
            <div className="mt-14 p-8 bg-navy rounded-xl text-white border border-steel/60">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1.5">
                    Need Engineering Sizing Support?
                  </h3>
                  <p className="text-sm sm:text-base text-slate-200 max-w-lg mb-0">
                    Submit your thermal datasheets and fluid parameters. Our engineering coordinators evaluate LMTD, heat transfer coefficients, and metallurgy.
                  </p>
                </div>
                <Link
                  href="/request-a-quote"
                  className="btn-copper text-sm font-bold px-6 py-3 rounded-full shrink-0 flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request RFQ</span>
                </Link>
              </div>
            </div>

            {/* Related Articles Navigation */}
            <div className="mt-16 pt-10 border-t border-silver/60">
              <h3 className="text-xl font-bold text-navy mb-6">
                Related Engineering Guides
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherArticles.map((rel) => (
                  <div
                    key={rel.id}
                    className="p-5 bg-offwhite rounded-xl border border-silver/60 hover:border-steel/60 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#C2410C] block mb-1.5">
                        {rel.category}
                      </span>
                      <h4 className="text-base font-bold text-navy line-clamp-2 mb-2.5 leading-snug">
                        <Link href={`/resources/${rel.slug}`} className="hover:text-[#C2410C] transition-colors">
                          {rel.title}
                        </Link>
                      </h4>
                    </div>
                    <Link
                      href={`/resources/${rel.slug}`}
                      className="text-sm font-semibold text-[#0F4C81] hover:text-[#C2410C] flex items-center gap-1 pt-2 transition-colors"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}

