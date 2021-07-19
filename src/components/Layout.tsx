import React, { useState } from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import '@fontsource/roboto'
import themes from '../styles/Theme.style'
import SwitchTheme from './SwitchTheme'
import GlobalStyle from '../styles/GlobalStyle'

const Content = styled.div`
  width: 95%;
  margin: auto;
`
const Layout = ({ children }) => {
  const windowGlobal = typeof window !== 'undefined' && window
  const getTheme = windowGlobal.localStorage.getItem('userTheme')
  const [theme, setTheme] = useState<string>(getTheme || 'light')
  return (
    <ThemeProvider theme={theme === 'light' ? themes.light : themes.dark}>
      <div>
        <GlobalStyle />
        <Navbar />
        <Content>{children}</Content>
        <SwitchTheme
          windowGlobal={windowGlobal}
          theme={theme}
          setTheme={setTheme}
        />
      </div>
    </ThemeProvider>
  )
}

export default Layout
