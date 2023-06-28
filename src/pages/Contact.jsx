import React from 'react'

function Contact() {
  return (
    <div className="contact-parent">
      <form className = "contact">
          <h1>Contact Us</h1>
          <div className="inputs">
              <div className="name">
                <div>Name</div>
                <input type="text" placeholder='Enter your name'/>
              </div>
              <div className="email">
                <div>Email</div>
                <input type="email" placeholder="Enter your email address"/>
              </div>
              <div className="message-contact">
                <div>Message</div>
                <input type="text" placeholder='Tell us about your query...'/>
              </div>
          </div>
          <button className="send">Send</button>
      </form>
    </div>
  )
}

export default Contact