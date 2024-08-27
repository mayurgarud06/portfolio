import React, { useState } from 'react';
import './css/Contact.css'; // Import the CSS file
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

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

  // Leaflet marker icon configuration (adjust with your own icon if needed)
  const markerIcon = new L.Icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
     <div className='contact-container'>
      <h2>Contact Me</h2>
      <div className="map-container">
        <MapContainer center={[18.50314364853892, 73.93763377747143]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* console.log("this is map"); */}
          <Marker position={[18.50314364853892, 73.93763377747143]} icon={markerIcon}>
            <Popup>My location</Popup>
          </Marker>
        </MapContainer>
      </div>
      <p></p>
      <h2>Contact form</h2>
      <div className="contact-card">
      <p>Your feedback matters...</p>
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
        <div className="button-container">
        <button type="submit" className="submit-button">Submit</button>
        </div>
        
      </form>
    </div>
    </div>
  );
};

export default Contact;
