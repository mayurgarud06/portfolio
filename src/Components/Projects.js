// Projects.js
import React from 'react';
import './css/project.css';
import Working from "./working";
import Card from "./Card";
import projectImage from "../static/projectImages";


const Projects = () => (
  <div className="project-content">
    <h1>Projects</h1>
    <hr className="project-divider" />
    {/* <Working/> */}
    <div className='cards-container'>
      <Card
        image={projectImage.portfolio}
        title="Portfolio"
        description="this is responsive portfolio website ."
        link="https://mayurgarud06.github.io/portfolio/" 
        isProject={true}
      />
      <Card
        image={projectImage.taskManagement}
        title="Task Management app"
        description="It will give you access to mange your tasks"
        link="https://tasks-management-mg.netlify.app/" 
        isProject={true}
      />
      <Card
        image={projectImage.tictactoe}
        title="Tic-Tac-Toe "
        description="Tic-Tac-Toe using HTML , CSS and JavaScript "
        link="https://tic-tac-toe-mayur-garud.netlify.app/"
        isProject={true}
      />
      <Card
        image={projectImage.textUtils}
        title="Text-Utils"
        description="It helps to manage text operations"
        link="https://text-utils-mayurgarud.netlify.app/"
        isProject={true}
      />
    </div>
  </div>
);

export default Projects;
