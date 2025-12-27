"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  X,
  ChevronLeft,
  ChevronRight,
  User,
  Calendar,
  CheckCircle,
} from "lucide-react";

const AppointmentForm = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [activeTab, setActiveTab] = useState("AM");
  const [selectedTime, setSelectedTime] = useState(null);

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
    if (!selectedDate || !selectedTime || !formData.Timezone) {
      alert("Please select timezone, date and time.");
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

  const steps = [
    { id: 1, label: "Personal Info", icon: <User size={18} /> },
    { id: 2, label: "Booking", icon: <Calendar size={18} /> },
    { id: 3, label: "Finish", icon: <CheckCircle size={18} /> },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-5xl rounded-xl shadow-2xl p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4">
          <X />
        </button>

        {/* Stepper */}
        <div className="flex justify-between mb-8">
          {steps.map((s) => (
            <div
              key={s.id}
              className={`text-sm ${step >= s.id ? "text-blue-600" : "text-gray-400"}`}
            >
              {s.label}
            </div>
          ))}
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <form id="step-1" className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              ["fullName", "Name"],
              ["email", "Email"],
              ["CompanyName", "Company"],
              ["CompanyType", "Company Type"],
              ["Designation", "Designation"],
              ["ddlcountry", "Country"],
              ["txtwebsite", "Website"],
              ["txtphone", "Phone"],
            ].map(([id, label]) => (
              <div key={id}>
                <label className="text-sm font-semibold">{label}</label>
                <input
                  id={id}
                  required
                  value={formData[id]}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
            ))}

            <div className="col-span-full text-right">
              <button
                type="button"
                onClick={handleNext}
                className="bg-blue-600 text-white px-6 py-2 rounded"
              >
                Next →
              </button>
            </div>
          </form>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div id="step-2" className="space-y-4">
            <select
              required
              className="w-full border px-3 py-2 rounded"
              value={formData.Timezone}
              onChange={(e) =>
                setFormData({ ...formData, Timezone: e.target.value })
              }
            >
              <option value="">Select Timezone</option>
              <option>UTC</option>
              <option>GMT</option>
              <option>IST</option>
            </select>

            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className="border px-4 py-2 rounded w-full"
            >
              {selectedDate ? selectedDate.toDateString() : "Select Date"}
            </button>

            {showCalendar && (
              <div className="grid grid-cols-7 gap-2 mt-2">
                {generateDays().map((d, i) =>
                  d ? (
                    <button
                      key={i}
                      onClick={() => {
                        setSelectedDate(d);
                        setShowCalendar(false);
                      }}
                      className="border rounded p-2"
                    >
                      {d.getDate()}
                    </button>
                  ) : (
                    <span key={i} />
                  )
                )}
              </div>
            )}

            <div className="grid grid-cols-4 gap-2">
              {generateSlots(activeTab === "AM").map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTime(`${t} ${activeTab}`)}
                  className={`border p-2 rounded ${
                    selectedTime === `${t} ${activeTab}`
                      ? "bg-blue-600 text-white"
                      : ""
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <textarea
              id="Message"
              placeholder="Message"
              className="w-full border p-3 rounded"
              value={formData.Message}
              onChange={handleChange}
            />

            <div className="flex justify-between">
              <button onClick={handlePrev}>← Back</button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-blue-600 text-white px-6 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
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