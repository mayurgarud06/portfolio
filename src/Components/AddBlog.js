// AddBlog.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles for the editor
import { collection,addDoc, db} from './Config/firebaseConfig'; //import firbase 
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'; // Import Firebase Storage
import blogImage from '../static/blogImages'
import "./css/AddBlog.css";

const AddBlog = ({ addBlog }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null); // State to handle uploaded image
    const [isUploading, setIsUploading] = useState(false); // To show upload progress
    const navigate = useNavigate();

    const toolbarOptions = [
      [{'header': '1' }, { 'header': '2' }, { 'font': [] }],
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
      // const selectedImage = image ? URL.createObjectURL(image) : blogImage.Blog;
      let imageUrl = blogImage.Blog;
      if (image) {
        setIsUploading(true);
        const storage = getStorage(); 
        const storageRef = ref(storage, `blogImages/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                // Handle progress
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            },
            (error) => {
                console.error('Error uploading image:', error);
                setIsUploading(false);
            },
            () => {
                // Get the download URL once the upload is complete
                getDownloadURL(uploadTask.snapshot.ref).then(async (imageUrl) => {
                  console.log('Uploaded image URL:', imageUrl);
                  await saveBlogData(imageUrl);
                    // const newBlog = {
                    //     id: Date.now(),
                    //     title,
                    //     description,
                    //     content,
                    //     image: downloadURL, // Store the download URL instead of a local path
                    // };
                    // try {
                    //     await addDoc(collection(db, 'blogs'), newBlog);
                    //     console.log('Blog added with image URL:', downloadURL);
                    //     navigate('/blog');
                    // } catch (error) {
                    //     console.error('Error adding blog to Firestore:', error);
                    // } finally {
                    //     setIsUploading(false);
                    // }
                });
            }
        );
    } else {
      await saveBlogData(imageUrl);
        // const newBlog = {
        //   id: Date.now(), // Unique ID based on timestamp
        //   title,
        //   description,
        //   content,
        //   image:  blogImage.Blog, //  Set the selected or default image
        // };
        // addBlog(newBlog); // Call the function passed from Blog
        // console.log(newBlog);
        // navigate('/blog'); // Redirect to the Blog page after adding
        // Add logic to save the blog details (e.g., sending it to a backend or storing it locally)
        // try {
        //   // Save to Firestore
        //   await addDoc(collection(db, 'blogs'), newBlog);
        //   console.log('Blog added to Firestore');
        //   navigate('/blog');
        // } catch (error) {
        //   console.error('Error adding blog to Firestore:', error);
        // }
     }
  };
  const saveBlogData = async (imageUrl) => {
    const newBlog = {
        id: Date.now(),
        title,
        description,
        content,
        image: imageUrl, // Use the uploaded image URL or default
    };
    
    try {
        await addDoc(collection(db, 'blogs'), newBlog);
        console.log('Blog added with image URL:', imageUrl);
        navigate('/blog');
    } catch (error) {
        console.error('Error adding blog to Firestore:', error);
    } finally {
        setIsUploading(false);
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
