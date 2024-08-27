import React, { useState } from 'react';
import './css/Contact.css'; // Import the CSS file
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Images from '../static/Images.js';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    response: ''
  });

  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
   const serviceId="service_001";
   const templateId="template_rahpmo3";
   const api_Key="DVewn4rePFsPgHXpl";
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    emailjs.sendForm(serviceId, templateId, e.target, api_Key)
    .then((result) => {
      console.log('Email sent:', result.text);
      setShowPopup(true); // Show success popup
      setFormData({
        name: '',
        email: '',
        response: ''
      });
    }, (error) => {
      console.log('Error sending email:', error.text);
    });
    };
  const closePopup = () => {
    setShowPopup(false); // Hide the popup message
  };


  // Leaflet marker icon configuration (adjust with your own icon if needed)
  const markerIcon = new L.Icon({
    // iconUrl: require('leaflet/dist/images/marker-icon.png'),
    iconUrl: Images.locationPin,
    iconSize: [50, 50],
    iconAnchor: [12, 41],
    popupAnchor: [1, -50],
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
          <Popup className="popup-content">
              <div className="popup-info">
                <h3>Hadapsar,Pune</h3>
                <p>Latitude: 18.5031</p>
                <p>Longitude: 73.9376</p>
              </div>
            </Popup>
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
    {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Thank You!</h2>
            <p>Your message has been sent successfully.</p>
            <button onClick={closePopup} className="close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
