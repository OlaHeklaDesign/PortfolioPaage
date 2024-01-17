import React from 'react';
import logo from '../Assets/logo.svg';
import './Navbar.css';

const Navbar = () => {
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
    </div>
  )
}

export default Navbar;