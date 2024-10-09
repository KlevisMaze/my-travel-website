import React from 'react';
import './SocialMedia.css'; 

const SocialMedia = () => {
    return (
        <div className="social-media-section">
            <h2>Follow Us</h2>
            <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/icons/facebook.png" alt="Facebook" className="social-icon" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/icons/instagram.png" alt="Instagram" className="social-icon" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/icons/twitter.png" alt="Twitter" className="social-icon" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/icons/linkedin.png" alt="LinkedIn" className="social-icon" />
                </a>
            </div>
        </div>
    );
};

export default SocialMedia;
