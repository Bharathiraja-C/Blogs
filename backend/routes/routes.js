const express = require("express");
const router = express.Router();
const authController = require('../controllers/Auth');
const blogController = require('../controllers/Blog');

router.post('/signUp', authController.signUp);
router.get('/getAllBlogs', blogController.getAllBlogs);
router.post('/newBlog', blogController.createBlog); // Add this new route

module.exports = router;
