var express = require('express');
const jobSearchController  = require('../controllers/jobsearch.controllers');
const authenticateToken = require('../middleware/authToken.middleware');
const authenticateAdmin = require('../middleware/authAdmin.middleware');
var router = express.Router();

router.get('/', authenticateToken, jobSearchController.getAllJob);
router.get('/:courseName', authenticateToken, jobSearchController.getJobByCourses);
router.get('/:courseName/:jobName', authenticateToken, jobSearchController.getJobDetail);
router.post('/:courseName/:jobName', authenticateToken, jobSearchController.applyJob);

// router.post('/', authenticateToken, authenticateAdmin, jobSearchController.addJob);
// router.post('/', authenticateToken, authenticateAdmin, jobSearchController.acceptJob);
// router.put('/:id', authenticateToken, authenticateAdmin, jobSearchController.editJob);
// router.delete('/:id', authenticateToken, authenticateAdmin, jobSearchController.deleteJob);


module.exports = router;