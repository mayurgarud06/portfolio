import React from 'react';
import "./css/Resume.css";
import SkillsTabs from './SkillsSection.js';

const LOCAL_RESUME = `${process.env.PUBLIC_URL}/resume/Mayur_Garud_Resume.pdf`;

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = LOCAL_RESUME;
    link.download = 'Mayur_Garud_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="Resume-content">
      <div className="resume-container">
        <h2 className="resume-title">My Resume</h2>
        <p className="resume-meta">
          Mayur Dilip Garud · Software Engineer · Updated Nov 2026
        </p>
        <div className="iframe-container">
          <iframe
            src={LOCAL_RESUME}
            title="Resume Preview"
            width="100%"
            height="600px"
            className="resume-iframe"
          />
        </div>
      </div>

      <button onClick={handleDownload} className="download-button">
        Download Resume
      </button>

      <h1>Skills</h1>
      <div className="skill_container">
        <SkillsTabs />
      </div>
    </div>
  );
};

export default Resume;
