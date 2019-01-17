const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NestSchema = new Schema({
  name: String,
  type: { type: String, default: "nest" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Nest", NestSchema);
