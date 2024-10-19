const { saveImage } = require('../helpers/image.helpers')
const { deleteImage } = require('../helpers/image.helpers');
const {course} = require('../models')   

exports.getAllCourses = async (req, res) => {

    const data = await course.findAll();

    if(!data){
        return {
            status: 404,
            message: "Data Course not found"
        }
    }

    return {
        status: 200,
        data,
        message: "Success Get All Data"
    }
} 

exports.addCourse = async (req, res) => {
    
    try{
        const {courseName} = req.body
        const {courseImage} = req.files.courseImage
        const slug = courseName.split(' ').join('-');
        
        const imageFilePath = await saveImage(courseImage,slug, "courses")
        
        const data = await course.create({courseName, courseImage: imageFilePath})
        
        return {
            status: 201,
            data: req.body,
            message: "Success Create Data"
        }
    }catch(err){
        const {courseName} = req.body
        const data = await course.create({courseName})
      
        return {
            status: 201,
            data: req.body,
            message: "Success Create Data"
        };
    }
}

exports.editCourse = async (req, res) => {
    const {id} = req.params;
    const data = await course.findOne({where: {id}});
  
    if(!data){
        return {
            status: 404,
            message: "Data Not Found"
        };
    };
  
    const {courseName} = req.body
    const {courseImage} = req.files.courseImage
    const slug = courseName.split(' ').join('-');
  
    if(req.files){
        deleteImage(data.courseImage);
      
        const imageFilePath = await saveImage(courseImage, slug, "courses");
      
        console.log(imageFilePath);
      
        await course.update({courseName, image: courseImage}, {where: {id}});
      
        return {
            status: 200,
            data: req.body,
            message: "Success Update Data"
        };
      }else{
        await course.update({courseName}, {where: {id}});
      
        return {
            status: 200,
            data: req.body,
            message: "Success Update Data"
        };
    }
}

exports.deleteCourse = async (req, res) => {
    const {id} = req.params

    const data = await course.findOne({where: {id}})

    if(!data){
        return {
            status: 404,
            message: "Data Not Found"
        }
    }

    deleteImage(data.courseImage)

    await course.destroy({where: {id}})

    return {
        status: 200,
        message: "Success Delete Data"
    }
}