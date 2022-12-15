import Ordonnance from '../Components/Consultation/index';
import Navbar from "../Components/Navbar/NavbarAccueil";
import React, { useState } from "react";
import Footer from "../Components/Footer/Footer";

function ConsultationPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    {/* Appel de la Navbar */}
    <Navbar toggle={toggle} />

     {/* Appel de notre page a afficher */}
      <Ordonnance />

      {/* Appel de notre footer */}
        <Footer />
    </>
  );
}

export default ConsultationPage;