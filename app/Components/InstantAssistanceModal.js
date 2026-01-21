"use client";
import { getCachedCountryPhone } from "@/lib/geoPhone";
import { X } from "lucide-react";
import { useEffect, useState, useRef } from "react";

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

export default function InstantAssistanceModal({ open, onClose }) {
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [showCodeDropdown, setShowCodeDropdown] = useState(false);
  const [codeSearch, setCodeSearch] = useState("");
  const [errors, setErrors] = useState({});
const [apiError, setApiError] = useState("");

useEffect(() => {
  // do nothing if modal is closed

  // geo is client-only
  const geo = getCachedCountryPhone();
  if (!geo) return;

  // safety check
  if (countryCodes[geo.countryKey]) {
    setCountryCode(geo.phoneCode);
  }
}, [open]);
const validate = () => {
  const newErrors = {};

  if (!form.name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!form.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    newErrors.email = "Enter a valid email address";
  }

  if (form.phone.trim()) {
  // remove spaces, dashes
  const digits = form.phone.replace(/[^\d]/g, "");

  if (digits.length < 6) {
    newErrors.phone = "Phone number is too short";
  }

  if (digits.length > 15) {
    newErrors.phone = "Phone number is too long";
  }
}
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const ref = useRef(null);

  useEffect(() => {
    function outside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowCodeDropdown(false);
      }
    }
    document.addEventListener("mousedown", outside);
    return () => document.removeEventListener("mousedown", outside);
  }, []);

  if (!open) return null;

  const submit = async (e) => {
  e.preventDefault();
  if (loading) return;

  setApiError("");

  if (!validate()) return;

  setLoading(true);

  try {
    const res = await fetch("/api/instant-assistance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        phone: form.phone ? `${countryCode} ${form.phone}` : "",
      }),
    });

    if (!res.ok) {
      throw new Error("Server error");
    }

    onClose();
  } catch (err) {
    console.error(err);
    setApiError("Something went wrong. Please try again.");
    setLoading(false);
  }
};

  return (
    <div
  className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4"
  onClick={onClose}
>
      <div
  ref={ref}
  onClick={(e) => e.stopPropagation()}
  className="bg-slate-50 w-full max-w-md rounded-2xl shadow-2xl p-6 animate-slideUp relative"
>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black"
        >
          <X size={22} />
        </button>

        <h2 className="text-2xl font-semibold text-center mb-1">
          Get Instant Assistance
        </h2>
        <p className="text-center text-gray-600 mb-5">
          Connect with our trade data experts for quick answers.
        </p>

        <form onSubmit={submit} className="space-y-4">
          <Input
  label="Name"
  placeholder="Enter your full name"
  error={errors.name}
  onChange={(e) => {
    setForm({ ...form, name: e.target.value });
    setErrors({ ...errors, name: "" });
  }}
/>

          <Input
  label="Email"
  type="email"
  placeholder="Enter your email address"
  error={errors.email}
  onChange={(e) => {
    setForm({ ...form, email: e.target.value });
    setErrors({ ...errors, email: "" });
  }}
/>

          {/* Phone with country code */}
          <div>
  <label className="block text-sm font-medium mb-1">
    Phone / WhatsApp 
  </label>

  <div
    className={`relative flex ${
      errors.phone ? "ring-1 ring-red-500 rounded-lg" : ""
    }`}
  >
    {/* Country code button */}
    <button
      type="button"
      onClick={() => setShowCodeDropdown((v) => !v)}
      className="flex items-center gap-2 px-3 pr-5 py-2 border rounded-l-lg bg-gray-50"
    >
      <img
        src={
          Object.values(countryCodes).find(
            (c) => c.code === countryCode
          )?.flag
        }
        className="w-5 h-4"
        alt=""
      />
      <span className="text-sm">{countryCode}</span>
    </button>

    {/* Phone input */}
    <input
  type="tel"
  placeholder="Phone or WhatsApp number"
  inputMode="numeric"
  pattern="[0-9]*"
  onChange={(e) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "");
    setForm({ ...form, phone: onlyNumbers });
    setErrors({ ...errors, phone: "" });
  }}
  className="w-full border-t border-b border-r rounded-r-lg px-3 py-2 text-sm outline-none"
/>

{showCodeDropdown && (
  <div className="absolute top-full left-0 mt-1 w-32 bg-white border rounded-xl shadow-xl z-50">
    {/* Search */}
    <input
      type="text"
      placeholder="Search country or code"
      value={codeSearch}
      onChange={(e) => setCodeSearch(e.target.value)}
      className="w-full px-3 py-2 text-sm border-b outline-none"
      autoFocus
    />

    {/* List */}
    <div className="max-h-50 overflow-y-auto">
      {Object.entries(countryCodes)
        .filter(([name, data]) => {
          const q = codeSearch.toLowerCase();
          return (
            name.replace(/_/g, " ").toLowerCase().includes(q) ||
            data.code.includes(q)
          );
        })
        .map(([name, data]) => (
          <button
            key={name}
            type="button"
            onClick={() => {
              setCountryCode(data.code);
              setShowCodeDropdown(false);
              setCodeSearch("");
            }}
            className="w-full flex items-center gap-3 px-3 py-2 hover:bg-blue-50 transition text-sm"
          >
            <img
              src={data.flag}
              alt=""
              className="w-6 h-4 rounded-sm"
              loading="lazy"
            />
            <span className="ml-auto font-medium text-gray-700">
              {data.code}
            </span>
          </button>
        ))}
    </div>
  </div>
)}
  </div>

  {errors.phone && (
    <p className="text-xs text-red-500 mt-1">
      {errors.phone}
    </p>
  )}
</div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Your Message
            </label>
            <textarea
              placeholder="How can we assist you?"
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full h-24 border rounded-lg px-3 py-2 text-sm"
            />
          </div>

          <button
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold text-white transition ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Sending..." : "✈ Send Enquiry"}
          </button>

          <p className="text-center text-sm text-gray-500">
            We will get back to you shortly.
          </p>
        </form>
      </div>
    </div>
  );
}

function Input({ label, error, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label}
      </label>
      <input
        {...props}
        className={`w-full border rounded-lg px-3 py-2 text-sm ${
          error ? "border-red-500" : ""
        }`}
      />
      {error && (
        <p className="text-xs text-red-500 mt-1">
          {error}
        </p>
      )}
    </div>
  );
}