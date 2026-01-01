import React from "react";
import { Code, Plug, TrendingUp } from "lucide-react";
import Link from "next/link";

const ApiAccess = () => {
  return (
    <section className="py-24 bg-linear-to-t from-white to-blue-50 text-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Get dedicated API to access our{" "}
            <span className="text-blue-600 drop-shadow-lg">
              Global Trade Database
            </span>
          </h2>

          {/* CTA */}
          <div className="flex justify-center">
            <a
  href="/contact"
  
  className="bg-blue-600 text-white font-semibold px-8 py-3 transition transform hover:scale-105"
>
  Get Started →
</a>
          </div>
        </div>

        {/* How We Work */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold text-center mb-8 tracking-wide">
            How We Work
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {/* Step 1 */}
            <div className="flex flex-col items-center group hover:scale-105 transition">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg mb-6 group-hover:rotate-6 transition">
                <Code size={32} />
              </div>
              <h4 className="text-xl font-semibold">API DEVELOPMENT</h4>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center group hover:scale-105 transition">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg mb-6 group-hover:rotate-6 transition">
                <Plug size={32} />
              </div>
              <h4 className="text-xl font-semibold">API INTEGRATION</h4>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center group hover:scale-105 transition">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg mb-6 group-hover:rotate-6 transition">
                <TrendingUp size={32} />
              </div>
              <h4 className="text-xl font-semibold">EXECUTE STRATEGIES</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiAccess;