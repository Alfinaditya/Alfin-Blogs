import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import { BlogDet } from '../ts/blog_interface'
import { uniqueId } from 'lodash'
import { Title } from '../styles/Title.style'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Container, ContainerAnimate } from '../styles/Container.style'
import {
  PublishedDate,
  SubCategory,
  Content,
} from '../styles/pages/BlogDetails.style'

import { BackToHomepageLink } from '../styles/Link.style'

function convertDate(value: Date) {
  const arrMonth = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'Desember',
  ]
  const newDate = new Date(value)
  const years = newDate.getFullYear().toString()
  const month = arrMonth[newDate.getMonth()]
  const date = newDate.getDate().toString()
  return { years, month, date }
}

export default function BlogDetails({ data }) {
  const blog: BlogDet = data.markdownRemark
  const { years, month, date } = convertDate(blog.frontmatter.date)
  const detailsVariant = {
    initVariant: { scale: 0.9, opacity: 0 },
    animateVariant: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.4 } },
  }

  return (
    <Layout>
      <ContainerAnimate
        blogDetails={1}
        initial='initVariant'
        animate='animateVariant'
        exit='exit'
        variants={detailsVariant}
      >
        <Title details>{blog.frontmatter.title}</Title>
        <GatsbyImage
          image={getImage(
            blog.frontmatter.mainImage.childImageSharp.gatsbyImageData
          )}
          style={{ height: '497px' }}
          imgStyle={{
            height: '497px',
          }}
          alt={blog.frontmatter.title}
        />
        <PublishedDate>
          Published {month} {date}, {years}
        </PublishedDate>
        <Content dangerouslySetInnerHTML={{ __html: blog.html }} />
        <Container subCategories={1}>
          {blog.frontmatter.subCategories.map(subCategory => (
            <Container subCategory={1} key={uniqueId('category_')}>
              <SubCategory>{subCategory}</SubCategory>
            </Container>
          ))}
        </Container>
      </ContainerAnimate>
      <BackToHomepageLink to='/'>Back To Homepage</BackToHomepageLink>
    </Layout>
  )
}

export const query = graphql`
  query BlogDetails($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        date
        title
        subCategories
        mainImage {
          childImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR)
          }
        }
      }
      html
    }
  }
`
