"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const CONTENT = {
  Asia: {
    import: {
      hsCode: `
For COMPANY_NAME, import data indicates that shipments are concentrated across a few key HS codes, primarily related to raw materials and components used in labeling and RFID production.

The top imported HS codes (shipment-wise) include:

HS Code 4821 – Paper and paperboard labels (printed/unprinted)
HS Code 5807 – Woven labels, badges, and textile-based tags
HS Code 3926 – Articles of plastics (used in labeling components)
HS Code 8443 – Printing machinery and parts
HS Code 8473 – Parts and accessories for machines (including printers and RFID systems)

These HS codes reflect the company’s reliance on printing materials, textile inputs, plastic components, and machinery parts, all of which are essential for manufacturing high-quality labeling and RFID solutions.
`,

      countries: `
For COMPANY_NAME, import shipments are sourced from several key countries that supply raw materials, components, and machinery required for production.

The top importing countries (shipment-wise) include:

China – Major supplier of raw materials, fabrics, and industrial inputs
South Korea – Supplies textile materials and specialized components
Malaysia – Provides industrial and packaging-related materials
United States – Source of advanced machinery, RFID components, and technology inputs
Thailand – Supplies regional manufacturing and support materials

These countries form a strong global sourcing network, enabling the company to maintain consistent production, quality standards, and supply chain efficiency.
`,

      ports: `
For COMPANY_NAME, import shipments are primarily received through key Vietnamese ports that handle high volumes of international cargo and industrial goods.

The top unloading ports (shipment-wise) include:

Cat Lai Port – One of the busiest container ports, handling a large share of imports
Hai Phong Port – Major northern port supporting industrial zones
Cai Mep Port – Key deep-water port for international shipments
Da Nang Port – Central Vietnam gateway for cargo movement

These ports play a crucial role in ensuring smooth import operations, faster cargo handling, and efficient inland distribution, supporting the company’s large-scale manufacturing and export activities.
`,

      suppliers: `
For COMPANY_NAME, import shipment data indicates a diversified supplier base supporting its manufacturing of labeling, packaging, and RFID products.

The top suppliers (shipment-wise) include:

Avery Dennison Corporation – Core internal group entity supplying raw materials, RFID components, and specialized inputs
China-based suppliers – Major contributors of textiles, adhesives, plastics, and industrial consumables
South Korea-based manufacturers – Supply high-quality labeling materials and technical components
Malaysia-based vendors – Provide packaging materials and supporting industrial inputs
United States-based suppliers – Deliver advanced machinery parts, RFID technology, and specialized equipment
`,
    },
  },

  Africa: {
    import: {
      hsCode: `
For COMPANY_NAME, import patterns show a strong concentration in a select group of HS codes, mainly linked to raw materials and components essential for labeling and RFID manufacturing.

The leading imported HS codes (based on shipment volume) are:

HS Code 4821 – Printed and unprinted paper or paperboard labels
HS Code 5807 – Woven labels, badges, and textile tags
HS Code 3926 – Plastic articles used in labeling components
HS Code 8443 – Printing machinery and related parts
HS Code 8473 – Parts and accessories for machinery, including printers and RFID equipment

These categories highlight the company’s dependence on printing substrates, textile-based inputs, plastic materials, and specialized machinery components. Together, they form the backbone of its production process, enabling the manufacture of advanced labeling and RFID solutions.
`,

      countries: `
For Algeria, import shipments are sourced from several key countries that supply machinery, food products, industrial equipment, and energy-related goods required for infrastructure development and domestic consumption.

The top importing countries (shipment-wise) include:

France – Major supplier of food products, machinery, vehicles, and consumer goods.
China – Provides industrial machinery, electronics, and construction materials.
Italy – Supplies engineering equipment, vehicles, and industrial components.
Spain – Source of agricultural products, machinery, and petroleum-related goods.
United States – Provides advanced machinery, aerospace parts, and technology-based equipment.

These countries form a strong global sourcing network, helping Algeria support industrial growth, infrastructure projects, and overall economic development.
`,

      ports: `
For Algeria, import shipments are mainly unloaded at major seaports that handle containers, food commodities, machinery, industrial goods, and energy-related cargo. These ports act as key entry points for the country’s international trade and supply chain needs.

The top unloading ports (shipment-wise) include:

Port of Algiers – The largest and most important port in Algeria, handling a wide range of import shipments including consumer goods, machinery, and food products
Port of Oran – Major western Algeria port supporting container traffic, industrial imports, and regional trade
Port of Skikda – Key port for energy-related cargo, petrochemicals, and industrial shipments
Port of Bejaia – Important port handling petroleum products, agricultural imports, and general cargo
Port of Annaba – Eastern Algeria port managing bulk cargo, raw materials, and industrial imports

These ports form Algeria’s core maritime infrastructure, enabling smooth import flow, supporting industrial supply chains, and strengthening national trade connectivity.
`,

      suppliers: `
For Algeria, import shipments are sourced from several key supplier countries that provide machinery, food products, industrial equipment, and consumer goods required for domestic demand and infrastructure development.

The top suppliers (shipment-wise) include:

China – Major supplier of machinery, electronics, construction materials, and industrial inputs.
France – Provides food products, pharmaceuticals, vehicles, and consumer goods.
Italy – Supplies industrial machinery, engineering equipment, and automotive components.
Spain – Source of agricultural products, machinery, and chemical goods.
Germany – Provides high-quality machinery, vehicles, and industrial technology.
`,
    },
  },

  Europe: {
    import: {
      hsCode: `
For COMPANY_NAME, import patterns show a strong concentration in a select group of HS codes, mainly linked to raw materials and components essential for labeling and RFID manufacturing.

The leading imported HS codes (based on shipment volume) are:

HS Code 4821 – Printed and unprinted paper or paperboard labels.
HS Code 5807 – Woven labels, badges, and textile tags.
HS Code 3926 – Plastic articles used in labeling components.
HS Code 8443 – Printing machinery and related parts.
HS Code 8473 – Parts and accessories for machinery, including printers and RFID equipment.

These categories highlight the company’s dependence on printing substrates, textile-based inputs, plastic materials, and specialized machinery components.
`,

      countries: `
For Austria, import shipments are sourced from several key countries that supply machinery, industrial equipment, raw materials, and technology inputs required for manufacturing and economic development.

The top importing countries (shipment-wise) include:

Germany – Major supplier of machinery, vehicles, and industrial equipment.
China – Provides electronics, machinery, and manufacturing inputs.
Italy – Supplies engineering goods, machinery, and industrial components.
Switzerland – Source of pharmaceuticals, precision instruments, and chemicals.
United States – Provides advanced machinery, aerospace components, and technology-based equipment.

These countries form a strong global sourcing network, helping Austria maintain industrial strength and technological advancement.
`,

      ports: `
For Austria, import shipments are mainly handled through major European ports and inland logistics hubs, as the country is landlocked and relies on nearby seaports for international trade.

The top unloading ports (shipment-wise) include:

Port of Hamburg – One of Europe’s largest ports handling Austrian imports
Port of Rotterdam – Major gateway for bulk cargo and machinery
Port of Antwerp – Key hub for chemicals and container shipments
Port of Koper – Closest seaport to Austria for automotive and general cargo
Port of Trieste – Important for energy and Central European trade

These ports ensure efficient import flow and strong connectivity for Austria’s supply chain.
`,

      suppliers: `
For Austria, import shipments are sourced from several key supplier countries that provide machinery, industrial equipment, chemicals, and consumer goods required for domestic demand and manufacturing processes.

The top suppliers (shipment-wise) include:

Germany – Major supplier of machinery, vehicles, and industrial goods.
China – Provides electronics and industrial inputs.
Italy – Supplies engineering equipment and machinery.
Switzerland – Source of pharmaceuticals and precision instruments.
France – Provides consumer goods and industrial products.

These countries form a strong global supplier network, enabling Austria to maintain efficient imports and support advanced manufacturing.
`,
    },
  },

  "North America": {
    import: {
      hsCode: `
For COMPANY_NAME, import patterns show a strong concentration in a select group of HS codes, mainly linked to raw materials and components essential for labeling and RFID manufacturing.

The leading imported HS codes (based on shipment volume) are:

HS Code 4821 – Printed and unprinted paper or paperboard labels
HS Code 5807 – Woven labels, badges, and textile tags
HS Code 3926 – Plastic articles used in labeling components
HS Code 8443 – Printing machinery and related parts
HS Code 8473 – Parts and accessories for machinery, including printers and RFID equipment

These categories highlight the company’s dependence on printing substrates, textile-based inputs, plastic materials, and specialized machinery components.
`,

      countries: `
For Nicaragua, import shipments are sourced from several key countries that supply machinery, textile inputs, petroleum products, and industrial goods required for manufacturing and domestic consumption.

The top importing countries (shipment-wise) include:

United States – Major supplier of machinery, fuel, and consumer goods
China – Provides electronics, machinery, and industrial inputs
Mexico – Supplies automotive parts, machinery, and manufacturing goods
Costa Rica – Source of regional trade goods, food products, and industrial materials
El Salvador – Provides textiles, packaging materials, and consumer goods

These countries form a strong global and regional sourcing network, helping Nicaragua support manufacturing growth, trade efficiency, and domestic demand.
`,

      ports: `
For Nicaragua, import shipments are mainly handled through key seaports that manage container cargo, fuel imports, and industrial goods.

The top unloading ports (shipment-wise) include:

Port of Corinto – The largest and most important port, handling the majority of containerized and bulk imports
Port of Sandino – Key port for fuel imports, bulk cargo, and industrial shipments
Port of San Juan del Sur – Smaller port supporting regional cargo and limited commercial imports

These ports form the backbone of Nicaragua’s maritime trade, ensuring smooth import flow and supporting economic activity.
`,

      suppliers: `
For Nicaragua, import shipments are sourced from several key supplier countries that provide machinery, fuel, textiles, and consumer goods required for domestic demand and industrial operations.

The top suppliers (shipment-wise) include:

United States – Major supplier of fuel, machinery, and consumer products
China – Provides electronics, machinery, and industrial inputs
Mexico – Supplies automotive parts, machinery, and manufactured goods
Costa Rica – Source of regional goods, food products, and industrial materials
Guatemala – Provides textiles, packaging materials, and consumer goods
`,
    },
  },

  Oceania: {
    import: {
      hsCode: `
For COMPANY_NAME, import patterns show a strong concentration in key HS codes linked to labeling and RFID manufacturing:

HS Code 4821 – Printed and unprinted paper or paperboard labels
HS Code 5807 – Woven labels, badges, and textile tags
HS Code 3926 – Plastic articles used in labeling components
HS Code 8443 – Printing machinery and related parts
HS Code 8473 – Parts and accessories for printers and RFID equipment

These categories highlight reliance on printing substrates, textile inputs, plastic materials, and specialized machinery.
`,

      countries: `
For Fiji, import shipments are sourced from key global and regional partners:

Australia – Major supplier of machinery, fuel, and consumer goods
New Zealand – Provides food products, machinery, and industrial inputs
China – Supplies electronics, machinery, and manufacturing materials
Singapore – Key source of refined petroleum and trade goods
United States – Provides machinery, technology, and specialized equipment

These countries form a strong sourcing network supporting Fiji’s manufacturing and trade ecosystem.
`,

      ports: `
For Fiji, import shipments are handled through major seaports such as:

Port of Suva – The largest and busiest port, handling containerized cargo and general imports
Port of Lautoka – Key hub for bulk cargo, sugar exports, and industrial imports
Port of Levuka – Smaller port supporting regional and coastal trade

These ports form the backbone of Fiji’s maritime logistics and trade infrastructure.
`,

      suppliers: `
For Fiji, import shipments are sourced from leading supplier countries:

Australia – Fuel, machinery, and consumer goods
New Zealand – Food products, industrial materials, and equipment
China – Electronics and manufacturing inputs
Singapore – Petroleum and trade-related goods
United States – Advanced machinery and specialized products
`,
    },
  },

  "South America": {
    import: {
      hsCode: `
For COMPANY_NAME, import patterns show a strong concentration in key HS codes linked to labeling and RFID manufacturing:

HS Code 4821 – Printed and unprinted paper or paperboard labels.
HS Code 5807 – Woven labels, badges, and textile tags.
HS Code 3926 – Plastic articles used in labeling components.
HS Code 8443 – Printing machinery and related parts.
HS Code 8473 – Parts and accessories for printers and RFID equipment

These categories highlight reliance on printing substrates, textile inputs, plastic materials, and specialized machinery.
`,

      countries: `
For Bolivia, import shipments are sourced from key global and regional partners:

Brazil – Major supplier of industrial goods, fuel, and machinery
China – Electronics, machinery, and manufacturing inputs
Argentina – Energy products, chemicals, and industrial goods
Chile – Trade gateway and supplier of processed goods
United States – Machinery and specialized equipment

These countries form a strong sourcing network supporting Bolivia’s manufacturing and trade activities.
`,

      ports: `
Since Bolivia is landlocked, imports rely on ports in neighboring countries and inland logistics hubs:

Port of Arica – Primary transit port for Bolivian cargo
Port of Iquique – Important free trade zone and logistics hub
Port of Antofagasta – Handles container and bulk cargo for Bolivia

These ports act as critical gateways, enabling Bolivia’s access to global maritime trade.
`,

      suppliers: `
For Bolivia, import shipments are sourced from leading supplier countries:

Brazil – Fuel, machinery, and industrial products
China – Electronics and manufacturing inputs
Argentina – Energy supplies and chemicals
Chile – Trade logistics support and goods
United States – Advanced machinery and equipment
`,
    },
  },
};

