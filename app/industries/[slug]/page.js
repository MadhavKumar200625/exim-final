// app/industries/[slug]/page.js
import React from "react";
import Hero from "./Hero";
import TabsSection from "./TabsSection";
import Points from "./Points";
import Section4 from "./Section4";
import Section5 from "./Section5.js";
import { industries } from "./data";
import { notFound } from "next/navigation";

export const dynamic = "force-static";
export const revalidate = 86400;

export async function generateMetadata({ params }) {
  params = await params
  const slug = params.slug?.toLowerCase();
  const industry = industries[slug];

  if (!industry) {
    return {
      title: "Industry Not Found - Exim Trade Data",
      description: "The requested industry page does not exist.",
    };
  }

  return {
    title: industry.meta?.title || `${slug} Industry Trade Data`,
    description: industry.meta?.description,
      alternates: {
  canonical: `https://eximtradedata.com/industries/${slug}`,
},
    openGraph: {
      title: industry.openGraph?.title || industry.meta?.title,
      url:
        industry.openGraph?.url ||
        `https://eximtradedata.com/industries/${slug}`,
      images: [{ url: industry.openGraph?.image || "/logo.png" }],
    },
    twitter: industry.twitter || {
  card: "summary_large_image",
  title: industry.meta?.title,
  description: industry.meta?.description,
  images: ["/logo.png"],
},
  };
}

const Page = async ({ params }) => {
    params = await params

  const slug =  params.slug?.toLowerCase();
  const industry = industries[slug];
  if (!industry) notFound();

  return (
    <main>
      <Hero {...industry.section1} image={slug} />

      {industry.section2 && (
        <TabsSection
          heading={industry.section2.heading}
          points={industry.section2.points}
        />
      )}

      {industry.section3 && (
        <Points
          {...industry.section3}
          peviousSection={!!industry.section2}
        />
      )}

      <Section4 {...industry.section4} />
      <Section5 industries={industry.section5.industries} />
    </main>
  );
};

export async function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({
    slug,
  }));
}

export default Page;