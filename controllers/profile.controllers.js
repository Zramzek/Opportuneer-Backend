const profileServices = require('../services/profile.services');

exports.getProfile = async (req, res) => {
  const dataUser = req.user;
  return res.status(200).json({
    message: "Ini profile page",
    data: dataUser
  });
};


exports.updateProfile = async (req, res) => {
  const idUser = req.user.id; // Assuming the user ID comes from the JWT
  const { nomorHP, occupation } = req.body;

  const updatedData = {
    nomorHP,
    occupation,
  };

  const result = await profileServices.updateProfileServices(idUser, updatedData);

  res.status(result.status).json({ message: result.message });
};