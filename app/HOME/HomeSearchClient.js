"use client";
import { useEffect, useState } from "react";
import InstantAssistanceModal from "@/app/Components/InstantAssistanceModal";

import dynamic from "next/dynamic";

const SearchComponent = dynamic(
  () => import("../Components/SearchComponent"),
  { ssr: false }
);

export default function HomeSearchClient() {

  const [show, setShow] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem("instant_assistance_shown");
    if (!shown) {
      setTimeout(() => {
        console.log("triggered")
        setShow(true);
        sessionStorage.setItem(
          "instant_assistance_shown",
          "true"
        );
      }, 2000);
    }
  }, []);
  return (
    <>
<InstantAssistanceModal
        open={show}
        onClose={() => setShow(false)}
      />
    
    <SearchComponent heading="Search Global Import Export Trade Data" />
    
    </>
    
  );

}