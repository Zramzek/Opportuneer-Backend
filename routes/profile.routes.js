var express = require('express');
const profileController = require('../controllers/profile.controllers');
const authenticateToken = require('../middleware/authToken.middleware');
var router = express.Router();

router.get('/', authenticateToken, profileController.getProfile);
router.put('/', authenticateToken, profileController.updateProfile);

module.exports = router;