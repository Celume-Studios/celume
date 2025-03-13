import React from 'react';
import '../styles/Features.css';

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="features-content">
        {/* Main Heading */}
        <div className="features-header">
          <h2>Our Services</h2>
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
                <img src="/images/experiences.png" alt="3D Experiences Icon" />
              </div>
              <h4>3D Experiences</h4>
              <p>We craft custom 3D VR experiences, Realistic animated videos and anamorphic animations for screens</p>
              {/* <a href="#start" className="card-link">Start with us →</a> */}
            </div>
            <div className="card-illustration">
              <img src="/images/3d modeling-amico 1.png" alt="3D Experience" />
            </div>
          </div>

          {/* UI/UX Design Card */}
          <div className="feature-card dark">
            <div className="card-content">
              <div className="card-icon">
                <img src="/images/ui.png" alt="UI/UX Design Icon" />
              </div>
              <h4>UI/UX Design</h4>
              <p>We analyze everything about your business and your customers to provide the most suiting interfaces</p>
              {/* <a href="#start" className="card-link">Start with us →</a> */}
            </div>
            <div className="card-illustration">
              <img src="/images/Mobile UI-UX-cuate 1.png" alt="UI/UX Design" />
            </div>
          </div>

          {/* Marketing Card */}
          <div className="feature-card dark">
            <div className="card-content">
              <div className="card-icon">
                <img src="/images/marketing.png" alt="Marketing Icon" />
              </div>
              <h4>Marketing</h4>
              <p>We help with marketing and advertising your brand through creative 3D visuals or tailormade branded content</p>
              {/* <a href="#start" className="card-link">Start with us →</a> */}
            </div>
            <div className="card-illustration">
              <img src="/images/Mobile Marketing-amico (1) 1.png" alt="Marketing" />
            </div>
          </div>

          {/* Building websites Card */}
          <div className="feature-card orange">
            <div className="card-content">
              <div className="card-icon">
                <img src="/images/web.png" alt="Web Development Icon" />
              </div>
              <h4>Building websites & applications</h4>
              <p>Bring your business ideas to life the way you envision it with our studio</p>
              {/* <a href="#start" className="card-link">Start with us →</a> */}
            </div>
            <div className="card-illustration">
              <img src="/images/Application programming interface-rafiki 1.png" alt="Development" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 