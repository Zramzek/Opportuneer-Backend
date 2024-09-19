const usersServices = require('../services/user.services');

exports.UserSignup = async (req, res) => {
    const result = await usersServices.Signup(req, res);
    console.log(req.body);
    return res.status(result.status).json({
        status:200,
        data: result.data
    });
};

exports.UserLogin = async (req, res) => {
    const result = await usersServices.Login(req);
    console.log(result);
    return res.status(result.status).json({
        status:200,
        data: result.data
    });
};

exports.UserLogout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).json({ message: 'Logout failed', error: err.message });
        }
        return res.status(200).json({ message: 'Successfully logged out' });
    });
};
