const tesMinatServices = require('../services/tesminat.services');

exports.createTesMinat = async (req, res) => {
    const result = await tesMinatServices.createTesMinat(req, res)

    return res.status(result.status).json(result)
};
