import styled from 'styled-components'
import { motion } from 'framer-motion'
import '@fontsource/roboto'

export const Blog = styled(motion.div)`
  width: 361px;
  height: 483px;
  margin-bottom: 41px;
  margin-right: 76px;
  padding-bottom: 14px;
  border-bottom: 1px solid #c4c4c4;
  @media only screen and (max-width: 916px) {
    margin: auto;
    margin-bottom: 50px;
  }
  @media only screen and (max-width: 425px) {
    padding: 10px;
  }
`
export const BlogsContainerAnimate = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
  @media only screen and (max-width: 840px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 425px) {
    margin-top: 60px;
  }
`

export const Category = styled.h4`
  color: ${props => props.theme.category};
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  margin-top: 14px;
  margin-bottom: 8px;
  font-weight: 500;
`
export const Description = styled.p`
  margin-top: 10px;
  line-height: 1.3;
  word-break: break-all;
  color: ${props => props.theme.description};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
`
export const ContainerImage = styled.div`
  width: 364px;
  height: 250px;
  @media only screen and (max-width: 366px) {
    width: 100%;
  }
`
