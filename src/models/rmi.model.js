const mongoose = require("mongoose");

const rmiSchema = new mongoose.Schema(
  {
    month: {
      type: Number,
     },
        
    total_hours_formation: {
        type: Number,
    },

    total_hours_other_activities: {
        type: Number,
    },

    total_hours_month: {
        type: Number,
    },

    user: {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
    },

  },

  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Rmi", rmiSchema);
