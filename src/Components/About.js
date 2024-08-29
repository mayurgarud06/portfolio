// About.js
import React from 'react';
import './css/About.css';
import TestimonialCard from './TestimonialCard';
import Images from '../static/Images.js';

const About = () => (
  <div className="about-content">
    <h1 >About Me</h1>
    <hr className="about-divider" />
    <p>
A competent Java Developer with nearly 2 years of exposure in managing 
overall software development life cycle involving requirement analysis, 
system study, designing, architecture, testing, programming, coding, debugging, defect management & documentation
 Skilled in designing customized IT products for high profile clients;
 </p>
<p>"capability to interface with clients, suggest viable software solutions and cultivate 
relations with them for securing repeat business."</p>

<p>"Hands-on experience in analyzing information system needs, evaluating enduser requirements, custom designing solutions and troubleshooting for 
complex information systems management."
</p>
<p>
"Proficient in modern development tools, cloud technologies, and database
management, committed to delivering high-quality software solutions that 
drive results."
</p>
    <h1> what I am Doing ...</h1>
    <p>
    "With 2 years of professional experience as a backend developer specializing in Java, 
    I am now expanding my expertise by focusing on frontend technologies, particularly ReactJS. 
    This transition is part of my journey to becoming a well-rounded full-stack developer, 
    enabling me to deliver complete solutions that seamlessly integrate both
    backend and frontend functionalities."
    </p>
    <h1> Testomonies ...</h1>
    <div className="testimonial-card-container">
    <TestimonialCard
          name="John Doe"
          details="Software Engineer at xyz"
          photo={Images.personLogo}
          testimonial="This person is fantastic to work with and always delivers quality work on time."
        />
        <TestimonialCard
          name="Jane Smith"
          details="Product Manager at ABC"
          photo={Images.personLogo}
          testimonial="A great collaborator who brings out the best in others."
        />
        <TestimonialCard
          name="Mike Johnson"
          details="Designer at DEF"
          photo={Images.personLogo}
          testimonial="An amazing designer with a sharp eye for detail."
        />
      </div>
    <h1> Clients</h1>
     <p>
       we are providing  better and fast delivery, creativity and quick resolutions.
       Nowday's with positivity I am searching for honest clients for varius technologies
       I will be do update once I will have nice one's.
     </p>

  </div>
  
);

export default About;
