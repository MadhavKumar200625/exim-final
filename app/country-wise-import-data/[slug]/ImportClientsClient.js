"use client";

import dynamic from "next/dynamic";

const ClientsSection = dynamic(
  () => import("@/app/Components/ClientSection"),
  { ssr: false }
);

export default function ImportClientsClient({section7}) {
  return <ClientsSection section7={section7}/>;
}