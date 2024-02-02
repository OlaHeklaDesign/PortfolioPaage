import React, { useState } from 'react';
import logo from '../Assets/logo.svg';
import './Navbar.css';
import menu_icon from '../Assets/menu.svg';

const Navbar = () => {

  const [isMobileOpen, setIsmobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsmobileOpen(!isMobileOpen);
  }


  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="nav-menu">
        <li>ABOUT ME</li>
        <li>SKILLS</li>
        <li>PROJECTS</li>
        <li>CONTACT</li>
      </ul>
      <div className="mobile-menu">
        <img src={menu_icon} alt="menu" onClick={toggleMobileMenu}/>
        {isMobileOpen &&
        <ul className="nav-menu mobile">
          <li>ABOUT ME</li>
          <li>SKILLS</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
      </ul>}
      </div>
    </div>
  )
}

export default Navbar;