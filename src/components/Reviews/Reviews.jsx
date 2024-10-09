import React from 'react';
import './Reviews.css';

const Reviews = () => {
    return (
        <div className="reviews-section">
            <h2>Customer Reviews</h2>
            <div className="reviews-container">
                <div className="review-card">
                    <img src="/assets/images/customer1.jpg" alt="Customer 1" className="customer-image" />
                    <div className="review-details">
                        <h3>Jane Doe</h3>
                        <p className="rating">⭐⭐⭐⭐⭐</p>
                        <p>"Amazing service! The car was clean and well-maintained. The process was super smooth and easy!"</p>
                    </div>
                </div>

                <div className="review-card">
                    <img src="/assets/images/customer2.jpg" alt="Customer 2" className="customer-image" />
                    <div className="review-details">
                        <h3>John Smith</h3>
                        <p className="rating">⭐⭐⭐⭐</p>
                        <p>"Great experience overall, but the customer support could be a bit faster. The car was perfect though!"</p>
                    </div>
                </div>

                <div className="review-card">
                    <img src="/assets/images/customer3.jpg" alt="Customer 3" className="customer-image" />
                    <div className="review-details">
                        <h3>Alice Brown</h3>
                        <p className="rating">⭐⭐⭐⭐⭐</p>
                        <p>"Highly recommend! Easy booking and excellent car. Will definitely use this service again."</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
