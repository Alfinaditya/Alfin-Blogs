import React from 'react'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'

const Contact = () => {
  return (
    <Layout>
      <Helmet title='Contact' defer={false} />
      <div>Contact</div>
    </Layout>
  )
}

export default Contact
