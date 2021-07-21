import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useLocation } from '@reach/router'
import { Helmet } from 'react-helmet'
import SEO from '../ts/seo_interface'

interface Props {
  title?: string
  description?: string
  image?: string
  url?: string
}

const Seo: React.FC<Props> = ({ title, description, image }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const { defaultTitle, defaultDescription, defaultImage, siteUrl } =
    site.siteMetadata

  const seo: SEO = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }
  return (
    <Helmet title={seo.title}>
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />
      {seo.url && <meta property='og:url' content={seo.url} />}
      {seo.description && (
        <meta property='og:description' content={seo.description} />
      )}
      {seo.image && <meta property='og:image' content={seo.image} />}
    </Helmet>
  )
}

export default Seo

const query = graphql`
  query seoData {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultImage: image
        siteUrl: url
      }
    }
  }
`
