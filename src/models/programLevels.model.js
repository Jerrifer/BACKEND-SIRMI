const mongoose = require('mongoose');

const programLevelSchema = new mongoose.Schema({

    _id: {
        type: mongoose.Schema.Types.String,
    },

    program_level: {
        type: String,
        unique: true,
    },

}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Program_Level', programLevelSchema);