// Projects.js
import React from 'react';
import './css/project.css';
import Card from "./Card";
import projectImage from "../static/projectImages";

const Projects = () => (
  <div className="project-content">
    <h1>Projects</h1>
    <hr className="project-divider" />
    <div className='cards-container'>
      <Card
        image={projectImage.portfolio}
        title="Portfolio"
        description="Personal portfolio — projects, resume, and contact."
        link="https://mayurgarud06.github.io/portfolio/"
        isProject={true}
      />
      <Card
        image={projectImage.taskManagement}
        title="Task Management"
        description="Organize and track your day-to-day tasks."
        link="https://tasks-management-mg.netlify.app/"
        isProject={true}
      />
      <Card
        image={projectImage.tictactoe}
        title="Tic-Tac-Toe"
        description="Classic game built with HTML, CSS, and JavaScript."
        link="https://tic-tac-toe-mayur-garud.netlify.app/"
        isProject={true}
      />
      <Card
        image={projectImage.textUtils}
        title="Text Utils"
        description="Quick tools for everyday text operations."
        link="https://text-utils-mayurgarud.netlify.app/"
        isProject={true}
      />
    </div>
  </div>
);

export default Projects;
