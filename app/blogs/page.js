import BlogBrowser from "./BlogBrowser";
import { getBlogs } from "@/lib/blogs";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Trade Data Insights & Guides | Exim Trade Data",
  description: "Explore practical guides and insights on global trade data, shipment records, and market research.",
  alternates: { canonical: "https://eximtradedata.com/blogs" },
};

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <main className="min-h-screen bg-white pt-16">
      <header className="relative overflow-hidden border-b border-slate-200 bg-[#f1f6fa]">
        <div className="mx-auto grid max-w-6xl items-end gap-8 px-5 py-12 sm:py-16 md:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-0.5 w-9 bg-[#ff7a18]" />
              <p className="text-xs font-bold uppercase text-[#005b9a]">Exim Trade Data Journal</p>
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              Trade, in context.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Practical perspectives on products, markets, and the movement of goods around the world.
            </p>
          </div>
          <div className="hidden border-l border-slate-300 pl-6 md:block">
            <p className="text-3xl font-semibold text-slate-900">{String(blogs.length).padStart(2, "0")}</p>
            <p className="mt-1 text-xs font-semibold uppercase text-slate-500">Published articles</p>
          </div>
        </div>
      </header>
      <BlogBrowser blogs={blogs} />
    </main>
  );
}
