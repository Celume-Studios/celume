import React from 'react';
import '../styles/Testimonials.css';
import yateeshImg from '../assets/yateesh.png';
import nandaImg from '../assets/nanda.png';
import rcssImg from '../assets/RCSS.png';
import quoteImg from '../assets/quote.png';

const testimonials = [
    {
        name: "Yateesh",
        role: "Founder of SreeNidhi Fuels",
        image: yateeshImg,
        content: "Our brand looks amazing thanks to Celume Studios designs, website, social media, and business cards."
    },
    {
        name: "Nanda Krishna",
        role: "Founder of AOne Visa",
        image: nandaImg,
        content: "Celume Studios elevated our digital presence with exceptional designs, a seamless website, and impactful social media marketing."
    },
    {
        name: "Ramanjaneya Reddy",
        role: "Managing Director of RCSS",
        image: rcssImg,
        content: "Celume Studios brought our Bhumi project to life with an incredible 3D virtual tour, stunning renders, and seamless digital solutions."
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="testimonials-quotes"></div>
            <div className="testimonials-content">
                <div className="testimonials-header">
                    <h2>What they say about us</h2>
                    <p>People whom loved working with us and using our products or services</p>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div className="testimonial-card" key={index}>
                            <div className="testimonial-header">
                                <div className="testimonial-avatar">
                                    <img src={testimonial.image} alt={testimonial.name} />
                                </div>
                                <div className="testimonial-info">
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.role}</p>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                {testimonial.content}
                            </div>
                            <div className="quote-mark">
                                <img src={quoteImg} alt="quote" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <section className="work-with-us">
                <div className="work-with-us-content">
                    <h2>Let's work together</h2>
                    <p>
                        Ready to transform your digital presence? Partner with us to bring your vision to life. 
                        From immersive 3D experiences to cutting-edge web solutions, we combine creativity with 
                        technical excellence to deliver results that exceed expectations. Join the growing list 
                        of successful businesses who trust us to elevate their brand and engage their audience 
                        in innovative ways.
                    </p>
                    {/* <button className="know-more-btn">
                        Start Your Journey <span>→</span>
                    </button> */}
                </div>
            </section>
        </section>
    );
};

export default Testimonials; 