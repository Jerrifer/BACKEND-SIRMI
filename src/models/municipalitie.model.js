const mongoose = require("mongoose");

const municipalitieSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.Number,
    },

    municipalitie: {
      type: String,
    },

    regionale: {
      ref: "Regionale",
      type: mongoose.Schema.Types.Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Municipalitie", municipalitieSchema);
