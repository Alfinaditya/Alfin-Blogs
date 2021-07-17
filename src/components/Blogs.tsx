import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Title } from './Title.style'
import { BlogThumb } from '../ts/blog_interface'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import '@fontsource/roboto'
import { StyledLInk } from './Link.style'
import { AnimatePresence, motion, Variant, Variants } from 'framer-motion'

const Blog = styled(motion.div)`
  width: 361px;
  height: 483px;
  margin-bottom: 41px;
  margin-right: 76px;
  padding-bottom: 14px;
  border-bottom: 1px solid #c4c4c4;
`
const BlogsContainerAnimate = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
`

const Category = styled.h4`
  color: ${props => props.theme.category};
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  margin-top: 14px;
  margin-bottom: 8px;
  font-weight: 500;
`
const Description = styled.p`
  margin-top: 10px;
  line-height: 1.3;
  word-break: break-all;
  color: ${props => props.theme.description};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
`
const Blogs = () => {
  const data = useStaticQuery(graphql`
    query Blogs {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            title
            slug
            description
            category
            mainImage {
              childImageSharp {
                gatsbyImageData(width: 364, height: 250)
              }
            }
          }
        }
      }
    }
  `)

  const blogsContainerVariant: Variants = {
    initVariant: { opacity: 0 },
    animateVariant: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.4 },
    },
  }
  const blogVariant: Variants = {
    initVariant: { opacity: 0 },
    animateVariant: {
      opacity: 1,
    },
    exit: {
      scale: 0.9,
      opacity: 0,
    },
  }
  const blogs = data.allMarkdownRemark.nodes
  return (
    <BlogsContainerAnimate
      initial='initVariant'
      animate='animateVariant'
      exit='exit'
      variants={blogsContainerVariant}
    >
      {blogs.map((blog: BlogThumb) => (
        <Blog variants={blogVariant} key={blog.id}>
          <StyledLInk to={`/blog/${blog.frontmatter.slug}`}>
            <GatsbyImage
              image={getImage(
                blog.frontmatter.mainImage.childImageSharp.gatsbyImageData
              )}
              alt={blog.frontmatter.title}
            />
            <Category>{blog.frontmatter.category}</Category>
            <Title thumbnail>{blog.frontmatter.title}</Title>
            <Description>
              {blog.frontmatter.description.length >= 470
                ? `${blog.frontmatter.description.slice(0, 470)}...`
                : blog.frontmatter.description}
            </Description>
          </StyledLInk>
        </Blog>
      ))}
    </BlogsContainerAnimate>
  )
}

export default Blogs
