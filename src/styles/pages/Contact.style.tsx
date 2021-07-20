import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import '@fontsource/roboto/400.css'

export const ContactContainerAnimate = styled(motion.div)`
  margin-top: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: 'Roboto';
  @media only screen and (max-width: 1440px) {
    margin-bottom: 50px;
  }
`
export const ContactForm = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 776px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
`
export const ContactImageAnimate = styled(motion.div)`
  width: 513px;
  width: 392px;
  margin-right: 50px;
  @media only screen and (max-width: 1277px) {
    display: none;
  }
`
export const MessageForm = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 776px) {
    width: 95%;
    margin-top: 20px;
    align-items: center;
  }
`
export const PersonalDataForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 80px;
  @media only screen and (max-width: 776px) {
    width: 95%;
    align-items: center;
  }
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 263px;
  margin-top: 20px;
  @media only screen and (max-width: 776px) {
    width: 100%;
  }
`
export const Label = styled.label`
  font-size: 12px;
  color: #8f8f8f;
  ${props =>
    props.textArea &&
    css`
      text-align: left;
      margin-bottom: 7px;

      @media only screen and (max-width: 776px) {
        margin-right: auto;
      }
    `};
`

export const Input = styled.input`
  height: 20px;
  background-color: ${props => props.theme.form};
  color: ${props => props.theme.inputForm};
  outline: none;
  border: 0;
  border-bottom: 1px solid #c4c4c4;
  &:focus {
    transition: 500ms;
    border-bottom: 1px solid #2b3c96;
  }
`
export const TextArea = styled.textarea`
  outline: none;
  font-family: 'Roboto';
  padding: 10px;
  width: 349px;
  resize: none;
  height: 330px;
  background-color: #e4e4e4;
  border-radius: 5px;
  border: 1px solid #e4e4e4;
  @media only screen and (max-width: 776px) {
    width: 100%;
  }
`

export const ButtonSend = styled.button`
  margin-top: 40px;
  padding: 10px;
  width: 166px;
  color: #2b3c96;
  align-self: flex-end;
  border: 1px solid #2b3c96;
  background-color: ${props => props.theme.pageBackground};
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.pageBackground};
    background-color: #2b3c96;
    transition: 500ms;
  }
  @media only screen and (max-width: 776px) {
    width: 100%;
  }
`