const TableCard = ({
  title,
  description,
  headers,
  rows,
  key1,
  key2,
}) => {
  return (
    <div className="bg-white shadow-md border border-gray-200 p-6 rounded-2xl mb-10">
      <h3 className="text-2xl font-semibold text-black mb-5">{title}</h3>

      <div className="text-lg text-gray-700 leading-8 whitespace-pre-line mb-8">
        {description}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-black">
          <thead className="border-b border-gray-300">
            <tr>
              <th className="py-3 text-lg font-semibold">{headers[0]}</th>
              <th className="py-3 text-lg font-semibold">{headers[1]}</th>
            </tr>
          </thead>

          <tbody>
            {rows?.map((item, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-100 last:border-0"
              >
                <td className="py-4 text-base">
                  {item[key1]}
                </td>

                <td className="py-4 text-base">
                  {item[key2]?.toLocaleString?.()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const MarketIntel = ({
  companyName,
  importData,
  exportData,
  continent = "Asia",
}) => {
  const [activeTab, setActiveTab] = useState("import");

  const content =
    CONTENT[continent] || CONTENT["Asia"];

  const currentData =
    activeTab === "import" ? importData : exportData;

  return (
    <section className="bg-gray-50 py-16 relative">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-black text-center mb-2"
        >
          {companyName} Import and Export Data Shipment Analysis
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl text-black text-center mb-10"
        >
          {companyName} Market Intelligence Report
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("import")}
            className={`px-6 py-2 font-medium rounded-lg border transition ${
              activeTab === "import"
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
          >
            Import
          </button>

          <button
            onClick={() => setActiveTab("export")}
            className={`px-6 py-2 font-medium rounded-lg border transition ${
              activeTab === "export"
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
          >
            Export
          </button>
        </div>

        {/* IMPORT */}
        {activeTab === "import" && (
          <div>
            <TableCard
              title="Top Imported HS Code – Shipment Wise"
              description={content.import.hsCode.replace(
                /COMPANY_NAME/g,
                companyName
              )}
              headers={["HS Code", "Size"]}
              rows={currentData.hsCodes}
              key1="code"
              key2="value"
            />

            <TableCard
              title="Top Importing Countries – Shipment Wise"
              description={content.import.countries.replace(
                /COMPANY_NAME/g,
                companyName
              )}
              headers={["Country", "Size"]}
              rows={currentData.countries}
              key1="name"
              key2="qty"
            />

            <TableCard
              title="Top Unloading Ports – Shipment Wise"
              description={content.import.ports.replace(
                /COMPANY_NAME/g,
                companyName
              )}
              headers={["Port", "Size"]}
              rows={currentData.ports}
              key1="name"
              key2="qty"
            />

            <TableCard
              title="Top Suppliers – Shipment Wise"
              description={content.import.suppliers.replace(
                /COMPANY_NAME/g,
                companyName
              )}
              headers={["Supplier", "Size"]}
              rows={currentData.suppliers}
              key1="name"
              key2="qty"
            />
          </div>
        )}

        {/* EXPORT */}
        {activeTab === "export" && (
          <div>
            <TableCard
              title="Top Exported HS Code – Shipment Wise"
              description={content.export.hsCode.replace(
                /COMPANY_NAME/g,
                companyName
              )}
              headers={["HS Code", "Size"]}
              rows={currentData.hsCodes}
              key1="code"
              key2="value"
            />

            <TableCard
              title="Top Exporting Countries – Shipment Wise"
              description={content.export.countries.replace(
                /COMPANY_NAME/g,
                companyName
              )}
              headers={["Country", "Size"]}
              rows={currentData.countries}
              key1="name"
              key2="qty"
            />

            <TableCard
              title="Top Loading Ports – Shipment Wise"
              description={content.export.ports.replace(
                /COMPANY_NAME/g,
                companyName
              )}
              headers={["Port", "Size"]}
              rows={currentData.ports}
              key1="name"
              key2="qty"
            />

            <TableCard
              title="Top Buyers – Shipment Wise"
              description={content.export.buyers.replace(
                /COMPANY_NAME/g,
                companyName
              )}
              headers={["Buyer", "Size"]}
              rows={currentData.buyers}
              key1="name"
              key2="qty"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default MarketIntel;