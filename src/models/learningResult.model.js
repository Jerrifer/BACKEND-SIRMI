const mongoose = require('mongoose');

const learningResultSchema = new mongoose.Schema({

    _id: {
        type: mongoose.Schema.Types.String,
        unique: true
    },

    learning_result: {
        type: String
    },

    competence:{
        ref: "Competence",
        type: mongoose.Schema.Types.String
    }

}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Learning_Result', learningResultSchema);