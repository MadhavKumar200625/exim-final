"use client";

import dynamic from "next/dynamic";

const ClientsSection = dynamic(
  () => import("../Components/ClientSection"),
  { ssr: false }
);

export default function HomeClientsClient() {
  return <ClientsSection />;
}