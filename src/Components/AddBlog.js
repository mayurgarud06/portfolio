// AddBlog.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles for the editor
import { collection,addDoc, getDocs ,db} from './Config/firebaseConfig'; //import firbase 
import blogImage from '../static/blogImages'
import "./css/AddBlog.css";

const AddBlog = ({ addBlog }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null); // State to handle uploaded image
    const navigate = useNavigate();

    const toolbarOptions = [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      ['link', 'image', 'video'],
      ['clean']
    ];
  
    const modules = {
      toolbar: toolbarOptions,
    };
    
    const handleImageChange = (e) => {
      if (e.target.files && e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
      // Use uploaded image or default image
      const selectedImage = image ? URL.createObjectURL(image) : blogImage.Blog;
    const newBlog = {
        id: Date.now(), // Unique ID based on timestamp
        title,
        description,
        content,
        image: selectedImage, //  Set the selected or default image
      };
      // addBlog(newBlog); // Call the function passed from Blog
      // console.log(newBlog);
      // navigate('/blog'); // Redirect to the Blog page after adding
    // Add logic to save the blog details (e.g., sending it to a backend or storing it locally)
    try {
      // Save to Firestore
      await addDoc(collection(db, 'blogs'), newBlog);
      console.log('Blog added to Firestore');
      navigate('/blog');
    } catch (error) {
      console.error('Error adding blog to Firestore:', error);
    }
  };

  return (
    <div className="add-blog">
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            className='title'
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className='title'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
            <label>Upload Blog Image (Optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        <div className="form-group">
          <label>Content</label>
          {/* <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          /> */}
           <ReactQuill
            className="custom-quill"
            value={content}
            onChange={setContent} // Quill automatically provides HTML content
            // theme="snow" // Optional: Change the theme if needed
            modules={modules} // Pass the custom toolbar modules
            placeholder="Write your blog content here..."
          />
        </div>
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
