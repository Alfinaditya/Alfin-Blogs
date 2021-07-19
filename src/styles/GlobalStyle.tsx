import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    font-family:"Roboto";
    background-color:${props => props.theme.pageBackground};
  }
  h1{
    color:${props => props.theme.title}
  }

  a{
    color:${props => props.theme.link}
  }
   `

export default GlobalStyle
