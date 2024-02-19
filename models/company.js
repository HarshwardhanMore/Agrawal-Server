// models/company.js
const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  company_name: { type: String, required: true },
  company_information: { type: String },
  company_address: { type: String, required: true },
  phone_number: { type: String, required: true },
  email: { type: String }
});

module.exports = mongoose.model('Company', companySchema);
