const { where } = require('sequelize');
const {user, course, jobsearch, detailjob, jobapplier} = require('../models');

exports.getAllJob = async (req, res) => {

    const data = await jobsearch.findAll({where:{available: true}});

    if(!data){
        return {
            status: 404,
            message: "Job data not found"
        }
    }

    return {
        status: 200,
        data,
        message: "Success Get All Data"
    }
}

exports.getJobByCourses = async (req, res) => {
    const {courseName} = req.params;
    
    const dataCourse = await course.findOne({where:{courseName}});
    const dataJob = await jobsearch.findAll({where:{idCourse: dataCourse.id, available: true}});

    if(!dataCourse){
        return {
            status: 404,
            message: "Course Data Not Found"
        }
    }
    
    if(!dataJob){
        return {
            status: 404,
            message: "Job Data Not Found"
        }
    }

    return {
        status: 200,
        data: dataCourse, dataJob,
        message: "Success Get Job data by courses"
    }
}

exports.getJobDetail = async (req, res) => {
    const {jobname} = req.params;
    
    const dataJob = await jobsearch.findOne({where:{jobname}});
    const dataJobDetail = await detailjob.findOne({where:{idJob: dataJob.id}});

    if(!dataCourse){
        return {
            status: 404,
            message: "Data Course Not Found"
        }
    }
    
    if(!dataJob){
        return {
            status: 404,
            message: "Data Job Not Found"
        }
    }
    
    if(!dataJobDetail){
        return {
            status: 404,
            message: "Detail Job Not Found"
        }
    }

    return {
        status: 200,
        data: dataJob, dataJobDetail,
        message: "Success Get Detail Data"
    }
}

exports.applyJob = async (req, res) => {
    const {idUser} = req.user.id;
    const {namaJob} = req.params;
    const data = await jobsearch.findOne({where: {jobname: namaJob}});
  
    if(!data){
        return {
            status: 404,
            message: "Data Not Found"
        };
    };

    data = await jobapplier.create({idUser, idJob})

    return {
        status: 200,
        data,
        message: "Success apply job"
    };
}

// exports.addJob = async (req, res) => {
//     const {namaCourse} = req.body.courseName
//     const {idAdmin} = req.body.id;
//     const dataCourse = await course.findOne({where: {courseName: namaCourse}});

//     if (!dataCourse){
//         return {
//             status: 404,
//             message: "Course not found"
//         }
//     }
    
//     const data = await subcourse.findOne({where: {id: idSubCourse}});
  
//     if(!data){
//         return {
//             status: 404,
//             message: "Data Not Found"
//         };
//     };

//     data = await bookmark.create({idUser, idSubCourse})

//     return {
//         status: 200,
//         data,
//         message: "Success add bookmark"
//     };
// }

// exports.acceptJob = async (req, res) => {

//     const result = await jobSearchService.addJob(req, res)
    
//     return res.status(result.status).json(result)
// }

// exports.editJob = async (req, res) => {

//     const result = await jobSearchService.editJob(req, res)
    
//     return res.status(result.status).json(result)
// }

// exports.deleteJob = async (req, res) => {

//     const result = await jobSearchService.deleteJob(req, res)

//     return res.status(result.status).json(result)
// }