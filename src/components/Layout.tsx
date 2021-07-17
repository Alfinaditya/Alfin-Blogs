import React, { useState } from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import '@fontsource/roboto'
import themes from './Theme.style'
import SwitchTheme from './SwitchTheme'
import { motion, AnimatePresence } from 'framer-motion'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    font-family:"Roboto";
    /* transition:background-color 500ms; */
    background-color:${props => props.theme.pageBackground};
  }
  h1{
    color:${props => props.theme.title}
  }

  a{
    color:${props => props.theme.link}
  }
   `
const Content = styled.div`
  width: 95%;
  margin: auto;
`

const Layout = ({ children }) => {
  const getTheme = localStorage.getItem('userTheme')
  const [theme, setTheme] = useState<string>(getTheme || 'light')

  return (
    <ThemeProvider theme={theme === 'light' ? themes.light : themes.dark}>
      <div>
        <GlobalStyle />
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Content>{children}</Content>
        </AnimatePresence>

        <SwitchTheme theme={theme} setTheme={setTheme} />
      </div>
    </ThemeProvider>
  )
}

export default Layout
