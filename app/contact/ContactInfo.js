"use client";

import { useState } from "react";
import { ChevronDown, Send } from "lucide-react";
import { countries } from "@/lib/data";

const countryCodes = {
  Afghanistan: { code: "+93", flag: "https://flagcdn.com/w40/af.png" },
  Albania: { code: "+355", flag: "https://flagcdn.com/w40/al.png" },
  Algeria: { code: "+213", flag: "https://flagcdn.com/w40/dz.png" },
  American_Samoa: { code: "+1-684", flag: "https://flagcdn.com/w40/as.png" },
  Andorra: { code: "+376", flag: "https://flagcdn.com/w40/ad.png" },
  Angola: { code: "+244", flag: "https://flagcdn.com/w40/ao.png" },
  Anguilla: { code: "+1-264", flag: "https://flagcdn.com/w40/ai.png" },
  Antigua_and_Barbuda: { code: "+1-268", flag: "https://flagcdn.com/w40/ag.png" },
  Argentina: { code: "+54", flag: "https://flagcdn.com/w40/ar.png" },
  Armenia: { code: "+374", flag: "https://flagcdn.com/w40/am.png" },
  Aruba: { code: "+297", flag: "https://flagcdn.com/w40/aw.png" },
  Australia: { code: "+61", flag: "https://flagcdn.com/w40/au.png" },
  Austria: { code: "+43", flag: "https://flagcdn.com/w40/at.png" },
  Azerbaijan: { code: "+994", flag: "https://flagcdn.com/w40/az.png" },
  Bahamas: { code: "+1-242", flag: "https://flagcdn.com/w40/bs.png" },
  Bahrain: { code: "+973", flag: "https://flagcdn.com/w40/bh.png" },
  Bangladesh: { code: "+880", flag: "https://flagcdn.com/w40/bd.png" },
  Barbados: { code: "+1-246", flag: "https://flagcdn.com/w40/bb.png" },
  Belarus: { code: "+375", flag: "https://flagcdn.com/w40/by.png" },
  Belgium: { code: "+32", flag: "https://flagcdn.com/w40/be.png" },
  Belize: { code: "+501", flag: "https://flagcdn.com/w40/bz.png" },
  Benin: { code: "+229", flag: "https://flagcdn.com/w40/bj.png" },
  Bermuda: { code: "+1-441", flag: "https://flagcdn.com/w40/bm.png" },
  Bhutan: { code: "+975", flag: "https://flagcdn.com/w40/bt.png" },
  Bolivia: { code: "+591", flag: "https://flagcdn.com/w40/bo.png" },
  Bosnia_and_Herzegovina: { code: "+387", flag: "https://flagcdn.com/w40/ba.png" },
  Botswana: { code: "+267", flag: "https://flagcdn.com/w40/bw.png" },
  Brazil: { code: "+55", flag: "https://flagcdn.com/w40/br.png" },
  Brunei: { code: "+673", flag: "https://flagcdn.com/w40/bn.png" },
  Bulgaria: { code: "+359", flag: "https://flagcdn.com/w40/bg.png" },
  Burkina_Faso: { code: "+226", flag: "https://flagcdn.com/w40/bf.png" },
  Burundi: { code: "+257", flag: "https://flagcdn.com/w40/bi.png" },
  Cambodia: { code: "+855", flag: "https://flagcdn.com/w40/kh.png" },
  Cameroon: { code: "+237", flag: "https://flagcdn.com/w40/cm.png" },
  Canada: { code: "+1", flag: "https://flagcdn.com/w40/ca.png" },
  India: { code: "+91", flag: "https://flagcdn.com/w40/in.png" },
  United_States: { code: "+1", flag: "https://flagcdn.com/w40/us.png" },
  United_Kingdom: { code: "+44", flag: "https://flagcdn.com/w40/gb.png" },
};

const ContactInfo = () => {
  const [country, setCountry] = useState("India");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [showDropdown, setShowDropdown] = useState(false);

  const sendEmail = async () => {
    if (!name || !email || !company || !mobile || !message || !country) {
      alert("Please fill all the fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!/^\d{10,}$/.test(mobile)) {
      alert("Please enter a valid phone number with at least 10 digits.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          mobile,
          message,
          country,
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      alert("Message sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
      setName("");
      setEmail("");
      setCompany("");
      setMobile("");
      setMessage("");
      setCountry("India");
      setSelectedCountry("India");
    }
  };

  return (
    <section className="relative z-10 pb-20 bg-slate-100 grid md:grid-cols-2 py-12 mt-10 px-4 gap-16 md:px-20">
      <div className="grid md:grid-cols-1 gap-10">
        {/* Support */}
        <div className="bg-white/70 border border-gray-200 p-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-black mb-4">Support Enquiry</h2>
          <a href="tel:+919625812393" className="text-blue-600">
            +91 96258 12393
          </a>
        </div>

        {/* Address */}
        <div className="bg-white/70 border border-gray-200 p-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-black mb-4">Reach Us</h2>
          <p>G-232, Sector-63, Noida, Uttar Pradesh – 201301</p>
        </div>
      </div>

      <div className="bg-white shadow-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-black text-center mb-10">
          Contact Us
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            className="border px-4 py-2"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="border px-4 py-2"
            placeholder="Company Name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />

          <input
            className="border px-4 py-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="border px-4 py-2"
            placeholder="Phone"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          {/* Country */}
          <div className="md:col-span-2 relative">
            <button
              type="button"
              onClick={() => setShowDropdown(!showDropdown)}
              className="border px-4 py-2 w-full flex justify-between"
            >
              {selectedCountry}
              <ChevronDown />
            </button>

            {showDropdown && (
              <div className="absolute bg-white border w-full max-h-60 overflow-y-scroll z-20">
                {Object.entries(countries).map(([c, flag]) => (
                  <div
                    key={c}
                    className="flex gap-2 p-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      setSelectedCountry(c);
                      setCountry(c); // ✅ FIX
                      setShowDropdown(false);
                    }}
                  >
                    <img src={flag} width={16} height={16} />
                    {c}
                  </div>
                ))}
              </div>
            )}
          </div>

          <textarea
            className="border px-4 py-2 md:col-span-2"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <div className="md:col-span-2 flex justify-center">
            <button
              type="button" // ✅ FIX
              onClick={sendEmail}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white"
            >
              <Send size={18} />
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactInfo;