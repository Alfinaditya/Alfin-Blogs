import React, { useState, useEffect } from 'react'
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
  const [theme, setTheme] = useState<string>(undefined)
  const [switchToggler, setSwitchToggler] = useState<boolean>(false)
  useEffect(() => {
    getTheme()
    function getTheme() {
      const item =
        windowGlobal.localStorage.getItem('userTheme') === null
          ? 'light'
          : windowGlobal.localStorage.getItem('userTheme')
      if (item) {
        setTheme(item)
        item == 'dark' ? setSwitchToggler(true) : false
      }
    }
  }, [])
  return (
    <ThemeProvider theme={theme === 'light' ? themes.light : themes.dark}>
      <div>
        <GlobalStyle />
        <Navbar />
        <Content>{children}</Content>
        <SwitchTheme
          windowGlobal={windowGlobal}
          switchToggler={switchToggler}
          setSwitchToggler={setSwitchToggler}
          setTheme={setTheme}
        />
      </div>
    </ThemeProvider>
  )
}

export default Layout
