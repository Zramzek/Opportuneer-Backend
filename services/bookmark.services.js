const {subcourse} = require('../models')   

exports.getBookmark = async (req, res) => {
    const userId = req.body
    const dataBookmark = await subcourse.findAll({
        where: {
            idUser: userId
        }
    })
    if(!dataBookmark){
        return {
            status: 404,
            message: "Data Bookmark Not Found"
        }
    }

    return {
        status: 200,
        data: dataBookmark,
        message: "Success Get Bookmark Data"
    }
};

exports.deleteBookmark = async (req, res) => {
    const {id} = req.params
 
    const data = await bookmark.findOne({where: {id}})

    if(!data){
        return {
            status: 404,
            message: "Data Not Found"
        }
    }

    await bookmark.destroy({where: {id}})

    return {
        status: 200,
        message: "Success Delete Data"
    }
  };
