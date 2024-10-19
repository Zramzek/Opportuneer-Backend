var express = require('express');
const jobSearchController  = require('../controllers/jobsearch.controllers');
const authenticateToken = require('../middleware/authToken.middleware');
var router = express.Router();

router.get('/', authenticateToken, jobSearchController.getAllJob);
router.get('/:courseName', authenticateToken, jobSearchController.getJobByCourses);
router.get('/:jobName', authenticateToken, jobSearchController.getJobDetail);
router.post('/:jobName', authenticateToken, jobSearchController.applyJob);


module.exports = router;