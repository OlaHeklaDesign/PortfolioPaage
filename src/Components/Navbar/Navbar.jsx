import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/"><img src={logo} alt="logo" /></Link>
      </div>
      <ul className="nav-menu">
        <li>
          <a href="#about">ABOUT ME</a>
        </li>
        <li>
          <a href="#skills">SKILLS</a>
        </li>
        <li>
          <a href="#projects">PROJECTS</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
      <div className="mobile-menu">
        <img src={menu_icon} alt="menu" onClick={toggleMobileMenu}/>
        {isMobileOpen &&
        <ul className="nav-menu mobile">
          <li>
          <a href="#about">ABOUT ME</a>
        </li>
        <li>
          <a href="#skills">SKILLS</a>
        </li>
        <li>
          <a href="#projects">PROJECTS</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>}
      </div>
    </div>
  )
}

export default Navbar;