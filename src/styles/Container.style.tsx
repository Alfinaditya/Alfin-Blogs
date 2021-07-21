import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  display: flex;
  ${props =>
    props.subCategories &&
    css`
      flex-wrap: wrap;
      margin-top: 30px;
    `};
  ${props =>
    props.subCategory &&
    css`
      display: block;
      border: 1px solid #595959;
      border-radius: 2px;
      margin-right: 10px;
      @media only screen and (max-width: 430px) {
        margin-bottom: 20px;
      }
    `};
  ${props =>
    props.aboutLink &&
    css`
      justify-content: space-between;
      margin-top: 22px;
      width: 30%;
      @media only screen and (max-width: 460px) {
        margin-top: 30px;
        width: 40%;
      }
      @media only screen and (max-width: 425px) {
        margin-top: 50px;
        width: 90%;
      }
    `};

  ${props =>
    props.personalDataForm &&
    css`
      flex-direction: column;
      justify-content: center;
      margin: 0 80px;
      @media only screen and (max-width: 776px) {
        width: 95%;
        align-items: center;
      }
    `};
`
export const ContainerAnimate = styled(motion.div)`
  display: flex;
  ${props =>
    props.about &&
    css`
      margin-top: 90px;
      align-items: center;
      justify-content: center;
      @media only screen and (max-width: 1440px) {
        margin-bottom: 100px;
      }
      @media only screen and (max-width: 1024px) {
        flex-direction: column;
      }
    `};

  ${props =>
    props.contact &&
    css`
      justify-content: center;
      align-items: center;
      margin-top: 90px;
      flex-wrap: wrap;
      font-family: 'Roboto';
      @media only screen and (max-width: 1440px) {
        margin-bottom: 50px;
      }
    `};

  ${props =>
    props.blogDetails &&
    css`
      display: block;
      padding-bottom: 50px;
      margin-top: 120px;
      margin-bottom: 30px;
      border-bottom: 1px solid #c4c4c4;
      @media only screen and (max-width: 445px) {
        margin-top: 80px;
      }
    `};
`
