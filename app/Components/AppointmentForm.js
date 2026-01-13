"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  X,
  ChevronLeft,
  ChevronRight,
  User,
  Calendar,
  CheckCircle,
  ChevronDown,
} from "lucide-react";

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

const countries = Object.keys(countryCodes)

const AppointmentForm = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [activeTab, setActiveTab] = useState("AM");
  const [selectedTime, setSelectedTime] = useState(null);

  const steps = [
    { id: 1, label: "Personal Info", icon: <User size={18} /> },
    { id: 2, label: "Booking", icon: <Calendar size={18} /> },
    { id: 3, label: "Finish", icon: <CheckCircle size={18} /> },
  ];

  /* Country dropdown UI state */
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const countryRef = useRef(null);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  
  const prevMonth = () =>
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
    const nextMonth = () =>
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    CompanyName: "",
    CompanyType: "",
    Designation: "",
    ddlcountry: "",
    txtwebsite: "",
    txtphone: "",
    Timezone: "",
    AppointmentDate: "",
    AppointmentTime: "",
    Message: "",
    Plan: "",
  });

  useEffect(() => {
    const handler = (e) => {
      if (countryRef.current && !countryRef.current.contains(e.target)) {
        setShowCountryDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validateStep = (step) => {
    const section = document.getElementById(`step-${step}`);
    if (!section) return true;

    const inputs = section.querySelectorAll("input[required], select[required]");
    let valid = true;

    section.querySelectorAll(".error-text").forEach((e) => e.remove());

    inputs.forEach((input) => {
      input.classList.remove("border-red-500");

      if (!input.value.trim()) {
        valid = false;
        input.classList.add("border-red-500");

        const p = document.createElement("p");
        p.className = "error-text text-red-500 text-sm mt-1";
        p.textContent = "This field is required";
        input.parentElement.appendChild(p);
      }
    });

    return valid;
  };

  const handleNext = () => {
    if (validateStep(step)) setStep((p) => p + 1);
    else alert("Please fill all required fields.");
  };

  const handlePrev = () => setStep((p) => p - 1);

  const handleSubmit = async () => {
   if (loading) return;

    if (!selectedDate || !selectedTime || !formData.Timezone) {
      alert(`Please select timezone, date and time.${selectedDate,selectedTime,formData.Timezone}`);
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/Appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          AppointmentDate: selectedDate.toISOString().split("T")[0],
          AppointmentTime: selectedTime,
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStep(3);
    } catch (e) {
      alert("Something went wrong");
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  const inputClass =
    "w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";

  /* Calendar helpers */
  const startOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
  const endOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);

  const generateDays = () => {
    const days = [];
    for (let i = 0; i < startOfMonth.getDay(); i++) days.push(null);
    for (let i = 1; i <= endOfMonth.getDate(); i++)
      days.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i));
    return days;
  };

  const generateSlots = (isAM) => {
    const slots = [];
    for (let h = isAM ? 0 : 12; h < (isAM ? 12 : 24); h++) {
      for (let m = 0; m < 60; m += 30) {
        const hour = h % 12 || 12;
        slots.push(`${hour}:${m === 0 ? "00" : m}`);
      }
    }
    return slots;
  };

  const filteredCountries = countries.filter((c) =>
    c.toLowerCase().includes(countrySearch.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-5xl rounded-xl shadow-2xl p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black">
          <X />
        </button>


{/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-1 text-gray-900">
          Schedule an Appointment
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Book an Appointment with our experts for an online demo.
        </p>

        

        {/* Stepper */}
        <div className="flex items-center justify-between mb-6 relative">
          {steps.map((s, idx) => (
            <div
              key={s.id}
              className="flex-1 flex flex-col items-center text-center relative"
            >
              {idx < steps.length - 1 && (
                <div
                  className={`absolute top-5 left-1/2 w-full h-[2px] ${
                    step > s.id ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  style={{ transform: "translateX(50%)" }}
                />
              )}
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full relative z-10 ${
                  step === s.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : step > s.id
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {s.icon}
              </div>
              <span
                className={`mt-2 text-sm font-medium ${
                  step >= s.id ? "text-blue-600" : "text-gray-500"
                }`}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
        {/* STEP 1 */}
        {step === 1 && (
          <form id="step-1" className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              ["fullName", "Name*"],
              ["email", "Email*"],
              ["CompanyName", "Company*"],
             
            ].map(([id, label]) => (
              <div key={id}>
                <label className="text-sm font-semibold">{label}</label>
                <input
                  id={id}
                  required
                  value={formData[id]}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            ))}


{[
              
              ["CompanyType", "Company Type"],
             
            ].map(([id, label]) => (
              <div key={id}>
                <label className="text-sm font-semibold">{label}</label>
                <input
                  id={id}
                  
                  value={formData[id]}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            ))}
            {/* COUNTRY DROPDOWN */}
            <div ref={countryRef}>
              <label className="text-sm font-semibold">Country*</label>
              <button
                type="button"
                className={`${inputClass} flex justify-between items-center`}
                onClick={() => setShowCountryDropdown(!showCountryDropdown)}
              >
                {formData.ddlcountry || "Select Country"}
                <ChevronDown size={16} />
              </button>

              {showCountryDropdown && (
                <div className="border mt-2 absolute w-[45%] rounded-md shadow bg-white max-h-56 overflow-y-auto p-2">
                  <input
                    placeholder="Search country..."
                    className="w-full border px-3 py-2 rounded mb-2"
                    value={countrySearch}
                    onChange={(e) => setCountrySearch(e.target.value)}
                  />
                  {filteredCountries.map((c) => (
                    <div
                      key={c}
                      onClick={() => {
                        setFormData({ ...formData, ddlcountry: c });
                        setShowCountryDropdown(false);
                        setCountrySearch("");
                      }}
                      className="px-3 py-2 cursor-pointer rounded hover:bg-blue-50"
                    >
                      {c}
                    </div>
                  ))}
                </div>
              )}
            </div>


{[
              ["txtwebsite", "Website"],
       
            ].map(([id, label]) => (
              
              <div key={id}>
                <label className="text-sm font-semibold">{label}</label>
                <input
                  id={id}
                  value={formData[id]}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            ))}


            {[
              ["txtphone", "Phone*"],
            ].map(([id, label]) => (
              
              <div key={id}>
                <label className="text-sm font-semibold">{label}</label>
                <input
  id={id}
  required
  type="tel"
  inputMode="numeric"
  pattern="[0-9]*"
  maxLength={15}
  value={formData[id]}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 15) {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  }}
  className={inputClass}
/>
              </div>
            ))}

            <div className="col-span-full text-right">
              <button
                type="button"
                onClick={handleNext}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded"
              >
                Next →
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <form  id="step-2"className="space-y-2">
            {/* Timezone + Date in one line */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-800" htmlFor="Timezone" required>
                  Timezone
                </label>
                <select
  id="Timezone"
  required
  value={formData.Timezone}
  onChange={(e) =>
    setFormData({ ...formData, Timezone: e.target.value })
  }
  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
>
  <option value="">Select Timezone</option>
  <option value="UTC">UTC</option>
  <option value="GMT">GMT</option>
  <option value="EST">EST</option>
  <option value="PST">PST</option>
  <option value="IST">IST</option>
</select>
              </div>

              {/* Date Picker Toggle */}
              <div className="relative">
                <label className="block text-sm font-semibold mb-2 text-gray-800"   id="AppointmentDate"  htmlFor="AppointmentDate"  required>
                  Select Date
                </label>
                <button
                  type="button"
                  onClick={() => setShowCalendar(!showCalendar)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 flex justify-between items-center"
                >
                  {selectedDate
                    ? selectedDate.toDateString()
                    : "Choose a date"}
                  <Calendar size={18} />
                </button>

                {showCalendar && (
                  <div className="absolute mt-2 bg-white border rounded-lg shadow-lg p-4 z-20">
                    {/* Month Navigation */}
                    <div className="flex justify-between items-center mb-4">
                      <button onClick={prevMonth} type="button">
                        <ChevronLeft />
                      </button>
                      <span className="font-semibold text-gray-800">
                        {currentMonth.toLocaleString("default", {
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      <button onClick={nextMonth} type="button">
                        <ChevronRight />
                      </button>
                    </div>
                    {/* Days of Week */}
                    <div className="grid grid-cols-7 text-sm font-medium text-gray-500 mb-2">
                      {daysOfWeek.map((day) => (
                        <div key={day} className="text-center">
                          {day}
                        </div>
                      ))}
                    </div>
                    {/* Dates */}
                    <div className="grid grid-cols-7 gap-2" id="AppointmentDate">
                      {generateDays().map((day, idx) => (
                        <div key={idx} className="text-center">
                          {day ? (
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedDate(day);
                                setShowCalendar(false);
                              }}
                              className={`w-10 h-10 rounded-full transition ${
                                selectedDate &&
                                day.toDateString() ===
                                  selectedDate.toDateString()
                                  ? "bg-blue-600 text-white"
                                  : "hover:bg-blue-100"
                              }`}
                            >
                              {day.getDate()}
                            </button>
                          ) : (
                            <span className="w-10 h-10 inline-block"></span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Time Slots */}
            <div>
  <label className="block text-sm font-semibold  text-gray-800" >
    Time Slots
  </label>

  {/* Tabs for AM/PM */}
  <div className="flex mb-4 border-b border-gray-300">
    {["AM", "PM"].map((tab) => (
      <button
        key={tab}
        type="button"
        onClick={() => setActiveTab(tab)}
        className={`flex-1 cursor-pointer px-4 py-2 text-sm font-medium transition ${
          activeTab === tab
            ? "border-b-2 border-blue-600 text-blue-600"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        {tab}
      </button>
    ))}
  </div>

  {/* Slots */}
  <div className="grid grid-cols-2 md:grid-cols-8 gap-2">
    {generateSlots(activeTab === "AM").map((time) => (
      <button
        key={time}
        type="button"
        onClick={() => setSelectedTime(time + " " + activeTab)}
        className={`border cursor-pointer rounded-lg px-4 py-2 transition ${
          selectedTime === time + " " + activeTab
            ? "bg-blue-600 text-white border-blue-600"
            : "border-gray-300 hover:bg-blue-100"
        }`}
      >
        {time}
      </button>
    ))}
  </div>
</div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-800" required>
                Your Message (optional)
              </label>
              <textarea
                rows="3"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your message..."
                
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handlePrev}
                
                className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100"
              >
                ← Previous
              </button>
              <button
  type="button"
  onClick={handleSubmit}
  disabled={loading}
  className={`px-6 py-2 rounded-lg transition ${
    loading
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-blue-600 hover:bg-blue-700 text-white"
  }`}
>
  {loading ? "Booking..." : "Next →"}
</button>
            </div>
          </form>
        )}

        {/* STEP 3 remains unchanged */}
        {step === 3 && (
          <div className="text-center py-10">
            <h3 className="text-green-600 text-xl font-bold">
              Appointment Scheduled 🎉
            </h3>
            <button
              onClick={() => router.push("/pricing")}
              className="mt-6 bg-blue-600 text-white px-6 py-2 rounded"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentForm;