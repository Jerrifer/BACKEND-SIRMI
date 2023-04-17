const mongoose = require("mongoose");

const investigationActionsSchema = new mongoose.Schema(
  {
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
      type: mongoose.Schema.Types.ObjectId,
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
