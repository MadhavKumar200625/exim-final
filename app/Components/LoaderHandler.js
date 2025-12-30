"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LoaderHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const loader = document.getElementById("top-loader");
    if (!loader) return;

    loader.style.opacity = "1";
    loader.style.width = "30%";

    const timer1 = setTimeout(() => (loader.style.width = "70%"), 100);
    const timer2 = setTimeout(() => {
      loader.style.width = "100%";
      loader.style.opacity = "0";
    }, 400);

    const timer3 = setTimeout(() => {
      loader.style.width = "0%";
    }, 700);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [pathname]);

  return null;
}