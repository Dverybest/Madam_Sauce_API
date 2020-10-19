const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const checkAuth = require('../middleware/user_Auth');

router.post('/signup', userController.user_signup);
   
router.post('/login', userController.user_login);

router.delete('/:userId', checkAuth, userController.user_delete_user);

module.exports = router;