const mongoose = require("mongoose");

const rmiSchema = new mongoose.Schema(
  {
    month: {
          type: String,
     },
        
    total_hours_formation: {
        type: String,
    },

    total_hours_other_activities: {
        type: String,
    },

    total_hours_month: {
        type: String,
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
