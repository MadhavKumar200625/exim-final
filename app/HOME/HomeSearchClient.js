"use client";

import dynamic from "next/dynamic";

const SearchComponent = dynamic(
  () => import("../Components/SearchComponent"),
  { ssr: false }
);

export default function HomeSearchClient() {
  return (
    <SearchComponent heading="Search Global Import Export Trade Data" />
  );
}