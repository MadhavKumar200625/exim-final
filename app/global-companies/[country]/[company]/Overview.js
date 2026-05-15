"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ScheduleADemo from "@/app/Components/ScheduleADemo";

const CONTINENT_OVERVIEW = {
  Asia: {
    export: `As per global export data, COMPANY_NAME has demonstrated strong performance in international trade, recording a total of EXPORT_SHIPMENTS export shipments with a cumulative export value of approximately EXPORT_VALUE. This high volume of shipments reflects the company’s consistent export activity and its ability to meet global demand efficiently. The substantial export value highlights its strong market position and operational scale, making it a key contributor to COUNTRY_NAME’s export sector.`,

    import: `As per global import data, COMPANY_NAME has recorded a total of IMPORT_SHIPMENTS import shipments, with a cumulative import value of approximately IMPORT_VALUE. This import activity reflects the company’s steady procurement of raw materials and components required for its manufacturing operations. The consistent volume of imports indicates a well-established and reliable supply chain, supporting large-scale production and export functions. With sourcing spread across multiple international markets, the company ensures uninterrupted operations and maintains efficiency in meeting global demand.`,
  },

  Africa: {
    export: `According to global trade data, COMPANY_NAME has established a solid presence in international markets, with a total of EXPORT_SHIPMENTS export shipments and an overall export value of EXPORT_VALUE. This significant shipment volume indicates steady export operations and the company’s capability to consistently fulfill global demand. The impressive export value further underscores its strong market standing and large-scale operations, positioning it as an important contributor to COUNTRY_NAME’s export economy.`,

    import: `Based on global import statistics, COMPANY_NAME has handled around IMPORT_SHIPMENTS import shipments, with a total import value estimated at nearly IMPORT_VALUE. This level of import activity highlights the company’s ongoing sourcing of raw materials and essential components to support its manufacturing processes. The steady flow of imports reflects a dependable and well-structured supply chain, enabling smooth, large-scale production and export operations. By sourcing from diverse international markets, the company ensures operational continuity and sustains efficiency in meeting global demand.`,
  },

  Europe: {
    export: `According to global trade data, COMPANY_NAME has established a solid presence in international markets, with a total of EXPORT_SHIPMENTS export shipments and an overall export value of EXPORT_VALUE. This significant shipment volume indicates steady export operations and the company’s capability to consistently fulfill global demand. The impressive export value further underscores its strong market standing and large-scale operations, positioning it as an important contributor to COUNTRY_NAME’s export economy.`,

    import: `Based on global import statistics, COMPANY_NAME has handled around IMPORT_SHIPMENTS import shipments, with a total import value estimated at nearly IMPORT_VALUE. This level of import activity highlights the company’s ongoing sourcing of raw materials and essential components to support its manufacturing processes. The steady flow of imports reflects a dependable and well-structured supply chain, enabling smooth, large-scale production and export operations. By sourcing from diverse international markets, the company ensures operational continuity and sustains efficiency in meeting global demand.`,
  },

  "North America": {
    export: `According to global trade data, COMPANY_NAME has established a solid presence in international markets, with a total of EXPORT_SHIPMENTS export shipments and an overall export value of EXPORT_VALUE. This significant shipment volume indicates steady export operations and the company’s capability to consistently fulfill global demand. The impressive export value further underscores its strong market standing and large-scale operations, positioning it as an important contributor to COUNTRY_NAME’s export economy.`,

    import: `Based on global import statistics, COMPANY_NAME has handled around IMPORT_SHIPMENTS import shipments, with a total import value estimated at nearly IMPORT_VALUE. This level of import activity highlights the company’s ongoing sourcing of raw materials and essential components to support its manufacturing processes. The steady flow of imports reflects a dependable and well-structured supply chain, enabling smooth, large-scale production and export operations. By sourcing from diverse international markets, the company ensures operational continuity and sustains efficiency in meeting global demand.`,
  },

  Oceania: {
    export: `According to global trade data, COMPANY_NAME has established a solid presence in international markets, with a total of EXPORT_SHIPMENTS export shipments and an overall export value of EXPORT_VALUE. This significant shipment volume indicates steady export operations and the company’s capability to consistently fulfill global demand. The impressive export value further underscores its strong market standing and large-scale operations, positioning it as an important contributor to COUNTRY_NAME’s export economy.`,

    import: `Based on global import statistics, COMPANY_NAME has handled around IMPORT_SHIPMENTS import shipments, with a total import value estimated at nearly IMPORT_VALUE. This level of import activity highlights the company’s ongoing sourcing of raw materials and essential components to support its manufacturing processes. The steady flow of imports reflects a dependable and well-structured supply chain, enabling smooth, large-scale production and export operations. By sourcing from diverse international markets, the company ensures operational continuity and sustains efficiency in meeting global demand.`,
  },

  "South America": {
    export: `According to global trade data, COMPANY_NAME has established a solid presence in international markets, with a total of EXPORT_SHIPMENTS export shipments and an overall export value of EXPORT_VALUE. This significant shipment volume indicates steady export operations and the company’s capability to consistently fulfill global demand. The impressive export value further underscores its strong market standing and large-scale operations, positioning it as an important contributor to COUNTRY_NAME’s export economy.`,

    import: `Based on global import statistics, COMPANY_NAME has handled around IMPORT_SHIPMENTS import shipments, with a total import value estimated at nearly IMPORT_VALUE. This level of import activity highlights the company’s ongoing sourcing of raw materials and essential components to support its manufacturing processes. The steady flow of imports reflects a dependable and well-structured supply chain, enabling smooth, large-scale production and export operations. By sourcing from diverse international markets, the company ensures operational continuity and sustains efficiency in meeting global demand.`,
  },
};

