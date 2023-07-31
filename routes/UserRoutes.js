const express = require('express');
const userController = require('../controllers/UserController');

const router = express.Router();

router.post('/register', userController.registerUser);

module.exports = router;