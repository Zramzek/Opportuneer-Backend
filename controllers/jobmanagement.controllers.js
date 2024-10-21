const jobManagementService = require('../services/jobmanagement.services')

exports.getJobByAdmin = async (req, res) => {
    const result = await jobManagementService.getJobByAdmin(req, res)

    return res.status(result.status).json(result)
}

exports.addJob = async (req, res) => {
    const result = await jobManagementService.addJob(req, res)
    
    return res.status(result.status).json(result)
}


exports.editJob = async (req, res) => {
    const result = await jobManagementService.editJob(req, res)
    
    return res.status(result.status).json(result)
}

exports.deleteJob = async (req, res) => {
    const result = await jobManagementService.deleteJob(req, res)
    
    return res.status(result.status).json(result)
}

exports.getJobByApplier = async(req, res) => {
    const result = await jobManagementService.getJobByApplier(req, res)
    
    return res.status(result.status).json(result)
}

exports.processJob = async (req, res) => {
    const { action } = req.body; // 'accept' or 'reject'

    if (!action === 'accept' || !action === 'reject') {
        return res.status(400).json({ error: 'Action is required' });
    }

    const result = 
      action === 'accept' 
        ? await jobManagementService.acceptJob(req) 
        : await jobManagementService.rejectJob(req);

    return res.status(result.status).json(result);
}