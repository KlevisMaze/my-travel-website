import React from 'react';
import './ContactPage.css'; // Ensure to create this file for styling

const ContactPage = () => {
    return (
        <div className="contact-page">
            <h2>Contact Us</h2>
            <div className="contact-container">
                {/* Contact Form Section */}
                <div className="contact-form">
                    <h3>Send Us a Message</h3>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Enter your message"></textarea>
                        </div>
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>

                {/* Contact Details Section */}
                <div className="contact-details">
                    <h3>Contact Information</h3>
                    <p><strong>Address:</strong> 123 Main Street, Anytown, USA</p>
                    <p><strong>Phone:</strong> +1 123 456 7890</p>
                    <p><strong>Email:</strong> info@example.com</p>
                    
                    {/* Social Media Links */}
                    <div className="social-media-links">
                        <h4>Follow Us:</h4>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/icons/facebook.png" alt="Facebook" className="social-icon" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/icons/instagram.png" alt="Instagram" className="social-icon" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/icons/twitter.png" alt="Twitter" className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
