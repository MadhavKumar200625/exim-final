"use client";
import { X } from "lucide-react";
import { useState } from "react";

export default function ScheduleADemo({ isOpen, onClose, country }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
    requirement: "Import",
    country: country || "",
  });

  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    try {
      const res = await fetch("/api/unlock-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");
      onClose();
    } catch {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="bg-slate-50 w-full max-w-3xl rounded-2xl shadow-2xl p-8 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-black"
        >
          <X size={22} />
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center text-black mb-2">
          Schedule a Live Demo
        </h2>
        <p className="text-center text-gray-600 mb-6">
          See how detailed {country} import-export trade data can help you find verified
          buyers & suppliers.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Full Name" name="name" placeholder="Enter your full name" onChange={handleChange} />
            <Input label="Business Email" name="email" placeholder="Enter your work email address" onChange={handleChange} />
            <Input label="Phone / WhatsApp Number" name="phone" placeholder="Enter your phone or WhatsApp number" onChange={handleChange} />
            <Input label="Company Name" name="company" placeholder="Enter your company name" onChange={handleChange} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Data Requirement
              </label>
              <select
                name="requirement"
                onChange={handleChange}
                className="w-full bg-white border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option>Import</option>
                <option>Export</option>
                <option>Both</option>
                <option>API</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                What would you like to see in the demo?
              </label>
              <textarea
                name="message"
                placeholder="Example: shipments, competitor analysis, supplier discovery, API usage…"
                onChange={handleChange}
                className="w-full h-24 bg-white border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={loading}
              className={`px-10 py-3 rounded-xl font-semibold shadow-lg transition flex items-center gap-2
                ${
                  loading
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }
                text-white`}
            >
              {loading ? "Scheduling..." : "✈ Schedule Free Demo"}
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 pt-6 text-sm text-gray-600">
            <span>✅ No spam</span>
            <span>✅ 100% verified trade data</span>
            <span>✅ Demo by data experts</span>
          </div>
        </form>
      </div>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        {...props}
        className="w-full bg-white border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
  );
}