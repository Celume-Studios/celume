import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');
        
        try {
            // Convert form data to URL parameters
            const params = new URLSearchParams({
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
                timestamp: new Date().toISOString()
            }).toString();

            const response = await fetch(
                `https://script.google.com/macros/s/AKfycbz6mbNhsaNqiyOV4oiwup5Y1saaygr3a3Xchl3IQWRMI-EeYvirs0_bFDYqq9hEUzjU/exec?${params}`, 
                {
                    method: 'GET',
                    mode: 'no-cors',
                }
            );

            // Since we're using no-cors, we won't get a response we can read
            // We'll assume success if we get here
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
            setErrorMessage('Failed to submit form. Please try again.');
        }
        
        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-content">
                <div className="contact-header">
                    <h2>Get in Touch</h2>
                    <p className="subtitle">
                        Have a project in mind? Let's create something extraordinary together.
                    </p>
                </div>

                <div className="contact-form-container">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your Name"
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Your Email"
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                placeholder="Subject"
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Your Message"
                                className="form-input form-textarea"
                                rows="5"
                            />
                        </div>
                        <button 
                            type="submit" 
                            className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                            disabled={isSubmitting}
                        >
                            <span className="btn-text">
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </span>
                            <span className="btn-icon">→</span>
                        </button>
                    </form>
                </div>

                {submitStatus && (
                    <div className={`submit-status ${submitStatus}`}>
                        {submitStatus === 'success' 
                            ? 'Message sent successfully! We will get back to you soon.' 
                            : errorMessage || 'Something went wrong. Please try again.'}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Contact; 