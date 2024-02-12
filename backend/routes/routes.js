const express = require("express")
const router = express.Router()
const authController = require('../controllers/Auth')
const blogController = require('../controllers/Blog')

// contains all the .get, .post, .put, ... etc routing parts

router.post('/signUp', authController.signUp) 

router.get('/getAllBlogs', blogController.getAllBlogs)

module.exports = router