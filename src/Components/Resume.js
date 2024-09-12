// Projects.js
import React, { useEffect ,useState} from 'react';
import "./css/Resume.css";
import { ref, getDownloadURL } from 'firebase/storage'; // Import Firebase Storage functions
import { storage } from './Config/firebaseConfig.js'; // Import Firebase storage
import Images from '../static/Images.js';

const Resume = () =>{
  
  //  const resumeLink ="https://docs.google.com/document/d/1kZ-Tvl1qvZ9unx0JX91519-Zsc3kNlGFLmZJomGKupg/pub?embedded=true";
  //  const downloadLink="https://docs.google.com/document/d/1kZ-Tvl1qvZ9unx0JX91519-Zsc3kNlGFLmZJomGKupg/export?format=pdf";
  const [resumeUrl, setResumeUrl] = useState('');
  const downloadLink = resumeUrl; // This will be the URL from Firebase for download

  // Fetch resume URL from Firebase Storage
  useEffect(() => {
    const fetchResume = async () => {
      try {
        const resumeRef = ref(storage, `gs://portfolioblogstorage.appspot.com/Resume/Mayur Dilip Garud 24_06_2024.pdf`); // Replace with your storage path
        const url = await getDownloadURL(resumeRef);
        setResumeUrl(url); // Set the resume URL from Firebase
      } catch (error) {
        console.error('Error fetching resume from Firebase Storage:', error);
      }
    };

    fetchResume();
  }, []);
  
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
        <iframe
          src={downloadLink}
          title="Resume Preview"
          width="100%"
          height="600px"
          className="resume-iframe"
        ></iframe>
      </div> 
    </div>
     
     <button onClick={handleDownload} className="download-button">
        Download Resume
      </button>
    <h1> Skills...</h1>
   <div className='skill_container'>
      <div className='skills'>
        <div className="skill-item"><img src={Images.Java}/><p>Java</p></div>
        <div className="skill-item"><img src={Images.python}/><p>Python</p></div>
        <div className="skill-item"><img src={Images.Mysql}/><p>MySQL</p></div>
        <div className="skill-item"><img src={Images.reactLogo}/><p>React.JS</p></div>
        <div className="skill-item"><img src={Images.springboot}/><p>Spring Boot</p></div>
        <div className="skill-item"><img src={Images.git}/><p>GIT</p></div>
        <div className="skill-item"><img src={Images.github}/><p>GitHub</p></div>
        <div className="skill-item"><img src={Images.JavaScript}/><p>JavaScript</p></div>
        <div className="skill-item"><img src={Images.html}/><p>HTML</p></div>
        <div className="skill-item"><img src={Images.firebase}/><p>Firebase</p></div>
        <div className="skill-item"><img src={Images.gcp}/><p>Google Cloud Platform</p></div>
        <div className="skill-item"><img src={Images.docker}/><p>Docker Container</p></div>
        <div className="skill-item"> <img src={Images.api}/><p>Rest API</p></div>
        <div className="skill-item"><img src={Images.swagger}/><p>swagger Documentation API</p></div>
        <div className="skill-item"><img src={Images.postman}/><p>Postman API</p></div>
      </div>   
    </div>
    
  </div>
);
};

export default Resume;