const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MeterSchema = new Schema({
  name: String,
  type: { type: String, default: "meter" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Meter", MeterSchema);
