const mongoose = require("mongoose");

const otherActivitySchema = new mongoose.Schema(
  {
    activity: {
          type: String,
     },
        
    description: {
        type: String,
    },

    hours: {
        type: String,
    },

    rmi: {
        ref: "Rmi",
        type: mongoose.Schema.Types.ObjectId,
    },

  },

  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Other_Activity", otherActivitySchema);
