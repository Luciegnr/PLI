import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';


export const Nav = styled.nav<{ scrollNav: any }>`

background: ${({ scrollNav }) => (scrollNav ? '#101522' : '#000')}; 
  height: 80px;
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 958px) {
    transition: 0.8s all ease;
  }
`;

export const Nav2 = styled.nav<{ scrollNav: any }>`

// background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 958px) {
  transition: 0.8s all ease;
}
`;

export const NavbarContainer = styled.div`
  display: flex;
  /* justify-content: space-between;
  height: 80px;
  z-index: 1;*/
  width: 100%;
  padding: 0 24px; 
  max-width: 980px;
`;

export const NavLogo = styled(LinkR)`
  color: #27AE60;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: white;
  
`;

export const NavblackLogo = styled(LinkR)`
  color: black;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 958px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
 
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 958px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 24px;

  @media screen and (max-width: 958px) {
    display: none;
  }
`;

export const NavBtn2 = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavAccueil = styled.nav`
  display: flex;
  align-items: center;
  padding-top: 0%;
  padding-right: 0%;
  padding-bottom: 0%;

  @media screen and (max-width: 958px) {
    display: none;
  }
`;

export const NavSpace = styled.nav`
  display: flex;
  align-items: center;
  padding-top: 0%;
  padding-right: 0%;
  padding-bottom: 0%;
  padding-left: 63%;

  @media screen and (max-width: 958px) {
    display: none;
  }
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #01bf71;
    -webkit-box-shadow: 0px 0px 5px 3px #656565;
  -moz-box-shadow: 0px 0px 5px 3px #656565;
    color: #010606;
    
  }
`;


export const Navbarmenu = styled(LinkR)`
  border-radius: 50px;
  white-space: nowrap;
  padding: 10px 22px;
  color: black;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: grey;
    color: white;
  }
`;