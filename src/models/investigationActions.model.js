const mongoose = require("mongoose");

const investigationActionsSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.String,
    },
    project_name: {
      type: String,
    },

    sennova_code: {
      type: String,
    },
    hours_month: {
      type: String,
    },

    GC: {
      ref: "Gc",
      type: mongoose.Schema.Types.Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model(
  "investigation_Actions",
  investigationActionsSchema
);
