const mongoose = require('mongoose');

const areaSchema = new mongoose.Schema({

    name: {
        type: String,
        unique: true,
    },

    knowledgenetwork: [{
        ref: "KnowledgeNetwork",
        type: mongoose.Schema.Types.ObjectId
    }]

}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Area', areaSchema);