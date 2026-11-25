import React, { useState } from "react";
import './css/SkillSection.css';
import Images from '../static/Images';

const skillData = [
  { name: "Java", image: Images.Java, categories: ["Backend"] },
  { name: "Spring Boot", image: Images.springboot, categories: ["Backend"] },
  { name: "Microservices", image: Images.microService, categories: ["Backend"] },
  { name: "REST APIs", image: Images.api, categories: ["Backend"] },
  { name: "Python", image: Images.python, categories: ["Backend"] },
  { name: "MySQL", image: Images.Mysql, categories: ["Data & Messaging"] },
  { name: "Redis", image: Images.redis, categories: ["Data & Messaging"] },
  { name: "Kafka", image: Images.kafka, categories: ["Data & Messaging"] },
  { name: "AWS", image: Images.gcp, categories: ["Cloud & DevOps"] },
  { name: "Google Cloud", image: Images.gcp, categories: ["Cloud & DevOps"] },
  { name: "Docker", image: Images.docker, categories: ["Cloud & DevOps"] },
  { name: "Kubernetes", image: Images.docker, categories: ["Cloud & DevOps"] },
  { name: "Jenkins / CI-CD", image: Images.git, categories: ["Cloud & DevOps"] },
  { name: "Git", image: Images.git, categories: ["Tools"] },
  { name: "Postman", image: Images.postman, categories: ["Tools"] },
  { name: "Swagger", image: Images.swagger, categories: ["Tools"] },
  { name: "React.JS", image: Images.reactLogo, categories: ["Frontend"] },
  { name: "JavaScript", image: Images.JavaScript, categories: ["Frontend"] },
  { name: "HTML", image: Images.html, categories: ["Frontend"] },
  { name: "CSS", image: Images.css, categories: ["Frontend"] },
];

const categories = [
  "All",
  "Backend",
  "Data & Messaging",
  "Cloud & DevOps",
  "Tools",
  "Frontend",
];

const SkillsTabs = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skillData
      : skillData.filter((skill) => skill.categories.includes(activeCategory));

  return (
    <div>
      <div className="skills-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? "active-tab" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="skills">
        {filteredSkills.map((skill) => (
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
