const mongoose = require("mongoose");

const otherObligationsSchema = new mongoose.Schema(
  {
    ficha: {
      type: String,
    },
    program_name: {
      type: String,
    },
    activity: {
      type: String,
    },
    assigned_hours: {
      type: String,
    },
    observation: {
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

module.export = mongoose.model("Other_Obligations", otherObligationsSchema);
