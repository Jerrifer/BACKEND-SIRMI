const mongoose = require("mongoose");

const formationActionsSchema = new mongoose.Schema(
  {

    ficha: {
      type: String,
    },

    program_name: {
      type: String,
    },
    timetable: {
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

module.exports = mongoose.model("Formation_Actions", formationActionsSchema);
