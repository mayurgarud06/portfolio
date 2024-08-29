import React from 'react';
import './css/Card.css';

const Card = ({ image, title, description, link, isProject }) => {
    // const handleClick = () => {
    //     if (isProject) {
    //       window.open(link, '_blank');
    //     } else {
    //       // Handle blog link internally
    //       window.location.href = link;
    //     }
    //   };
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                        {/* <a 
                href={link} 
                className="card-button" 
                onClick={(e) => {
                    e.preventDefault(); // Prevent default link behavior
                    handleClick(); // Custom behavior
                }}
                > */}
                {isProject ? (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
                        View Project
                    </a>
                ) : (
                    <a href={link} className="card-link">
                        Read Blog
                    </a>
                )}
            </div>
        </div>
    );
};

export default Card;
