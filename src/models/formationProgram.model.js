const mongoose = require('mongoose');

const formationProgramSchema = new mongoose.Schema({

    _id: {
        type: mongoose.Schema.Types.Number,
    },

    program_name: {
        type: String,
        required: true
    },

    program_code: {
        type: String,
        required: true
    },

    total_duration: {
        type: String,
        required: true
    },

    program_version: {
        type: String,
        required: true
    },
    
    type_program: {
        ref: "Type_Program",
        type: mongoose.Schema.Types.String,
        required: true,
        enum: ['C', 'T']
    },

    thematic_line: {
        ref: "Thematic_Line",
        type: mongoose.Schema.Types.String,
        required: true
    },
    program_level: {
        ref: "Program_Level",
        type: mongoose.Schema.Types.String,
        required: true
    },

    competences:{
        ref: "Competence",
        type: mongoose.Schema.Types.Array
    },

    training_centers: {
        ref: "Training_Center",
        type: mongoose.Schema.Types.Array
    },

}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Formation_Program', formationProgramSchema);