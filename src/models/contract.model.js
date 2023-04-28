const mongoose = require("mongoose");

const contractSchema = new mongoose.Schema(
  {
    contract_number: {
      type: String,
    },
    object: {
      type: String,
    },
    pay: {
      type: String,
    },
    supervisor: {
      type: String,
    },
    start_date: {
      type: String,
    },
    end_date: {
      type: String,
    },
    type_contract: {
      type: String,
    },

    status: {
      type: Boolean,
      default: true
    },

    thematic_line: {
      ref: "Thematic_Line",
      type: mongoose.Schema.Types.String,
    },

    user: {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
    },

    // training_center: {
    //   ref: "Training_center",
    //   type: mongoose.Schema.Types.Number,
    // },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Contract", contractSchema);
