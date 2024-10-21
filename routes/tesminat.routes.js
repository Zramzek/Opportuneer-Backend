var express = require('express');
const tesMinatController  = require('../controllers/tesminat.controllers');
const authenticateToken = require('../middleware/authToken.middleware');
const authenticateAdmin = require('../middleware/authAdmin.middleware');
var router = express.Router();

router.post('/', authenticateToken, authenticateAdmin, tesMinatController.createTesMinat);
// router.post('/attempt', authenticateToken, tesminatController.AttemptTesMinat);
// router.get('/attempts', authenticateToken, tesminatController.getTesminatAttempts);

module.exports = router;