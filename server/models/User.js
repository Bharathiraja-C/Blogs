const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 254
    },
    name: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 100
    },
    password: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 50
    },
    bio: {
        type: String
    },
    blogID: {
        type: [String],
        items: {
            type: String,
            minLength: 1,
            maxLength: 255
        }
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;