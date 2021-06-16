const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/validation');

router.get('/', userController.testAPI)
router.post('/create-user', userController.createUser);
router.post('/login', userController.loginUser);
router.post('/current-user', userController.getUserByEmail);
router.patch('/update-user', userController.updateUserDetails);
//router.post('./login', userController.loginUser);

module.exports = router;