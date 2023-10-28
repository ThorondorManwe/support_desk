const express = require('express');
const router = express.Router();
const { registerUser, loginUSer, loginUser } = require('../controllers/userController');

router.post('/', registerUser);

router.post('/login', loginUser);

module.exports = router;