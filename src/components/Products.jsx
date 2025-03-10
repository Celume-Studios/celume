import React from 'react';
import '../styles/Products.css';
import celume360Img from '../assets/celume360.png';
import datamachineImg from '../assets/celumedatammachine.png';

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
            <button className="portfolio-btn">All Portfolio</button>
          </div>
        </div>

        <div className="products-grid">
          {/* Celume 360 Card */}
          <div className="product-card">
            <div className="product-card-inner">
              <div className="card-content">
                <div className="tag">Development Project</div>
                <h3>Celume 360</h3>
                <p>Celume 360 is the most easiest to use tool to build custom virtual tour websites in seconds</p>
                <div className="card-description">
                  Virtual Tours Accessible on the widest range of devices from anywhere with a simple browser
                </div>
              </div>
              <div className="card-image">
                <img src={celume360Img} alt="Celume 360 Interface" />
              </div>
            </div>
          </div>

          {/* Datamachine Card */}
          <div className="product-card">
            <div className="product-card-inner">
              <div className="card-content">
                <div className="tag">Development Project</div>
                <h3>Celume Datamachine</h3>
                <p>Data machine skips all the hard work that goes into data collection and makes it a simple one click procedure</p>
                <div className="card-description">
                  Upcoming - Extracting and mining data made easy
                </div>
              </div>
              <div className="card-image">
                <img src={datamachineImg} alt="Datamachine Interface" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products; 