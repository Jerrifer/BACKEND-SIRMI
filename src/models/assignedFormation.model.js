const mongoose = require("mongoose");

const assignedFormationSchema = new mongoose.Schema(
  {
    ficha: {
      type: String,
    },

    activity: {
      type: String,
    },

    hours_month: {
      type: String,
    },
    
    workdays: {
        type: mongoose.Schema.Types.Array,
    },
    
    timetables:{
        day: {
            type: String
        },
        start_time: {
            type: String
        },
        end_time: {
            type: String
        }
    },

    rmi: {
      ref: "Rmi",
      type: mongoose.Schema.Types.ObjectId,
    },

    learning_results: {
      type: mongoose.Schema.Types.Mixed,
      ref: "Learning_Result"
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Assigned_Formation", assignedFormationSchema);
