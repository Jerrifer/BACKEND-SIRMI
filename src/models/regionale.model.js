const mongoose = require('mongoose');

const regionaleSchema = new mongoose.Schema({

    name: {
        type: String,
        unique: true,
    },


}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Regionale', regionaleSchema);