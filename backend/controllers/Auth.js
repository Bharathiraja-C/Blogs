const User = require('../models/User');

exports.signUp = async (req, res) => {
    const { email, name, password, bio, blogID } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(401).json({ error: 'Email already exists' });
        }

        const newUser = new User({ email, name, password, bio, blogID });
        await newUser.save();
        
        res.status(201).json({ message: 'User signed up successfully' });

    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.logIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email ID' });
        }

        if (password !== user.password) {
            return res.status(402).json({ error: 'Invalid password' });
        }

        res.status(201).json({ message: 'Login successful', id: user._id});

    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};