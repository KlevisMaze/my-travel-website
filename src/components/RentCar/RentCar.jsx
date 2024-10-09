import React from 'react';
import './RentCar.css'; 

const RentCar = () => {
    return (
        <div className="rent-car-section">
            <h2>Rent a Car</h2>
            <div className="car-container">
                <div className="car-card">
                    <img src="/assets/images/car-rental.jpg" alt="Car Rental" className="car-image" />
                    <div className="car-details">
                        <h3>Luxury Sedan</h3>
                        <p>Price: $50/day</p>
                        <p>Available for long trips and city tours.</p>
                        <button className="rent-btn">Rent Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RentCar;
