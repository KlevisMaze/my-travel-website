import React from 'react';
import './Deals.css';
import { dealsData } from '../../utils/data';

function Deals() {
  return (
    <section className="deals">
      <h2>Best Sellers & Hot Deals</h2>
      <div className="deal-cards">
        {dealsData.map((deal) => (
          <div className="deal-card" key={deal.id}>
            <img src={deal.image} alt={deal.title} />
            <h3>{deal.title}</h3>
            <p>{deal.price}</p>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Deals;
