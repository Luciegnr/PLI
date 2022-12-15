import React, { useState } from "react";
import Navbar from "../Components/Navbar/NavbarForm";
import Footer from "../Components/Footer/Footer";
import Inscription from '../Components/SignUp';

function SignupPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    {/* Appel de la Navbar */}
        <Navbar toggle={toggle} />

        {/* Appel de notre page a afficher */}
        <Inscription />
        
        {/* Appel de notre footer */}
        <Footer />
    </>
  );
}

export default SignupPage;
