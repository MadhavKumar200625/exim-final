"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Search } from "lucide-react";

const dateLabel = (date) => {
  if (!date) return "";
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime())
    ? ""
    : parsed.toLocaleDateString("en", { year: "numeric", month: "long", day: "numeric" });
};

export default function BlogBrowser({ blogs }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All topics");
  const categories = ["All topics", ...new Set(blogs.map((blog) => blog.category).filter(Boolean))];
  const normalizedQuery = query.trim().toLowerCase();
  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = category === "All topics" || blog.category === category;
    const matchesQuery = !normalizedQuery ||
      `${blog.title} ${blog.excerpt} ${blog.category}`.toLowerCase().includes(normalizedQuery);
    return matchesCategory && matchesQuery;
  });
  console.log(blogs)
  

  return (
    <>
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center">
          <label className="relative flex-1">
            <Search aria-hidden="true" className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0067b8]" size={18} />
            <span className="sr-only">Search articles</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search articles"
              className="h-11 w-full border border-slate-300 bg-slate-50 pl-10 pr-3 text-sm text-slate-900 outline-none transition focus:border-[#0067b8] focus:bg-white"
            />
          </label>
          <label className="flex items-center gap-3 text-sm font-semibold text-slate-700">
            <span className="text-xs uppercase text-slate-500">Topic</span>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="h-11 min-w-44 border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-[#0067b8]"
            >
              {categories.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
        </div>
      </div>

      <section aria-live="polite" className="mx-auto max-w-6xl px-5 py-9 sm:py-11">
        <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-3">
          <h2 className="text-sm font-semibold text-slate-900">Latest articles</h2>
          <p className="text-xs font-medium text-slate-500">{filteredBlogs.length} {filteredBlogs.length === 1 ? "article" : "articles"}</p>
        </div>
        {filteredBlogs.length ? (
          <div className="grid gap-6 lg:grid-cols-2">
            {filteredBlogs.map((blog, index) => (
              <article
                key={blog.id || blog.slug}
                className={`group overflow-hidden border border-slate-200 bg-white transition duration-200 hover:border-slate-300 hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)] ${index === 0 ? "lg:col-span-2 lg:grid lg:grid-cols-[1.05fr_1fr]" : ""}`}
              >
                {blog.coverImage ? (
                  <img src={blog.coverImage} alt="" className={`aspect-video w-full object-cover ${index === 0 ? "lg:h-full" : ""}`} />
                ) : (
                  <div aria-hidden="true" className={`relative flex aspect-video max-h-48 w-full items-end overflow-hidden bg-[#eaf2f8] p-5 md:max-h-56 ${index === 0 ? "lg:h-full lg:max-h-none" : ""}`}>
                    <div className="absolute inset-x-0 top-0 h-1 bg-[#ff7a18]" />
                    <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center border border-[#0067b8]/20 text-[#0067b8]">
                      <BookOpen aria-hidden="true" size={21} strokeWidth={1.6} />
                    </div>
                    <span className="text-5xl font-semibold text-[#0067b8]/15">{String(index + 1).padStart(2, "0")}</span>
                    <span className="relative ml-4 border-l-2 border-[#ff7a18] pl-3 text-xs font-bold uppercase text-[#005b9a]">{blog.category}</span>
                  </div>
                )}
                <div className="flex min-h-60 flex-col p-5 sm:p-7">
                  <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-bold uppercase text-[#005b9a]">
                    <span>{blog.category}</span>
                    {dateLabel(blog.publishedAt) && <><span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#ff7a18]" /><time className="text-slate-500" dateTime={blog.publishedAt}>{dateLabel(blog.publishedAt)}</time></>}
                  </div>
                  <h3 className={`${index === 0 ? "text-2xl sm:text-3xl" : "text-xl"} font-semibold leading-snug text-slate-950`}>
                    <Link className="group-hover:text-[#005b9a]" href={`/blogs/${blog.slug}`}>
                      {blog.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{blog.excerpt}</p>
                  <Link href={`/blogs/${blog.slug}`} className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-semibold text-[#005b9a]">
                    Read article <ArrowUpRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="border border-slate-200 bg-slate-50 px-5 py-10 text-center text-sm text-slate-600">No articles match your search.</p>
        )}
      </section>
    </>
  );
}
