const mongoose = require('mongoose');

const formationProgramSchema = new mongoose.Schema({

    // _id: {
    //     type: mongoose.Schema.Types.String,
    //     unique: true,
    // },

    program_name: {
        type: String
    },

    program_code: {
        type: String
    },

    total_duration: {
        type: String
    },

    program_version: {
        type: String
    },
    
    typeprogram: {
        type: String
    },

    thematic_line: {
        ref: "Thematic_Line",
        type: mongoose.Schema.Types.String
    },
    type_certification: {
        ref: "Type_Certification",
        type: mongoose.Schema.Types.String
    },

    trainingcenters: [{
        ref: "Training_Center",
        type: mongoose.Schema.Types.String
    }]

}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('FormationProgram', formationProgramSchema);