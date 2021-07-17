import React from 'react'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'

const Projects = () => {
  return (
    <Layout>
      <Helmet title='My projects' defer={false} />
      <div>Projects</div>
    </Layout>
  )
}

export default Projects
