const express = require("express");
const router = express.Router();
const authController = require('../controllers/Auth');
const blogController = require('../controllers/Blog');
const userController = require('../controllers/User')

router.get('/getUserData/:id', userController.getUserData)
router.put('/editUserData/:id', userController.editUserData)

router.post('/signUp', authController.signUp);
router.post('/logIn', authController.logIn)

router.get('/getAllBlogs', blogController.getAllBlogs);
router.get('/searchBlog/:targetString', blogController.searchBlogData)
router.post('/newBlog/:id', blogController.createBlog);
router.post('/updateBlog/:blogid/:userid', blogController.updateBlog); 


router.get('/getBlogById/:blogid', blogController.getBlogById);
router.delete('/deleteBlogById/:blogid', blogController.deleteBlogById);

module.exports = router;