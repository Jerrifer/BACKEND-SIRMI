const mongoose = require('mongoose');

const trainingCenterSchema = new mongoose.Schema({

    _id: {
        type: mongoose.Schema.Types.Number,
        unique: true,
    },

    training_center: {
        type: String,
    },

    training_center_address: {
        type: String,
    },

    municipalitie: {
        ref: "Municipalitie",
        type: mongoose.Schema.Types.Number
    },

    formationprograms: {
        ref: "Formation_Program",
        type: mongoose.Schema.Types.Array
    }

}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Training_Center', trainingCenterSchema);