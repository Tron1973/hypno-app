import React, { useState } from 'react'
import { NavbarBackground, NavbarContainer, LeftContainer, RightContainer, NavbarInnerContainer, MobileMenu, NavbarLinkContainer, NavbarLink, NavbarLinkMobile, Logo, MenuButton } from '../styles/Navbar.style'
import LogoImg from '../assets/HypnoLogo.png'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <NavbarBackground>
    <NavbarContainer mobileMenu={ mobileMenu } >
      <NavbarInnerContainer>

      <LeftContainer>
        <NavbarLinkContainer>
          <Logo src={ LogoImg }></Logo>
          <p>Claireified Hypnotherapy</p>
        </NavbarLinkContainer>
      </LeftContainer>

      <RightContainer>
        <NavbarLinkContainer>
        <NavbarLink to='/home'>Home</NavbarLink>
        <NavbarLink to='/about'>About</NavbarLink>
        <MenuButton onClick={() => {
          setMobileMenu((toggle) => !toggle);}}>
          { mobileMenu ? <>&#10005;</> : <>&#8801;</>}
        </MenuButton>
        </NavbarLinkContainer>
      </RightContainer>
      </NavbarInnerContainer>

      { mobileMenu && (
      <MobileMenu>
        <NavbarLinkMobile to='/'>Hypno App</NavbarLinkMobile>
        <NavbarLinkMobile to='/about'>About</NavbarLinkMobile>
        <NavbarLinkMobile to='/#'>Claireified Healing Arts Main Site</NavbarLinkMobile>
      </MobileMenu>
      )}
    </NavbarContainer>
    </NavbarBackground>
  );
};


export default Navbar