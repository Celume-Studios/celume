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
        
        try {
            const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_DEPLOYMENT_URL', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    timestamp: new Date().toISOString()
                })
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
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
                            ? 'Message sent successfully!' 
                            : 'Something went wrong. Please try again.'}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Contact; 