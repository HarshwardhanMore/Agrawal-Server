// models/application.js
const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true }
});

module.exports = mongoose.model('Application', applicationSchema);
