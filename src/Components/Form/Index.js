import React, {useRef, useEffect, useState} from 'react';
import emailjs from '@emailjs/browser';
import {ContactForm, ImgWrap, Img, FormWrapper, ContactWrapper} from './FormElements';
import img from '../../Images/svgContact.svg'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { IoLocationOutline } from "react-icons/io5"
import ContactUs from './New';

function Form() {


const form = useRef();

const sendEmail = (e) => {
 e.preventDefault();
  
      emailjs.sendForm('service_', 'template_fcnr', form.current, '')
        .then((result) => {
            console.log(result.text);
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
      <ContactForm id='contact'>
        <ContactWrapper>
          <ContactUs />
        </ContactWrapper>
      <FormWrapper>
      <h1>Contact Form</h1>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" placeholder='name'/>
      <label>Email</label>
      <input type="email" name="user_email" placeholder='email'/>
      <label>Message</label>
      <textarea name="message" placeholder='your message'/>
      <input type="submit" value="Send" />
    </form>
      </FormWrapper>
      </ContactForm>
  )
}

export default Form