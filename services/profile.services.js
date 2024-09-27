const { user } = require('../models');
const { saveImage, deleteImage } = require('../helpers/image.helpers');
const fs = require('fs');

exports.editProfile = async (req, res) => {
  const {id} = req.params;

  const data = await user.findOne({where: {id}});

  if(!data){
      return {
          status: 404,
          message: "Data Not Found"
      };
  };

  const {username, nomorHP, occupation, fotoProfil} = req.body;
  const slug = username.split(' ').join('-');

  if(req.files){
      deleteImage(data.fotoProfil);
    
      const imageFilePath = await saveImage(req.files.image, slug, "profile");
    
      console.log(imageFilePath);
    
      await user.update({username, nomorHP, occupation, image: fotoProfil}, {where: {id}});
    
      return {
          status: 200,
          data: req.body,
          message: "Success Update Data"
      };
    }else{
      await user.update({username, nomorHP, occupation}, {where: {id}});
    
      return {
          status: 200,
          data: req.body,
          message: "Success Update Data"
      };
  }

};

exports.deleteProfile = async (req, res) => {
    const {id} = req.params

    const data = await user.findOne({where: {id}})

    if(!data){
        return {
            status: 404,
            message: "Data Not Found"
        }
    }

    await user.destroy({where: {id}})

    return {
        status: 200,
        message: "Success Delete Data"
    }
};