const Overview = ({
  companyName = "",
  country,
  continent = "Asia",
  data = {},
}) => {
  const safeCompany = companyName
    ? companyName.toUpperCase()
    : "COMPANY";

  const [showForm, setShowForm] = useState(false);

  const template =
    CONTINENT_OVERVIEW[continent] || CONTINENT_OVERVIEW["Asia"];

  const exportText = template.export
    .replace(/COMPANY_NAME/g, companyName)
    .replace(
      /EXPORT_SHIPMENTS/g,
      `${data.exportShipment?.toLocaleString?.() || 0}`
    )
    .replace(
      /EXPORT_VALUE/g,
      `$${data.exportValue?.toLocaleString?.() || 0}`
    )
    .replace(/COUNTRY_NAME/g, country);

  const importText = template.import
    .replace(/COMPANY_NAME/g, companyName)
    .replace(
      /IMPORT_SHIPMENTS/g,
      `${data.importShipment?.toLocaleString?.() || 0}`
    )
    .replace(
      /IMPORT_VALUE/g,
      `$${data.importValue?.toLocaleString?.() || 0}`
    );

  return (
    <section className="w-full mt-10 px-6 md:px-20">
      <h1 className="text-black text-3xl text-center mb-8 font-semibold">
        {safeCompany} – Overview
      </h1>

      {/* Export Overview */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
        <h2 className="text-xl font-semibold mb-3">Export Overview</h2>

        <p className="text-black text-lg mb-4">{exportText}</p>
      </div>

      {/* Import Overview */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
        <h2 className="text-xl font-semibold mb-3">Import Overview</h2>

        <p className="text-black text-lg mb-4">{importText}</p>
      </div>

      {/* Static CTA */}
      <div className="bg-blue-50 rounded-2xl text-center items-center shadow-md p-6 flex flex-col">
        <p className="text-black text-lg mb-6">
          Exim GTIS provides verified import-export intelligence across 200+
          countries. Identify buyers, suppliers, ports, HS codes and market
          trends with confidence.
        </p>

        <button
          onClick={() => {
            setShowForm(true);
          }}
          className="inline-flex items-center justify-center bg-blue-600 text-white px-5 py-3 w-50 rounded-xl text-lg font-medium shadow hover:bg-blue-700 transition"
        >
          Schedule Demo <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>

      <ScheduleADemo
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        country={country}
      />
    </section>
  );
};

export default Overview;