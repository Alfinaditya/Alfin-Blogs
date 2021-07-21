import { motion } from 'framer-motion'
import styled from 'styled-components'
import '@fontsource/roboto'

export const PublishedDate = styled.p`
  font-weight: 500;
  margin: 20px 0;
  color: ${props => props.theme.date};
`
export const DetailsAnimate = styled(motion.div)`
  padding-bottom: 50px;
  margin-top: 120px;
  margin-bottom: 30px;
  border-bottom: 1px solid #c4c4c4;
  @media only screen and (max-width: 445px) {
    margin-top: 80px;
  }
`
export const SubCategory = styled.p`
  padding: 8px 20px;
  color: ${props => props.theme.subCategory};
`
export const Content = styled.div`
  color: ${props => props.theme.content};
`
