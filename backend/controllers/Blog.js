const Data = require('../models/User')

exports.getAllBlogs = async (req, res) => {
    try {
        // for example
        const data = await Data.find()
        res.status(201).json(data)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
}