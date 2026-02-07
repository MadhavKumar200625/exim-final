import { ChevronRight, ArrowUpRight } from "lucide-react";
import { countries } from "@/lib/CountriesPageData";

/* normalize slug → name */
const normalize = (str = "") =>
  str
    .toLowerCase()
    .replace(/-/g, " ")
    .replace(/\band\b/g, "and")
    .trim();

export default function ImportantLinks({ country, section7 }) {
    const normalizedCountry = normalize(country);

  const countryData = countries.find(
    (c) => normalize(c.name) === normalizedCountry
  );

  // Fallback (SEO-safe, never crash)
  if (!countryData) {
    console.warn("Country not found:", country);
  }

  const links = [
    {
      title: `${ country} Import Data`,
      url: countryData?.link_imp || "#",
    },
    {
      title: `${ country} Export Data`,
      url: countryData?.link_exp || "#",
    },
    {
      title: `${countryData?.name || country} Import Export Products`,
      url: `/global-products`,
    },
    {
      title: "Global Port Volume Report",
      url: `/global-ports`,
    },
    {
      title: "Global Companies List",
      url: `/global-companies-list`,
    },
    {
      title: "Country Wise Trade Data",
      url: `/import-export-data-country-wise`,
    },
    {
      title: "Global Trade API",
      url: `/api-development-and-integration-company`,
    },
  ];
  /* ---------- STRAPI OVERRIDE ---------- */
const strapiTitle = section7?.title;
const strapiLinks = Array.isArray(section7?.links)
  ? section7.links
  : null;
const finalLinks = strapiLinks || links;

  return (
    <section className="px-6 md:px-16 py-12 bg-white">
      <div className="container mx-auto">
        <p className="text-sm font-semibold text-sky-600 uppercase mb-2">
          Important Links
        </p>

        <h2 className="text-3xl font-bold text-black mb-8">
  {strapiTitle ||
    `Important links related to ${countryData?.name || country} Import and Export data`}
</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
  {finalLinks.map((item) => (
    <a
      key={item.title}
      href={item.url}
      className="group flex items-center justify-between p-4 border rounded-lg shadow-sm hover:shadow-md transition"
    >
      <div className="flex items-center gap-3">
        <ChevronRight size={18} className="text-sky-500" />
        <span className="font-medium underline group-hover:text-sky-600">
          {item.title}
        </span>
      </div>

      <ArrowUpRight
        size={18}
        className="group-hover:text-sky-500 transition"
      />
    </a>
  ))}
</div>
      </div>
    </section>
  );
}