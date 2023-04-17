const mongoose = require("mongoose");

const monitoringActionsSchema = new mongoose.Schema(
  {
    ficha: {
      type: String,
    },

    program_name: {
      type: String,
    },
    number_apprentices: {
      type: String,
    },
    activity_description: {
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

module.exports = mongoose.model("Monitoring_Actions", monitoringActionsSchema);
