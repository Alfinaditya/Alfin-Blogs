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

  const Date = styled.p`
    font-weight: 500;
    margin: 20px 0;
    color: ${props => props.theme.date};
  `
  const Details = styled.div`
    padding-bottom: 50px;
    margin-top: 120px;
    margin-bottom: 30px;
    border-bottom: 1px solid #c4c4c4;
  `
  const ContainerSubCategory = styled.div`
    border: 1px solid #595959;
    border-radius: 2px;
    margin-right: 10px;
  `
  const SubCategory = styled.p`
    padding: 8px 20px;
    color: ${props => props.theme.subCategory};
  `

  const Content = styled.div`
    color: ${props => props.theme.content};
  `
  return (
    <Layout>
      <Details>
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
        <Date>
          Published {month} {date}, {years}
        </Date>
        <Content dangerouslySetInnerHTML={{ __html: blog.html }} />
        <Container subCategories>
          {blog.frontmatter.subCategories.map(subCategory => (
            <ContainerSubCategory key={uniqueId('category_')}>
              <SubCategory>{subCategory}</SubCategory>
            </ContainerSubCategory>
          ))}
        </Container>
      </Details>
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
