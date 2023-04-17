const mongoose = require("mongoose");

const gsSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.String,
    },
    declaration: {
      type: String,
    },

    hours_formation_obligations: {
      type: String,
    },
    hours_monitoring_obligations: {
      type: String,
    },
    hours_investigation_obligations: {
      type: String,
    },
    //   RMI: {
    //     ref: "Rmi",
    //     type: mongoose.Schema.Types.Array,
    //   },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Gc", gsSchema);
