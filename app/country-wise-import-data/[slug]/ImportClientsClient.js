"use client";

import dynamic from "next/dynamic";

const ClientsSection = dynamic(
  () => import("@/app/Components/ClientSection"),
  { ssr: false }
);

export default function ImportClientsClient() {
  return <ClientsSection />;
}