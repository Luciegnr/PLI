import React, { useState } from "react";
import Navbar from "../Components/Navbar/NavbarAccueil";
import Footer from "../Components/Footer/Footer";
import Patient from '../Components/Patient/index';

function PatientDoc() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    {/* Appel de la Navbar */}
    <Navbar toggle={toggle} />

      {/* Appel de notre page a afficher */}
      <Patient />

        {/* Appel de notre footer */}
        <Footer />
    </>
  );
}

export default PatientDoc;