// ProfileSection.js
import React from 'react';
import './css/ProfileSection.css';
import Images from '../static/Images';
const ProfileSection = () => {
  return (
    <div className="profile-section">
      <div className="profile-photo-container">
        <img
          src={Images.profileLogo}
          alt="Profile"
          className="profile-photo"
        />
      </div>
      <div className="profile-details">
        <h2>Mayur Garud</h2>
        <div className="role">
        <p >Software Engineer</p>
        <p>Java developer | Python</p>
        </div>
        <hr/>
        <p><img
          src={Images.mailLogo}
          alt="mail"
          className="icon"/>mayurgarud06@gmail.com</p>
        <p>
        <img
          src={Images.contactLogo}
          alt="contact"
          className="icon"/>
        9767790513</p>
        <p>
        <img
          src={Images.birthdateLogo}
          alt="birthdate"
          className="icon"/>
        13 June 2001</p>

        {/* <a href='https://www.linkedin.com/in/mayurgarud06/' style={{color:'white'}}>linkedin: mayurgarud06</a> */}
        <p><img
          src={Images.locationLogo}
          alt="location"
          className="icon"/> Pune City, India</p>
      </div>
      <div className="socialMedia-container">
      <a href="https://www.instagram.com/mayur_garud_013/" target="_blank" rel="noopener noreferrer">
      <img
          src={Images.instagramLogo}
          alt="Instagram"
          className="socialMedia"/>
        </a>
        <a href="https://www.linkedin.com/in/mayurgarud06/" target="_blank" rel="noopener noreferrer">
       <img
          src={Images.linkdInLogo}
          alt="LinkdIn"
          className="socialMedia"/>
          </a>
          <a href="https://github.com/mayurgarud06" target="_blank" rel="noopener noreferrer">
        <img
          src={Images.github}
          alt="github"
          className="socialMedia"/>
         </a>
         <a href="https://www.cloudskillsboost.google/public_profiles/71bd47c8-57b8-44f8-a3cc-fa768165bf04" target="_blank" rel="noopener noreferrer">
        <img
          src={Images.googlecloudLogo}
          alt="google Cloud"
          className="socialMedia"/>
         </a>
      </div>
      <div className="profile-footer">
        <p>© 2024 Mayur Garud</p>
      </div>
    </div>
  );
};

export default ProfileSection;
