const mongoose = require("mongoose");

const titledFormationSchema = new mongoose.Schema(
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
    
    work_days: {
        type: mongoose.Schema.Types.Array,

        week_day: {
          type: Number
        },
        day: {
          type: Number
        }
    },
    
    schedule:{
      type: mongoose.Schema.Types.Array,
        day: {
            type: String
        },
        start_time: {
            type: String
        },
        end_time: {
            type: String
        },
        shared_event: {
          type: mongoose.Schema.Types.Boolean,
          default: false
        },
    },


    rmi: {
      ref: "Rmi",
      type: mongoose.Schema.Types.ObjectId,
    },

    formation_program: {
      type: mongoose.Schema.Types.Number,
        ref: "Formation_Program"
    },
    
    competence: {
      type: mongoose.Schema.Types.Number,
      ref: "Competence"
    },

    learning_results: {
      type: mongoose.Schema.Types.Array,
      learning_result: {
        type: mongoose.Schema.Types.Number,
        ref: "Learning_Result"
      },
      end_date: {
        type: mongoose.Schema.Types.Date,
      },
    },

    complementary: {
      type: mongoose.Schema.Types.Array,
      course_duration: {
        type: mongoose.Schema.Types.Number,
      },
      programming_days: {
        type: mongoose.Schema.Types.String,
      },
    },

    
    
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Titled_Formation", titledFormationSchema);
