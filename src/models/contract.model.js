const mongoose = require('mongoose');

const contractShemas = new mongoose.Schema ( {

 
      name : {
        type: String,
      
      },
      contract_number : {
        type: Number,
      
      },
      object : {
        type: String,
      
      },
      pay : {
        type: String,
      
      },
      supervisor : {
        type: String,
      
      },
      start_date : {
        type: String,
      },
      en_data : {
        type: String,
      },
      type_contract : {
        type: String,
      },

      user: {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId,
      }



},

  {
    timestamps: true,
    versionKey: false,
  })

module.exports = mongoose.model("Contract", contractShemas)