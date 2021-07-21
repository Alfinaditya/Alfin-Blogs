import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Title } from '../styles/Title.style'
import { BlogThumb } from '../ts/blog_interface'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import {
  Blog,
  Category,
  ContainerImage,
  Description,
} from '../styles/pages/Blogs.style'
import { BlogsAnimate } from '../styles/Container.style'
import { StyledLInk } from '../styles/Link.style'
import { Variants } from 'framer-motion'

const Blogs = () => {
  const [screenResolutions, setScreenResolutions] = useState(
    typeof window !== 'undefined' && window.innerWidth
  )

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
                gatsbyImageData
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
    <BlogsAnimate
      initial='initVariant'
      animate='animateVariant'
      exit='exit'
      variants={blogsContainerVariant}
    >
      {blogs.map((blog: BlogThumb) => (
        <Blog variants={blogVariant} key={blog.id}>
          <StyledLInk to={`/blog/${blog.frontmatter.slug}`}>
            <ContainerImage>
              <GatsbyImage
                image={getImage(
                  blog.frontmatter.mainImage.childImageSharp.gatsbyImageData
                )}
                alt={blog.frontmatter.title}
              />
            </ContainerImage>
            <Category>{blog.frontmatter.category}</Category>
            <Title thumbnail>{blog.frontmatter.title}</Title>
            <Description>
              {screenResolutions <= 425
                ? blog.frontmatter.description.length >= 420
                  ? `${blog.frontmatter.description.slice(0, 420)}...`
                  : blog.frontmatter.description
                : blog.frontmatter.description.length >= 470
                ? `${blog.frontmatter.description.slice(0, 470)}...`
                : blog.frontmatter.description}
            </Description>
          </StyledLInk>
        </Blog>
      ))}
    </BlogsAnimate>
  )
}

export default Blogs
