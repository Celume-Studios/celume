import React from 'react';
import '../styles/Products.css';

const Products = () => {
  return (
    <section id="products" className="products">
      <div className="products-content">
        <div className="products-header">
          <div className="header-left">
            <h2>Our Products</h2>
            <p className="subtitle">Here is a host of studio - developed products</p>
          </div>
          <div className="header-right">
            <button className="portfolio-btn" onClick={() => window.open('https://youtu.be/2SK0YNDQmR8', '_blank')}>All Portfolio</button>
          </div>
        </div>

        <div className="products-grid">
          {/* Celume 360 Card */}
          <div className="product-card">
            <div className="product-card-inner">
              <div className="card-content">
                <div className="tag">Under Development</div>
                <h3>Celume 360</h3>
                <p>Celume 360 is the most easiest to use tool to build custom virtual tour websites in seconds</p>
                {/* <div className="card-description">
                  Virtual Tours Accessible on the widest range of devices from anywhere with a simple browser
                </div> */}
              </div>
              <div className="card-image">
                <img src="/images/celume360.png" alt="Celume 360 Interface" />
              </div>
            </div>
          </div>

          {/* Call Nova Card */}
          <div className="product-card">
            <div className="product-card-inner">
              <div className="card-content">
                <div className="tag">Beta</div>
                <h3>Celume Call Nova</h3>
                <p>Call Nova is an human like ai voice assistant that can be used to receive calls and note down the important details</p>
                {/* <div className="card-description">
                  Upcoming - Extracting and mining data made easy
                </div> */}
              </div>
              <div className="card-image">
                <img src="/images/callnova.jpg" alt="Celume Call Nova Interface" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products; 