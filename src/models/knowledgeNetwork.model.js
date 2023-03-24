const mongoose = require('mongoose');

const knowledgeNetworkSchema = new mongoose.Schema({

    _id: {
        type: mongoose.Schema.Types.Number,
        unique: true,
    },

    knowledge_network: {
        type: String
    },
    manager_name: {
        type: String
    },
    advisor_name: {
        type: String
    },
    thematic_line: {
        ref: 'Thematic_Line',
        type: mongoose.Schema.Types.Array,
    }

}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Knowledge_Network', knowledgeNetworkSchema);