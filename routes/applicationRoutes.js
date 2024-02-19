// routes/applicationRoutes.js
const express = require('express');
const router = express.Router();
const Application = require('../models/application');

// Create application
router.post('/', async (req, res) => {
  try {
    const application = await Application.create(req.body);
    res.status(200).json(application);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all applications
router.get('/', async (req, res) => {
  try {
    const applications = await Application.find();
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get application by ID
router.get('/:id', getApplication, (req, res) => {
  res.json(res.application);
});

// Update application
router.patch('/:id', getApplication, async (req, res) => {
  // Similar to updating employee
});

// Delete application
router.delete('/:id', getApplication, async (req, res) => {
  // Similar to deleting employee
});

async function getApplication(req, res, next) {
  // Similar to getEmployee function
}

module.exports = router;
