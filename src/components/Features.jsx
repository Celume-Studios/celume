import React from 'react';
import threeDImage from '../assets/3d modeling-amico 1.png';
import developmentImage from '../assets/Application programming interface-rafiki 1.png';
import marketingImage from '../assets/Mobile Marketing-amico (1) 1.png';
import uiDesignImage from '../assets/Mobile UI-UX-cuate 1.png';
import experiencesIcon from '../assets/experiences.png';
import marketingIcon from '../assets/marketing.png';
import uiIcon from '../assets/ui.png';
import webIcon from '../assets/web.png';
import '../styles/Features.css';

const Features = () => {
  return (
    <section className="features">
      <div className="features-content">
        {/* Main Heading */}
        <div className="features-header">
          <h2>
            We help in transforming businesses
            <br />
            with exciting ideas tailor-made for
            <br />
            their customers and clients.
          </h2>
          <p className="subtitle">
            Our work involves UI/UX Design, 3D immersive experiences
            <br />
            and building platforms that describe you the best
          </p>
        </div>

        {/* Secondary Heading */}
        <div className="features-subheader">
          <h3>Let's work together in shaping your vision</h3>
          <p>We give our best to ensure our designs bring your vision to reality</p>
        </div>

        {/* Feature Cards */}
        <div className="features-grid">
          {/* 3D Experiences Card */}
          <div className="feature-card orange">
            <div className="card-content">
              <div className="card-icon">
                <img src={experiencesIcon} alt="3D Experiences Icon" />
              </div>
              <h4>3D Experiences</h4>
              <p>We craft custom 3D VR experiences, Realistic animated videos and anamorphic animations for screens</p>
              <a href="#start" className="card-link">Start with us →</a>
            </div>
            <div className="card-illustration">
              <img src={threeDImage} alt="3D Experience" />
            </div>
          </div>

          {/* UI/UX Design Card */}
          <div className="feature-card dark">
            <div className="card-content">
              <div className="card-icon">
                <img src={uiIcon} alt="UI/UX Design Icon" />
              </div>
              <h4>UI/UX Design</h4>
              <p>We analyze everything about your business and your customers to provide the most suiting interfaces</p>
              <a href="#start" className="card-link">Start with us →</a>
            </div>
            <div className="card-illustration">
              <img src={uiDesignImage} alt="UI/UX Design" />
            </div>
          </div>

          {/* Marketing Card */}
          <div className="feature-card dark">
            <div className="card-content">
              <div className="card-icon">
                <img src={marketingIcon} alt="Marketing Icon" />
              </div>
              <h4>Marketing</h4>
              <p>We help with marketing and advertising your brand through creative 3D visuals or tailormade branded content</p>
              <a href="#start" className="card-link">Start with us →</a>
            </div>
            <div className="card-illustration">
              <img src={marketingImage} alt="Marketing" />
            </div>
          </div>

          {/* Building websites Card */}
          <div className="feature-card orange">
            <div className="card-content">
              <div className="card-icon">
                <img src={webIcon} alt="Web Development Icon" />
              </div>
              <h4>Building websites & applications</h4>
              <p>Bring your business ideas to life the way you envision it with our studio</p>
              <a href="#start" className="card-link">Start with us →</a>
            </div>
            <div className="card-illustration">
              <img src={developmentImage} alt="Development" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 