const mongoose = require('mongoose');

const municipalitieSchema = new mongoose.Schema({

    name: {
        type: String,
        unique: true,
    },

    regionale: [{
        ref: "Regionale",
        type: Number
    }]

}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Municipalitie', municipalitieSchema);