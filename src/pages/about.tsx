import React from 'react'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import '@fontsource/poppins/700.css'
import '@fontsource/roboto/400.css'
import { motion, Variants } from 'framer-motion'
import {
  LogoYoutube,
  LogoFacebook,
  LogoInstagram,
  LogoGithub,
} from 'react-ionicons'

const AboutContainerAnimate = styled(motion.div)`
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
const AboutText = styled.div`
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
const AboutLink = styled.div`
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
const AboutImageAnimate = styled(motion.div)`
  width: 513px;
  width: 392px;
  @media only screen and (max-width: 425px) {
    width: 100%;
  }
`
const Title = styled.h1`
  font-family: 'Poppins';
  font-weight: 700;
  color: #2b3c96;
  @media only screen and (max-width: 768px) {
    margin-top: 30px;
  }
`
const Description = styled.p`
  font-family: 'Roboto';
  margin-bottom: 10px;
  line-height: 160%;
  color: ${props => props.theme.content};
`

const About = () => {
  const aboutVariant: Variants = {
    initVariant: { opacity: 0, scale: 0.9 },
    animateVariant: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      scale: 0.9,
      opacity: 0,
    },
  }
  return (
    <Layout>
      <Helmet title='About me' defer={false} />
      <AboutContainerAnimate
        initial='initVariant'
        animate='animateVariant'
        exit='exit'
        variants={aboutVariant}
      >
        <AboutImageAnimate
          whileHover={{
            scale: 1.1,
            boxShadow:
              'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
            transition: { duration: 0.5 },
          }}
        >
          <StaticImage
            src='../images/about.jpeg'
            alt='About me'
            backgroundColor='transparent'
            layout='fullWidth'
          />
        </AboutImageAnimate>
        <AboutText>
          <Title>Alfin Aditya</Title>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
            officia unde magnam delectus voluptatibus nemo officiis similique
            molestiae consequuntur nisi odio, nulla saepe vero illum, quisquam
            deserunt quia laborum totam. Lorem ipsum dolor, sit amet
            consectetur. adipisicing elit. Rem natus incidunt labore accusamus.
            Veritatis sint maiores quam aliquid ipsam minima harum soluta quas
            suscipit. Error, ullam. Consectetur corrupti voluptas hic! molestiae
            consequuntur nisi odio, nulla saepe vero illum, quisquam deserunt
            quia laborum totam. Lorem ipsum dolor, sit amet consectetur.
          </Description>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
            officia unde magnam delectus voluptatibus nemo officiis similique
            molestiae consequuntur nisi odio, nulla saepe vero illum, quisquam
            deserunt quia laborum totam. Lorem ipsum dolor, sit amet
            consectetur. adipisicing elit. Rem natus incidunt labore accusamus.
            Veritatis sint maiores quam aliquid ipsam minima harum soluta quas
            suscipit. Error, ullam. Consectetur corrupti voluptas hic! molestiae
            consequuntur nisi odio, nulla saepe vero illum, quisquam deserunt
            quia laborum totam. Lorem ipsum dolor, sit amet consectetur.
          </Description>
          <AboutLink>
            <LogoYoutube
              color={props => props.theme.content}
              height='25px'
              width='25px'
              onClick={() =>
                window.open(
                  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                  '_blank'
                )
              }
              title='Youtube'
              style={{ cursor: 'pointer' }}
            />
            <LogoFacebook
              color={props => props.theme.content}
              height='25px'
              width='25px'
              onClick={() =>
                window.open('https://www.facebook.com/alfin.aditiaii', '_blank')
              }
              title='Facebook'
              style={{ cursor: 'pointer' }}
            />
            <LogoInstagram
              color={props => props.theme.content}
              height='25px'
              width='25px'
              onClick={() =>
                window.open(
                  'https://www.instagram.com/alfinadityaaa_/',
                  '_blank'
                )
              }
              title='Instagram'
              style={{ cursor: 'pointer' }}
            />
            <LogoGithub
              color={props => props.theme.content}
              height='25px'
              width='25px'
              onClick={() =>
                window.open('https://github.com/Alfinaditya', '_blank')
              }
              title='Github'
              style={{ cursor: 'pointer' }}
            />
          </AboutLink>
        </AboutText>
      </AboutContainerAnimate>
    </Layout>
  )
}

export default About
