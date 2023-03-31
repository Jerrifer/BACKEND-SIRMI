const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {

    first_name: {
      type: String,
      // unique: true,
    },
    last_name: {
      type: String,
    },

    email: {
      type: String,
      // unique: true,
    },

    password: {
      type: String,
      // required: true,
    },

    contact_number: {
      type: String,

    },

    document_number: {
      type: String,

    },  

    training_center: {
      ref: "Training_Center",
      type: mongoose.Schema.Types.Number,
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
