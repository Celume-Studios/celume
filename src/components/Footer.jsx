import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/images/logo.png" alt="Celume Studios" />
            <span>Celume studios</span>
          </div>
          <p className="footer-description">
            We are a team that can help you in developing<br />
            your company for the future
          </p>
        </div>

        <div className="footer-center">
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li>Web/App Development</li>
              <li>Designs</li>
              <li>Advertisement</li>
              <li>3D Experiences</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Our Promises</h3>
            <ul>
              <li>Fast Responsiveness</li>
              <li>Superior Quality</li>
              <li>Reliability</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>© 2025 Celume Studios. All rights reserved.</p>
          <div className="footer-links">
            <a href="/privacy-policy.html" className="footer-link">Privacy Policy</a>
            <a href="/terms-of-service.html" className="footer-link">Terms of Service</a>
          </div>
          <div className="social-links">
            <a href="https://www.instagram.com/celumestudios/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            {/* <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a> */}
            <a href="https://www.linkedin.com/company/celume-studios/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 