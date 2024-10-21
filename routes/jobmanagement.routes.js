var express = require('express');
const jobManagementController  = require('../controllers/jobmanagement.controllers');
const authenticateToken = require('../middleware/authToken.middleware');
const authenticateAdmin = require('../middleware/authAdmin.middleware');
var router = express.Router();

router.get('/', authenticateToken, authenticateAdmin, jobManagementController.getJobByAdmin);
router.post('/', authenticateToken, authenticateAdmin, jobManagementController.addJob);
router.put('/:id', authenticateToken, authenticateAdmin, jobManagementController.editJob);
router.delete('/:id', authenticateToken, authenticateAdmin, jobManagementController.deleteJob);
router.get('/applier', authenticateToken, authenticateAdmin, jobManagementController.getJobByApplier);
router.put('/applier/:id', authenticateToken, authenticateAdmin, jobManagementController.processJob);

module.exports = router;