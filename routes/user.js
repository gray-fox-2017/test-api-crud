const express = require('express');
const router = express.Router()
var userController = require('../controllers/user.js');

router.post('/login',userController.login)
router.post('/users',userController.signup)

module.exports = router