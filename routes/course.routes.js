var express = require('express');
const courseController  = require('../controllers/course.controllers');
const subCourseController  = require('../controllers/subcourses.controllers');
const authenticateToken = require('../middleware/authToken.middleware');
const authenticateAdmin = require('../middleware/authAdmin.middleware');
var router = express.Router();

router.get('/', authenticateToken, courseController.getAllCourse);
router.get('/:courseName', authenticateToken, subCourseController.getSubCourses);
router.get('/:courseName/:subCourseName', authenticateToken, subCourseController.getSubCoursesDetail);

router.post('/', authenticateToken, authenticateAdmin, courseController.addCourse);
router.put('/:id', authenticateToken, authenticateAdmin, courseController.editCourse);
router.delete('/:id', authenticateToken, authenticateAdmin, courseController.deleteCourse);

router.post('/:courseName/', authenticateToken, authenticateAdmin, subCourseController.addSubCourse);
router.put('/:courseName/:id', authenticateToken, authenticateAdmin, subCourseController.editSubCourse);
router.delete('/:courseName/:id', authenticateToken, authenticateAdmin, subCourseController.deleteSubCourse);

module.exports = router;