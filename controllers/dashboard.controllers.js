const dashboardServices = require('../services/dashboard.services');

exports.guestDashboard = async (req, res) => {
  return res.status(200).json({
    message: "Guest Dashboard",
  });
};

exports.userDashboard = async (req, res) => {
  const userId = req.user.id;
  const result = await dashboardServices.getUser(userId);

  return res.status(result.status).json({
    status:200,
    message: "User Dashboard"
});

};

exports.dashboard = async (req, res) => {
  const userId = req.user;
  const result = await dashboardServices.getUserFeatures(userId);

  if(result){
    return res.status(200).json({
      message: "User Dashboard",
      data: result.data
    });
  } else {
    return res.status(200).json({
      message: "Guest Dashboard",
    });
  }
};