import React, { useState } from "react";
import Navbar from "../Components/Navbar/NavbarAccueil";
import Footer from "../Components/Footer/Footer";
import Prof from '../Components/Profil/index';

function Profil() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* Appel de la Navbar */}
        <Navbar toggle={toggle} />

        {/* Appel de notre page a afficher */}
        <Prof />
        
        {/* Appel de notre footer */}
        <Footer />
    </>
  );
}

export default Profil;