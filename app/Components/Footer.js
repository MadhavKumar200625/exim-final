"use client";

import Link from "next/link";
import Script from "next/script";
import { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin, Youtube ,XIcon} from "lucide-react";

export default function Footer() {
  // 🤖 bot detection
  const isBot =
    typeof navigator !== "undefined" &&
    (navigator.webdriver ||
      /bot|crawler|spider|headless/i.test(navigator.userAgent));

  


  /* ======================
     WhatsApp Float Scroll
     ====================== */
  const [scrolled, setScrolled] = useState(false);


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
  Cape_Verde: { code: "+238", flag: "https://flagcdn.com/w40/cv.png" },
  Chad: { code: "+235", flag: "https://flagcdn.com/w40/td.png" },
  Chile: { code: "+56", flag: "https://flagcdn.com/w40/cl.png" },
  China: { code: "+86", flag: "https://flagcdn.com/w40/cn.png" },
  Colombia: { code: "+57", flag: "https://flagcdn.com/w40/co.png" },
  Congo_Republic: { code: "+242", flag: "https://flagcdn.com/w40/cg.png" },
  Congo_DRC: { code: "+243", flag: "https://flagcdn.com/w40/cd.png" },
  Costa_Rica: { code: "+506", flag: "https://flagcdn.com/w40/cr.png" },
  Croatia: { code: "+385", flag: "https://flagcdn.com/w40/hr.png" },
  Cuba: { code: "+53", flag: "https://flagcdn.com/w40/cu.png" },
  Cyprus: { code: "+357", flag: "https://flagcdn.com/w40/cy.png" },
  Czech_Republic: { code: "+420", flag: "https://flagcdn.com/w40/cz.png" },
  Denmark: { code: "+45", flag: "https://flagcdn.com/w40/dk.png" },
  Djibouti: { code: "+253", flag: "https://flagcdn.com/w40/dj.png" },
  Dominican_Republic: { code: "+1-809", flag: "https://flagcdn.com/w40/do.png" },
  Ecuador: { code: "+593", flag: "https://flagcdn.com/w40/ec.png" },
  Egypt: { code: "+20", flag: "https://flagcdn.com/w40/eg.png" },
  El_Salvador: { code: "+503", flag: "https://flagcdn.com/w40/sv.png" },
  Eritrea: { code: "+291", flag: "https://flagcdn.com/w40/er.png" },
  Estonia: { code: "+372", flag: "https://flagcdn.com/w40/ee.png" },
  Eswatini: { code: "+268", flag: "https://flagcdn.com/w40/sz.png" },
  Ethiopia: { code: "+251", flag: "https://flagcdn.com/w40/et.png" },
  Fiji: { code: "+679", flag: "https://flagcdn.com/w40/fj.png" },
  Finland: { code: "+358", flag: "https://flagcdn.com/w40/fi.png" },
  France: { code: "+33", flag: "https://flagcdn.com/w40/fr.png" },
  Gabon: { code: "+241", flag: "https://flagcdn.com/w40/ga.png" },
  Gambia: { code: "+220", flag: "https://flagcdn.com/w40/gm.png" },
  Georgia: { code: "+995", flag: "https://flagcdn.com/w40/ge.png" },
  Germany: { code: "+49", flag: "https://flagcdn.com/w40/de.png" },
  Ghana: { code: "+233", flag: "https://flagcdn.com/w40/gh.png" },
  Greece: { code: "+30", flag: "https://flagcdn.com/w40/gr.png" },
  Guatemala: { code: "+502", flag: "https://flagcdn.com/w40/gt.png" },
  Guinea: { code: "+224", flag: "https://flagcdn.com/w40/gn.png" },
  Guinea_Bissau: { code: "+245", flag: "https://flagcdn.com/w40/gw.png" },
  Guyana: { code: "+592", flag: "https://flagcdn.com/w40/gy.png" },
  Haiti: { code: "+509", flag: "https://flagcdn.com/w40/ht.png" },
  Honduras: { code: "+504", flag: "https://flagcdn.com/w40/hn.png" },
  Hungary: { code: "+36", flag: "https://flagcdn.com/w40/hu.png" },
  Iceland: { code: "+354", flag: "https://flagcdn.com/w40/is.png" },
  India: { code: "+91", flag: "https://flagcdn.com/w40/in.png" },
  Indonesia: { code: "+62", flag: "https://flagcdn.com/w40/id.png" },
  Iran: { code: "+98", flag: "https://flagcdn.com/w40/ir.png" },
  Iraq: { code: "+964", flag: "https://flagcdn.com/w40/iq.png" },
  Ireland: { code: "+353", flag: "https://flagcdn.com/w40/ie.png" },
  Israel: { code: "+972", flag: "https://flagcdn.com/w40/il.png" },
  Italy: { code: "+39", flag: "https://flagcdn.com/w40/it.png" },
  Jamaica: { code: "+1-876", flag: "https://flagcdn.com/w40/jm.png" },
  Japan: { code: "+81", flag: "https://flagcdn.com/w40/jp.png" },
  Jordan: { code: "+962", flag: "https://flagcdn.com/w40/jo.png" },
  Kenya: { code: "+254", flag: "https://flagcdn.com/w40/ke.png" },
  Kuwait: { code: "+965", flag: "https://flagcdn.com/w40/kw.png" },
  Kyrgyzstan: { code: "+996", flag: "https://flagcdn.com/w40/kg.png" },
  Laos: { code: "+856", flag: "https://flagcdn.com/w40/la.png" },
  Latvia: { code: "+371", flag: "https://flagcdn.com/w40/lv.png" },
  Lebanon: { code: "+961", flag: "https://flagcdn.com/w40/lb.png" },
  Lesotho: { code: "+266", flag: "https://flagcdn.com/w40/ls.png" },
  Liberia: { code: "+231", flag: "https://flagcdn.com/w40/lr.png" },
  Libya: { code: "+218", flag: "https://flagcdn.com/w40/ly.png" },
  Liechtenstein: { code: "+423", flag: "https://flagcdn.com/w40/li.png" },
  Lithuania: { code: "+370", flag: "https://flagcdn.com/w40/lt.png" },
  Luxembourg: { code: "+352", flag: "https://flagcdn.com/w40/lu.png" },
  Madagascar: { code: "+261", flag: "https://flagcdn.com/w40/mg.png" },
  Malawi: { code: "+265", flag: "https://flagcdn.com/w40/mw.png" },
  Malaysia: { code: "+60", flag: "https://flagcdn.com/w40/my.png" },
  Maldives: { code: "+960", flag: "https://flagcdn.com/w40/mv.png" },
  Mali: { code: "+223", flag: "https://flagcdn.com/w40/ml.png" },
  Malta: { code: "+356", flag: "https://flagcdn.com/w40/mt.png" },
  Mauritania: { code: "+222", flag: "https://flagcdn.com/w40/mr.png" },
  Mauritius: { code: "+230", flag: "https://flagcdn.com/w40/mu.png" },
  Mexico: { code: "+52", flag: "https://flagcdn.com/w40/mx.png" },
  Moldova: { code: "+373", flag: "https://flagcdn.com/w40/md.png" },
  Mongolia: { code: "+976", flag: "https://flagcdn.com/w40/mn.png" },
  Montenegro: { code: "+382", flag: "https://flagcdn.com/w40/me.png" },
  Morocco: { code: "+212", flag: "https://flagcdn.com/w40/ma.png" },
  Mozambique: { code: "+258", flag: "https://flagcdn.com/w40/mz.png" },
  Myanmar: { code: "+95", flag: "https://flagcdn.com/w40/mm.png" },
  Namibia: { code: "+264", flag: "https://flagcdn.com/w40/na.png" },
  Nepal: { code: "+977", flag: "https://flagcdn.com/w40/np.png" },
  Netherlands: { code: "+31", flag: "https://flagcdn.com/w40/nl.png" },
  New_Zealand: { code: "+64", flag: "https://flagcdn.com/w40/nz.png" },
  Nicaragua: { code: "+505", flag: "https://flagcdn.com/w40/ni.png" },
  Niger: { code: "+227", flag: "https://flagcdn.com/w40/ne.png" },
  Nigeria: { code: "+234", flag: "https://flagcdn.com/w40/ng.png" },
  North_Korea: { code: "+850", flag: "https://flagcdn.com/w40/kp.png" },
  North_Macedonia: { code: "+389", flag: "https://flagcdn.com/w40/mk.png" },
  Norway: { code: "+47", flag: "https://flagcdn.com/w40/no.png" },
  Pakistan: { code: "+92", flag: "https://flagcdn.com/w40/pk.png" },
  Panama: { code: "+507", flag: "https://flagcdn.com/w40/pa.png" },
  Papua_New_Guinea: { code: "+675", flag: "https://flagcdn.com/w40/pg.png" },
  Paraguay: { code: "+595", flag: "https://flagcdn.com/w40/py.png" },
  Peru: { code: "+51", flag: "https://flagcdn.com/w40/pe.png" },
  Philippines: { code: "+63", flag: "https://flagcdn.com/w40/ph.png" },
  Poland: { code: "+48", flag: "https://flagcdn.com/w40/pl.png" },
  Portugal: { code: "+351", flag: "https://flagcdn.com/w40/pt.png" },
  Qatar: { code: "+974", flag: "https://flagcdn.com/w40/qa.png" },
  Romania: { code: "+40", flag: "https://flagcdn.com/w40/ro.png" },
  Russia: { code: "+7", flag: "https://flagcdn.com/w40/ru.png" },
  Rwanda: { code: "+250", flag: "https://flagcdn.com/w40/rw.png" },
  Saudi_Arabia: { code: "+966", flag: "https://flagcdn.com/w40/sa.png" },
  Senegal: { code: "+221", flag: "https://flagcdn.com/w40/sn.png" },
  Serbia: { code: "+381", flag: "https://flagcdn.com/w40/rs.png" },
  Seychelles: { code: "+248", flag: "https://flagcdn.com/w40/sc.png" },
  Singapore: { code: "+65", flag: "https://flagcdn.com/w40/sg.png" },
  Slovakia: { code: "+421", flag: "https://flagcdn.com/w40/sk.png" },
  Slovenia: { code: "+386", flag: "https://flagcdn.com/w40/si.png" },
  South_Africa: { code: "+27", flag: "https://flagcdn.com/w40/za.png" },
  South_Korea: { code: "+82", flag: "https://flagcdn.com/w40/kr.png" },
  Spain: { code: "+34", flag: "https://flagcdn.com/w40/es.png" },
  Sri_Lanka: { code: "+94", flag: "https://flagcdn.com/w40/lk.png" },
  Sudan: { code: "+249", flag: "https://flagcdn.com/w40/sd.png" },
  Sweden: { code: "+46", flag: "https://flagcdn.com/w40/se.png" },
  Switzerland: { code: "+41", flag: "https://flagcdn.com/w40/ch.png" },
  Syria: { code: "+963", flag: "https://flagcdn.com/w40/sy.png" },
  Taiwan: { code: "+886", flag: "https://flagcdn.com/w40/tw.png" },
  Tanzania: { code: "+255", flag: "https://flagcdn.com/w40/tz.png" },
  Thailand: { code: "+66", flag: "https://flagcdn.com/w40/th.png" },
  Togo: { code: "+228", flag: "https://flagcdn.com/w40/tg.png" },
  Tunisia: { code: "+216", flag: "https://flagcdn.com/w40/tn.png" },
  Turkey: { code: "+90", flag: "https://flagcdn.com/w40/tr.png" },
  Uganda: { code: "+256", flag: "https://flagcdn.com/w40/ug.png" },
  Ukraine: { code: "+380", flag: "https://flagcdn.com/w40/ua.png" },
  United_Arab_Emirates: { code: "+971", flag: "https://flagcdn.com/w40/ae.png" },
  United_Kingdom: { code: "+44", flag: "https://flagcdn.com/w40/gb.png" },
  United_States: { code: "+1", flag: "https://flagcdn.com/w40/us.png" },
  Uruguay: { code: "+598", flag: "https://flagcdn.com/w40/uy.png" },
  Uzbekistan: { code: "+998", flag: "https://flagcdn.com/w40/uz.png" },
  Venezuela: { code: "+58", flag: "https://flagcdn.com/w40/ve.png" },
  Vietnam: { code: "+84", flag: "https://flagcdn.com/w40/vn.png" },
  Yemen: { code: "+967", flag: "https://flagcdn.com/w40/ye.png" },
  Zambia: { code: "+260", flag: "https://flagcdn.com/w40/zm.png" },
  Zimbabwe: { code: "+263", flag: "https://flagcdn.com/w40/zw.png" },
};
  const [selectedCountry, setSelectedCountry] = useState("India");
