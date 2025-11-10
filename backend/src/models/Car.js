const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    // Basic Infos
  make: {
    type: String,
    required: [true, 'Car make is required'],
    trim: true
  },
  model: {
    type: String,
    required: [true, 'Car model is required'],
    trim: true
  },
  year: {
    type: Number,
    required: [true, 'Year is required'],
    min: 1900,
    max: new Date().getFullYear() + 1
  },
  color: {
    type: String,
    required: true,
    trim: true
  },
  license_plate: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    uppercase: true
  },
  
  // Pricing
  daily_rate: {
    type: Number,
    required: [true, 'Daily rate is required'],
    min: 0
  },
  weekly_rate: {
    type: Number,
    min: 0
  },
  security_deposit: {
    type: Number,
    required: true,
    min: 0
  },
  
  // Description & Img
  description: {
    type: String,
    required: true,
    trim: true
  },
  image_urls: [{
    type: String,
    trim: true
  }],
  
  // Availability & Location
  is_available: {
    type: Boolean,
    default: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  
  // Specs
  mileage: {
    type: Number,
    required: true,
    min: 0
  },
  fuel_type: {
    type: String,
    required: true,
    enum: ['Gasoline', 'Diesel', 'Electric', 'Hybrid'],
    trim: true
  },
  transmission_type: {
    type: String,
    required: true,
    enum: ['Automatic', 'Manual'],
    trim: true
  },
  number_of_seats: {
    type: Number,
    required: true,
    min: 2,
    max: 12
  },
  
  // Features & Status
  features: [{
    type: String,
    trim: true
  }],
  luxury_status: {
    type: Boolean,
    default: false
  },
  rare_status: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt
});

// Create indexes for faster searches
carSchema.index({ make: 1, model: 1 });
carSchema.index({ is_available: 1 });
carSchema.index({ daily_rate: 1 });

const Car = mongoose.model('Car', carSchema);

module.exports = Car;