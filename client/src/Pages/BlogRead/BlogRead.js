import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BlogRead.css';
import axios from 'axios'

function BlogPostPage() {
  // Example blog post data
  let { id } = useParams();

  const [blogPost, setBlogPost] = useState({})

  useEffect(() => {
    const getBlogData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/getBlogById/${id}`)
        if(res.status === 200){
          setBlogPost(res.data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    getBlogData()
  },[])

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{blogPost.title}</h1>
        <p><strong>Author:</strong> {blogPost.author}</p>
        <p><strong>Date Modified:</strong> {blogPost.createdAt}</p>
        <div className="blog-content">
          <p style={{whiteSpace: "pre-wrap"}}>{blogPost.content}</p>
          <div className="blog-buttons">
            <button>Edit</button>
            <button>Delete</button>
            <a href='/'><button style={{marginLeft:'575px'}}>Back</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPostPage;
