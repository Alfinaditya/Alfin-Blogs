import React from 'react'
import styled from 'styled-components'
import { BrandLink, NavLink } from './Link.style'
import { Container } from './Container.style'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin-top: 20px;
`

const Navbar = () => {
  return (
    <Nav>
      <BrandLink to='/'>Alfin Aditya</BrandLink>
      <Container>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contacts</NavLink>
        <NavLink to='/projects'>Projects</NavLink>
      </Container>
    </Nav>
  )
}

export default Navbar
