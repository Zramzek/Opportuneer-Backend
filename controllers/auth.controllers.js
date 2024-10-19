const authServices = require('../services/auth.services');

exports.Signup = async (req, res) => {
    const result = await authServices.Signup(req, res);
    console.log(req.body);
    return res.status(result.status).json({
        status:200,
        data: result.data
    });
};

exports.Login = async (req, res) => {
    const result = await authServices.Login(req);
    console.log(result);
    return res.status(result.status).json({
        status:200,
        data: result.data
    });
};
