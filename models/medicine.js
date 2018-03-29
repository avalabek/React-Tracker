const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicineSchema = new Schema({
  medicine: { type: String, required: true },
  for: { type: String },
  frequency: String,
  date: { type: Date, default: Date.now },
  note: {type: String}
});

const Medicine = mongoose.model("Medicine", bookSchema);

module.exports = Medicine;
