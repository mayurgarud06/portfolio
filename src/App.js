// App.js
import { React,useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'; // Importing necessary components from react-router-dom
import './App.css';
import About from './Components/About';
import Projects from './Components/Projects';
import Blog from './Components/Blog';
import ProfileSection from './Components/ProfileSection'; // Import the ProfileSection component
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import AddBlog from './Components/AddBlog';
import blogImage from './static/blogImages.js';
import FirstBlog from './blogs/FirstBlog.js';
import Working from './Components/working.js';
import 'leaflet/dist/leaflet.css';

const App = () => {
  
// const initialBlogs = [
//   {
//     id: 1,
//     title: "First Blog Post",
//     description: "An insightful post on web development trends.",
//        // content: `<p>This is the detailed content of the second blog post.</p>`,
//     content: <FirstBlog/>,
//     image: blogImage.Blog,
//   },
//   {
//     id: 2,
//     title: "Second Blog Post",
//     description: "Exploring the latest in frontend technologies.",
//     // content: `<p>This is the detailed content of the second blog post.</p>`,
//     content:<Working/>,
//     image: blogImage.Blog,
//   },
//   {
//     id: 3,
//     title: "Third Blog Post",
//     description: "Exploring the latest in frontend technologies.",
//     // content: `<p>This is the detailed content of the second blog post.</p>`,
//     content: <Working/>,
//     image: blogImage.Blog,
//   },
//   {
//     id: 4,
//     title: "Fourth Blog Post",
//     description: "Exploring the latest in Backtend technologies.",
//     // content: `<p>This is the detailed content of the second blog post.</p>`,
//     content: <Working/>,
//     image: blogImage.Blog,
//   },
//   {
//     id: 5,
//     title: "fifth Blog Post",
//     description: "Exploring the latest in Backtend technologies.",
//     // content: `<p>This is the detailed content of the second blog post.</p>`,
//     content: <Working/>,
//     image: blogImage.Blog,
//   }
//   // Add more blogs here
// ];
//   const [blogs, setBlogs] = useState(initialBlogs); // Add state for blogs

//   const addBlog = (newBlog) => {
//     setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
//   };
  return (
    <Router>
      <div className="app">
        <ProfileSection />
        <div className="main-content">
          <div className="tab-content">
            <div className="tabs">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                About
              </NavLink>
              <NavLink
                to="/resume"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Resume
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Projects
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Contact
              </NavLink>
            </div>
            <div className="content">
              <Routes>
                <Route path="/portfolio" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/add-blog" element={<AddBlog/>} /> {/* Route for AddBlog */}
                <Route path="/" element={<About />} /> {/* Default route */}
                {/* <Route path="/firstBlog" element={<FirstBlog/>} /> Default route */}
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
