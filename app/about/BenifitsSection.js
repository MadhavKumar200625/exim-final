import React from "react";

const benifits = [
  {
    img: "accelerate-your-export-import.webp",
    text: "Accelerate your export-import trade by data-analysis-based decision & avoid risk.",
  },
  {
    img: "align-your-business-model.webp",
    text: "Align your business model with global strategic planning & stay ahead.",
  },
  {
    img: "monitor-and-track-competition.webp",
    text: "Monitor and track competition & grab the upcoming business opportunity.",
  },
  {
    img: "bi.webp",
    text: "Exim trade data is equipped with the latest BI tools to uncover hidden insights.",
  },
];

const BenifitsSection = () => {
  return (
    <section className="bg-[#f4f9ff] py-20 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-6">
          Benefits of Import Export Data Analysis
        </h2>
        <p className="text-lg text-black max-w-2xl mx-auto">
          Accelerate your export-import trade by data-analysis-based decisions
          and avoid risk.
          <br />
          Align your business model with global strategic planning and stay
          ahead.
          <br />
          Monitor and track the competition and grab the upcoming business
          opportunity.
          <br />
          Exim trade data is equipped with the latest business intelligence tools
          for data analysis and visualization to uncover hidden possibilities
          that are locked in the data.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benifits.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-xl p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-200"
          >
            <div className="w-20 h-20 mx-auto mb-5">
              <img
                src={`/about/${card.img}`}
                alt={card.text.replace("by data-analysis-based decision & avoid risk.","").replace("with global strategic planning & stay ahead.","").replace("& grab the upcoming business opportunity.","").replace("Exim trade data is equipped with the ","").replace("to uncover hidden insights.","")}
                width={400}
                height={300}
                className="object-contain w-full h-full"
                loading="lazy"
                decoding="async"
              />
            </div>

            <p className="text-black text-base font-medium leading-relaxed">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenifitsSection;