import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import '../styles/Hero.css';

const Hero = () => {
  const [columnCount, setColumnCount] = useState(0);

  useEffect(() => {
    const calculateColumns = () => {
      const screenWidth = window.innerWidth;
      const columnWidth = 75; // Match the width in CSS
      const columnsNeeded = Math.ceil((screenWidth * 1.5) / columnWidth); // Ensure full coverage with some overlap
      setColumnCount(columnsNeeded);
    };

    calculateColumns();
    window.addEventListener('resize', calculateColumns);
    return () => window.removeEventListener('resize', calculateColumns);
  }, []);

  return (
    <div className="hero-wrapper">
      {/* Background columns */}
      <div className="hero-container">
        <div className="columns-wrapper">
          {/* First set of columns */}
          {Array(columnCount).fill(null).map((_, index) => (
            <div key={`first-${index}`} className="hero-column"></div>
          ))}
          {/* Duplicate set of columns for seamless loop */}
          {Array(columnCount).fill(null).map((_, index) => (
            <div key={`second-${index}`} className="hero-column"></div>
          ))}
        </div>
      </div>

      {/* Content overlay */}
      <div className="content-wrapper">
        {/* Navigation */}
        <nav className="nav-container">
          <div className="logo">
            <img src={logo} alt="Celume Studios" />
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact Us</a>
            <button className="get-started-btn">Get Started</button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="hero-content">
          <h1>
            <span className="highlight">Craft Amazing Visual</span>
            Design For Your Customers
            <span className="highlight">With Celume Studios</span>
          </h1>
          <p>we help you build a new visual appeal for your products , your brand , your platform</p>
          <button className="get-started-btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero; 