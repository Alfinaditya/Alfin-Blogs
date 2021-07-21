import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  display: flex;
`
export const ContainerNavLink = styled(Container)`
  @media only screen and (max-width: 776px) {
    display: ${({ open }) => (open ? 'block' : 'none')};
    background-color: #2b3c96;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    position: absolute;
    z-index: 5;
  }
`
export const ChildContainerNavLink = styled(Container)`
  @media only screen and (max-width: 776px) {
    margin-top: 100px;
    justify-content: space-between;
    flex-direction: column;
  }
`
export const ContainerSubCategories = styled(Container)`
  flex-wrap: wrap;
  margin-top: 30px;
`
export const ContainerSubCategory = styled(Container)`
  display: block;
  border: 1px solid #595959;
  border-radius: 2px;
  margin-right: 10px;
  @media only screen and (max-width: 430px) {
    margin-bottom: 20px;
  }
`
export const ContainerAboutLink = styled(Container)`
  justify-content: space-between;
  margin-top: 22px;
  width: 30%;
  @media only screen and (max-width: 460px) {
    margin-top: 30px;
    width: 40%;
  }
  @media only screen and (max-width: 425px) {
    margin-top: 50px;
    width: 90%;
  }
`
export const ContainerPersonalData = styled(Container)`
  flex-direction: column;
  justify-content: center;
  margin: 0 80px;
  @media only screen and (max-width: 776px) {
    width: 95%;
    align-items: center;
  }
`
export const ContainerMessage = styled(Container)`
  flex-direction: column;
  @media only screen and (max-width: 776px) {
    width: 95%;
    margin-top: 20px;
    align-items: center;
  }
`

// Container Animate
export const ContainerAnimate = styled(motion.div)`
  display: flex;
`
export const AboutAnimate = styled(ContainerAnimate)`
  margin-top: 90px;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1440px) {
    margin-bottom: 100px;
  }
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`
export const ContactAnimate = styled(ContainerAnimate)`
  justify-content: center;
  align-items: center;
  margin-top: 90px;
  flex-wrap: wrap;
  font-family: 'Roboto';
  @media only screen and (max-width: 1440px) {
    margin-bottom: 50px;
  }
`
export const BlogsAnimate = styled(ContainerAnimate)`
  flex-wrap: wrap;
  margin-top: 100px;
  @media only screen and (max-width: 840px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 425px) {
    margin-top: 60px;
  }
`
export const BlogDetailsAnimate = styled(ContainerAnimate)`
  display: block;
  padding-bottom: 50px;
  margin-top: 120px;
  margin-bottom: 30px;
  border-bottom: 1px solid #c4c4c4;
  @media only screen and (max-width: 445px) {
    margin-top: 80px;
  }
`
