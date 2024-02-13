import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BlogRead.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function BlogPostPage() {
  // Example blog post data
  let { id } = useParams();
  const navigate = useNavigate()

  const [blogPost, setBlogPost] = useState({})

  useEffect(() => {
    const getBlogData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/getBlogById/${id}`)
        if(res.status === 200){
          setBlogPost(res.data)
        }
      } catch (error) {
        navigate('/')
      }
    }

    getBlogData()
  },[])

  const editBlog = async () => {
    sessionStorage.setItem('editId', id)
    navigate('/newBlog')
  }

  const deleteBlog = async () => {
    try {
      const res = await axios.delete(`http://localhost:5000/deleteBlogById/${id}`)
      if(res.status === 200){
        navigate(`/User/${localStorage.getItem('id')}`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{blogPost.title}</h1>
        <p><strong>Author:</strong> {blogPost.author}</p>
        <p><strong>Date Modified:</strong> {blogPost.createdAt}</p>
        <div className="blog-content">
          <p style={{whiteSpace: "pre-wrap"}}>{blogPost.content}</p>
          <div className="blog-buttons">
            <button onClick={editBlog}>Edit</button>
            <button onClick={deleteBlog}>Delete</button>
            <button style={{marginLeft:'575px'}}>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPostPage;
