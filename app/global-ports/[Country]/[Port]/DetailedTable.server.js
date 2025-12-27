import DetailedTableTabs from "./DetailedTableTabs.client";

export default function DetailedTable({ portName, importData, exportData }) {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-10">
          Get Detailed {portName} Port Shipment Data
        </h2>

        <DetailedTableTabs
          importData={importData}
          exportData={exportData}
        />

        <div className="flex justify-center mt-8">
          <a
            href="/pricing"
            className="px-8 py-3 bg-blue-600 text-white font-semibold shadow-md hover:scale-105 transition-transform"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
}