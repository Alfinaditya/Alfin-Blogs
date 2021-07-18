import React from 'react'
import styled from 'styled-components'
import { BrandLink, NavLink } from './Link.style'
import { Container } from './Container.style'
import { useLocation } from '@reach/router'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin-top: 20px;
`

const Navbar = () => {
  const location = useLocation()
  console.log(location)
  return (
    <Nav>
      <BrandLink to='/'>Alfin Aditya</BrandLink>
      <Container>
        {location.pathname === '/about' ? (
          <NavLink bold to='/about'>
            About
          </NavLink>
        ) : (
          <NavLink to='/about'>About</NavLink>
        )}
        {location.pathname === '/contact' ? (
          <NavLink bold to='/contact'>
            Contact
          </NavLink>
        ) : (
          <NavLink to='/contact'>Contact</NavLink>
        )}
        {location.pathname === '/projects' ? (
          <NavLink bold to='/projects'>
            Projects
          </NavLink>
        ) : (
          <NavLink to='/projects'>Projects</NavLink>
        )}
      </Container>
    </Nav>
  )
}

export default Navbar
