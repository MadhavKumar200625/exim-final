import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";
import DataNotFound from "@/app/Components/DataNotFound";
import { getBlogBySlug } from "@/lib/blogs";

export const dynamic = "force-dynamic";

const FALLBACK_COVER = "/global-trade-database/access-the-global-trade-database-of-over-200-countries.webp";

function formatDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? ""
    : date.toLocaleDateString("en", { year: "numeric", month: "long", day: "numeric" });
}

function estimateReadingMinutes(content = []) {
  const wordCount = content.join(" ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / 200));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog article not found | Exim Trade Data",
      robots: { index: false, follow: true },
    };
  }

  return {
    title: `${blog.title} | Exim Trade Data`,
    description: blog.excerpt,
    alternates: { canonical: `https://eximtradedata.com/blogs/${blog.slug}` },
  };
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return <DataNotFound subject="Blog article" />;
  }

  return (
    <main className="min-h-screen bg-white pt-20">
      <article>
        <header className="border-b border-slate-200 bg-[#f1f6fa]">
          <div className="mx-auto max-w-6xl px-5 pb-10 pt-7 sm:pb-14 sm:pt-9">
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm">
              <Link href="/blogs" className="inline-flex items-center gap-2 font-semibold text-[#005b9a] transition hover:text-[#ff7a18]">
                <ArrowLeft aria-hidden="true" size={16} />
                <span>Journal</span>
              </Link>
              <span aria-hidden="true" className="text-slate-400">/</span>
              <span className="truncate text-slate-500">{blog.category}</span>
            </nav>

            <div className="grid items-center gap-8 md:grid-cols-[1.08fr_0.92fr] md:gap-12">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-0.5 w-8 bg-[#ff7a18]" />
                  <p className="text-xs font-bold uppercase text-[#005b9a]">{blog.category}</p>
                </div>
                <h1 className="max-w-2xl text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl lg:text-[2.75rem]">
                  {blog.title}
                </h1>
                {blog.excerpt && (
                  <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                    {blog.excerpt}
                  </p>
                )}
                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
                  {blog.publishedAt && formatDate(blog.publishedAt) && (
                    <time className="inline-flex items-center gap-2" dateTime={blog.publishedAt}>
                      <CalendarDays aria-hidden="true" size={16} className="text-[#0067b8]" />
                      {formatDate(blog.publishedAt)}
                    </time>
                  )}
                  <span className="inline-flex items-center gap-2">
                    <Clock3 aria-hidden="true" size={16} className="text-[#0067b8]" />
                    {estimateReadingMinutes(blog.content)} min read
                  </span>
                </div>
              </div>

              <div className="relative overflow-hidden border border-[#d5e2ec] bg-[#e5eff7]">
                <div className="absolute inset-x-0 top-0 z-10 h-1 bg-[#ff7a18]" />
                <img
                  src={blog.coverImage || FALLBACK_COVER}
                  alt={blog.coverImage ? blog.title : "Trade data research and analytics"}
                  className={`aspect-4/3 w-full ${blog.coverImage ? "object-cover" : "object-contain p-4 sm:p-7"}`}
                />
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
          <div className="mb-8 flex items-center gap-3 text-xs font-bold uppercase text-[#005b9a]">
            <span className="h-2 w-2 bg-[#ff7a18]" />
            <span>Article</span>
          </div>
          <div className="space-y-6 text-base leading-8 text-slate-700 sm:text-[17px] sm:leading-8">
            {blog.content.map((paragraph, index) => (
              <p key={index} className={index === 0 ? "text-lg leading-8 text-slate-800 sm:text-xl sm:leading-9" : ""}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-12 border-t border-slate-200 pt-6">
            <Link href="/blogs" className="inline-flex items-center gap-2 text-sm font-semibold text-[#005b9a] transition hover:text-[#ff7a18]">
              <ArrowLeft aria-hidden="true" size={16} />
              Back to all articles
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
