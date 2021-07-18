import styled, { css } from 'styled-components'
import '@fontsource/roboto/900.css'

export const Title = styled.h1`
  //TODO:BUG
  font-family: 'Roboto';
  font-weight: 900;
  ${props =>
    props.thumbnail &&
    css`
      font-size: 25px;
      word-break: break-all;
    `};
  ${props =>
    props.details &&
    css`
      text-align: center;
      margin-bottom: 40px;
      font-size: 41px;
    `};
`
