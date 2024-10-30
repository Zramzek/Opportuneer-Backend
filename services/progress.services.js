const { get } = require('mongoose');
const {TesMinat, TesminatAttempt} = require('../models');
const subcoursedone = require('../models/subcoursedone');

exports.getProgressDiri = async (req, res) => {
    const dataSBD = subcoursedone.count({idUser: req.user.id});

    if (!data){
        return{
            status: 404,
            message: 'Data Progress Not Found!'
        }
    }

    const dataSB = subcourse.count({id: dataSBD.idSubCourse});

    const data = (dataSBD / dataSB * 100).toFixed(0);

    return{
        status: 200,
        data,
        message: 'Success Create Tesminat!',
    }
};
