import React from "react";

const countries = [
  {
    name: "Indonesia",
    ports: [
      "CENGKARENG SOEKARNO HATTA U",
      "LOBAM",
      "TANJUNG PERAK",
      "TANJUNG PRIOK",
      "Cengkareng Sukarno Hatta u",
    ],
  },
  {
    name: "Mexico",
    ports: [
      "AEROPUERTO INTERNACI",
      "MANZANILLO",
      "COLOMBIA",
      "NUEVO LAREDO",
      "PUENTE INTERNACIONAL",
    ],
  },
  {
    name: "Philippines",
    ports: [
      "Ninoy Aquino Int'l Airport",
      "Manila Int'l Container Port",
      "Port of Subic",
      "Sub-Port of Siain",
      "Port of Clark",
    ],
  },
  {
    name: "Russia",
    ports: [
      "TAIPEI AIRPORT TAIWAN",
      "TVER",
      "MOSNOV",
      "MOSCOW  RUSSIA",
      "Other",
    ],
  },
  {
    name: "Tanzania",
    ports: [
      "KILIMANJARO INTERN AIRPORT",
      "SIRARI",
      "TUNDUMA",
      "TANGA PORT",
      "NAMANGA",
    ],
  },
  {
    name: "Vietnam",
    ports: [
      "CANG CAT LAI HCM",
      "HO CHI MINH",
      "TAN CAIMEP TVAI PORT TCTT",
      "WAREHOUSE HIROTA VN",
      "IMARKET VIET NAM CO LIMITED",
    ],
  },
];

const countryFlags = {
  Indonesia: "id",
  Mexico: "mx",
  Philippines: "ph",
  Russia: "ru",
  Tanzania: "tz",
  Vietnam: "vn",
};

const PortDataByCountry = () => {
  return (
    <section className="bg-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-10">
          Search <span className="text-black">Global Ports Data</span> By Country
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country) => (
            <div
              key={country.name}
              className="bg-gray-50 shadow-md hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="flex items-center mb-4">
                <img
                  src={`https://flagcdn.com/w40/${countryFlags[country.name]}.png`}
                  alt={`${country.name} ports data`}
                  loading="lazy"
                  decoding="async"
                  className="mr-3 w-8 h-auto"
                />

                <a
                  href={`/ports-data/${country.name.toLowerCase()}/a-1`}
                  className="text-xl font-semibold text-black hover:text-blue-600 transition"
                >
                  {country.name}
                </a>
              </div>

              <ul className="text-sm text-black space-y-1">
                {country.ports.map((port) => (
                  <li key={port}>
                    <a
                      href={`/global-ports/${country.name.toLowerCase()}/${port
                        .toLowerCase()
                        .replace(/[^a-z0-9]/g, "-")}`}
                      className="hover:underline"
                    >
                      {port} <span className="text-xs">↗</span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-4 text-right">
                <a
                  href={`/ports-data/${country.name.toLowerCase()}/a-1`}
                  className="text-sm py-2 px-3 text-white bg-blue-600 hover:underline font-medium inline-block"
                >
                  View all →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortDataByCountry;