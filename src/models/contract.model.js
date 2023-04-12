const mongoose = require('mongoose');

const contractShemas = new mongoose.Schema ( {

    _id: {
        type: mongoose.Schema.Types.Number,
      },
  
      name : {
        type: String,
      unique: true,
      },
      contract_number : {
        type: Number,
      unique: true,
      },
      object : {
        type: String,
      unique: true,
      },
      pay : {
        type: String,
      unique: true,
      },
      supervisor : {
        type: String,
      unique: true,
      },
      start_date : {
        type: String,
      unique: true,
      },
      end_data : {
        type: String,
      unique: true,
      },
      type_contract : {
        type: String,
      unique: true,
      },

      id_user: {
        ref: "User",
        type: mongoose.Schema.Types.Number,
      }



})

module.exports = mongoose.model("contract", contractShemas)