import React, { useState } from "react";
import config from "../../Config/config"

import {
  Nav2,
  NavBtn2,
  NavbarContainer,
  NavblackLogo,
  MobileIcon,
  NavMenu,
  NavAccueil,
  Navbarmenu,
  NavBtnLink,

} from "./NavbarStyle";

type Props = {
  toggle: any;
};

const Navbar = ({ toggle }: Props) => {
const [scrollNav] = useState(false);

  // Fonction pour reload la page
  const handleLogout = () => {
    localStorage.setItem('user_auth', "false")
    localStorage.setItem('reload', "0");
  }

  // Affichage des champs sur la navbar
  return (
    <>
      <Nav2 scrollNav={scrollNav}>
        <NavblackLogo to={config.path.path_profil}>
          Wivital
        </NavblackLogo>

        <NavbarContainer>
          <MobileIcon onClick={toggle}>
          </MobileIcon>
          <NavMenu>
            <NavBtn2>
              <Navbarmenu to={config.path.path_patient}>Patient</Navbarmenu>
            </NavBtn2>

            <NavBtn2>
              <Navbarmenu to={config.path.path_myrdv}>RDV</Navbarmenu>
            </NavBtn2>
            <NavBtn2>
              <Navbarmenu to={config.path.path_suivi}>Ordonnance</Navbarmenu>
            </NavBtn2>
          </NavMenu>
        </NavbarContainer>

        <NavAccueil>
          <NavBtnLink onClick={handleLogout} to={config.path.path_home} >Déconnexion</NavBtnLink>
        </NavAccueil>
      </Nav2>
    </>
  );
};

export default Navbar;