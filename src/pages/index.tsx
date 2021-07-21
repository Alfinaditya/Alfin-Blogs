import React from 'react'
import Blogs from '../components/Blogs'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

export default function Home() {
  return (
    <Layout>
      <Seo />
      <Blogs />
    </Layout>
  )
}
