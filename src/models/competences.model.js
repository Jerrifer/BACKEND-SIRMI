const mongoose = require('mongoose');


const competencesSchema = new mongoose.Schema({

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
        type: String
    },


    duration:{
        type: String

    },

    formationprograms: [{
        ref: "Formation_Program",
        type: mongoose.Schema.Types.ObjectId
    }]


}, 

{
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('competences', competencesSchema);
