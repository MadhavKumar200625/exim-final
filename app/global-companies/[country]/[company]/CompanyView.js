"use client";

import Overview from "./Overview";
import Stats from "./Stats";
import MarketIntel from "./MarketIntel";
import DetailedTable from "./DetailedTable";
import CtaImage from "./CtaImage";
import FAQSection from "@/app/Components/FAQ";

export default function CompanyView({ data,country }) {
  return (
    <>
      <Overview data={data.section2} country={country}/>
      <Stats companyName={data.companyName} data={data.section3}  />
      <MarketIntel
        companyName={data.companyName}
        importData={data.section4.import}
        exportData={data.section4.export}
      />
      <DetailedTable companyName={data.companyName} />
      <CtaImage />
      <FAQSection faqs={data.faqs} />
    </>
  );
}