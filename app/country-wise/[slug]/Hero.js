import Link from "next/link";
import Image from "next/image";

export default function Hero({ country, hero }) {
  const countryName =
    country?.charAt(0).toUpperCase() + country?.slice(1);

  const imageSrc = `/homepage/${country}-import-export-data.webp`;

  return (
    <section className="w-full bg-white text-black pb-14 pt-28 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

        {/* Text Content */}
        <div className="flex-2 flex flex-col items-start space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            {hero?.title ||
              `${countryName} Customs Data | ${countryName} Trade Data 2024–25`}
          </h1>

          <p className="text-lg leading-relaxed">
            {hero?.description}
          </p>

          <div className="flex gap-4">
            <Link
              href={hero?.onlineDataLink || "/pricing"}
              className="bg-blue-600 text-lg text-white px-6 py-2 shadow hover:scale-105 transition"
            >
              {hero?.onlineDataText || "Online Data"}
            </Link>

            <Link
              href={hero?.offlineDataLink || "/contact"}
              className="bg-white border border-blue-600 text-lg text-black px-6 py-2 shadow hover:scale-105 transition"
            >
              {hero?.offlineDataText || "Offline Data"}
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-full max-w-sm">
            <Image
              src={imageSrc}
              alt={`${countryName} import export trade map`}
              width={400}
              height={500}
              priority
              
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}