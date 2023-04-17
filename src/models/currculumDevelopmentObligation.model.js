const mongoose = require("mongoose");

const currculumDevelopmentObligationSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.String,
    },

    program_name: {
      type: String,
    },
    activity_description: {
      type: String,
    },

    total_assingned_hours: {
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
  "Currculum_Development_Obligation",
  currculumDevelopmentObligationSchema
);
