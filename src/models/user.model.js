const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({


    name: {
        type: String,
        unique: true,
    },

    email: {
        type: String,
        unique: true,

    },

    password: {
        type: String,
        required: true,
    },

    // roles:{
    //     type: String,
    // }

}, {
    timestamps: true,
    versionKey: false
})




module.exports = mongoose.model('User', userSchema);