import React from 'react';
import './Hero.css'; 

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Find All Tours, Activities, and Courses!</h1>
                <p>Explore exciting tours, activities, and courses around the world.</p>
                <div className="search-bar">
                    <input type="text" placeholder="Search destinations, activities..." />
                    <button>Search</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
