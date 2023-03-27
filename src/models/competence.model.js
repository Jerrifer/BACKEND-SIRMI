const mongoose = require('mongoose');


const competenceSchema = new mongoose.Schema({

    _id: {
        type: mongoose.Schema.Types.Number,
        unique: true,
    },

    
    norm: {
        type: String
    },

    name: {
        type: String
    },

    competition_code: {
        type: String,
        unique: true,
    },


    duration:{
        type: String

    },

    formationprograms: {
        ref: "Formation_Program",
        type: mongoose.Schema.Types.Array
    
    }


}, 

{
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('competence', competenceSchema);
