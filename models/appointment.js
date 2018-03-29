const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  doctor: { type: String, required: true },
  for: { type: String},
  time: { type: String, required: true},
  date: { type: Date, default: Date.now },
  note: { type: String}
  //add a timestamp?
});

const Appointment = mongoose.model("Appointment", bookSchema);

module.exports = Appointment;
