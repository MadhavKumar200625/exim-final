"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function NoDataPopup() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div
      role="alert"
      aria-live="assertive"
      className="fixed right-4 top-24 z-[60] flex max-w-[calc(100vw-2rem)] items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-900 shadow-xl sm:right-6 sm:max-w-sm"
    >
      <p className="font-semibold">Data Not Found</p>
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        aria-label="Dismiss notification"
        className="ml-auto rounded-md p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
      >
        <X aria-hidden="true" size={18} />
      </button>
    </div>
  );
}
