import dynamic from "next/dynamic";

import Hero from "./HOME/hero";
import CountryExportSection from "./HOME/CountryExportSection";
import GrowthSection from "./HOME/GrowthSection";
import IndustrySection from "./HOME/IndustrySection";
import CustomsSection from "./HOME/CustomsSection";
import GrowWithGlobalSection from "./HOME/GrowWithGlobalSection";
import WhyChooseUs from "./HOME/WhyChooseUs";
import HomeSearchClient from "./HOME/HomeSearchClient";
import HomeClientsClient from "./HOME/HomeClientsClient";
import HomeTestimonialsClient from "./HOME/HomeTestimonialSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://eximtradedata.com/"
    }
  ]
}
`}
        </script>
      </Head>
      <main>
        {/* SEO-critical */}
        <Hero />

        {/* Interactive (humans only) */}
        <HomeSearchClient></HomeSearchClient>

        <CountryExportSection />

        <GrowthSection />
        <IndustrySection />
        <CustomsSection />
        <GrowWithGlobalSection />
        <WhyChooseUs />

        {/* Heavy sliders */}
        <HomeClientsClient />
        <HomeTestimonialsClient />
      </main>
    </>
  );
}
