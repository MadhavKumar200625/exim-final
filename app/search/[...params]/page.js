// /app/search/[...params]/page.jsx
export const revalidate = 86400;

import React from "react";
import Hero from "./Hero";
import ShowFilters from "./ShowFilters";
import MainSection from "./MainSection";
import SearchGlobalData from "./SearchGlobalData";
import { getSearchData } from "@/lib/getSearchData";

/* -------------------------------------------------
   Helpers (same logic as before)
-------------------------------------------------- */
function parseFilters(raw) {
  return raw.map((param) => {
    const [label, ...value] = param.split("-");
    return {
      label: label.replace(/_/g, " ").replace(/^./, (s) => s.toUpperCase()),
      value: value.join(" ").replace(/_/g, " "),
    };
  });
}

function extractQuery(filters) {
  return {
    type: filters.find((f) => f.label === "Type")?.value?.toLowerCase() || "export",
    country: filters.find((f) => f.label === "Country")?.value || "",
    product: filters.find((f) => f.label === "Product")?.value || "",
    hscode: filters.find((f) => f.label === "Hscode")?.value || "",
    countryin: filters.find((f) => f.label === "Countryin")?.value || "",
    port: filters.find((f) => f.label === "Port")?.value || "",
  };
}


export const generateMetadata = async ({ params }) => {
  params = await params
  const raw = params.params || [];
  const applied = parseFilters(raw);
  const query = extractQuery(applied);

  const { type, country, product, hscode, countryin, port } = query;

  let title = `Search Global Trade Data by Country, HS Code & Product`;
  const lowerCountry = country.toLowerCase()?.replace(/-/g, ' ') || '';
  const tradeType = type?.toLowerCase();
  const product_a = product.replace('&', '&amp;');
  let description = `Explore global trade data by country, HS code, and product. Access detailed shipment records for market research.`;
  let keywords = ['global trade data', 'hs code', 'import export data', 'shipment records'];

  let hs_name = "HS Code";
  if (hscode.length == 2) hs_name = "Chapter";
//country type product
  if (country != "" && product != "" && hscode == "" && type != "" && countryin == "" && port == "") {
    title = `${lowerCountry.replace(/^./, s => s.toUpperCase())} ${type.replace(/^./, s => s.toUpperCase())} Data of ${product_a.replace(/^./, s => s.toUpperCase())} | Buyers & Suppliers – Exim Trade Data`;
    description = `Get the latest ${lowerCountry.replace(/^./, s => s.toUpperCase())} ${type.replace(/^./, s => s.toUpperCase())} data of ${product_a.replace(/^./, s => s.toUpperCase())} with detailed shipment records, ${type.replace(/^./, s => s.toUpperCase())}er names, and supplier information. Access verified ${lowerCountry.replace(/^./, s => s.toUpperCase())} trade statistics from Exim Trade Data to grow your ${product_a.replace(/^./, s => s.toUpperCase())} business.`;
    keywords = `${lowerCountry} ${type} data, ${lowerCountry} ${product_a} ${type}, ${lowerCountry} ${type}ers, ${lowerCountry} suppliers, ${product_a} trade data, verified ${lowerCountry} trade reports, Exim Trade Data, ${lowerCountry} ${type} statistics, ${lowerCountry} electronics ${type}, ${product_a} shipment data`;
  }
  //country hscode type

  if (country != "" && product == "" && hscode != "" && type != "" && countryin == "" && port == "") 
    {
      title = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} ${type.replace(/^./, (s) => s.toUpperCase())} Data 2025 – ${hs_name} ${hscode} | Verified Trade Reports`;
      description = `Get updated 2025 ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import data with ${hs_name} ${hscode}, including verified shipment details, importer names, and supplier information. Access comprehensive trade statistics from Exim Trade Data to explore new business opportunities and grow your trade.`;
      keywords = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import data ${hscode}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} importers, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} suppliers, trade reports ${lowerCountry.replace(/^./, (s) => s.toUpperCase())}, verified ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade data, ${hs_name} import statistics, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import statistics, Exim Trade Data, shipment records ${lowerCountry.replace(/^./, (s) => s.toUpperCase())}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade insights`;
      
    }

    ///country type countryin
  

  if (country != "" && product == "" && hscode == "" && type != "" && countryin != "" && port == "") {
    if (tradeType == "import")
      {
        title = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} ${type.replace(/^./, (s) => s.toUpperCase())}s from ${countryin} | Global Trade Data`;
        description = `Access 2025 ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import data for shipments into ${countryin}, including verified importer names, supplier details, and trade statistics. Explore comprehensive trade reports from Exim Trade Data to discover new business opportunities and grow your import-export network.`;
        keywords = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import data to ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} importers ${country}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} suppliers ${countryin}, verified ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade reports, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} shipment data ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade statistics, Exim Trade Data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import-export data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade insights ${countryin}, import records ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} to ${countryin}`;
      }  
      else
      {
        title = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} Exports to ${countryin} | Global Trade Data`;
        description = `Access 2025 ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export data for shipments to ${countryin}, including verified exporter names, supplier details, and trade statistics. Explore detailed trade reports from Exim Trade Data to identify business opportunities and grow your export-import network.`;
        keywords = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export data to ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} exporters ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} suppliers ${countryin}, verified ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade reports, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} shipment data ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade statistics, Exim Trade Data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export-export data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade insights ${countryin}, export records ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} to ${countryin}`;
        
      }
  }


  //country type port
  if (country != "" && product == "" && hscode == "" && type != "" && countryin == "" && port != "") {
    if (tradeType == "import")
      {
        title = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} ${type.replace(/^./, (s) => s.toUpperCase())} Data – Shipments via ${port} Port | Verified Trade Data`;
        description = `Access 2025 ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import data for shipments through ${port} Port, including verified importer names, supplier details, and trade statistics. Explore detailed trade reports from Exim Trade Data to discover new business opportunities and grow your import network.`;
        keywords = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import data ${port}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} importers ${port} port, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} suppliers ${port}, verified ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade reports, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} shipment data ${port}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade statistics, Exim Trade Data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import-export data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade insights, import records ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} ${port}`;
      }
      else
      {
        title = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} Export Data – Shipments via ${port} Port | Verified Trade Data`;
        description = `Access 2025 ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export data for shipments through ${port} Port, including verified exporter names, supplier details, and trade statistics. Explore detailed trade reports from Exim Trade Data to identify new business opportunities and grow your export network.`;
        keywords = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export data ${port}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} exporters ${port} port, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} suppliers ${port}, verified ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade reports, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} shipment data ${port}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade statistics, Exim Trade Data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export-import data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade insights, export records ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} ${port}`;
        
      }
  }


  //country product hscode type

  if (country != "" && product != "" && hscode != "" && type != "" && countryin == "" && port == "") {
    if (tradeType == "import")
      {
        title = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} ${type.replace(/^./, (s) => s.toUpperCase())}s – ${product_a  .replace(/^./, (s) => s.toUpperCase())} ( ${hs_name} ${hscode}) `;
        description = `Access 2025 ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import data for ${product_a  .replace(/^./, (s) => s.toUpperCase())} ( ${hs_name} ${hscode}) with verified shipment details, importer names, and supplier information. Explore detailed trade reports from Exim Trade Data to discover new business opportunities and grow your import network.`;
        keywords = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import data ${hscode}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} mobile phone import, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} importers, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} suppliers, verified ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade reports, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} shipment data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade statistics, Exim Trade Data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} electronics import, mobile phone shipment records`;
        
      }
      else
      {
        title = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} Exports – ${product_a  .replace(/^./, (s) => s.toUpperCase())} ( ${hs_name} ${hscode})`;
        description = `Access 2025 ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export data for ${product_a  .replace(/^./, (s) => s.toUpperCase())} ( ${hs_name} ${hscode}) with verified shipment details, exporter names, and supplier information. Explore detailed trade reports from Exim Trade Data to find new business opportunities and grow your export network.`;
        keywords = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export data ${hscode}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} mobile phone export, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} exporters, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} suppliers, verified ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade reports, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} shipment data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade statistics, Exim Trade Data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} electronics export, mobile phone shipment records`;
        
      }
  }

  // country product type countryin

  if (country != "" && product != "" && hscode == "" && type != "" && countryin != "" && port == "") {
    if (tradeType == "import")
      {
        title = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} ${product_a  .replace(/^./, (s) => s.toUpperCase())} ${type.replace(/^./, (s) => s.toUpperCase())}s from ${countryin} | Exim Trade Data`;
        description = `Access 2025 ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import data for ${product_a  .replace(/^./, (s) => s.toUpperCase())} shipped from ${countryin}, including verified importer names, supplier details, and trade statistics. Explore detailed trade reports from Exim Trade Data to discover new business opportunities and grow your import network.`;
        keywords = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import data to ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())}  ${product_a} import ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} importers ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} suppliers ${countryin}, verified ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade reports, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} shipment data ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade statistics, Exim Trade Data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import, ${product_a} shipment records ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} to ${countryin}`;
        
      }
      else
      {

        title = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} ${product_a  .replace(/^./, (s) => s.toUpperCase())} Exports to ${countryin} | Exim Trade Data`;
        description = `Access 2025 ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export data for ${product_a  .replace(/^./, (s) => s.toUpperCase())} shipped to ${countryin}, including verified exporter names, supplier details, and trade statistics. Explore detailed trade reports from Exim Trade Data to find new business opportunities and expand your export network.`;
        keywords = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export data to ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} ${product_a} export ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} exporters ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} suppliers ${countryin}, verified ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade reports, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} shipment data ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade statistics, Exim Trade Data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())}  export, ${product_a} shipment records ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} to ${countryin}`;
        
      }
  }

  //country hscode type countryin

  if (country != "" && product == "" && hscode != "" && type != "" && countryin != "" && port == "") {
    if (tradeType == "import")
      {
        description = `Access 2025 ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import data ( ${hs_name} ${hscode}) shipped from ${countryin}, including verified importer names, supplier details, shipment volumes, and trade statistics. Explore detailed trade reports from Exim Trade Data to uncover new business opportunities and grow your import network.`;
        title = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} ${type.replace(/^./, (s) => s.toUpperCase())}s –  ${hs_name} ${hscode} from ${countryin} | Exim Trade Data`;
        keywords = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import data from ${countryin} ${hscode}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} importers ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} suppliers ${countryin}, verified ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import reports, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} shipment data to ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade statistics ${hscode}, Exim Trade Data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade insights, import records ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} to ${countryin}, verified trade data ${lowerCountry.replace(/^./, (s) => s.toUpperCase())}`;

      }
      else
      {
        description = `Access 2025 ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export data ( ${hs_name} ${hscode}) shipped to ${countryin}, including verified exporter names, supplier details, shipment volumes, and trade statistics. Explore detailed trade reports from Exim Trade Data to uncover new business opportunities and grow your export network.`;
        title = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} Exports –  ${hs_name} ${hscode} to ${countryin} | Exim Trade Data`;
        keywords = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export data to ${countryin} ${hscode}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} exporters ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} suppliers ${countryin}, verified ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export reports, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} shipment data to ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade statistics ${hscode}, Exim Trade Data, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade insights, export records ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} to ${countryin}, verified trade data ${lowerCountry.replace(/^./, (s) => s.toUpperCase())}`;
        
        
      }
  }
  //country product hscode type countryin

  if (country != "" && product != "" && hscode != "" && type != "" && countryin != "" && port == "") {
    if (tradeType == "import")
      {
        description = `Access 2025 ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import data for ${product_a  .replace(/^./, (s) => s.toUpperCase())} (${hs_name} ${hscode}) shipped from ${countryin}, including verified importer names, supplier details, shipment volumes, and trade statistics. Explore detailed trade reports from Exim Trade Data to discover new business opportunities and grow your import network.`;
        title = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} ${type.replace(/^./, (s) => s.toUpperCase())} Data – ${product_a  .replace(/^./, (s) => s.toUpperCase())} (${hs_name} ${hscode}) from ${countryin}`;
        keywords = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} import data from ${countryin} ${hscode}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} mobile phone import ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} importers ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} suppliers ${countryin}, verified ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade reports, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} shipment data to ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade statistics, Exim Trade Data, ${product_a} import records ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} to ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())}  import`;
        
      }
      else
      {
        description = `Access 2025 ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export data for ${product_a  .replace(/^./, (s) => s.toUpperCase())} ( ${hs_name} ${hscode}) shipped to ${countryin}, including verified exporter names, supplier details, shipment volumes, and trade statistics. Explore detailed trade reports from Exim Trade Data to identify new business opportunities and expand your export network.`;
        title = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} Export Data – ${product_a  .replace(/^./, (s) => s.toUpperCase())} ( ${hs_name} ${hscode}) to ${countryin}`;
        keywords = `${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export data to ${countryin} ${hscode}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} mobile phone export ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} exporters ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} suppliers ${countryin}, verified ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade reports, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} shipment data to ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} trade statistics, Exim Trade Data, ${product_a} export records ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} to ${countryin}, ${lowerCountry.replace(/^./, (s) => s.toUpperCase())} export`;
        
      }
  }

  // country type

  if (country != "" && product == "" && hscode == "" && type != "" && countryin == "" && port == "") {
    if (tradeType == "import") {
      title = `Search ${lowerCountry.replace(/^./, s => s.toUpperCase())} ${type.replace(/^./, s => s.toUpperCase())} Data - Exim Trade Data`;
    } else {
      title = `Search ${lowerCountry.replace(/^./, s => s.toUpperCase())} Export Data - Exim Trade Data`;
    }
  }

  const url = `${"https://eximtradedata.com"}/search/${raw.join("/")}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Exim Trade Data',
      type: 'website',
      images: [{ url: 'https://eximtradedata.com/images/logo.svg', alt: 'Exim Trade Data' }],
    },
    twitter: {
      card: 'summary',
      title,
      description,
      site: '@eximtradedata',
      creator: '@eximtradedata',
      images: ['https://eximtradedata.com/images/logo.svg'],
    },
  };
}

