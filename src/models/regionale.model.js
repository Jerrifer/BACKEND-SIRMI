const mongoose = require('mongoose');

const regionaleSchema = new mongoose.Schema({

    _id: {
        type: mongoose.Schema.Types.Number,
        unique: true,
    },
    
    name: {
        type: String,
        unique: true,
    }


}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Regionale', regionaleSchema);