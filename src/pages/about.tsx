import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import '@fontsource/poppins/700.css'
import '@fontsource/roboto/400.css'
import { Variants } from 'framer-motion'
import {
  AboutImageAnimate,
  AboutText,
  Description,
  Title,
  YoutubeLink,
  GithubLink,
  InstagramLInk,
  LinkedinLink,
} from '../styles/pages/About.style'
import { AboutAnimate, ContainerAboutLink } from '../styles/Container.style'
import Seo from '../components/Seo'

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
  const AboutImageVariant: Variants = {
    hover: {
      scale: 1.1,
      boxShadow:
        'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
      transition: { duration: 0.5 },
    },
  }

  return (
    <Layout>
      <Seo title={'About'} image={'about.jpeg'} />
      <AboutAnimate
        initial='initVariant'
        animate='animateVariant'
        exit='exit'
        variants={aboutVariant}
      >
        <AboutImageAnimate whileHover='hover' variants={AboutImageVariant}>
          <StaticImage
            src='../images/about.jpeg'
            alt='About me'
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
          <ContainerAboutLink>
            <YoutubeLink
              size='25px'
              title='Youtube'
              onClick={() =>
                window.open(
                  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                  '_blank'
                )
              }
            />
            <LinkedinLink
              size='25px'
              title='Linkedin'
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/alfin-aditya-617120184/',
                  '_blank'
                )
              }
            />

            <InstagramLInk
              size='25px'
              title='Instagram'
              onClick={() =>
                window.open(
                  'https://www.instagram.com/alfinadityaaa_/',
                  '_blank'
                )
              }
            />
            <GithubLink
              size='25px'
              title='Github'
              onClick={() =>
                window.open('https://github.com/Alfinaditya', '_blank')
              }
            />
          </ContainerAboutLink>
        </AboutText>
      </AboutAnimate>
    </Layout>
  )
}

export default About
