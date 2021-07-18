import React from 'react'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'
import styled, { css } from 'styled-components'
import { motion, Variants } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'
import '@fontsource/roboto/400.css'

const ContactContainerAnimate = styled(motion.div)`
  margin-top: 90px;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: 'Roboto';
`
const ContactForm = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background-color: purple; */
`
const ContactImageAnimate = styled(motion.div)`
  width: 513px;
  width: 392px;
  margin-right: 50px;
  @media only screen and (max-width: 1277px) {
    display: none;
  }
`
const MessageForm = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: brown */
`
const PersonalDataForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 80px;
  /* background-color: yellow; */
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 263px;
  margin-top: 20px;
`
const Label = styled.label`
  font-size: 12px;
  color: #8f8f8f;
  ${props =>
    props.textArea &&
    css`
      margin-bottom: 7px;
    `};
`
const Input = styled.input`
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
const TextArea = styled.textarea`
  outline: none;
  font-family: 'Roboto';
  padding: 10px;
  width: 349px;
  resize: none;
  height: 330px;
  background-color: #e4e4e4;
  border-radius: 5px;
  border: 1px solid #e4e4e4;
`

const ButtonSend = styled.button`
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
`

const Contact = () => {
  const containerVariant: Variants = {
    initVariant: { opacity: 0, scale: 0.9 },
    animateVariant: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      scale: 0.9,
      opacity: 0,
    },
  }
  return (
    <Layout>
      <Helmet title='Contact' defer={false} />
      <ContactContainerAnimate
        initial='initVariant'
        animate='animateVariant'
        exit='exit'
        variants={containerVariant}
      >
        <ContactImageAnimate>
          <StaticImage
            src='../images/about.jpeg'
            alt='About me'
            // backgroundColor='transparent'
            layout='fullWidth'
          />
        </ContactImageAnimate>
        <ContactForm>
          <PersonalDataForm>
            <Form>
              <Label>First Name</Label>
              <Input type='text' />
            </Form>
            <Form>
              <Label>Last Name</Label>
              <Input type='text' />
            </Form>
            <Form>
              <Label>Email</Label>
              <Input type='email' />
            </Form>
          </PersonalDataForm>
          <MessageForm>
            <Label textArea>Message</Label>
            <TextArea placeholder='Write your message...'></TextArea>
            <ButtonSend>Send Message</ButtonSend>
          </MessageForm>
        </ContactForm>
      </ContactContainerAnimate>
    </Layout>
  )
}

export default Contact
