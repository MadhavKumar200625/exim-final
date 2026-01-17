"use client";
import { X } from "lucide-react";
import { useState } from "react";

export default function UnlockDataForm({ isOpen, onClose , country }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
    requirement: "Import",
    country:country || ""
  });
const [loading, setLoading] = useState(false);
  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (loading) return; // ⛔ prevent double click
  setLoading(true);

  try {
    const res = await fetch("/api/unlock-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      throw new Error("Failed to submit");
    }

    onClose(); // ✅ button stays disabled till success
  } catch (err) {
    console.error(err);
    setLoading(false); // 🔄 allow retry on failure
  }
};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl p-6 relative">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 cursor-pointer right-4 text-gray-400 hover:text-black"
        >
          <X size={22} />
        </button>

        <h2 className="text-2xl font-semibold text-center mb-6">
          Unlock Full Data
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <Input label="Name" name="name" placeholder="Enter your full name" onChange={handleChange} />
            <Input label="Phone Number" name="phone" placeholder="Enter your phone / WhatsApp number" onChange={handleChange} />

            <Input label="Email ID" name="email" placeholder="Enter your email address" onChange={handleChange} />
            <Input label="Company Name" name="company" placeholder="Enter your company name" onChange={handleChange} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Briefly describe your enquiry"
                onChange={handleChange}
                className="w-full h-24 border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Data Requirements
              </label>
              <select
                name="requirement"
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option>Import</option>
                <option>Export</option>
                <option>Both</option>
                <option>API</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <button
  type="submit"
  disabled={loading}
  className={`px-8 py-3 rounded-xl shadow transition flex items-center gap-2
    ${
      loading
        ? "bg-blue-400 cursor-not-allowed"
        : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
    }
    text-white`}
>
  {loading ? "Submitting..." : "✈ Submit"}
</button>
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
        className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
  );
}