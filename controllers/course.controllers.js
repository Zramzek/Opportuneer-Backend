const courseService = require('../services/course.services')

exports.getAllCourse = async (req, res) => {

    const result = await courseService.getAllCourses(req, res)

    return res.status(result.status).json(result)
}

exports.addCourse = async (req, res) => {
    
    const result = await courseService.addCourse(req, res)
    
    return res.status(result.status).json(result)
}

exports.editCourse = async (req, res) => {

    const result = await courseService.editCourse(req, res)
    
    return res.status(result.status).json(result)
}

exports.deleteCourse = async (req, res) => {

    const result = await courseService.deleteCourse(req, res)

    return res.status(result.status).json(result)
}