const mongoose = require("mongoose");

const learningResultSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.Number,
    },

    learning_result: {
      type: String,
    },

    competence: {
      ref: "Competence",
      type: mongoose.Schema.Types.Number,
    },

    assigned_formation: {
      ref: "Assigned_Formation",
      type: mongoose.Schema.Types.Array,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Learning_Result", learningResultSchema);
