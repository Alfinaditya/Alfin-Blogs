import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Youtube } from '@styled-icons/bootstrap/Youtube'
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare'
import { InstagramAlt } from '@styled-icons/boxicons-logos/InstagramAlt'
import { Github } from '@styled-icons/bootstrap/Github'

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
