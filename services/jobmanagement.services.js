const { where } = require('sequelize');
const {course, jobsearch, detailjob, jobapplier} = require('../models');
const user = require('../models/user');

exports.getJobByAdmin = async (req, res) => {
    const {idAdmin} = req.user.id

    const data = await jobsearch.findAll({where:{idAdmin}})

    if(!data){
        return {
            status: 404,
            message: "Data Job You Created Not Found"
        }
    }

    return {
        status: 200,
        data,
        message: "Success Get All Data"
    }
}

exports.addJob = async (req, res) => {
    const {courseName, namaperusahaan, jobname, waktujob, lokasi, jenislokasi, requirement, responsibility} = req.body
    const {idAdmin} = req.user.id;

    const dataCourse = await course.findOne({where: {courseName}});

    if (!dataCourse){
        return {
            status: 404,
            message: "Course not found"
        }
    }
    
    const data = await jobsearch.create({idCourse: dataCourse.id, idAdmin, namaperusahaan, jobname, waktujob, lokasi, jenislokasi, requirement, responsibility, available: true});

    return {
        status: 201,
        data,
        message: "Success add Job"
    };
}

exports.editJob = async (req, res) => {
    const {id} = req.params
    
    const dataJob = await course.findOne({where: {id}});
    
    if(!dataJob){
        return {
            status: 404,
            message: "Data Not Found"
        };
    };

    const {namaperusahaan, jobname, waktujob, lokasi, jenislokasi, requirement, responsibility, available} = req.body
    
    const updateJob = await jobsearch.update({namaperusahaan, jobname, waktujob, lokasi, jenislokasi, requirement, responsibility, available}, {where: {id}}); 
    
    return {
        status: 200,
        data: updateJob, updateDetail,
        message: "Success Update Data"
    };
}

exports.deleteJob = async (req, res) => {
    const {id} = req.params

    const dataJob = await jobsearch.findOne({where: {id}})

    if(!dataJob){
        return {
            status: 404,
            message: "Job Not Found"
        }
    }

    const data = await jobsearch.destroy({where: {id}})

    return {
        status: 200,
        data,
        message: "Success Delete Data"
    }
}

exports.getJobApplier = async (req,res) => {
    const {idJob} = req.params

    const data = await jobapplier.findAll({where:{idJob}})

    if(!data){
        return {
            status: 404,
            message: "Job Applier Not Found"
        }
    }

    return {
        status: 200,
        data,
        message: "Success Get Applier Data"
    }
}

exports.acceptJob = async (req, res) => {
    const {idJob} = req.params
    const {idUser} = req.body
    
    const dataApplier = await jobapplier.findOne({where: {idUser, idJob}})
    if (!dataApplier){
        return {
            status: 404,
            message: "Job applier not found"
        }
    }

    const dataJob = await jobsearch.findOne({where: {idJob}})

    if (!dataJob){
        return{
            status: 404,
            message: "Job data not found"
        }
    }

    const dataUpdate1 = await jobsearch.update({available: 0}, {where: {dataJob}})
    const dataUpdate2 = await jobapplier.update({status: "accepted"}, {where: {dataApplier}})

    return {
        status: 200,
        data: dataUpdate1, dataUpdate2,
        message: "Success Accept Job Data"
    }
}

exports.rejectJob = async (req, res) => {
    const {idJob} = req.params
    const {idUser} = req.body
    
    const dataApplier = await jobapplier.findOne({where: {idUser, idJob}})
    if (!dataApplier){
        return {
            status: 404,
            message: "Job applier not found"
        }
    }    

    await jobapplier.update({status: "rejected"}, {where: {dataApplier}})

    return {
        status: 200,
        data,
        message: "Success Reject Job Data"
    }
}