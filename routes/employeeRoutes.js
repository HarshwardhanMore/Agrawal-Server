// routes/employeeRoutes.js
const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');

// Create employee
router.post('/', async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(200).json(employee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get employee by ID
router.get('/:id', getEmployee, (req, res) => {
  res.json(res.employee);
});

// Update employee
router.patch('/:id', getEmployee, async (req, res) => {
  if (req.body.full_name != null) {
    res.employee.full_name = req.body.full_name;
  }
  if (req.body.mobile_number != null) {
    res.employee.mobile_number = req.body.mobile_number;
  }
  if (req.body.email != null) {
    res.employee.email = req.body.email;
  }
  if (req.body.years_of_experience != null) {
    res.employee.years_of_experience = req.body.years_of_experience;
  }
  if (req.body.domain != null) {
    res.employee.domain = req.body.domain;
  }
  if (req.body.skills != null) {
    res.employee.skills = req.body.skills;
  }
  if (req.body.address != null) {
    res.employee.address = req.body.address;
  }
  try {
    const updatedEmployee = await res.employee.save();
    res.json(updatedEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete employee
router.delete('/:id', getEmployee, async (req, res) => {
  try {
    await res.employee.remove();
    res.json({ message: 'Employee deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getEmployee(req, res, next) {
  let employee;
  try {
    employee = await Employee.findById(req.params.id);
    if (employee == null) {
      return res.status(404).json({ message: 'Employee not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.employee = employee;
  next();
}

module.exports = router;
