import redis from "@/lib/redis";

/* -----------------------------------------
   Upstream endpoints
------------------------------------------ */
const URLS = [
  "http://103.30.72.94:8001/import/portReport/topHSCode",
  "http://103.30.72.94:8001/import/portReport/topOriginCountryDestinationCountry",
  "http://103.30.72.94:8001/import/portReport/topBuyerSupplier",
  "http://103.30.72.94:8001/import/portReport/uniqueBuyerSupplier",
  "http://103.30.72.94:8001/export/portReport/topHSCode",
  "http://103.30.72.94:8001/export/portReport/topOriginCountryDestinationCountry",
  "http://103.30.72.94:8001/export/portReport/topBuyerSupplier",
  "http://103.30.72.94:8001/export/portReport/uniqueBuyerSupplier",
  "http://103.30.72.94:8001/portReport/forTotal",
];

const AUTH = "Basic YWJjOmFiY0AxMjM=";
const TTL = 60 * 60 * 24 * 15; // 15 days

/* -----------------------------------------
   Customs countries
------------------------------------------ */

const list = "argentina,bangladesh,bolivia,botswana,burundi,cameroon,chile,colombia,costa_rica,cote_d_ivoire,dr_congo,ecuador,ethiopia,fiji,ghana,guatemala,guyana,india,indonesia,kazakhstan,kenya,kosovo,lesotho,liberia,malawi,mexico,moldova,nicaragua,nigeria,pakistan,panama,paraguay,peru,philippines,russia,rwanda,sao_tome_and_principe,sierra_leone,singapore,sri_lanka,tanzania,turkey,uganda,ukraine,uruguay,uzbekistan,venezuela,vietnam,zambia,zimbabwe"
const CUSTOMS_COUNTRIES = new Set(list.split(","));


/* -----------------------------------------
   Main function
------------------------------------------ */
export async function getPortData(country, port) {
  const cacheKey = `global-port:${country}:${port}`;

  /* ---------- Redis HIT ---------- */
  try {
    // const cached = await redis.get(cacheKey);
    // if (cached) return JSON.parse(cached);
    


  } catch {
    // Redis down → continue (IMPORTANT)
  }

  const source = CUSTOMS_COUNTRIES.has(country.toLowerCase())
    ? country.toLowerCase()
    : "all";

  const payload = {
    source,
    type: "master",
    country_name: country,
    port_name: port.replace(/-/g, " ").toUpperCase(),
  };

  /* ---------- Parallel upstream calls ---------- */
  const results = await Promise.all(
    URLS.map(url =>
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: AUTH,
        },
        body: JSON.stringify(payload),
      })
        .then(r => r.json().catch(() => ({ data: [] })))
        .catch(() => ({ data: [] }))
    )
  );

  const safe = (i) =>
    Array.isArray(results[i]?.data) ? results[i].data : [];

  /* ---------- Final normalized response ---------- */
  const response = {
    portName: payload.port_name,

    section2: {
      shipments: Number(safe(8)[0]?.["Total Importer"]) || 0,
      buyers: Number(safe(8)[0]?.["distinct Importer"]) || 0,
      suppliers: Number(safe(8)[0]?.["distinct Exporter"]) || 0,
    },

    section3: {
      shipmentSent: Number(safe(8)[0]?.["Total Importer"]) || 0,
      shipmentReceived: Number(safe(8)[0]?.["Total Exporter"]) || 0,
      buyers: Number(safe(8)[0]?.["distinct Importer"]) || 0,
      suppliers: Number(safe(8)[0]?.["distinct Exporter"]) || 0,
    },

    section4: {
      import: {
        hsCodes: safe(0).map(d => ({
          code: d["Top Import HS Code"],
          value: Number(d["Total Shipment"]) || 0,
        })),
        countries: safe(1).map(d => ({
          name: d["Top Import Country"]?.trim(),
          value: Number(d["Total Shipment"]) || 0,
        })),
        buyers: safe(2).map(d => ({
          name: d["Top Buyers"]?.trim(),
          value: Number(d["Total Shipment"]) || 0,
        })),
        suppliers: safe(3).map(d => ({
          name: d["Buyers"]?.trim(),
          value: Number(d["Total Shipment"]) || 0,
        })),
      },

      export: {
        hsCodes: safe(4).map(d => ({
          code: d["Top Export HS Code"],
          value: Number(d["Total Shipment"]) || 0,
        })),
        countries: safe(5).map(d => ({
          name: d["Top Export Country"]?.trim(),
          value: Number(d["Total Shipment"]) || 0,
        })),
        buyers: safe(6).map(d => ({
          name: d["Top Suppliers"]?.trim(),
          value: Number(d["Total Shipment"]) || 0,
        })),
        suppliers: safe(7).map(d => ({
          name: d["Suppliers"]?.trim(),
          value: Number(d["Total Shipment"]) || 0,
        })),
      },
    },

    section6: {
      portName: payload.port_name,
      importData: [
    {
      hsCode: "84529090",
      description:
        "LU 6015 ECCENTRIC WHEEL UP & DOWN MOVEMENT OF NEEDLE ROW (03 QTY)",
      qty: "9.5",
      origin: "Sri Lanka",
      destination: "China",
    },
    {
      hsCode: "84529090",
      description:
        "LU 6015 ECCENTRIC WHEEL UP & DOWN MOVEMENT OF NEEDLE ROW (03 QTY)",
      qty: "9.5",
      origin: "Sri Lanka",
      destination: "China",
    },
  ],
  exportData: [
    {
      hsCode: "85044090",
      description: "UPS POWER SUPPLY UNIT",
      qty: "150",
      origin: "Indonesia",
      destination: "USA",
    },
    {
      hsCode: "30049099",
      description: "PHARMACEUTICAL PRODUCTS",
      qty: "120",
      origin: "Indonesia",
      destination: "Germany",
    },
  ],
    },

    section7: {
      faqs: [],
    },
  };

  console.log(response.section2)

  /* ---------- Redis SET (non-blocking) ---------- */
  redis.set(cacheKey, JSON.stringify(response), "EX", TTL).catch(() => {});


  return response;
}