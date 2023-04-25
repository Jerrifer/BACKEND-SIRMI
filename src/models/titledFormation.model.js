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
    
    workdays: {
        type: mongoose.Schema.Types.Array,
    },
    
    schedule:{
      type: mongoose.Schema.Types.Array,
        day: {
            type: String
        },
        date: {
          type: String
      },
        // start_time: {
        //     type: String
        // },
        // end_time: {
        //     type: String
        // }
    },

    rmi: {
      ref: "Rmi",
      type: mongoose.Schema.Types.ObjectId,
    },

    formation_program: {
      type: mongoose.Schema.Types.Number,
        ref: "Formation_Program"
    },

    competence:{

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
    }
    
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Titled_Formation", titledFormationSchema);
