import React from 'react'
import { useState } from 'react'
import styled, { css } from 'styled-components'

interface Props {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

const Switch = styled.div`
  position: relative;
  margin: 20px;
  display: inline-block;
  width: 80px;
  height: 30px;
  border-radius: 20px;
`
const ContainerSwitch = styled.div`
  position: fixed;
  bottom: 50%;
  right: 0;
`
// prismjs code higlightigng
const Label = styled.label`
  border-radius: 20px;
  background-color: #bee5f7;
  width: 100%;
  height: 100%;
  display: block;
  border: 2px solid #84c2d8;
  &:before {
    position: absolute;
    color: white;
    text-align: center;
    font-size: 17px;
    left: 5px;
    top: 2px;
    border-radius: 50%;
    background-color: rgb(243, 243, 85);
    content: '🌞';
    color: rgb(148, 148, 9);
    line-height: 25px;
    width: 25px;
    height: 25px;
    display: block;
  }
`
const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  width: 90px;
  height: 40px;
  cursor: pointer;
  &:checked + ${Label}::before {
    content: '🌛';
    line-height: 25px;
    font-size: 14px;
    background-color: #fffdf1;
    color: white;
    left: 50px;
  }
  &:checked + ${Label} {
    border: 2px solid #202020;
    background-color: #484848;
  }
`
const SwitchTheme: React.FC<Props> = ({ theme, setTheme }) => {
  const [switchToggler, setSwitchToggler] = useState<boolean>(
    theme == 'dark' ? true : false
  )
  function themeToggler(checkbox?: boolean) {
    // setTheme(theme === 'light' ? 'dark' : 'light')
    if (localStorage.getItem('userTheme') === null) {
      localStorage.setItem('userTheme', 'dark')
      const dark = localStorage.getItem('userTheme')
      setTheme(dark)
    } else if (localStorage.getItem('userTheme') == 'light') {
      localStorage.setItem('userTheme', 'dark')
      const dark = localStorage.getItem('userTheme')
      setTheme(dark)
    } else if (localStorage.getItem('userTheme') == 'dark') {
      localStorage.setItem('userTheme', 'light')
      const light = localStorage.getItem('userTheme')
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
