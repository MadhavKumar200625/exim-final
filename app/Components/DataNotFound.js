export default function DataNotFound({ subject = "Data" }) {
  return (
    <main className="min-h-[50vh] px-6 py-20 text-center">
      <h1 className="text-3xl font-semibold text-gray-900">
        {subject} not found
      </h1>
      <p className="mt-3 text-gray-600">
        We could not find any information matching this request.
      </p>
    </main>
  );
}
