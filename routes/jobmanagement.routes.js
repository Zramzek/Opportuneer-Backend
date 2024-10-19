var express = require('express');
const jobSearchController  = require('../controllers/jobsearch.controllers');
const authenticateToken = require('../middleware/authToken.middleware');
const authenticateAdmin = require('../middleware/authAdmin.middleware');
var router = express.Router();

router.get('/jobIndex', authenticateToken, authenticateAdmin, jobSearchController.getJobByAdmin);
router.post('/jobIndex', authenticateToken, authenticateAdmin, jobSearchController.addJob);
router.put('/jobIndex/:id', authenticateToken, authenticateAdmin, jobSearchController.editJob);
router.delete('/jobIndex/:id', authenticateToken, authenticateAdmin, jobSearchController.deleteJob);
router.get('/applier', authenticateToken, authenticateAdmin, jobSearchController.getJobByApplier);
router.post('/applier/:id', authenticateToken, authenticateAdmin, jobSearchController.acceptJob);
router.post('/applier/:id', authenticateToken, authenticateAdmin, jobSearchController.rejectJob);