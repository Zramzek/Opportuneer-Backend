const profileServices = require('../services/profile.services');
const {imageValidations} = require('../validations/image.validations');

exports.getProfile = async (req, res) => {
  const dataUser = req.user;
  console.log(req.user)
  console.log(req.body)
  return res.status(200).json({
    message: "Ini profile page",
    data: dataUser
  });
};

exports.updateProfile = async (req, res) => {
  if (req.files){
    let imageVal = imageValidations(req)
  
      if(imageVal.error){
          return res.status(400).json({
              message: imageVal.message
          })
      }
  }

  const result = await profileServices.editProfile(req, res);

  return res.status(result.status).json(result);
};