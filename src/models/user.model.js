const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {

    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },

    email: {
      type: String,
    },

    password: {
      type: String,
    },

    contact_number: {
      type: String,
    },

    document_number: {
      type: String,
    },  

    status: {
      type: Boolean,
      default: false
    },

    training_center: {
      ref: "Training_Center",
      type: mongoose.Schema.Types.Number,
    },

    contract: {
      ref: "Contract",
      type: mongoose.Schema.Types.ObjectId
    }

    //   idrole: {
    //     ref: "r",
    //     type: mongoose.Schema.Types.Array,
    //   },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("User", userSchema);
