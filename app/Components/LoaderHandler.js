"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { startLoader, finishLoader } from "@/lib/topLoader";

export default function LoaderHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // Finish loader AFTER route change completes
    finishLoader();
  }, [pathname]);

  useEffect(() => {
    // Start loader on full page reload
    const handleBeforeUnload = () => startLoader();
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return null;
}