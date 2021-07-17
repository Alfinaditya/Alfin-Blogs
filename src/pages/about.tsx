import React from 'react'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'

const About = () => {
  return (
    <Layout>
      <Helmet title='About me' defer={false} />
      <div>About</div>
    </Layout>
  )
}

export default About
