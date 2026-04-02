"use client";

import { useEffect, useRef } from "react";

export default function GTTChatbotWidget() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      const iframe = iframeRef.current;
      if (!iframe) return;

      if (e.data && e.data.type === "gtt-widget-resize") {
        if (e.data.open) {
          iframe.style.width = "420px";
          iframe.style.height = "620px";
        } else {
          iframe.style.width = "150px";
          iframe.style.height = "150px";
        }
      }
    };

    window.addEventListener("message", handler);

    return () => {
      window.removeEventListener("message", handler);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src="https://gtt-smartbot-frontend.vercel.app/widget?key=orkw0q1o"
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        width: "150px",
        height: "150px",
        border: "none",
        background: "transparent",
        zIndex: 2147483647,
        overflow: "hidden",
        boxShadow: "0 ",
        transition: "width 0.3s ease, height 0.3s ease",
      }}
      allow="clipboard-write"
    />
  );
}