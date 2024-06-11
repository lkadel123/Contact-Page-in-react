import React from 'react';
import style from './ContactHeader.module.css'

const ContactHeader = () => {
  return (
    <div className={`contener ${style.contactsection}`}>
        <h1>CONTACT US</h1>
        <p>If you have any questions, feel free to reach out to us by filling out the form below. Get information, including addresses & phone numbers, for general questions.</p>
      
    </div>
  )
}

export default ContactHeader
