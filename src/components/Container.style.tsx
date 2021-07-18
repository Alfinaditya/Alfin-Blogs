import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  ${props =>
    props.subCategories &&
    css`
      margin-top: 30px;
    `};
`