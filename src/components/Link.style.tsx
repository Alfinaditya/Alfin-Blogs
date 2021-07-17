import styled from 'styled-components'
import { Link } from 'gatsby'
import '@fontsource/poppins/700.css'

export const StyledLInk = styled(Link)`
  text-decoration: none;
`
export const BrandLink = styled(StyledLInk)`
  margin-left: 50px;
  font-size: 25px;
  font-family: 'Poppins';
  color: #2b3c96;
`
export const NavLink = styled(StyledLInk)`
  padding: 0 40px;
`

export const BackToHomepageLink = styled(Link)`
  padding-bottom: 100px;
`
