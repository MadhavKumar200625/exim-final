"use client";

import { useState ,useRef,useEffect} from "react";
import { useParams } from "next/navigation";

/* =============================
   SELECTABLE COUNTRIES
============================= */
const selectableCountries = {
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

/* =============================
   INPUT STYLE (Tailwind only)
============================= */
const inputClass =
  "w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";

export default function CompanyRemovalFormPage() {
  const { country, company } = useParams();

  /* =============================
     STATE
  ============================= */
  const [countryQuery, setCountryQuery] = useState("");
  const [showCountryList, setShowCountryList] = useState(false);
  const dropdownRef = useRef(null);

  const filteredCountries = Object.keys(selectableCountries).filter((c) =>
    c.replaceAll("_", " ").toLowerCase().includes(countryQuery.toLowerCase())
  );

  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    website: "",
    submitAs: "",
    requestType: "",
    otherRequest: "",
    message: "",
    confirm1: false,
    confirm2: false,
    confirm3: false,
  });
const [isSubmitting, setIsSubmitting] = useState(false);
  /* =============================
     OUTSIDE CLICK CLOSE
  ============================= */
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowCountryList(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({
      ...p,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  /* =============================
     SUBMIT
  ============================= */
  const handleSubmit = async (e) => {
  e.preventDefault();
  if (isSubmitting) return;

  setIsSubmitting(true);

  try {
    const payload = {
      ...form,
      country: countryQuery,
      urlCountry: country,
      urlCompany: company,
    };

    const res = await fetch("/api/request-of-removal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const json = await res.json();
    alert(json.message || json.error);
  } catch (err) {
    alert("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <main className="mx-auto max-w-5xl px-6 py-32">
      <h1 className="mb-4 text-3xl font-semibold text-gray-900">
        Company Profile Removal – {company?.replace(/-/g, " ")}
      </h1>

      <p className="mb-10 text-gray-600">
        If you own rights to this company profile and want the information
        removed or restricted, please submit this form.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* BASIC DETAILS */}
        <div className="grid gap-6 md:grid-cols-2">
          <input required name="name" placeholder="Name*" className={inputClass} onChange={handleChange} />
          <input required name="company" placeholder="Company*" className={inputClass} onChange={handleChange} />
          <input name="phone" placeholder="Phone No." className={inputClass} onChange={handleChange} />
          <input required type="email" name="email" placeholder="Email ID*" className={inputClass} onChange={handleChange} />

          {/* SEARCHABLE COUNTRY */}
          <div className="relative" ref={dropdownRef}>
            <input
              required
              placeholder="Select Country*"
              className={inputClass}
              value={countryQuery}
              onFocus={() => setShowCountryList(true)}
              onChange={(e) => {
                setCountryQuery(e.target.value);
                setShowCountryList(true);
              }}
            />

            {showCountryList && (
              <div className="absolute z-20 mt-1 w-full max-h-56 overflow-auto rounded-xl border bg-white shadow-lg">
                {filteredCountries.length === 0 && (
                  <div className="px-4 py-2 text-sm text-gray-500">
                    No results
                  </div>
                )}

                {filteredCountries.map((c) => (
                  <button
                    type="button"
                    key={c}
                    className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm hover:bg-blue-50"
                    onClick={() => {
                      setCountryQuery(c.replaceAll("_", " "));
                      setShowCountryList(false);
                    }}
                  >
                    <img
                      src={selectableCountries[c].flag}
                      alt={c}
                      className="h-4 w-6 rounded"
                    />
                    {c.replaceAll("_", " ")}
                  </button>
                ))}
              </div>
            )}
          </div>

          <input name="website" placeholder="Website URL" className={inputClass} onChange={handleChange} />
        </div>

        {/* SUBMITTING AS */}
        <div>
          <p className="mb-2 font-medium">You are submitting as</p>
          <label className="block">
            <input type="radio" name="submitAs" value="owner" onChange={handleChange} /> Owner / Parent / Guardian
          </label>
          <label className="block">
            <input type="radio" name="submitAs" value="agent" onChange={handleChange} /> Authorized Agent
          </label>
        </div>

        {/* REQUEST TYPE */}
        <div>
          <p className="mb-2 font-medium">I am submitting a request to</p>
          {[
            "Know what information is collected",
            "Have my information deleted",
            "Opt out of having my data sold",
            "Other",
          ].map((t) => (
            <label key={t} className="block">
              <input type="radio" name="requestType" value={t} onChange={handleChange} /> {t}
            </label>
          ))}

          {form.requestType === "Other" && (
            <input
              name="otherRequest"
              placeholder="Please specify"
              className={`${inputClass} mt-3`}
              onChange={handleChange}
            />
          )}
        </div>

        {/* MESSAGE */}
        <textarea
          name="message"
          placeholder="Please provide additional details"
          rows={4}
          className={inputClass}
          onChange={handleChange}
        />

        {/* CONFIRMATIONS */}
        <div className="space-y-3 text-sm">
          <label className="block">
            <input type="checkbox" name="confirm1" required onChange={handleChange} /> I confirm the information provided is accurate.
          </label>
          <label className="block">
            <input type="checkbox" name="confirm2" required onChange={handleChange} /> I understand deletion is irreversible.
          </label>
          <label className="block">
            <input type="checkbox" name="confirm3" required onChange={handleChange} /> I understand verification by email may be required.
          </label>
        </div>

        {/* SUBMIT */}
        <button
  type="submit"
  disabled={isSubmitting}
  className={`rounded-xl px-8 py-3 font-medium text-white transition
    ${isSubmitting
      ? "bg-blue-400 cursor-not-allowed"
      : "bg-blue-600 hover:bg-blue-700"}
  `}
>
  {isSubmitting ? "Submitting..." : "Submit Request"}
</button>
      </form>
    </main>
  );
}