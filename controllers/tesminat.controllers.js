const tesMinatServices = require('../services/tesminat.services');

exports.createTesMinat = async (req, res) => {
    const result = await tesMinatServices.createTesMinat(req, res)

    return res.status(result.status).json(result)
};

exports.AttemptTesMinat = async (req, res) => {
    const result = await tesMinatServices.createTeAttemptTesMinatsMinat(req, res)

    return res.status(result.status).json(result)
};

exports.getTesMinatAttempt = async (req, res) => {
    const result = await tesMinatServices.getTesMinatAttempt(req, res)

    return res.status(result.status).json(result)
};