const mongoose = require('mongoose');

const tesminatAttempt = new mongoose.Schema({
  idUser: { type: Number, required: true },
  teminatId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tesminat', required: true },
  results: { type: Map, of: Number },
  completedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TesminatAttempt', tesminatAttempt);