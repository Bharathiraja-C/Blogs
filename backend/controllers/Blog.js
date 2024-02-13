const Blog = require('../models/Blog'); // Import the Blog model

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
        res.status(201).json(savedBlog);
    } catch (error) {
        res.status(500).send(error.message);
    }
};