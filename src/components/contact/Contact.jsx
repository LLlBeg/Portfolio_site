import React from 'react'
import "./contact.css"
import {MdOutlineMail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {TbBrandTelegram} from "react-icons/tb"

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Help@help.com</h5>
            <a href="mailto:help@help.com">Send massage</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Oleksii Shved</h5>
            <a href="https://www.facebook.com/profile.php?id=100011448066049" target="_blank">Send massage</a>
          </article>
          <article className='contact__option'>
            <TbBrandTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>+380634092070</h5>
            <a href="https://t.me/LLlBeg" target="_blank">Send massage</a>
          </article>
        </div>
        {/* END  OF CONTACT OPTIONS */}
        <form action="">
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='"Your Email' required />
          <textarea name='message' rows='7' placeholder='Ypur Massage require'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact