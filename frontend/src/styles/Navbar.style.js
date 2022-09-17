import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarBackground = styled.div`
  background-color: #46C3D3;
  width: 100vw;
`;

export const NavbarContainer = styled.nav`
   width: 100%;
   height: ${(props) => (props.MobileMenu ? "100vh" : "120px")};
   background-color: #46C3D3;
   display: flex;
   flex-direction: column;
   @media (min-width: 720px) {
    height: 120px;
   } 
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  max-width: 1400px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 70%;
  justify-content: flex-start;
  padding-left: 10%;
`;

export const RightContainer = styled.div`
  display: flex;
  flex: 30%;
  justify-content: flex-end;
  padding-right: 50px;
`;



export const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 1.5rem;
  @media (max-width: 475px) {
    font-size: 80%;
  }
  @media (max-width: 300px) {
    p {
    display: none;
  }
}
`;

export const NavbarLink = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  font-family: futura, sans-serif;
  text-decoration: none;
  cursor: pointer;
  margin: 10px;
  @media (max-width: 720px) {
    display: none;
  }
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 100px;
  height: auto;
  @media (max-width: 475px) {
    max-width: 40%;
  }
  
`;

export const MenuButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: #fff;
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 720px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FFDE00;
  padding: 20px;
  min-height: 100vh;
  z-index: 1000;
  @media (min-width: 720px) {
    display: none;
  }
`;

export const NavbarLinkMobile = styled(Link)`
  color: #595959;
  font-size: 1.2rem;
  font-family: futura, sans-serif;
  text-decoration: none;
  cursor: pointer;
  margin: 10px;
`;