const [showCodes, setShowCodes] = useState(false);
const [searchCode, setSearchCode] = useState("");

const countries = Object.entries(countryCodes).filter(([name]) =>
  name.toLowerCase().includes(searchCode.toLowerCase())
);

  useEffect(() => {
    if (isBot) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isBot]);

  /* ======================
     Newsletter Form
     ====================== */
  const [nname, setName] = useState("");
  const [nemail, setEmail] = useState("");
  const [nmobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
  e.preventDefault();

  if (isBot) return;

  if (!nname || !nemail || !nmobile || !selectedCountry) {
    alert("Please fill all the fields.");
    return;
  }

  try {
    setLoading(true);

    const res = await fetch("/api/sendNewsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nname,
        nemail,
        nmobile,
        selectedCountry
      }),
    });

    if (!res.ok) {
      throw new Error("Request failed");
    }

    alert("Newsletters subscribed successfully!");
  } catch (err) {
    alert("Something went wrong!");
  } finally {
    setLoading(false);
    setName("");
    setEmail("");
    setMobile("");
  }
};

  return (
    <footer className="bg-gray-200 text-white py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* ======================
            Subscribe Section
           ====================== */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-xl text-black font-semibold">
            Subscribe Newsletter
          </h3>

          <form
            onSubmit={sendEmail}
            className="flex flex-col items-center rounded w-full max-w-md"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-2 w-full rounded m-2 text-black bg-white"
              value={nname}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full rounded m-2 text-black bg-white"
              value={nemail}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="w-full m-2 relative">
  {/* Country code selector */}
  <button
    type="button"
    onClick={() => setShowCodes(!showCodes)}
    className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center gap-2 border px-2 py-1 rounded bg-white text-black"
  >
    <img
      src={countryCodes[selectedCountry].flag}
      alt={selectedCountry}
      className="w-4 h-4"
    />
    <span className="text-sm">{countryCodes[selectedCountry].code}</span>
  </button>

  {/* Phone input */}
  <input
    type="number"
    placeholder="Mobile Number"
    className="px-4 py-2 w-full rounded text-black bg-white pl-28"
    value={nmobile}
    onChange={(e) => setMobile(e.target.value)}
  />

  {/* Dropdown */}
  {showCodes && (
    <div className="absolute z-50 bg-white border rounded shadow-lg mt-2 w-full max-h-56 overflow-y-auto">
      <input
        type="text"
        placeholder="Search country..."
        className="w-full px-3 py-2 border-b text-black"
        value={searchCode}
        onChange={(e) => setSearchCode(e.target.value)}
      />

      {countries.map(([name, data]) => (
        <div
          key={name}
          onClick={() => {
            setSelectedCountry(name);
            setShowCodes(false);
            setSearchCode("");
          }}
          className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-blue-50"
        >
          <img src={data.flag} className="w-4 h-4" />
          <span className="text-sm text-black">{name}</span>
          <span className="ml-auto text-sm text-gray-600">{data.code}</span>
        </div>
      ))}
    </div>
  )}
</div>
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 w-full px-5 py-2 hover:scale-105 transition-transform duration-300 shadow-lg m-2"
            >
              <span className="text-white text-sm">
                {loading ? "Sending..." : "Submit"}
              </span>
            </button>
          </form>

          <div className="text-lg text-black mt-4">
            Shpere Eximia Research Pvt Ltd <br />
            G-232, Noida Sector-63, Uttar Pradesh - 201301, India
            <br />
            <span className="block mt-2">+91-9625812393</span>
            <a
              href="mailto:Info@eximtradedata.com"
              
              className="underline"
            >
              Info@eximtradedata.com
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-12 flex gap-5">
            <a
              href="https://www.facebook.com/eximtradedataofficial"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <Facebook className="w-6 h-6 text-black" />
            </a>

            <a
              href="https://www.instagram.com/eximtradedata/"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <Instagram className="w-6 h-6 text-black" />
            </a>

            <a
              href="https://www.linkedin.com/company/exim-trade-data"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <Linkedin className="w-6 h-6 text-black" />
            </a>

            <a
              href="https://www.youtube.com/channel/UCsbKPsVwgAgqJi4EB20iBvg"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <Youtube className="w-6 h-6 text-black" />
            </a>

            <a
  href="https://in.pinterest.com/Exim_Trade_Data"
  target="_blank"
  rel="noopener noreferrer"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    className="text-black hover:text-red-600 transition-colors"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.66 7.86 6.38 9.33-.09-.79-.17-2.01.03-2.88.18-.77 1.17-4.9 1.17-4.9s-.3-.6-.3-1.48c0-1.39.81-2.43 1.82-2.43.86 0 1.27.65 1.27 1.42 0 .86-.55 2.15-.83 3.35-.23.99.5 1.8 1.47 1.8 1.76 0 3.11-1.86 3.11-4.54 0-2.37-1.7-4.03-4.13-4.03-2.81 0-4.46 2.11-4.46 4.29 0 .86.33 1.78.74 2.28.08.1.09.19.07.3-.08.33-.25 1.04-.29 1.18-.05.19-.16.23-.38.14-1.41-.66-2.29-2.73-2.29-4.39 0-3.57 2.6-6.85 7.49-6.85 3.93 0 6.99 2.8 6.99 6.55 0 3.91-2.47 7.06-5.89 7.06-1.15 0-2.23-.6-2.6-1.3l-.71 2.71c-.26.99-.96 2.23-1.43 2.98A10 10 0 1 0 12 2z" />
  </svg>
</a>

<a
  href="https://x.com/eximtradedata"
  target="_blank"
  rel="noopener noreferrer"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    className="text-black hover:text-gray-700 transition-colors"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.656l-5.214-6.817-5.966 6.817H1.68l7.73-8.835L1.254 2.25h6.822l4.713 6.231 5.455-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/>
  </svg>
</a>
          </div>
        </div>

        {/* ======================
            Links Section
           ====================== */}
        <div className="md:col-span-3 grid grid-cols-1 gap-8">
          <div className="grid grid-cols-3 gap-4 text-sm">
            {/* Support */}
            <div>
              <h4 className="font-semibold mb-2 text-black text-lg">
                Support
              </h4>
              <ul className="space-y-1 text-black">
                <li><a href="/contact" >Contact Us</a></li>
                <li><a href="/faq" >Faqs</a></li>
                <li><a href="/pricing" >Pricing</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-2 text-black text-lg">
                Legal
              </h4>
              <ul className="space-y-1 text-black">
                <li><a href="/privacy" >Privacy Policy</a></li>
                <li><a href="/terms" >Terms & Conditions</a></li>
                <li><a href="/refund-policy" >Refunds Policy</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-2 text-black text-lg">
                Company
              </h4>
              <ul className="space-y-1 text-black">
                <li><a href="/about" >About</a></li>
                <li><a href="/services" >Why Choose Us</a></li>
                <li><a href="/our-client" >Our Clients</a></li>
              </ul>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-2 text-black text-lg">
              Solutions
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-black">
              <a href="/agribusiness">Agribusiness</a>
              <a href="/asset-management">Asset Management</a>
              <a href="/academic-and-education">Academic and Education</a>
              <a href="/automative">Automotive</a>
              <a href="/aerospace-and-defence">Aerospace and Defence</a>
              <a href="/construction">Construction</a>
              <a href="/chemical">Chemical</a>
              <a href="/energy">Energy Sector</a>
              <a href="/exporters">Exporters</a>
              <a href="/importers">Importers</a>
              <a href="/law-firms">Law Firms</a>
              <a href="/retail">Retail</a>
              <a href="/sales-and-marketing">Sales and Marketing</a>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="font-semibold mb-2 text-black text-lg">
              Important Links
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-black">
              <a href="/get-started">Get Trial</a>
              <a href="/import-export-data-country-wise">Countries Covered</a>
              <a href="/global-companies-list">Global Companies</a>
              <a href="/global-ports">Global Ports</a>
              <a href="/industries-covered">Industries Covered</a>
              <a href="/global-trade-database">Global Trade Database</a>
              <a href="/global-products">Global Products</a>
              <a href="/api-development-and-integration-company">
                API Integration & Development
              </a>
              <a href="/global-hs-code-list">Global HSN Code List</a>
              <a href="/partners">Referral Partners</a>
            </div>
          </div>
        </div>
      </div>

      {/* JivoChat – humans only */}
      {!isBot && (
        <Script
          src="//code.jivosite.com/widget/7KuVu05nSB"
          strategy="lazyOnload"
        />
      )}

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/918826195070?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services."
        className={`fixed bottom-55 ${
          scrolled ? "right-4" : "right-1"
        } bg-green-500 text-white p-4 rounded-full shadow-lg transition-all z-50`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M20.52 3.48A11.9 11.9 0 0 0 12 .5C5.65.5.5 5.65.5 12c0 2.12.55 4.15 1.57 5.96L0 24l6.3-1.64A11.5 11.5 0 0 0 12 23.5c6.35 0 11.5-5.15 11.5-11.5 0-3.06-1.2-5.92-3.48-8.02z" />
        </svg>
      </a>

      <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-black">
  <div className="flex flex-col md:flex-row items-center justify-between gap-3">
    {/* Left */}
    <a
      href="/sitemap.xml"
      className="underline text-md w-30 hover:text-blue-600"
    >
      Sitemap XML
    </a>

    {/* Center / Right */}
    <div className="text-center w-full md:text-center md:mr-32 ">
      &copy; {2025} Shpere Eximia Research Pvt Ltd. All rights reserved.
    </div>
  </div>
</div>
    </footer>
  );
}