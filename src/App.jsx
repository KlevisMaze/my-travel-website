import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Deals from './components/Deals/Deals';
import Destinations from './components/Destinatios/Destinations';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';
import RentCar from './components/RentCar/RentCar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Deals />
      <Destinations/>
      <RentCar/>
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
