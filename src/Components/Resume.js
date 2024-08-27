// Projects.js
import React from 'react';
import "./css/Resume.css";

const Resume = () =>{
  
   const resumeLink ='https://docs.google.com/document/d/1kZ-Tvl1qvZ9unx0JX91519-Zsc3kNlGFLmZJomGKupg/pub?embedded=true';
  const downloadLink='https://docs.google.com/document/d/1kZ-Tvl1qvZ9unx0JX91519-Zsc3kNlGFLmZJomGKupg/export?format=pdf'
  //  const resumeLink="https://pdf.ac/1s5GZh";
  // const resumeLink="abc.pdf";

  const handleDownload = () => {
    // Trigger download
    const link = document.createElement('a');
    link.href = downloadLink;
    link.target = '_blank';
    link.download = "resume.pdf";//this may not be work
    link.click();
  };
  return(
  <div className="Resume-content">
    <div className="resume-container">
      <h2 className='resume-title'> My Resume</h2>
      <div className="iframe-container">
         {/* Resume Preview */}
        <iframe
          src={resumeLink}
          title="Resume Preview"
          width="100%"
          height="600px"
          className="resume-iframe"
        ></iframe>
      </div> 
    </div>
     {/* Download Button */}
     <button onClick={handleDownload} className="download-button">
        Download Resume
      </button>
    <h1> Skills...</h1>
    <p>
    "...And then press enter.
     We can also control how much text is generated.
      We can do that by adding a number of suffix. Such as lorem 29 to generate 29 words of diamond. Text...."
    </p>
  </div>
);
};

export default Resume;