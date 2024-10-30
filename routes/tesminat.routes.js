var express = require('express');
const tesMinatController  = require('../controllers/tesminat.controllers');
const authenticateToken = require('../middleware/authToken.middleware');
const authenticateAdmin = require('../middleware/authAdmin.middleware');
var router = express.Router();

router.post('/', authenticateToken, authenticateAdmin, tesMinatController.createTesMinat);
router.post('/attempt', authenticateToken, tesMinatController.AttemptTesMinat);

module.exports = router;