var express = require('express');
const bookmarkController  = require('../controllers/bookmark.controllers');
const authenticateToken = require('../middleware/authToken.middleware');
var router = express.Router();

router.get('/', authenticateToken, bookmarkController.getBookmark);
router.post('/:courseName', authenticateToken, bookmarkController.addBookmark);
router.delete('/:courseName/:subCourseName', authenticateToken, bookmarkController.deleteBookmark);

module.exports = router;