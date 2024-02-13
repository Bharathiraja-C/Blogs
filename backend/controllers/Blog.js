const Blog = require('../models/Blog'); // Import the Blog model
const  User= require('../models/User') // import the user model to append blogID

exports.getAllBlogs = async (req, res) => {
    try {
        const data = await Blog.find();
        res.status(201).json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.createBlog = async (req, res) => {
    try {
        const { title, author, content } = req.body; // Assuming your frontend sends title, author, and content
        const newBlog = new Blog({ title, author, content });
        const savedBlog = await newBlog.save();

        // Update User's blogID array with the created blog's _id
        const userId = newBlog._id;  // Assuming you have user information in the request
        //console.log(JSON.stringify(newBlog._id) ) ;
            console.log(User) ;

            await User.findByIdAndUpdate(
                req.params.id,
                { $push: { blogID: userId } },
                { new: true } // Return the updated user document
              );
                                   
        res.status(201).json(savedBlog);
    } catch (error) {
        res.status(500).send(error.message);
    }
};



exports.updateBlog = async (req, res) => {
    try {
      const { title, author, content } = req.body; // Assuming updated data is in req.body
      const blogId = req.params.blogid; // Extract blog ID from URL parameters
  
      // Find the existing blog document
      const blog = await Blog.findById(blogId);
  
      if (!blog) {
        return res.status(404).send('Blog not found');
      }
     else{
  
      // Update the blog fields
      blog.title = title;
      blog.author = author;
      blog.content = content;
  
      // Save the updated blog
      const updatedBlog = await blog.save();
  
      res.status(200).json(updatedBlog);
     }
    } 
    catch (error) {
      res.status(500).send(error.message);
    }
  };
