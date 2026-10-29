import React from "react";

const advantagesData = [
  {
    title: "Enrich Your CRM",
    desc: "Add importer and exporter activity to your leads and accounts.",
  },
  {
    title: "Power Dashboards",
    desc: "Feed import and export data into Power BI, Tableau or your own tools.",
  },
  {
    title: "Automate Research",
    desc: "Pull shipments for a product, HS code or country on a schedule.",
  },
  {
    title: "Build Products",
    desc: "Use trade statistics inside your own application.",
  },
  {
    title: "Developer Support",
    desc: "Get secure authentication, documentation and onboarding help from our team.",
  },
];

const Advantages = () => {
  return (
    <section className="py-16 bg-linear-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black">
            What You Can Do With the API
          </h2>
          <div className="mt-4 w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {advantagesData.map(({ title, desc }, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition max-w-sm w-full sm:w-[48%] lg:w-[30%]"
            >
              <div className="h-30 w-[45%] mx-auto relative overflow-hidden">
                <img
                  src={`/api-page/${title
                    .toLowerCase()
                    .replace(/ /g, "-")
                    .replace("&", "and")}.webp`}
                  alt={title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-xl font-semibold text-black mb-2">
                {title}
              </h3>

              <p className="text-black leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
