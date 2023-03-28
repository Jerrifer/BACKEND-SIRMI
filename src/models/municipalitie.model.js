const mongoose = require('mongoose');

const municipalitieSchema = new mongoose.Schema({

    _id: {
        type: mongoose.Schema.Types.Number,
        unique: true,
    },

    municipalitie: {
        type: String,
        unique: true,
    },

    regionale: {
        ref: "Regionale",
        type: mongoose.Schema.Types.Number,
    }

}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Municipalitie', municipalitieSchema);