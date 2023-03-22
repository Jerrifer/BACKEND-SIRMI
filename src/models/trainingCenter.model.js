const mongoose = require('mongoose');

const trainingCenterSchema = new mongoose.Schema({

    name: {
        type: String,
        unique: true,
    },

    municipalitie: [{
        ref: "Municipalitie",
        type: mongoose.Schema.Types.ObjectId
    }],

    formationprograms: [{
        ref: "FormationProgram",
        type: mongoose.Schema.Types.ObjectId
    }]

}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('TrainingCenter', trainingCenterSchema);