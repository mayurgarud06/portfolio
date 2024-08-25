// Contact.js
import React, { useState } from 'react';
import './css/Contact.css'; // Import the CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    response: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-card">
      <h2>Contact Me</h2>
      <p> 
        your feedback matters....
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="response">Your Response:</label>
          <textarea
            id="response"
            name="response"
            value={formData.response}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
