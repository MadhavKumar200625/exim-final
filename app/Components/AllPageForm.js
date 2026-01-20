"use client";
import { useEffect, useState } from "react";
import InstantAssistanceModal from "@/app/Components/InstantAssistanceModal";




export default function AllPageForm() {

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
      }, 10000);
    }
  }, []);
  return (
    <>
<InstantAssistanceModal
        open={show}
        onClose={() => setShow(false)}
      />
    
    
    </>
    
  );

}