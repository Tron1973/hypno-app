import React, { useState } from 'react'
import { NavbarBackground, NavbarContainer, LeftContainer, RightContainer, NavbarInnerContainer, MobileMenu, NavbarLinkContainer, NavbarLink, NavbarLinkMobile, Logo, MenuButton } from '../styles/Navbar.style'
import LogoImg from '../assets/HypnoLogo.png'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const handleClick = () => {
    logout()
  }

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
        { user && (
          <div>
            <span className='email'>{user.email}</span>
            <button onClick={handleClick}>Log Out</button>
          </div>
        )}
        { !user && (
          <>
          <NavbarLink to='/login'>Login</NavbarLink>
          <NavbarLink to='/signup'>Signup</NavbarLink>
          <MenuButton onClick={() => {
            setMobileMenu((toggle) => !toggle);}}>
            { mobileMenu ? <>&#10005;</> : <>&#8801;</>}
          </MenuButton>
          </>
        )}
        </NavbarLinkContainer>
      </RightContainer>
      </NavbarInnerContainer>

      { mobileMenu && (
      <MobileMenu>
        <NavbarLinkMobile to='/'>Hypno App</NavbarLinkMobile>
        <NavbarLinkMobile to='/login'>Login</NavbarLinkMobile>
        <NavbarLinkMobile to='/signup'>Signup</NavbarLinkMobile>
      </MobileMenu>
      )}
    </NavbarContainer>
    </NavbarBackground>
  );
};


export default Navbar