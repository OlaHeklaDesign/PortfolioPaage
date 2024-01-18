import React from 'react';
import './Footer.css';
import logo_footer from '../Assets/logo_footer.svg';
import phone_icon_black from '../Assets/phone_icon_black.svg';
import mail_icon_black from '../Assets/mail_icon_black.svg';

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo_footer} alt="logo" />
      <ul>
        <li>ABOUT ME</li>
        <li>SKILLS</li>
        <li>PROJECTS</li>
        <li>CONTACT</li>
      </ul>
      <div className="footer-contact">
        <div>
          <img src={mail_icon_black} alt="mail icon" />
          <p>kontakt@olakowalczyk.pl</p>
        </div>
        <div>
          <img src={phone_icon_black} alt="phone icon" />
          <p>+48 506 617 131</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;