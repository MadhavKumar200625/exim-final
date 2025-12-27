"use client";

import dynamic from "next/dynamic";

const TestimonialsSection = dynamic(
  () => import("../Components/TestimonialsSection"),
  { ssr: false }
);

export default function OurClientTestimonialsClient() {
  return <TestimonialsSection />;
}