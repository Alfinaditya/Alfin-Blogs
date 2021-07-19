import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  ${props =>
    props.subCategories &&
    css`
      flex-wrap: wrap;
      margin-top: 30px;
    `};
`
