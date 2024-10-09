import React from 'react';
import './Destinations.css'; // Include a CSS file for styling

const Destinations = () => {
    const destinations = [
        { id: 1, name: 'Bali, Indonesia', image: '/assets/destinations/bali.jpg' },
        { id: 2, name: 'Paris, France', image: '/assets/destinations/paris.jpg' },
        { id: 3, name: 'New York, USA', image: '/assets/destinations/newyork.jpg' },
        { id: 4, name: 'Tokyo, Japan', image: '/assets/destinations/tokyo.jpg' },
        { id: 5, name: 'Sydney, Australia', image: '/assets/destinations/sydney.jpg' },
    ];

    return (
        <section className="destinations">
            <h2>Popular Destinations</h2>
            <div className="destinations-grid">
                {destinations.map((destination) => (
                    <div key={destination.id} className="destination-card">
                        <img src={destination.image} alt={destination.name} />
                        <div className="destination-info">
                            <h3>{destination.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Destinations;
