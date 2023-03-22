const mongoose = require('mongoose');

const knowledgeNetworkSchema = new mongoose.Schema({

    name: {
        type: String,
        unique: true,
    },

}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('KnowledgeNetwork', knowledgeNetworkSchema);