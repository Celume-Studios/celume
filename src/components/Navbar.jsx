import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="nav-container">
      <div className="logo">
        <img src={logo} alt="Celume Studios" onClick={() => scrollToSection('hero')} style={{ cursor: 'pointer' }} />
      </div>
      <div className="nav-center">
        <div className="nav-links">
          <a href="#hero" onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}>About</a>
          <a href="#features" onClick={(e) => {
            e.preventDefault();
            scrollToSection('features');
          }}>Services</a>
          <a href="#products" onClick={(e) => {
            e.preventDefault();
            scrollToSection('products');
          }}>Portfolio</a>
          <a href="#contact" onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}>Contact Us</a>
        </div>
      </div>
      <div className="nav-right">
        <button 
          className="get-started-btn"
          onClick={() => scrollToSection('features')}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 