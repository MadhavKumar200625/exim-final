export default function CompanyRemovalCTA({ country, company }) {
  if (!country || !company) return null;

  const removalUrl = `/company-profile-removal-request/${country}/${company}`;

  return (
    <section className="my-12 flex items-center justify-between max-w-4xl mx-auto  rounded-2xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900">
        File a Request to Remove this Page
      </h2>

      <div className="">
        <a
          href={removalUrl}
          className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Request now →
        </a>
      </div>
    </section>
  );
}