// models/employee.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  full_name: { type: String, required: true },
  mobile_number: { type: String, required: true },
  email: { type: String },
  years_of_experience: { type: Number, required: true },
  domain: { type: String, required: true },
  skills: [String],
  address: { type: String, required: true }
});

module.exports = mongoose.model('Employee', employeeSchema);
