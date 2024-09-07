// Blog.js
import React, { useState } from 'react';
import './css/blog.css';
import './css/AddBlog.css';

import Card from './Card';
import { Link } from 'react-router-dom';
import blogImage from '../static/blogImages';


const Blog = ({ blogs, addBlog }) => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleReadBlog = (index) => {
    setSelectedBlog(blogs[index]);
    setCurrentIndex(index);
  };

  const handleBackToBlogs = () => {
    setSelectedBlog(null);
    setCurrentIndex(null);
  };

  const handleNextBlog = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < blogs.length) {
      setSelectedBlog(blogs[nextIndex]);
      setCurrentIndex(nextIndex);
    }
  };
  const handlePrevBlog =() =>{
    const prevIndex = currentIndex -1;
    if (prevIndex >= 0) {
      setSelectedBlog(blogs[prevIndex]);
      setCurrentIndex(prevIndex);
    }
  };
  return (
    <div className="blog-content">
      <h1>Blog</h1>
      <hr className="blog-divider" />
      <Link to="/add-blog" className="add-blog-button">
        Add New Blog
      </Link>
      {selectedBlog ? (
        // Render the selected blog content
        <div className="blog-details">
          <h2>{selectedBlog.title}</h2>
          {/* <div dangerouslySetInnerHTML={{ __html: selectedBlog.content }} /> */}
          {selectedBlog.content} 
          <div className="button-container">
            <button onClick={handleBackToBlogs} className="back-button">
              Back to Blogs
            </button>
            <button
              onClick={handlePrevBlog}
              className={`prev-button ${currentIndex === 0 ? 'disabled' : ''}`}
              disabled={currentIndex === 0}
            >
              previous
            </button>
            <button
              onClick={handleNextBlog}
              className={`next-button ${currentIndex === blogs.length - 1 ? 'disabled' : ''}`}
              disabled={currentIndex === blogs.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        // Render the blog cards
        <div className="cards-container">
          {blogs.map((blog, index) => (
            <Card
              key={blog.id}
              image={blog.image}
              title={blog.title}
              description={blog.description}
              link="#"
              isProject={false}
              onClick={() => handleReadBlog(index)} // When the card is clicked, show the blog content
            />
          ))} 
        </div>
      )}
    </div>
  );
};

export default Blog;
