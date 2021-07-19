import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Youtube } from '@styled-icons/bootstrap/Youtube'
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare'
import { InstagramAlt } from '@styled-icons/boxicons-logos/InstagramAlt'
import { Github } from '@styled-icons/bootstrap/Github'

export const AboutContainerAnimate = styled(motion.div)`
  margin-top: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1440px) {
    margin-bottom: 100px;
  }
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`
export const AboutText = styled.div`
  width: 40%;
  margin-left: 60px;
  @media only screen and (max-width: 1024px) {
    margin-top: 50px;
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    margin: auto;
    width: 90%;
  }
  @media only screen and (max-width: 425px) {
    width: 90%;
    margin: auto;
  }
`

export const AboutLink = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 22px;
  width: 30%;
  @media only screen and (max-width: 460px) {
    margin-top: 30px;
    width: 40%;
    /* background-color: red; */
  }
  @media only screen and (max-width: 425px) {
    margin-top: 50px;
    width: 90%;
    /* background-color: red; */
  }
`
export const AboutImageAnimate = styled(motion.div)`
  width: 513px;
  width: 392px;
  @media only screen and (max-width: 425px) {
    width: 100%;
  }
`
export const Title = styled.h1`
  font-family: 'Poppins';
  font-weight: 700;
  color: #2b3c96;
  @media only screen and (max-width: 768px) {
    margin-top: 30px;
  }
`

export const Description = styled.p`
  font-family: 'Roboto';
  margin-bottom: 10px;
  line-height: 160%;
  color: ${props => props.theme.content};
`

export const YoutubeLink = styled(Youtube)`
  cursor: pointer;
  color: ${props => props.theme.content};
`
export const LinkedinLink = styled(LinkedinSquare)`
  cursor: pointer;
  color: ${props => props.theme.content};
`
export const InstagramLInk = styled(InstagramAlt)`
  cursor: pointer;
  color: ${props => props.theme.content};
`

export const GithubLink = styled(Github)`
  cursor: pointer;
  color: ${props => props.theme.content};
`
