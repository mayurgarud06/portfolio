// Blog.js
import React from 'react';
import './css/blog.css';
import Working from './working';

const Blog = () => (
  <div className="blog-content">
    <h1>Blog</h1>
    <hr className="blog-divider" />
    <Working/>
  </div>
);

export default Blog;
