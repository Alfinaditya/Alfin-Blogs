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
  windowGlobal: Window & typeof globalThis
}
const SwitchTheme: React.FC<Props> = ({ windowGlobal, theme, setTheme }) => {
  const [switchToggler, setSwitchToggler] = useState<any>(
    theme == 'dark' ? true : false
  )

  function themeToggler() {
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
            themeToggler()
          }}
          checked={switchToggler}
        />
        <Label htmlFor={Checkbox}></Label>
      </Switch>
    </ContainerSwitch>
  )
}

export default SwitchTheme
