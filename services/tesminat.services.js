const {TesMinat, TesminatAttempt} = require('../models');

exports.createTesMinat = async (req, res) => {
    const { title, questions } = req.body;
    const newTesminat = new TesMinat({ title, questions });
    const data = await newTesminat.save();
    return{
        status: 201,
        data,
        message: 'Success Create Tesminat!',
    }
};

exports.AttemptTesMinat = async (req, res) => {
    const { tesminatId, answers } = req.body;
    const idUser = req.user.id;

    const results = answers.reduce((acc, category) => {
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    }, {});

    const newAttempt = new TesminatAttempt({ idUser, tesminatId, results });
    const data = await newAttempt.save();

    return{
        status: 201,
        data,
        message: 'Success Attempt Tesminat!',
    }
  };

  exports.getTesMinatAttempt = async (req, res) => {
    const idUser = req.user.id;
    const data = await TesminatAttempt.find({ idUser }).populate('tesminatId');
    return{
        status: 200,
        data,
        message: 'Success Get Tesminat Attempts!',
    }
  }