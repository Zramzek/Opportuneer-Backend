const mongoose = require('mongoose');

const tesminatSchema = new mongoose.Schema({
    title: { type: String, required: true },
    questions: [
        {
            question: { type: String, required: true },
            answers: [
                {
                    text: { type: String, required: true },
                    category: { type: String, enum: ['Copywriter', 'Software Engineering', 'Jurnalis', 'Data Science', 'Enterpreneur', 'Editor'], required: true }
                }
            ]
        }
    ]
});

module.exports = mongoose.model('Tesminat', tesminatSchema);