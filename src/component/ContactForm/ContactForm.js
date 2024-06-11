import React from 'react';
import style from './ContactForm.module.css';
import Button from '../button/button.js';
import { MdMessage } from 'react-icons/md';
import {FaPhoneAlt} from 'react-icons/fa';
import {HiMail} from 'react-icons/hi'
const ContactForm = () => {
  const Viacall =()=>{
    console.log("i am calling");
  } ;
  const onSubmit=(event)=>{
    event.preventDefault();
    console.log("Name",event.target[0].value);
    console.log("Email",event.target[1].value);
    console.log("Text",event.target[2].value);
  };

   return (
    <section className={style.contener}>
      <div className={style.contactForm}>
        <div className={style.topbtn}>      
          <Button  text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
          <Button onClick={Viacall}  text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>}/>
        </div>
          <Button isOutline={true} text="VIA EMAIL FROM" icon={<HiMail fontSize="24px"/>}/>

          <form onSubmit={onSubmit}>
            <div className={style.formController}> 
              <label htmlFor="Name">Name</label>
              <input type="text" />
            </div>
            <div className={style.formController}> 
              <label htmlFor="E-mail">E-mail</label>
              <input type="email" />
            </div>
            <div className={style.formController}> 
              <label htmlFor="">Text</label>
              <textarea name='text' rows="8"/>
            </div>
            <div style={{display:"flex",
              justifyContent:"end"
            }}>
            <Button text="SUBMIT BUTTON" />
            </div>

          </form>
        </div>
      <div className={style.contactImage}>
            <img src="/Images/1_iWZmrTapDhmMugRBb7KE9w.jpg" alt="" />
      </div>
    </section>
  )
}

export default ContactForm
