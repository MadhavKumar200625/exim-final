import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/* ===== STATIC DATA ===== */
const defaultContinents = [
  {
    id: "asia",
    name: "Asia",
    countries: [
      // { name: "India", code: "in", link: "/india-import-data" },
      { name: "China", code: "cn", link: "/china-import-data" },
      { name: "Japan", code: "jp", link: "/country-wise-japan-import-data" },
      { name: "Turkey", code: "tr", link: "/turkey-import-data" },
      { name: "South Korea", code: "kr", link: "/country-wise-korea-import-data" },
    ],
  },
  {
    id: "africa",
    name: "Africa",
    countries: [
      { name: "Chad", code: "td", link: "/chad-import-data" },
      { name: "Ghana", code: "gh", link: "/ghana-import-data" },
      { name: "Kenya", code: "ke", link: "/kenya-import-data" },
      { name: "Tanzania", code: "tz", link: "/tanzania-import-data" },
      { name: "South Africa", code: "za", link: "/country-wise-south-africa-import-data" },
    ],
  },
  {
    id: "europe",
    name: "Europe",
    countries: [
      { name: "Italy", code: "it", link: "/country-wise-italy-import-data" },
      { name: "Portugal", code: "pt", link: "/country-wise-portugal-import-data" },
      { name: "Spain", code: "es", link: "/country-wise-spain-import-data" },
      { name: "Serbia", code: "rs", link: "/country-wise-serbia-import-data" },
      { name: "United Kingdom", code: "gb", link: "/country-wise-uk-import-data" },
    ],
  },
  {
    id: "america",
    name: "America",
    countries: [
      { name: "Argentina", code: "ar", link: "/argentina-import-data" },
      { name: "Brazil", code: "br", link: "/brazil-import-data" },
      { name: "Canada", code: "ca", link: "/country-wise-canada-import-data" },
      { name: "Mexico", code: "mx", link: "/mexico-import-data" },
      { name: "USA", code: "us", link: "/us-import-export-data" },
    ],
  },
  {
    id: "oceania",
    name: "Oceania",
    countries: [
      { name: "Australia", code: "au", link: "/australia-import-data" },
      { name: "Fiji", code: "fj", link: "/country-wise-fiji-import-data" },
      { name: "New Zealand", code: "nz", link: "/country-wise-new-zealand-import-data" },
    ],
  },
];

/* ===== SLUG → ISO CODE MAP (REQUIRED) ===== */
const flagCodes = {
  india: "in",
  china: "cn",
  japan: "jp",
  turkey: "tr",
  "south-korea": "kr",

  chad: "td",
  ghana: "gh",
  kenya: "ke",
  tanzania: "tz",
  "south-africa": "za",

  uk: "gb",
  spain: "es",
  vietnam: "vn",
  netherlands: "nl",
  germany: "de",

  us: "us",
  mexico: "mx",
  argentina: "ar",
  canada: "ca",
  brazil: "br",

  fiji: "fj",
  australia: "au",
  "new-zealand": "nz",
};

const formatName = (slug) =>
  slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export default function CountrySection({ data }) {
  return (
    <section className="w-full bg-white text-black pt-6 pb-14 px-6">
      <div className="max-w-7xl mx-auto bg-linear-to-b from-blue-50 via-sky-50 to-sky-50 rounded-md py-10 px-8 shadow-2xl space-y-8">

        <h2
          className="text-3xl md:text-4xl font-bold text-center"
          dangerouslySetInnerHTML={{
            __html: data?.title || "Data Available for 200+ Countries",
          }}
        />

        {/* Countries */}

        {data?.continents ? (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-t border-gray-200 pt-8">
            {data.continents.map((continent) => (
              <div
                key={continent.id}
                className="bg-blue-100 rounded-xl p-5 shadow text-center"
              >
                <h3
                  className="font-semibold text-lg mb-4"
                  dangerouslySetInnerHTML={{
                    __html: continent.Continent_name,
                  }}
                />

                <ul className="space-y-3">
                  {continent.button_with_image.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.button_url}
                        className="flex items-center gap-3 hover:translate-x-1 transition-transform"
                      >
                        <img
                          src={item.image_url}
                          alt={`${item.button_text} import export data`}
                          width={24}
                          height={16}
                          loading="lazy"
                        />
                        <span
                          dangerouslySetInnerHTML={{
                            __html: item.button_text,
                          }}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-t border-gray-200 pt-8">
            {defaultContinents.map((continent) => (
  <div
    key={continent.id}
    className="bg-blue-100 rounded-xl p-5 shadow text-center"
  >
    <h3 className="font-semibold text-lg mb-4">
      {continent.name}
    </h3>

    <ul className="space-y-3">
      {continent.countries.map((country) => (
        <li key={country.name}>
          <a
            href={country.link}
            className="flex items-center gap-3 hover:translate-x-1 transition-transform"
          >
            <img
              src={`https://flagcdn.com/w40/${country.code}.png`}
              alt={`${country.name} import export data`}
              width={24}
              height={16}
              loading="lazy"
            />
            <span>{country.name}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
))}
          </div>
        )}

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <a
            href={data?.cta?.button_link || "/pricing"}
            className="bg-blue-600 text-white text-lg px-6 py-2 flex items-center gap-2 shadow hover:scale-105 transition"
          >
            <span
              dangerouslySetInnerHTML={{
                __html: data?.cta?.button_text || "Enquire Now",
              }}
            />
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}