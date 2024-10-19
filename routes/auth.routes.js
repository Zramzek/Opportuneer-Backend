var express = require('express');
const authController  = require('../controllers/auth.controllers');
var router = express.Router();

router.post('/login', authController.Login);
router.post('/signup', authController.Signup);

module.exports = router;