import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import config from "../../Config/config" 
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavBtn,
  NavLinks,
  NavBtnLink,

} from "./NavbarStyle";

type Props = {
  toggle: any;
};

const Navbar = ({ toggle }: Props) => {
  const [scrollNav, setScrollNav] = useState(false);

// Scroll Navbar
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

// Affichage des champs sur la navbar
  return (
    <>
        <Nav scrollNav={scrollNav}>
        <NavLogo onClick={toggleHome} to="/">
              Wivital
            </NavLogo>
          <NavbarContainer>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  onClick={toggleHome} to="/"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  Accueil
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="section2"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  FAQ
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="section3"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  A Propos
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="section4"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  Avis
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
          <NavBtn>
            <NavBtnLink to={config.path.path_signup}>Inscription</NavBtnLink> 
            <NavBtnLink to={config.path.path_signin}>Connexion</NavBtnLink>
            </NavBtn>
        </Nav>
    </>
  );
};

export default Navbar;
