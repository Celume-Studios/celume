import React from 'react';
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
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h4>3D Experiences</h4>
            <p>We craft custom 3D VR experiences, Realistic animated videos and anamorphic animations for screens</p>
            <a href="#start" className="card-link">Start with us →</a>
            <div className="card-illustration">
              {/* Add your 3D illustration here */}
            </div>
          </div>

          {/* UI/UX Design Card */}
          <div className="feature-card dark">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h4>UI/UX Design</h4>
            <p>We analyze everything about your business and your customers to provide the most suiting interfaces</p>
            <a href="#start" className="card-link">Start with us →</a>
            <div className="card-illustration">
              {/* Add your UI/UX illustration here */}
            </div>
          </div>

          {/* Marketing Card */}
          <div className="feature-card dark">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8L12 16M12 16L15 13M12 16L9 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4>Marketing</h4>
            <p>We help with marketing and advertising your brand through creative 3D visuals or tailormade branded content</p>
            <a href="#start" className="card-link">Start with us →</a>
            <div className="card-illustration">
              {/* Add your Marketing illustration here */}
            </div>
          </div>

          {/* Building websites Card */}
          <div className="feature-card orange">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h4>Building websites & applications</h4>
            <p>Bring your business ideas to life the way you envision it with our studio</p>
            <a href="#start" className="card-link">Start with us →</a>
            <div className="card-illustration">
              {/* Add your Development illustration here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 