const {subcourse, bookmark} = require('../models')   

exports.getBookmark = async (req, res) => {
    const userId = req.user.id
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

exports.addBookmark = async(req, res) =>{
    const {idUser} = req.user.id;
    const {subCourseName} = req.params;
    const data = await subcourse.findOne({where: {subCourseName}});
  
    if(!data){
        return {
            status: 404,
            message: "Data Not Found"
        };
    };

    data = await bookmark.create({idUser, idSubCourse : data.id})

    return {
        status: 200,
        data,
        message: "Success add bookmark"
    };
}

exports.deleteBookmark = async (req, res) => {
    const {id} = req.params
 
    const data = await bookmark.findOne({where: {id}})

    if(!data){
        return {
            status: 404,
            message: "Data Not Found"
        }
    }z

    await bookmark.destroy({where: {id}})

    return {
        status: 200,
        message: "Success Delete Data"
    }
  };
