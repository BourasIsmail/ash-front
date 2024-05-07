"use client";
import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { AssocDemPrem } from "../components/AssocDemPrem";
import { FormDemande } from "../components/FormDemande";

export default function Home() {
  const [checked, setchecked] = useState<any>();

  return (
    <>
      <Navbar />

      <AssocDemPrem />
    </>
  );
}
