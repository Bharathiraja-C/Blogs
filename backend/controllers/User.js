const User = require('../models/User')
const Blog = require('../models/Blog');

exports.getUserData = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const blogIds = user.blogID;
        const blogs = await Blog.find({ _id: { $in: blogIds } });
        user.blogs = blogs;
        res.status(200).json(user);
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