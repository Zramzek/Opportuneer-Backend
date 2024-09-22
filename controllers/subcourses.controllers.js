const subCourseService = require('../services/subcourses.services')

exports.getSubCourses = async (req, res) => {

    const result = await subCourseService.getSubCourses(req, res)

    return res.status(result.status).json(result)
}

exports.getSubCoursesDetail = async (req, res) => {

    const result = await subCourseService.getSubCoursesDetail(req, res)

    return res.status(result.status).json(result)
}

exports.addSubCourse = async (req, res) => {

    const result = await subCourseService.addSubCourse(req, res)

    return res.status(result.status).json(result)
}

exports.editSubCourse = async (req, res) => {

    const result = await subCourseService.editSubCourse(req, res)

    return res.status(result.status).json(result)
}

exports.deleteSubCourse = async (req, res) => {

    const result = await subCourseService.deleteSubCourse(req, res)

    return res.status(result.status).json(result)
}