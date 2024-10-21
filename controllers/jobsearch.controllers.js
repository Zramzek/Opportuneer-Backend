const jobSearchService = require('../services/jobsearch.services')

exports.getAllJob = async (req, res) => {

    const result = await jobSearchService.getAllJob(req, res)

    return res.status(result.status).json(result)
}

exports.getJobByCourses = async (req, res) => {
    
    const result = await jobSearchService.getJobByCourses(req, res)
    
    return res.status(result.status).json(result)
}

exports.getJobDetail = async (req, res) => {

    const result = await jobSearchService.getJobDetail(req, res)
    
    return res.status(result.status).json(result)
}

exports.applyJob = async (req, res) => {

    const result = await jobSearchService.applyJob(req, res)
    
    return res.status(result.status).json(result)
}

exports.addJob = async (req, res) => {

    const result = await jobSearchService.addJob(req, res)
    
    return res.status(result.status).json(result)
}