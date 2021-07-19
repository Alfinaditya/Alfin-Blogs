import React from 'react'
import { useState } from 'react'
import {
  Checkbox,
  Label,
  ContainerSwitch,
  Switch,
} from '../styles/SwitchTheme.style'

interface Props {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}
const SwitchTheme: React.FC<Props> = ({ theme, setTheme }) => {
  const windowGlobal = typeof window !== 'undefined' && window
  const [switchToggler, setSwitchToggler] = useState<boolean>(
    theme == 'dark' ? true : false
  )
  function themeToggler(checkbox?: boolean) {
    // setTheme(theme === 'light' ? 'dark' : 'light')
    if (windowGlobal.localStorage.getItem('userTheme') === null) {
      windowGlobal.localStorage.setItem('userTheme', 'dark')
      const dark = windowGlobal.localStorage.getItem('userTheme')
      setTheme(dark)
    } else if (windowGlobal.localStorage.getItem('userTheme') == 'light') {
      windowGlobal.localStorage.setItem('userTheme', 'dark')
      const dark = windowGlobal.localStorage.getItem('userTheme')
      setTheme(dark)
    } else if (windowGlobal.localStorage.getItem('userTheme') == 'dark') {
      windowGlobal.localStorage.setItem('userTheme', 'light')
      const light = windowGlobal.localStorage.getItem('userTheme')
      setTheme(light)
    }
  }

  return (
    <ContainerSwitch>
      <Switch>
        <Checkbox
          type='checkbox'
          onChange={e => {
            setSwitchToggler(e.target.checked)
            themeToggler(e.target.checked)
          }}
          checked={switchToggler}
        />
        <Label htmlFor={Checkbox}></Label>
      </Switch>
    </ContainerSwitch>
  )
}

export default SwitchTheme
