const progressServices = require('../services/progress.services');
const jobsearchServices = require('../services/jobsearch.services');
const tesMinatServices = require('../services/jobsearch.services');

exports.getProgressDiri = async (req, res) => {
    const resultTesMinat = await tesMinatServices.getTesMinatAttempt(req,res)
    const result = await progressServices.getProgressDiri(req, res)

    return res.status(result.status, resultTesMinat.status).json(result, resultTesMinat)
}


