import React from 'react';
import './css/Working.css'; // Make sure you create a CSS file for this component
import Images from '../static/Images.js'; // Adjust the path to your Images file

const Working = () => {
  return (
    <div className="working-container">
      <img src={Images.workInProgress} alt="Work in Progress" className="work-img" />
      <h2 className="working-title">We're working on it!</h2>
      <p className="working-text">This page is currently under construction. Please check back later!</p>
    </div>
  );
};

export default Working;
