import React from 'react';
import './css/Card.css';
import { truncateText } from './Utils/utils'; // Import the truncateText function

const Card = ({ image, title, description, link, isProject,onClick }) => {

    const maxLength = 50;
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
                <h3 className="card-title">{truncateText(title, maxLength)}</h3>
                <p className="card-description">{truncateText(description, maxLength)}</p>
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
                    <button onClick={onClick} className="card-link">
                    Read Blog
                  </button>
                )}
            </div>
        </div>
    );
};

export default Card;
