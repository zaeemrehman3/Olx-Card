import React from 'react';
import './card.css'; 

const Card = ({ img, price, description, location, time }) => {
  return (
    <div className="card">
      <img src={img} alt="Product" />
      <h1>Rs {price}</h1>
      <p>{description}</p>
      <p>{location}</p>
      <p>{time}</p>
    </div>
  );
};

export default Card;