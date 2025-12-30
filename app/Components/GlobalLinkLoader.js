"use client";

import { useEffect } from "react";
import { startLoader } from "@/lib/topLoader";

export function GlobalLinkLoader() {
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest("a");

      if (!link) return;
      if (
        link.target === "_blank" ||
        link.hasAttribute("download") ||
        link.getAttribute("href")?.startsWith("#")
      )
        return;

      // INTERNAL navigation only
      if (link.href.startsWith(window.location.origin)) {
        startLoader();
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}