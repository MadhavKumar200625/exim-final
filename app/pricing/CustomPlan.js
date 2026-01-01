"use client";

import Link from "next/link";

const countries = {
  Asia: ["cn", "jp", "kr"],
  Africa: ["td", "gh", "ke", "tz", "za"],
  Europe: ["gb", "es", "ru", "nl", "de"],
  America: ["us", "mx", "ar", "ca", "br"],
  Oceania: ["fj", "au", "nz"],
};

export default function CustomPlan() {
  return (
    <section className="bg-slate-50 py-16 px-4">
      <div className="bg-white border border-zinc-200 shadow-xl  max-w-6xl mx-auto p-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-black mb-3">Customized Plan</h2>
          <p className="text-lg text-gray-700">Create Your Own Plan</p>
        </div>

        {/* Features */}
        <div className="grid sm:translate-x-14 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-black text-base font-medium mb-12 text-center sm:text-left">
          <div className="space-y-3">
            <p>✅ Choose From 200+ Countries</p>
            <p>✅ Complete Historical Data Access</p>
          </div>
          <div className="space-y-3">
            <p>✅ Unlimited Searches</p>
            <p>✅ Customizable Download Records</p>
          </div>
          <div className="space-y-3">
            <p>✅ Customized User Licence</p>
            <p>✅ Priority Customer Support</p>
          </div>
        </div>

        {/* Data Available Section */}
        <div className="border-t border-zinc-200 pt-10">
          <h3 className="text-3xl font-semibold text-center text-black mb-8">Data Available</h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm text-center text-black">
            {Object.entries(countries).map(([region, codes]) => (
              <div key={region}>
                <h4 className="text-xl font-bold text-black mb-3">{region}</h4>
                <ul className="space-y-2 text-lg">
                  {codes.map((code) => (
                    <li key={code}>
                      <img
  src={`https://flagcdn.com/w40/${code}.png`}
  alt={countryName(code)}
  loading="lazy"
  decoding="async"
  className="inline w-6 h-4 mr-2"
/>
                      {countryName(code)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
  href="/get-started"
  
  className="inline-block px-6 py-3 text-lg font-semibold text-white bg-[#0067b8] hover:scale-105 transition duration-300"
>
            Get Free Trial
          </a>
        </div>
      </div>
    </section>
  );
}

// Helper to get full country name from ISO code
function countryName(code) {
  const names = {
    cn: "China",
    jp: "Japan",
    kr: "South Korea",
    td: "Chad",
    gh: "Ghana",
    ke: "Kenya",
    tz: "Tanzania",
    za: "South Africa",
    gb: "UK",
    es: "Spain",
    ru: "Russia",
    nl: "Netherlands",
    de: "Germany",
    us: "US",
    mx: "Mexico",
    ar: "Argentina",
    ca: "Canada",
    br: "Brazil",
    fj: "Fiji",
    au: "Australia",
    nz: "New Zealand",
  };

  return names[code] || code.toUpperCase();
}