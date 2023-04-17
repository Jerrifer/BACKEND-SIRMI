const mongoose = require("mongoose");

const otherObligationsSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.String,
    },
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
      type: mongoose.Schema.Types.Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.export = mongoose.model("Other_Obligations", otherObligationsSchema);
