import React from 'react'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const AboutContainer = styled.div`
  background-color: red;
`
const About = () => {
  return (
    <Layout>
      <Helmet title='About me' defer={false} />
      <AboutContainer>
        <StaticImage
          src='../images/about.jpeg'
          alt='About me'
          placeholder='blurred'
          layout='fixed'
        />
      </AboutContainer>
    </Layout>
  )
}

export default About
