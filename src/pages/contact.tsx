import React from 'react'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'
import styled, { css } from 'styled-components'
import { motion, Variants } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'
import '@fontsource/roboto/400.css'

const ContactContainerAnimate = styled(motion.div)`
  margin-top: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: 'Roboto';
  /* background-color: red; */
`
const ContactForm = styled.div`
  width: 40%;
  display: flex;
  /* background-color: green; */
  justify-content: space-around;
`
const ContactImageAnimate = styled(motion.div)`
  width: 513px;
  width: 392px;
`
const MessageForm = styled.div``
const PersonalDataForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  background-color: #e4e4e4;
  border: 1px solid #e4e4e4;
`
const ContainerButtonSend = styled.div`
  position: relative;
`
const ButtonSend = styled.button`
  position: absolute;
  right: 10px;
  padding: 10px;
  color: #2b3c96;
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
            backgroundColor='transparent'
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
            <Form>
              <Label textArea>Message</Label>
              <TextArea
                cols={15}
                rows={10}
                placeholder='Write your message...'
              ></TextArea>
            </Form>
          </MessageForm>
        </ContactForm>
      </ContactContainerAnimate>
      <ContainerButtonSend>
        <ButtonSend>Send Message</ButtonSend>
      </ContainerButtonSend>
    </Layout>
  )
}

export default Contact
