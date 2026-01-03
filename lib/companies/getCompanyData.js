import redis from "@/lib/redis";

/* -----------------------------------------
   API CONSTANTS
------------------------------------------ */
const ENDPOINTS = [
  "valueCount",
  "uniqueBuyerSupplier",
  "topHSCode",
  "topOriginCountryDestinationCountry",
  "topPortOfLoadingUnloading",
  "topBuyerSupplier",
  "topExporterImporter",
];

const BASE_URL = "http://103.30.72.94:8001/companyReport/";
const AUTH = "Basic YWJjOmFiY0AxMjM=";
const CACHE_TTL = 60 * 60 * 24 * 15; // 15 days

/* -----------------------------------------
   Helpers
------------------------------------------ */
const safeArray = (d) => (Array.isArray(d?.data) ? d.data : []);

/* -----------------------------------------
   🔒 DEFAULT FALLBACK (NEVER BREAKS UI)
------------------------------------------ */
function getDefaultCompanyData(companyName) {
  return {
    companyName: companyName.trim(),

    availability: {
      shipmentData: false,
      buyerSupplierData: false,
    },

    section2: {
      exportShipment: 0,
      exportValue: 0,
      importShipment: 0,
      importValue: 0,
    },

    section3: {
      buyers: 0,
      suppliers: 0,
    },

    section4: {
      import: {
        hsCodes: [],
        countries: [],
        ports: [],
        suppliers: [],
      },
      export: {
        hsCodes: [],
        countries: [],
        ports: [],
        buyers: [],
      },
    },

    faqs: [
      {
        question: `What does ${companyName.trim()} trade internationally?`,
        answer: `${companyName.trim()} is involved in international trade. Detailed shipment insights are available for companies with verified customs data.`,
      },
    ],
  };
}

/* -----------------------------------------
   MAIN FUNCTION
------------------------------------------ */
export async function getCompanyData({ country, company }) {
  const companyName = company.replace(/-/g, " ").toUpperCase() + " ";
  const cacheKey = `company:ALL:${companyName}`;

  /* ---------- Redis HIT ---------- */
  try {
    const cached = await redis.get(cacheKey);
    if (cached) return JSON.parse(cached);
  } catch {
    // ignore redis failure
  }

  /* ---------- FINAL PAYLOAD ---------- */
  const payload = {
    source: "all",
    type: "master",
    country_name: "all",
    company_name: companyName,
  };

  let results;
  try {
    const fetches = ENDPOINTS.map((ep) =>
      fetch(BASE_URL + ep, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: AUTH,
        },
        body: JSON.stringify(payload),
      })
        .then((r) => r.json().catch(() => ({ data: [] })))
        .catch(() => ({ data: [] }))
    );

    results = await Promise.all(fetches);
  } catch {
    return getDefaultCompanyData(companyName);
  }

  const [
    valueCount,
    uniqueBuyerSupplier,
    hsCodes,
    originDest,
    ports,
    buyerSupplier,
  ] = results;

  const vc = safeArray(valueCount);
  const ubs = safeArray(uniqueBuyerSupplier);

  const hasShipmentData =
    vc.length >= 2 &&
    (Number(vc[0]?.["Total Export Shipment"]) > 0 ||
      Number(vc[1]?.["Total Import Shipment"]) > 0);

  const hasBuyerSupplierData =
    ubs.length >= 2 &&
    (Number(ubs[0]?.Buyers) > 0 || Number(ubs[1]?.Suppliers) > 0);

  const response = {
    companyName: companyName.trim(),

    availability: {
      shipmentData: hasShipmentData,
      buyerSupplierData: hasBuyerSupplierData,
    },

    section2: hasShipmentData
      ? {
          exportShipment: Number(vc[0]?.["Total Export Shipment"]) || 0,
          exportValue: Number(vc[0]?.["Total Value"]) || 0,
          importShipment: Number(vc[1]?.["Total Import Shipment"]) || 0,
          importValue: Number(vc[1]?.["Total Value"]) || 0,
        }
      : {
          exportShipment: 0,
          exportValue: 0,
          importShipment: 0,
          importValue: 0,
        },

    section3: hasBuyerSupplierData
      ? {
          buyers: Number(ubs[0]?.Buyers) || 0,
          suppliers: Number(ubs[1]?.Suppliers) || 0,
        }
      : {
          buyers: 0,
          suppliers: 0,
        },

    section4: {
      import: {
        hsCodes: safeArray(hsCodes)
          .filter((d) => d["Top Import HS Code"])
          .map((d) => ({
            code: d["Top Import HS Code"],
            value: Number(d["Total Shipment"]) || 0,
          })),
        countries: safeArray(originDest)
          .filter((d) => d["Top Import Country"])
          .map((d) => ({
            name: d["Top Import Country"]?.trim(),
            qty: Number(d["Total Shipment"]) || 0,
          })),
        ports: safeArray(ports)
          .filter((d) => d["Top Import Port"])
          .map((d) => ({
            name: d["Top Import Port"]?.trim(),
            qty: Number(d["Total Shipment"]) || 0,
          })),
        suppliers: safeArray(buyerSupplier)
          .filter((d) => d["Top Suppliers"])
          .map((d) => ({
            name: d["Top Suppliers"]?.trim(),
            qty: Number(d["Total Shipment"]) || 0,
          })),
      },

      export: {
        hsCodes: safeArray(hsCodes)
          .filter((d) => d["Top Export HS Code"])
          .map((d) => ({
            code: d["Top Export HS Code"],
            value: Number(d["Total Shipment"]) || 0,
          })),
        countries: safeArray(originDest)
          .filter((d) => d["Top Export Country"])
          .map((d) => ({
            name: d["Top Export Country"]?.trim(),
            qty: Number(d["Total Shipment"]) || 0,
          })),
        ports: safeArray(ports)
          .filter((d) => d["Top Export Port"])
          .map((d) => ({
            name: d["Top Export Port"]?.trim(),
            qty: Number(d["Total Shipment"]) || 0,
          })),
        buyers: safeArray(buyerSupplier)
          .filter((d) => d["Top Buyers"])
          .map((d) => ({
            name: d["Top Buyers"]?.trim(),
            qty: Number(d["Total Shipment"]) || 0,
          })),
      },
    },

    faqs: [
      {
        question: `What does ${companyName.trim()} trade internationally?`,
        answer: `${companyName.trim()} participates in global trade. Some shipment data may not be publicly available.`,
      },
    ],
  };

  redis.set(cacheKey, JSON.stringify(response), "EX", CACHE_TTL).catch(() => {});
  return response;
}