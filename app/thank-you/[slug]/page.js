import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const THANK_YOU_PAGES = {
  "demo-request": {
    title: "Thank You for Requesting a Demo",
    message: "Your demo request has been received. Our team will be in touch soon.",
  },
  "contact-us": {
    title: "Thank You for Contacting Us",
    message: "Your message has been received. Our team will get back to you soon.",
  },
  "unlock-full-data": {
    title: "Thank You for Your Data Request",
    message: "Your request to unlock full data has been received. Our team will contact you soon.",
  },
  "pricing-quote": {
    title: "Thank You for Your Quote Request",
    message: "Your quote request has been received. Our team will follow up with you soon.",
  },
};

export const metadata = {
  title: "Thank You | Exim Trade Data",
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(THANK_YOU_PAGES).map((slug) => ({ slug }));
}

export default async function ThankYouPage({ params }) {
  const { slug } = await params;
  const page = THANK_YOU_PAGES[slug];

  if (!page) notFound();

  return (
    <main className="relative isolate flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50 px-5 py-16 sm:py-24">
      <div aria-hidden="true" className="absolute -left-24 top-16 -z-10 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-28 -right-20 -z-10 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />

      <section className="w-full max-w-2xl overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-[0_24px_80px_rgba(15,72,120,0.12)]">
        <div aria-hidden="true" className="h-2 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600" />

        <div className="px-6 py-10 text-center sm:px-12 sm:py-14">
          <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 ring-8 ring-emerald-50/60">
            <CheckCircle2 aria-hidden="true" className="h-12 w-12 text-emerald-600" strokeWidth={1.8} />
          </div>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            {page.title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {page.message}
          </p>

          <div className="mx-auto mt-9 h-px max-w-xs bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
          >
            <ArrowLeft aria-hidden="true" size={18} />
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
