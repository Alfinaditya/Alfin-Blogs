import React from 'react'
import Layout from '../components/Layout'
import { Variants } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/Seo'
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
      <Seo title={'Contact'} />
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
        <ContactForm
          name='contact'
          method='POST'
          netlify-honeypot='bot-field'
          data-netlify='true'
        >
          <input type='hidden' name='bot-field' />
          <input type='hidden' name='form-name' value='contact' />
          <PersonalDataForm>
            <Form>
              <Label>First Name</Label>
              <Input name='firstName' type='text' />
            </Form>
            <Form>
              <Label>Last Name</Label>
              <Input name='latsName' type='text' />
            </Form>
            <Form>
              <Label>Email</Label>
              <Input name='email' type='email' />
            </Form>
          </PersonalDataForm>
          <MessageForm>
            <Label textArea>Message</Label>
            <TextArea
              name='message'
              placeholder='Write your message...'
            ></TextArea>
            <ButtonSend type='submit'> Send Message</ButtonSend>
          </MessageForm>
        </ContactForm>
      </ContactContainerAnimate>
    </Layout>
  )
}

export default Contact
