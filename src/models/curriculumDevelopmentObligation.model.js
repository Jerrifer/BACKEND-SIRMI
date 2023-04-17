const mongoose = require("mongoose");

const curriculumDevelopmentObligationSchema = new mongoose.Schema(
  {

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
      type: mongoose.Schema.Types.ObjectId,
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model(
  "Curriculum_Development_Obligation",
  curriculumDevelopmentObligationSchema
);
