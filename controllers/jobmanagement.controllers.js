const jobsearchService = require('../services/jobsearch.services')

exports.getJobByAdmin = async (req, res) => {
    const result = await jobsearchService.getJobByAdmin(req, res)

    return res.status(result.status).json(result)
}

exports.addJob = async (req, res) => {
    const result = await jobsearchService.addJob(req, res)
    
    return res.status(result.status).json(result)
}


exports.editJob = async (req, res) => {
    const result = await jobsearchService.editJob(req, res)
    
    return res.status(result.status).json(result)
}

exports.deleteJob = async (req, res) => {
    const result = await jobsearchService.deleteJob(req, res)
    
    return res.status(result.status).json(result)
}

exports.getJobByApplier = async(req, res) => {
    const result = await jobsearchService.getJobByApplier(req, res)
    
    return res.status(result.status).json(result)
}

exports.acceptJob = async (req, res) => {
    const result = await jobsearchService.acceptJob(req, res)
    
    return res.status(result.status).json(result)
}

exports.rejectJob = async (req, res) => {
    const result = await jobsearchService.rejectJob(req, res)
    
    return res.status(result.status).json(result)
}