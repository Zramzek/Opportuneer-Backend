var express = require('express');
const profileController = require('../controllers/profile.controllers');
const authenticateToken = require('../middleware/authToken.middleware');
const authenticateAdmin = require('../middleware/authAdmin.middleware');
var router = express.Router();

router.get('/', authenticateToken, profileController.getProfile);
router.put('/:id', authenticateToken, profileController.updateProfile);

router.delete('/', authenticateToken, authenticateAdmin, profileController.getProfile);

module.exports = router;