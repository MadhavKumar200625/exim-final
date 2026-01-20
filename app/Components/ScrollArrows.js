"use client";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollArrows() {
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      setAtTop(scrollTop <= 10);
      setAtBottom(scrollTop + windowHeight >= docHeight - 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToBottom = () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

  return (
    <div className="fixed right-4 bottom-24 z-40 flex flex-col gap-3 md:right-6 md:bottom-24">
      {/* ⬆️ TOP */}
      {!atTop && (
        <ArrowButton className="cursor-pointer" onClick={scrollToTop} label="Scroll to top">
          <ChevronUp />
        </ArrowButton>
      )}

      {/* ⬇️ BOTTOM */}
      {!atBottom && (
        <ArrowButton className="cursor-pointer" onClick={scrollToBottom} label="Scroll to bottom">
          <ChevronDown />
        </ArrowButton>
      )}
    </div>
  );
}

/* ================================
   🧊 Premium Arrow Button
================================ */
function ArrowButton({ onClick, children, label }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="
      cursor-pointer
        group
        flex items-center justify-center
        w-11 h-11 md:w-12 md:h-12
        rounded-full
        bg-orange-400 backdrop-blur-xl
        border border-white/40
        shadow-[0_8px_30px_rgba(0,0,0,0.12)]
        transition-all duration-300
        hover:scale-110
        hover:shadow-[0_12px_40px_rgba(37,99,235,0.35)]
        hover:bg-blue-600
      "
    >
      <span
        className="
          text-black
          group-hover:text-white
          transition-colors duration-300
        "
      >
        {children}
      </span>
    </button>
  );
}