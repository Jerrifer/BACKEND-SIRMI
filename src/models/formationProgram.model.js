const mongoose = require('mongoose');

const formationProgramSchema = new mongoose.Schema({

    name: {
        type: String,
        unique: true,
    },

    area: [{
        ref: "Area",
        type: mongoose.Schema.Types.ObjectId
    }],

    typeprogram: [{
        ref: "TypeProgram",
        type: mongoose.Schema.Types.ObjectId
    }],

    typecertification: [{
        ref: "TypeCertification",
        type: mongoose.Schema.Types.ObjectId
    }],

    trainingcenters: [{
        ref: "TrainingCenter",
        type: mongoose.Schema.Types.ObjectId
    }]

}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('FormationProgram', formationProgramSchema);