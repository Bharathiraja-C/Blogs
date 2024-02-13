import React from 'react';
import './BlogRead.css';

function BlogPostPage() {
  // Example blog post data
  const blogPost = {
    title: "Sample Blog Post",
    author: "John Doe",
    dateModified: "February 12, 2024",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel metus nec nunc suscipit ultricies. Nam sed justo ut odio suscipit fringilla. Integer vitae nisl non felis consequat auctor. Mauris non elit metus. Cras eu tellus vitae velit aliquet tempor. Morbi non fermentum quam. Sed tincidunt dui nec est rutrum suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at ligula eu mauris feugiat pretium. Donec id orci vitae lacus volutpat dictum sed in elit. Nulla facilisi. Nam vel justo nec nunc congue eleifend non nec odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel metus nec nunc suscipit ultricies. Nam sed justo ut odio suscipit fringilla. Integer vitae nisl non felis consequat auctor. Mauris non elit metus. Cras eu tellus vitae velit aliquet tempor. Morbi non fermentum quam. Sed tincidunt dui nec est rutrum suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at ligula eu mauris feugiat pretium. Donec id orci vitae lacus volutpat dictum sed in elit. Nulla facilisi. Nam vel justo nec nunc congue eleifend non nec odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel metus nec nunc suscipit ultricies. Nam sed justo ut odio suscipit fringilla. Integer vitae nisl non felis consequat auctor. Mauris non elit metus. Cras eu tellus vitae velit aliquet tempor. Morbi non fermentum quam. Sed tincidunt dui nec est rutrum suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at ligula eu mauris feugiat pretium. Donec id orci vitae lacus volutpat dictum sed in elit. Nulla facilisi. Nam vel justo nec nunc congue eleifend non nec odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
  };

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{blogPost.title}</h1>
        <p><strong>Author:</strong> {blogPost.author}</p>
        <p><strong>Date Modified:</strong> {blogPost.dateModified}</p>
        <div className="blog-content">
          <p>{blogPost.content}</p>
          <a href='/'><button>Back</button></a>
        </div>
      </div>
    </div>
  );
}

export default BlogPostPage;
