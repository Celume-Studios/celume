import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="logo">
        <img src={logo} alt="Celume Studios" />
      </div>
      <div className="nav-center">
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact Us</a>
        </div>
      </div>
      <div className="nav-right">
        <button className="get-started-btn">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar; 