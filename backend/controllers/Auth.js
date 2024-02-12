const User = require('../models/User')

exports.signUp = async (req, res) => {
    try {
        // logic for signUp
    }
    catch (error) {
        res.status(500).send(error.message)
    }
}