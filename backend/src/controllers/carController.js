const Car = require('../models/Car');

// Get all the cars
exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    
    res.status(200).json({
      success: true,
      count: cars.length,
      data: cars
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
      message: error.message
    });
  }
};

// Get one specefic car by id
exports.getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    
    if (!car) {
      return res.status(404).json({
        success: false,
        error: 'Car not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: car
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
      message: error.message
    });
  }
};

// Search cars by make or model or any text
exports.searchCars = async (req, res) => {
  try {
    const { q } = req.query; // Get search query from URL
    
    if (!q) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a search query'
      });
    }
    
    // Search in make, model, or description (case-insensitive)
    const cars = await Car.find({
      $or: [
        { make: { $regex: q, $options: 'i' } },
        { model: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } }
      ]
    });
    
    res.status(200).json({
      success: true,
      count: cars.length,
      data: cars
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
      message: error.message
    });
  }
};

// Filter cars by make, luxury_status, fuel_type...etc  
exports.filterCars = async (req, res) => {
  try {
    // Build filter object from query parameters
    const filter = {};
    
    if (req.query.make) filter.make = req.query.make;
    if (req.query.fuel_type) filter.fuel_type = req.query.fuel_type;
    if (req.query.transmission_type) filter.transmission_type = req.query.transmission_type;
    if (req.query.luxury_status) filter.luxury_status = req.query.luxury_status === 'true';
    if (req.query.rare_status) filter.rare_status = req.query.rare_status === 'true';
    if (req.query.is_available) filter.is_available = req.query.is_available === 'true';
    
    // Price range filtering
    if (req.query.min_price || req.query.max_price) {
      filter.daily_rate = {};
      if (req.query.min_price) filter.daily_rate.$gte = Number(req.query.min_price);
      if (req.query.max_price) filter.daily_rate.$lte = Number(req.query.max_price);
    }
    
    const cars = await Car.find(filter);
    
    res.status(200).json({
      success: true,
      count: cars.length,
      data: cars
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
      message: error.message
    });
  }
};