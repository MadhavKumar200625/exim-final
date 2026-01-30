export default function CompanyNotFound({ companyName }) {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-3xl font-semibold mb-3">
          Company Data Not Found
        </h1>

        <p className="text-gray-600 mb-6">
          We couldn’t find verified import-export shipment data for
          <span className="font-medium"> {companyName}</span>.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
          This company may be inactive, newly registered, or not covered under
          available customs records.
        </div>

        <a
          href="/global-companies-list"
          className="inline-block mt-6 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Explore Other Companies
        </a>
      </div>
    </section>
  );
}