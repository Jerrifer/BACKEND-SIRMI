const mongoose = require('mongoose');


const competenceSchema = new mongoose.Schema({

    _id: {
        type: mongoose.Schema.Types.String,
        unique: true,
    },
    
    labor_competence_code: {
        type: String,
        unique: true
    },

    labor_competition: {
        type: String
    },

    labor_competition_version: {
        type: String,
    },

    duration:{
        type: String
    },

    formation_programs: {
        ref: "Formation_Program",
        type: mongoose.Schema.Types.Array
    }


}, 

{
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('competence', competenceSchema);
