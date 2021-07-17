import React from 'react'
import Blogs from '../components/Blogs'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <Layout>
      <Helmet title='Alfin Aditya' defer={false} />
      <Blogs />
    </Layout>
  )
}
