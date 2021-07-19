import React from 'react'
import { BrandLink, NavLink } from '../styles/Link.style'
import { useLocation } from '@reach/router'
import { useState } from 'react'
import {
  BurgerMenu,
  BurgerMenuContainer,
  ChildContainerNavLink,
  CloseButton,
  ContainerNavLink,
  CloseContainer,
  Nav,
} from '../styles/Navbar.style'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [screenResolution, setScreenResolution] = useState(window.innerWidth)
  const location = useLocation()
  return (
    <Nav>
      <BrandLink to='/'>Alfin Aditya</BrandLink>
      {/* TODO::BUG Screen Resolution */}
      {(open || screenResolution > 776) && (
        <ContainerNavLink>
          <ChildContainerNavLink>
            {location.pathname === '/about' ? (
              <NavLink bold={1} to='/about'>
                About
              </NavLink>
            ) : (
              <NavLink to='/about'>About</NavLink>
            )}
            {location.pathname === '/contact' ? (
              <NavLink bold={1} to='/contact'>
                Contact
              </NavLink>
            ) : (
              <NavLink to='/contact'>Contact</NavLink>
            )}
            {location.pathname === '/projects' ? (
              <NavLink bold={1} to='/projects'>
                Projects
              </NavLink>
            ) : (
              <NavLink to='/projects'>Projects</NavLink>
            )}
            {/* it only show when the resolution is 776px */}
            <CloseContainer onClick={() => setOpen(false)}>
              <CloseButton title='Exit' size='30px' />
            </CloseContainer>
          </ChildContainerNavLink>
        </ContainerNavLink>
      )}
      <BurgerMenuContainer onClick={() => setOpen(true)}>
        <BurgerMenu size='30' title='Menu' />
      </BurgerMenuContainer>
    </Nav>
  )
}

export default Navbar
