const User = require('../models/User')
const Blog = require('../models/Blog');

exports.getUserData = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const blogs = await Promise.all(user.blogID.map(async (blogId) => {
            try {
                return await Blog.findById(blogId);
            } catch (error) {
                console.error(`Error finding blog with ID ${blogId}:`, error);
                return null; // Return null if blog is not found
            }
        }));

        // Filter out null values from the blogs array
        const validBlogs = blogs.filter(blog => blog !== null);

        user.set('blogs', validBlogs);
        const responseData = {
            userData: user,
            blogData: validBlogs
        }
        res.status(200).json(responseData);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.editUserData = async (req, res) => {
    try {
        const userId = req.params.id;
        const userDataToUpdate = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        Object.assign(user, userDataToUpdate);
        await user.save();

        res.status(200).json({ message: 'User data updated successfully', user });
    } catch (error) {
        res.status(500).send(error.message);
    }
}