// App.js
import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import Projects from './Components/Projects';
import Blog from './Components/Blog';
import ProfileSection from './Components/ProfileSection'; // Import the ProfileSection component
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import 'leaflet/dist/leaflet.css';


const App = () => {
  const [currentTab, setCurrentTab] = useState('about');

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  const renderContent = () => {
    switch (currentTab) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'blog':
        return <Blog />;
      case 'resume':
        return <Resume/>
      case 'contact':
        return <Contact/>
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <ProfileSection />
      <div className="main-content">
        <div className="tab-content">
          <div className="tabs">
            <button
              className={currentTab === 'about' ? 'active' : ''}
              onClick={() => handleTabChange('about')}
            >
              About
            </button>
            <button
              className={currentTab === 'resume' ? 'active' : ''}
              onClick={() => handleTabChange('resume')}
            >
              Resume
            </button>
            <button
              className={currentTab === 'projects' ? 'active' : ''}
              onClick={() => handleTabChange('projects')}
            >
              Projects
            </button>
            <button
              className={currentTab === 'blog' ? 'active' : ''}
              onClick={() => handleTabChange('blog')}
            >
              Blog
            </button>
            <button
              className={currentTab === 'contact' ? 'active' : ''}
              onClick={() => handleTabChange('contact')}
            >
              Contact
            </button>
          </div>
          <div className="content">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
