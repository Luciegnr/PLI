import React, { useState } from "react";
import Navbar from "../Components/Navbar/NavbarAccueil";
import Rdv from '../Components/Rdv/rdv';

function RdvPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    {/* Appel de la Navbar */}
        <Navbar toggle={toggle} />
       {/* Appel de notre page a afficher */}
        <Rdv />
    </>
  );
}

export default RdvPage;
