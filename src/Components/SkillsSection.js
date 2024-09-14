import React, { useState } from "react";
import './css/SkillSection.css';
import Images from '../static/Images';  // Import your images properly

const skillData = [
  { name: "Java", image: Images.Java, categories: ["Programming Languages"] },
  { name: "Python", image: Images.python, categories: ["Programming Languages"] },
  { name: "MySQL", image: Images.Mysql, categories: ["Database Technologies"] },
  { name: "React.JS", image: Images.reactLogo, categories: ["Frontend Development"] },
  { name: "Spring Boot", image: Images.springboot, categories: ["Backend Development"] },
  { name: "GIT", image: Images.git, categories: ["DevOps & Tools"] },
  { name: "GitHub", image: Images.github, categories: ["DevOps & Tools"] },
  { name: "JavaScript", image: Images.JavaScript, categories: ["Programming Languages", "Frontend Development"] },
  { name: "HTML", image: Images.html, categories: ["Frontend Development"] },
  { name: "CSS", image: Images.css, categories: ["Frontend Development"] },
  { name: "Firebase", image: Images.firebase, categories: ["Backend Development", "Cloud Technologies"] },
  { name: "Google Cloud Platform", image: Images.gcp, categories: ["Cloud Technologies"] },
  { name: "Docker Container", image: Images.docker, categories: ["DevOps & Tools"] },
  { name: "Rest API", image: Images.api, categories: ["Backend Development", "API & Documentation"] },
  { name: "Swagger Documentation API", image: Images.swagger, categories: ["API & Documentation"] },
  { name: "Postman API", image: Images.postman, categories: ["DevOps & Tools"] }
];

const categories = [
  "All",
  "Programming Languages",
  "Frontend Development",
  "Backend Development",
  "Database Technologies",
  "DevOps & Tools",
  "Cloud Technologies",
  "API & Documentation"
];

const SkillsTabs = () => {
    const [activeCategory, setActiveCategory] = useState("All");
  
    // Filter skills based on the active category
    const filteredSkills =
      activeCategory === "All"
        ? skillData
        : skillData.filter(skill => skill.categories.includes(activeCategory));
  
    return (
      <div>
        {/* Category Tabs */}
        <div className="">
        <div className="skills-tabs">
          {categories.map(category => (
            <button 
              key={category}
              className={activeCategory === category ? "active-tab" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
    </div>
        
  
        {/* Skills Grid */}
        <div className="skills">
          {filteredSkills.map(skill => (
            <div key={skill.name} className="skill-item">
              <img src={skill.image} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default SkillsTabs;
  