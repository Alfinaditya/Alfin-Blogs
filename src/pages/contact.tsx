import React from 'react'
import Layout from '../components/Layout'
import { Variants } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/Seo'
import {
  ContactAnimate,
  ContainerPersonalData,
  ContainerMessage,
} from '../styles/Container.style'
import {
  ButtonSend,
  ContactForm,
  ContactImageAnimate,
  Form,
  Input,
  Label,
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
      <ContactAnimate
        initial='initVariant'
        animate='animateVariant'
        exit='exit'
        variants={containerVariant}
      >
        <ContactImageAnimate>
          <StaticImage
            src='../images/about.jpeg'
            alt='About me'
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
          <ContainerPersonalData>
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
          </ContainerPersonalData>
          <ContainerMessage>
            <Label textArea>Message</Label>
            <TextArea
              name='message'
              placeholder='Write your message...'
            ></TextArea>
            <ButtonSend type='submit'> Send Message</ButtonSend>
          </ContainerMessage>
        </ContactForm>
      </ContactAnimate>
    </Layout>
  )
}

export default Contact
