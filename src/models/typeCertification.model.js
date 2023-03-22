const mongoose = require('mongoose');

const typeCertificationSchema = new mongoose.Schema({

    name: {
        type: String,
        unique: true,
    },

}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('TypeCertification', typeCertificationSchema);