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
    
    type_program: {
        ref: "Type_Program",
        type: mongoose.Schema.Types.String
    },

    thematic_line: {
        ref: "Thematic_Line",
        type: mongoose.Schema.Types.String
    },
    program_level: {
        ref: "Program_Level",
        type: mongoose.Schema.Types.String
    },

    // competences:{
    //     ref: "Competence",
    //     type: mongoose.Schema.Types.Array
    // },

    training_centers: {
        ref: "Training_Center",
        type: mongoose.Schema.Types.Array
    },

}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Formation_Program', formationProgramSchema);