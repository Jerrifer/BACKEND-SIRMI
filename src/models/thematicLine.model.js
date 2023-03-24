const mongoose = require('mongoose');

const ThematicLineSchema = new mongoose.Schema({

    _id: {
        type: mongoose.Schema.Types.String,
        unique: true,
    },

    thematic_line: {
        type: String,
    },

    thematic_line_description: {
        type: String,
    },

    knowledge_network: [{
        ref: "Knowledge_Network",
        type: mongoose.Schema.Types.Array
    }]

}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Thematic_Line', ThematicLineSchema);