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
    /* justify-content: space-around; */
    display: none;
  }
`
export const BurgerMenu = styled(Menu)`
  color: #2b3c96;
`
export const ContainerNavLink = styled.div`
  @media only screen and (max-width: 776px) {
    background-color: #2b3c96;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    position: absolute;
    z-index: 5;
    ${props =>
      props.hiddenburgerMenu &&
      css`
        display: none;
      `}
  }
`
export const CloseButton = styled(CloseOutline)`
  color: white;
`
export const CloseContainer = styled.div`
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
export const ChildContainerNavLink = styled.div`
  display: flex;

  @media only screen and (max-width: 776px) {
    /* background-color: red; */
    margin-top: 100px;
    justify-content: space-between;
    flex-direction: column;
  }
`
