import React from 'react';
import './Navbar.css';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">TravelTour</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Tours</li>
        <li>RentCar</li>
        <li>Contact</li>
        <li>Login</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
}

export default Navbar;
