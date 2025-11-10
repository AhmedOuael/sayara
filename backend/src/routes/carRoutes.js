const express = require('express');
const router = express.Router();
const {
  getAllCars,
  getCarById,
  searchCars,
  filterCars
} = require('../controllers/carController');

// @route   GET /api/cars
// @desc    Get all cars
// @access  Public
router.get('/', getAllCars);

// @route   GET /api/cars/search
// @desc    Search cars by text
// @access  Public
router.get('/search', searchCars);

// @route   GET /api/cars/filter
// @desc    Filter cars by criteria
// @access  Public
router.get('/filter', filterCars);

// @route   GET /api/cars/:id
// @desc    Get single car by ID
// @access  Public
router.get('/:id', getCarById);

module.exports = router;