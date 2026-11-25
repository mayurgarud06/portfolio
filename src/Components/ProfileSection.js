import React from 'react';
import './css/ProfileSection.css';
import Images from '../static/Images';

const ProfileSection = () => {
  return (
    <aside className="profile-section">
      <div className="profile-brand">
        <div className="profile-photo-container">
          <img
            src={Images.profileLogo}
            alt="Mayur Garud"
            className="profile-photo"
          />
        </div>
        <h1 className="profile-name">Mayur Garud</h1>
        <p className="profile-tagline">Software Engineer</p>
        <p className="profile-stack">Java · Spring Boot · Backend</p>
      </div>

      <div className="profile-details">
        <a className="detail-row" href="mailto:mayurgarud06@gmail.com">
          <img src={Images.mailLogo} alt="" className="icon" />
          <span>mayurgarud06@gmail.com</span>
        </a>
        <a className="detail-row" href="tel:+919767790513">
          <img src={Images.contactLogo} alt="" className="icon" />
          <span>+91 9767790513</span>
        </a>
        <div className="detail-row">
          <img src={Images.locationLogo} alt="" className="icon" />
          <span>Pune, India</span>
        </div>
        <div className="detail-row detail-note">
          <span>Available after 30 Nov 2026</span>
        </div>
      </div>

      <div className="socialMedia-container">
        <a
          href="https://www.instagram.com/mayur_garud_013/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <img src={Images.instagramLogo} alt="" className="socialMedia" />
        </a>
        <a
          href="https://www.linkedin.com/in/mayurgarud06/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img src={Images.linkdInLogo} alt="" className="socialMedia" />
        </a>
        <a
          href="https://github.com/mayurgarud06"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img src={Images.github} alt="" className="socialMedia" />
        </a>
        <a
          href="https://www.cloudskillsboost.google/public_profiles/71bd47c8-57b8-44f8-a3cc-fa768165bf04"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Google Cloud Skills Boost"
        >
          <img src={Images.googlecloudLogo} alt="" className="socialMedia" />
        </a>
      </div>

      <div className="profile-footer">
        <p>© 2026 Mayur Dilip Garud</p>
      </div>
    </aside>
  );
};

export default ProfileSection;
