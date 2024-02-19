// routes/companyRoutes.js
const express = require('express');
const router = express.Router();
const Company = require('../models/company');

// Create company
router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const company = await Company.create(req.body);
    res.status(200).json(company);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all companies
router.get('/', async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get company by ID
router.get('/:id', getCompany, (req, res) => {
  res.json(res.company);
});

// Update company
router.patch('/:id', getCompany, async (req, res) => {
  // Similar to updating employee
});

// Delete company
router.delete('/:id', getCompany, async (req, res) => {
  // Similar to deleting employee
});

async function getCompany(req, res, next) {
  // Similar to getEmployee function
}

module.exports = router;
