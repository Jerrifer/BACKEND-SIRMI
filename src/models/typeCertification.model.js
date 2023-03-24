const mongoose = require('mongoose');

const typeCertificationSchema = new mongoose.Schema({

    _id: {
        type: mongoose.Schema.Types.String,
        unique: true,
    },

    program_level: {
        type: String,
        unique: true,
    },

}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Type_Certification', typeCertificationSchema);