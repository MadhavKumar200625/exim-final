// components/ClientsGrid.tsx
"use client";

const images = [
  "/our-clients/biomech.webp",
  "/our-clients/blickle.webp",
  "/our-clients/buyofuel.webp",
  "/our-clients/cerbios.webp",
  "/our-clients/clearity.webp",
  "/our-clients/coeasia.webp",
  "/our-clients/comexcell.webp",
  "/our-clients/cpkelco.webp",
  "/our-clients/duracell.webp",
  "/our-clients/elite.webp",
  "/our-clients/fashionista.webp",
  "/our-clients/frost.webp",
  "/our-clients/fudan_university.webp",
  "/our-clients/glemco.webp",
  "/our-clients/gmm.webp",
  "/our-clients/gunaylar-group.webp",
  "/our-clients/ushiyakam.webp",
  "/our-clients/afriqom.webp",
  "/our-clients/akros.webp",
  "/our-clients/archoma.webp",
  "/our-clients/bcg.webp",
  "/our-clients/hsa.webp",
  "/our-clients/images.webp",
  "/our-clients/kpk.webp",
  "/our-clients/kpmg.webp",
  "/our-clients/laksola.webp",
  "/our-clients/lgb.webp",
  "/our-clients/lonza.webp",
  "/our-clients/lr.webp",
  "/our-clients/mactech.webp",
  "/our-clients/mahindra_logo.webp",
  "/our-clients/mckinsey.webp",
  "/our-clients/milkio.webp",
  "/our-clients/mips.webp",
  "/our-clients/mtek.webp",
  "/our-clients/neohealth.webp",
  "/our-clients/netease.webp",
  "/our-clients/orientbell_logo.webp",
  "/our-clients/rizir.webp",
  "/our-clients/SA-Law.webp",
  "/our-clients/SBI.webp",
  "/our-clients/shyam-polymers.webp",
  "/our-clients/taoglas.webp",
  "/our-clients/tata.webp",
  "/our-clients/teachmint.webp",
  "/our-clients/tiyasa-software.webp",
  "/our-clients/trafigura.webp",
  "/our-clients/tunwal.webp",
  "/our-clients/vashi.webp",
  "/our-clients/vijay.webp",
  "/our-clients/yes_bank.webp",

  

  

  
];


export default function Reputation() {
  return (
    <section className="px-40 mx-auto  py-20 bg-white  to-white ">
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
        Our reputation is built on{" "}
        <span className="text-blue-600 drop-shadow-md">
          creating great outcomes
        </span>{" "}
        for clients
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
        {images.map((src, i) => (
          <div
            key={i}
            className="bg-white shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <img
  src={src}
  alt={`Client logo ${i + 1}`}
  loading="lazy"
  decoding="async"
  width={200}
  height={100}
  className="w-full px-5 py-2 object-cover"
/>
          </div>
        ))}
      </div>
    </section>
  );
}