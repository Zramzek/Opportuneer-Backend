var express = require('express');
const dashboardController  = require('../controllers/dashboard.controllers');
const authenticateToken = require('../middleware/authToken.middleware');
var router = express.Router();

router.get('/', dashboardController.guestDashboard);
router.get('/dashboard', authenticateToken, dashboardController.userDashboard);

module.exports = router;