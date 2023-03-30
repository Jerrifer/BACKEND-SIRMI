const mongoose = require("mongoose");

const TypeProgramSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.String,
    },

    type_program: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Type_Program", TypeProgramSchema);