/* -------------------------------------------------
   ✅ FULL SSR PAGE (REDIS + UPSTREAM)
-------------------------------------------------- */
export default async function Page({ params }) {
  params = await params
  const raw = params.params || [];
  const appliedFilters = parseFilters(raw);
  const query = extractQuery(appliedFilters);

  let api;
  try {
    // 🔥 Redis-backed service (you already copied this)
    api = await getSearchData(query);
  } catch {
    return (
      <div className="p-10 text-center">
        <p className="text-red-600 text-lg font-semibold">
          We&apos;re experiencing heavy traffic
        </p>
        <p className="text-gray-500 mt-2">
          Please refresh or try again in a moment.
        </p>
      </div>
    );
  }

  /* -------------------------------------------------
     Normalize response safely
  -------------------------------------------------- */
  const rowsRaw = Array.isArray(api?.data) ? api.data : [];
  const unique = Array.isArray(api?.unique) ? api.unique : [];

  const filters = {
    hsCodes: unique
      .filter((u) => u.startsWith("hs_code:"))
      .map((u) => u.split(":")[1]?.split(",")[0]?.trim())
      .filter(Boolean),

    countries: unique
      .filter((u) =>
        u.startsWith(
          query.type === "export"
            ? "destination_country:"
            : "origin_country:"
        )
      )
      .map((u) => u.split(":")[1]?.split(",")[0]?.trim())
      .filter(Boolean),

    ports: unique
      .filter((u) =>
        u.startsWith(
          query.type === "export"
            ? "Port_of_loading:"
            : "Port_of_Unloading:"
        )
      )
      .map((u) => u.split(":")[1]?.split(",")[0]?.trim())
      .filter(Boolean),
  };

  const rows = rowsRaw.map((d) => {
    const s = d?._source || {};
    return {
      date: s.date || "-",
      hsCode: s.hs_code || "-",
      product: s.Product_Description || "-",
      exporter:
        query.type === "export" ? s.exporter || "-" : s.importer || "-",
      qty: s.quantity || "-",
      unit: s.unit || "-",
      value: s.total_value_usd || "-",
      origin:
        query.type === "export"
          ? s.destination_country || "-"
          : s.origin_country || "-",
      port:
        query.type === "export"
          ? s.Port_of_Loading || "-"
          : s.Port_of_Unloading || "-",
    };
  });

  const { type, country, product, hscode, countryin, year } = query;

  const formatText = (t) => t?.replace(/[_-]/g, " ").trim();
  const upper = (t) => t?.toUpperCase();

  let sec1Heading = `Latest ${formatText(country).replace(/^./, s => s.toUpperCase())} ${type.replace(/^./, s => s.toUpperCase())} Data`;
  if (product) sec1Heading += ` of ${formatText(product).replace(/^./, s => s.toUpperCase())}`;
  if (hscode) sec1Heading += ` Under HS Code ${hscode}`;
  if (countryin) sec1Heading += ` to ${formatText(countryin)}`;

  let sec1Subheading = `Complete Detailed Competitor Analysis through our latest ${upper(type)} Data of ${formatText(country).replace(/^./, s => s.toUpperCase())}${year ? " " + year : ""}.`;
  if (product)
    sec1Subheading += ` Find detailed ${formatText(country)} ${upper(type)} Data statistics consisting of the name of ${product} importer in ${formatText(country)} with Date, HS code, Product Details, quantity, Unit, Total Value in USD, Country, port Loading & unloading, buyer and more shipping information details below.`;

  let sec5Content = `Exim Trade Data provides 100% genuine and the latest ${upper(type)} Data`;
  if (product) sec5Content += ` of ${formatText(product)}`;
  if (hscode) sec5Content += ` under HS Code ${hscode}`;
  sec5Content += ` of ${formatText(country)}`;
  if (countryin) sec5Content += ` to ${formatText(countryin)}`;
  if (year) sec5Content += ` in ${year}`;
  sec5Content += `. We collect ${upper(type)} Data`;
  if (product) sec5Content += ` of ${formatText(product)}`;
  if (hscode) sec5Content += ` under HS Code ${hscode}`;
  sec5Content += ` of ${formatText(country)}`;
  if (countryin) sec5Content += ` to ${formatText(countryin)} with product and date.`;
  sec5Content += ` ${upper(type)} Data helps to analyze ${upper(type)} price, company name, port, ${type.replace(/^./, s => s.toUpperCase())}er and exporter, product description, quantity, market trends, and many other data points. International Trade data of a country helps the global exporters and importers to do analysis and market research to find local suppliers and buyers in that country.`;

  /* -------------------------------------------------
     Build final page data
  -------------------------------------------------- */
  const data = {
    section1: {
      heading: sec1Heading,
      subheading: sec1Subheading,
    },
    section3: { appliedFilters },
    section4: {
      filters,
      table: {
        headers: [
          "DATE",
          "HS CODE",
          "PRODUCT DESCRIPTION",
          query.type === "export" ? "EXPORTER" : "IMPORTER",
          "QUANTITY",
          "UNIT",
          "TOTAL VALUE USD",
          query.type === "export"
            ? "DESTINATION COUNTRY"
            : "ORIGIN COUNTRY",
          query.type === "export"
            ? "PORT OF LOADING"
            : "PORT OF UNLOADING",
        ],
        rows,
        pagination: {
          currentPage: 1,
          totalPages: Math.max(1, Math.ceil(rows.length / 10)),
        },
      },
    },
    section5: {
      heading: "Search Global Export - Import Trade Data",
      content: sec5Content,
      pointers: [],
    },
  };

  /* -------------------------------------------------
     Render SSR HTML
  -------------------------------------------------- */
  return (
    <main>
      <Hero data={data.section1} />
      <ShowFilters appliedFilters={data.section3.appliedFilters} />
      <MainSection
        data={data.section4}
        appliedFilters={data.section3.appliedFilters}
      />
      <SearchGlobalData data={data.section5} />
    </main>
  );
}