import React from 'react';
import './Card.css';

function Card({ title, image, isCollected }) {
  return (
    <div className="card">
      <img
        src={image}
        alt={title}
        className={`card-image ${isCollected ? 'collected' : 'not-collected'}`}
      />
      <div className={`card-title`}>
        {title}
      </div>
    </div>
  );
}

export default Card;