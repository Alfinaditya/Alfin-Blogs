import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/900.css'

export const StyledLInk = styled(Link)`
  text-decoration: none;
  font-weight: 400;
`
export const BrandLink = styled(StyledLInk)`
  margin-left: 50px;
  font-size: 25px;
  font-weight: 700;
  font-family: 'Poppins';
  color: #2b3c96;
`
export const NavLink = styled(StyledLInk)`
  padding: 0 40px;
  ${props =>
    props.bold &&
    css`
      font-weight: 900;
      color: #2b3c96;
    `};
`

export const BackToHomepageLink = styled(Link)`
  padding-bottom: 100px;
`
