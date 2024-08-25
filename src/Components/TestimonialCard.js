import React from 'react';
import './css/TestimonialCard.css';

const TestimonialCard = ({ name, details, photo, testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="photo-container">
        <img src={photo} alt={`${name}'s photo`} className="testimonial-photo" />
      </div>
      <div className="testimonial-content">
        <h3 className="testimonial-name">{name}</h3>
        <p className="testimonial-details">{details}</p>
        <p className="testimonial-text">"{testimonial}"</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
