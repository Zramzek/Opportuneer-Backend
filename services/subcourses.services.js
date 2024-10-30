const {course, subcourse, subcoursedone} = require('../models')   
const fs = require('fs')
const { saveImage } = require('../helpers/image.helpers')
const { deleteImage } = require('../helpers/image.helpers')


exports.getSubCourses = async (req, res) => {
    const {courseName} = req.params;
    
    const dataCourse = await course.findOne({where:{courseName}});
    console.log(dataCourse)
    const dataSubCourse = await subcourse.findAll({where:{idCourse: dataCourse.id}});

    if(!dataCourse){
        return {
            status: 404,
            message: "Data Course Not Found"
        }
    }
    
    if(!dataSubCourse){
        return {
            status: 404,
            message: "Data Sub Course Not Found"
        }
    }

    return {
        status: 200,
        data: dataCourse, dataSubCourse,
        message: "Success Get Detail Data"
    }
}

exports.getSubCoursesDetail = async (req, res) => {
    const {courseName, subCourseName} = req.params;
    const {idUser} = req.user.id;
    
    const dataCourse = await course.findOne({where:{courseName}});
    const dataSubCourse = await subcourse.findOne({where:{id: dataCourse.id, subCourseName}});

    if(!dataCourse){
        return {
            status: 404,
            message: "Data Course Not Found"
        }
    }
    
    if(!dataSubCourse){
        return {
            status: 404,
            message: "Data Sub Course Not Found"
        }
    }

    await subcoursedone.create({idUser, idSubCourse: dataSubCourse.id, completedAt: new Date()})

    return {
        status: 200,
        data: dataSubCourse,
        message: "Success Get Detail Data"
    }
}

exports.addSubCourse = async (req, res) => {
    const {courseName, subCourseName, description} = req.body
    const dataCourse = await course.findOne({where:{courseName}});

    if(!dataCourse){
        return {
            status: 404,
            message: "Data Course Not Found"
        }
    }

    try{
        const {subCourseImage} = req.files.subCourseImage
    
        const slug = subCourseName.split(' ').join('-');
        const imageFilePath = await saveImage(subCourseImage,slug, "subcourses")
    
        const data = await subcourse.create({idCourse: dataCourse.id, subCourseName, description, subCourseImage: imageFilePath})
    
        return {
            status: 201,
            data: req.body,
            message: "Success Create Data"
        }

    }catch(err){
        const data = await subcourse.create({idCourse: dataCourse.id,subCourseName, description})
      
        return {
            status: 201,
            data: req.body,
            message: "Success Create Data"
        };

    } 
}

exports.editSubCourse = async (req, res) => {
    const {id} = req.params;
    const data = await subcourse.findOne({where: {id}});
  
    if(!data){
        return {
            status: 404,
            message: "Data Not Found"
        };
    };
  
    const {subCourseName} = req.body
    const {subCourseImage} = req.files.image
    const slug = subCourseName.split(' ').join('-');
  
    if(req.files){
        deleteImage(data.subCourseImage);
      
        const imageFilePath = await saveImage(subCourseImage, slug, "subcourses");
      
        console.log(imageFilePath);
      
        await subcourse.update({subCourseName, image: subCourseImage}, {where: {id}});
      
        return {
            status: 200,
            data: req.body,
            message: "Success Update Data"
        };
      }else{
        await subcourse.update({subCourseName}, {where: {id}});
      
        return {
            status: 200,
            data: req.body,
            message: "Success Update Data"
        };
    }
}

exports.deleteSubCourse = async (req, res) => {
    const {id} = req.params
 
    const data = await subcourse.findOne({where: {id}})

    if(!data){
        return {
            status: 404,
            message: "Data Not Found"
        }
    }

    deleteImage(data.subCourseImage)

    await subcourse.destroy({where: {id}})

    return {
        status: 200,
        message: "Success Delete Data"
    }
}