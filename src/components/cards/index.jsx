import './index.css';
import React, { useState } from 'react';

const Cards = ({ title, description, imageUrl, color, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <section className="cards-container">
      <div
        className="card"
        style={{ backgroundColor: color, cursor: link ? 'pointer' : 'default' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
      >
        <img src={imageUrl} alt={title} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          {isHovered && <p className="card-description">{description}</p>}
        </div>
      </div>
    </section>
  );
};

export default Cards;
