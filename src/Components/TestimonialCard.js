import React from 'react';
import './css/TestimonialCard.css';

const TestimonialCard = ({ name, details, relation, photo, testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="photo-container">
        <img src={photo} alt={name} className="testimonial-photo" />
      </div>
      <div className="testimonial-content">
        <h3 className="testimonial-name">{name}</h3>
        <p className="testimonial-details">{details}</p>
        {relation ? <p className="testimonial-relation">{relation}</p> : null}
        <p className="testimonial-text">"{testimonial}"</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
