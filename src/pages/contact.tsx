import React from 'react'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'
import { Variants } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'
import {
  ButtonSend,
  ContactContainerAnimate,
  ContactForm,
  ContactImageAnimate,
  Form,
  Input,
  Label,
  MessageForm,
  PersonalDataForm,
  TextArea,
} from '../styles/pages/Contact.style'

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
