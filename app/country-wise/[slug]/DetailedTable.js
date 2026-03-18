import Link from "next/link";

export default function DetailedTable({ country }) {
  const countryName =
    country?.replace(/^./, (s) => s.toUpperCase()) || "Country";

  const importSample = [
    ["Date", "🔒 Locked"],
    ["HS Code", "🔒 Locked"],
    ["Product Details", "🔒 Locked"],
    ["Quantity", "🔒 Locked"],
    ["Quantity Unit", "🔒 Locked"],
    ["Value ($)", "🔒 Locked"],
    ["Country of Origin", countryName],
    ["Country of Destination", "Multiple Countries"],
    ["Importer", "🔒 Locked"],
    ["Exporter", "🔒 Locked"],
  ];

  const exportSample = [
    ["Date", "🔒 Locked"],
    ["HS Code", "🔒 Locked"],
    ["Product Details", "🔒 Locked"],
    ["Quantity", "🔒 Locked"],
    ["Quantity Unit", "🔒 Locked"],
    ["Value ($)", "🔒 Locked"],
    ["Country of Origin", "Multiple Countries"],
    ["Country of Destination", countryName],
    ["Importer", "🔒 Locked"],
    ["Exporter", "🔒 Locked"],
  ];

  const renderTable = (rows) => (
    <div className="overflow-x-auto mt-6">
      <table className="w-full border border-gray-300 text-left text-black">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="px-4 py-2 border-r w-1/3">Field Name</th>
            <th className="px-4 py-2">Detail</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([field, value], idx) => (
            <tr
              key={idx}
              className="border-b last:border-0 hover:bg-gray-50 transition"
            >
              <td
                className="px-4 py-2 border-r font-medium"
                dangerouslySetInnerHTML={{ __html: field }}
              />
              <td
                className="px-4 py-2"
                dangerouslySetInnerHTML={{ __html: value }}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2
          className="text-2xl md:text-3xl font-bold text-black text-center mb-6"
          dangerouslySetInnerHTML={{
            __html: `${countryName} Import & Export Data Sample`,
          }}
        />

        <p
          className="text-lg text-black text-center max-w-4xl mx-auto mb-10"
          dangerouslySetInnerHTML={{
            __html: `Get a complete sample of ${countryName} export-import data including HS
            codes, product descriptions, origin & destination countries, shipment
            quantity, trade value, and verified importer-exporter details. Custom
            trade statistics are available on monthly, quarterly, and yearly basis.`,
          }}
        />

        {/* Tables */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {renderTable(importSample)}
          {renderTable(exportSample)}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block bg-sky-600 text-white font-semibold px-6 py-3 rounded hover:bg-sky-700 transition"
            dangerouslySetInnerHTML={{
              __html: "Unlock Complete Trade Data",
            }}
          />
        </div>
      </div>
    </section>
  );
}