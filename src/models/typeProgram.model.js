const mongoose = require('mongoose');

const typeProgramSchema = new mongoose.Schema({

    name: {
        type: String,
        unique: true,
    },

}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('TypeProgram', typeProgramSchema);