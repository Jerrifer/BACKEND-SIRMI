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

    rmi: {
      ref: "Rmi",
      type: mongoose.Schema.Types.ObjectId,
    },

    learning_results: {
      ref: "Learning_Result",
      type: mongoose.Schema.Types.ObjectId,
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
    }
    ,
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Assigned_Formation", assignedFormationSchema);
