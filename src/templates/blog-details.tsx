import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import { BlogDet } from '../ts/blog_interface'
import { uniqueId } from 'lodash'
import { Title } from '../components/Title.style'
import { Container } from '../components/Container.style'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import '@fontsource/roboto'
import { BackToHomepageLink } from '../components/Link.style'
import { motion } from 'framer-motion'

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

const PublishedDate = styled.p`
  font-weight: 500;
  margin: 20px 0;
  color: ${props => props.theme.date};
`
const DetailsAnimate = styled(motion.div)`
  padding-bottom: 50px;
  margin-top: 120px;
  margin-bottom: 30px;
  border-bottom: 1px solid #c4c4c4;
  @media only screen and (max-width: 445px) {
    margin-top: 80px;
  }
`
const ContainerSubCategory = styled.div`
  border: 1px solid #595959;
  border-radius: 2px;
  margin-right: 10px;
  @media only screen and (max-width: 430px) {
    margin-bottom: 20px;
  }
`
const SubCategory = styled.p`
  padding: 8px 20px;
  color: ${props => props.theme.subCategory};
`

const Content = styled.div`
  color: ${props => props.theme.content};
`

export default function BlogDetails({ data }) {
  const blog: BlogDet = data.markdownRemark
  const { years, month, date } = convertDate(blog.frontmatter.date)
  const detailsVariant = {
    initVariant: { scale: 0.9, opacity: 0 },
    animateVariant: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.4 } },
  }

  // TODO:REFACTOR this unholy code
  return (
    <Layout>
      <DetailsAnimate
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
        <Container subCategories>
          {blog.frontmatter.subCategories.map(subCategory => (
            <ContainerSubCategory key={uniqueId('category_')}>
              <SubCategory>{subCategory}</SubCategory>
            </ContainerSubCategory>
          ))}
        </Container>
      </DetailsAnimate>
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
