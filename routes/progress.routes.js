var express = require('express');
const progressController  = require('../controllers/progress.controllers');
const jobsearchController  = require('../controllers/jobsearch.controllers');
const authenticateToken = require('../middleware/authToken.middleware');
var router = express.Router();

router.get('/', authenticateToken, progressController.getProgressDiri);
router.get('/getJob', authenticateToken, progressController.getProgressDiri);

module.exports = router;