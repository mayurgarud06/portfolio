// App.js
import React from 'react';
import { HashRouter as Router, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Projects from './Components/Projects';
import Blog from './Components/Blog';
import ProfileSection from './Components/ProfileSection';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import AddBlog from './Components/AddBlog';
import 'leaflet/dist/leaflet.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <ProfileSection />
        <div className="main-content">
          <div className="tab-content">
            <nav className="tabs" aria-label="Primary">
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                About
              </NavLink>
              <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')}>
                Resume
              </NavLink>
              <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
                Projects
              </NavLink>
              <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : '')}>
                Blog
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                Contact
              </NavLink>
            </nav>
            <div className="content">
              <Routes>
                <Route path="/portfolio" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/add-blog" element={<AddBlog />} />
                <Route path="*" element={<Navigate to="/about" />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
