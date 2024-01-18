import React from 'react';
import './Contact.css';
import phone_icon from '../Assets/phone_icon.svg';
import mail_icon from '../Assets/mail_icon.svg';
import arrow_contact_icon from '../Assets/arrow_contact.svg';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-left">
        <h2>Let's contact 👋</h2>
        <div>
          <img src={mail_icon} alt="mail icon" />
          <p>kontakt@olakowalczyk.pl</p>
        </div>
        <div>
          <img src={phone_icon} alt="phone icon" />
          <p>+48 506 617 131</p>
        </div>
      </div>
      <div className="contact-right">
        <div>
          <p>GitHub</p>
          <button>
            <img src={arrow_contact_icon} alt="arrow icon" />
          </button>
        </div>
        <div>
          <p>LinkedIn</p>
          <button>
            <img src={arrow_contact_icon} alt="arrow icon" />
          </button>
        </div>
        <div>
          <p>Dribbble</p>
          <button>
            <img src={arrow_contact_icon} alt="arrow icon" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact;