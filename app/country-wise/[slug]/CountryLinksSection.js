import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/* ===== STATIC DATA ===== */
const continents = {
  ASIA: ["india", "china", "japan", "turkey", "south-korea"],
  AFRICA: ["chad", "ghana", "kenya", "tanzania", "south-africa"],
  EUROPE: ["uk", "spain", "vietnam", "netherlands", "germany"],
  AMERICA: ["us", "mexico", "argentina", "canada", "brazil"],
  OCEANIA: ["fiji", "australia", "new-zealand"],
};

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

        <h2 className="text-3xl md:text-4xl font-bold text-center">
          {data?.title || "Data Available for 200+ Countries"}
        </h2>

        {/* Countries */}

        {data?.continents ? (
  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-t border-gray-200 pt-8">
    {data.continents.map((continent) => (
      <div
        key={continent.id}
        className="bg-blue-100 rounded-xl p-5 shadow text-center"
      >
        <h3 className="font-semibold text-lg mb-4">
          {continent.Continent_name}
        </h3>

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
                <span>{item.button_text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
) : (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-t border-gray-200 pt-8">
          {Object.entries(continents).map(([continent, countries]) => (
            <div
              key={continent}
              className="bg-blue-100 rounded-xl p-5 shadow text-center"
            >
              <h3 className="font-semibold text-lg mb-4">{continent}</h3>

              <ul className="space-y-3">
                {countries.map((slug) => (
                  <li key={slug}>
                    <a
                      href={`/country-wise-${slug}-import-data`}
                      className="flex items-center gap-3 hover:translate-x-1 transition-transform"
                    >
                      <img
                        src={`https://flagcdn.com/w40/${flagCodes[slug]}.png`}
                        alt={`${formatName(slug)} import export data`}
                        width={24}
                        height={16}
                        loading="lazy"
                      />
                      <span>{formatName(slug)}</span>
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
    {data?.cta?.button_text || "Enquire Now"} <ArrowRight size={18} />
  </a>
</div>
      </div>
    </section>
  );
}