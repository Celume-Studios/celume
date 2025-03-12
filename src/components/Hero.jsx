import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';
import Navbar from './Navbar';

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

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-wrapper">
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
        <Navbar />

        {/* Hero Content */}
        <div className="hero-content">
          <h1>
            Craft Amazing Visual 
            Design For Your Customers
            With Celume Studios
          </h1>
          <p>we help you build a new visual appeal for your products , your brand , your platform</p>
          <button 
            className="explore-btn" 
            onClick={scrollToProducts}
          >
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 