import styled, { css } from 'styled-components'
import { Menu } from '@styled-icons/heroicons-solid/Menu'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import '@fontsource/poppins/900.css'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin-top: 20px;
`
export const BurgerMenuContainer = styled.div`
  background-color: #e4e4e4;
  border-radius: 4px;
  padding: 0 4px;

  @media only screen and (min-width: 776px) {
    display: none;
  }
`
export const BurgerMenu = styled(Menu)`
  cursor: pointer;
  color: #2b3c96;
`
export const CloseButton = styled(CloseOutline)`
  cursor: pointer;
  color: white;
`
export const CloseContainer = styled.div`
  @media only screen and (min-width: 776px) {
    display: none;
  }
  @media only screen and (max-width: 776px) {
    position: absolute;
    z-index: 10px;
    right: 30px;
    top: 30px;
  }
`
