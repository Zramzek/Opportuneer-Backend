// const { where } = require('sequelize');
const {course, jobsearch, detailjob, jobapplier} = require('../models');

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
    const {jobName} = req.params;
    
    const dataJob = await jobsearch.findOne({where:{jobname: jobName}});
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
    const {jobName} = req.params;
    const data = await jobsearch.findOne({where: {jobname: jobName}});
  
    if(!data){
        return {
            status: 404,
            message: "Data Job Not Found"
        };
    };

    data = await jobapplier.create({idUser, idJob})

    return {
        status: 200,
        data,
        message: "Success apply job"
    };
}