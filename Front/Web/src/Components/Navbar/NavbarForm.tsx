import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import config from "../../Config/config" 
import {
  Nav,
  NavLogo,
  NavSpace,
  NavBtnLink,

} from "./NavbarStyle";

type Props = {
  toggle: any;
};

const Navbar = ({ toggle }: Props) => {
  const [scrollNav] = useState(false);

//  Scroll vers le haut de la page 
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  // Affichage des informations
  return (
    <>
        <Nav scrollNav={scrollNav}>
        <NavLogo onClick={toggleHome} to="/">
              Wivital
            </NavLogo>
          
          <NavSpace>
            <NavBtnLink to={config.path.path_signup}>Inscription</NavBtnLink> 
            <NavBtnLink to={config.path.path_signin}>Connexion</NavBtnLink>
            </NavSpace>
        </Nav>
    </>
  );
};

export default Navbar;
