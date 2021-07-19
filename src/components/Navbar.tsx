import React from 'react'
import styled from 'styled-components'
import { BrandLink, NavLink } from './Link.style'
import { CloseOutline } from 'react-ionicons'
import { useLocation } from '@reach/router'
import { Menu } from 'react-ionicons'
import '@fontsource/poppins/900.css'
import { useState } from 'react'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin-top: 20px;
`
const BurgerMenuContainer = styled.div`
  background-color: #e4e4e4;
  border-radius: 4px;
  padding: 0 4px;

  @media only screen and (min-width: 776px) {
    /* justify-content: space-around; */
    display: none;
  }
`
const ContainerNavLink = styled.div`
  @media only screen and (max-width: 776px) {
    background-color: #2b3c96;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    position: absolute;
    z-index: 5;
    /* display: none; */
  }
`
const CloseContainer = styled.div`
  @media only screen and (min-width: 776px) {
    /* justify-content: space-around; */
    display: none;
  }
  @media only screen and (max-width: 776px) {
    /* justify-content: space-around; */
    position: absolute;
    z-index: 10px;
    right: 30px;
    top: 30px;
  }
`
const ChildContainerNavLink = styled.div`
  display: flex;

  @media only screen and (max-width: 776px) {
    /* background-color: red; */
    margin-top: 100px;
    justify-content: space-between;
    flex-direction: column;
  }
`

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
              <CloseOutline
                color={'white'}
                title={'Exit'}
                height='30px'
                width='30px'
              />
            </CloseContainer>
          </ChildContainerNavLink>
        </ContainerNavLink>
      )}
      <BurgerMenuContainer onClick={() => setOpen(true)}>
        <Menu
          color={'#2B3C96'}
          title={'Burger MEnu'}
          height='30px'
          width='30px'
        />
      </BurgerMenuContainer>
    </Nav>
  )
}

export default Navbar
