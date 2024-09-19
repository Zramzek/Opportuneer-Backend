var express = require('express');
const userController  = require('../controllers/user.controllers');
var router = express.Router();

router.post('/login', userController.UserLogin);
router.post('/signup', userController.UserSignup);

module.exports = router;