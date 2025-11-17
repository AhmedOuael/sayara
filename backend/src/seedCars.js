const mongoose = require('mongoose');
const Car = require('./models/Car');
require('dotenv').config();

// temp 10 cars 
const sampleCars = [
  {
    make: 'Koenigsegg',
    model: 'Agera',
    year: 2020,
    color: 'White',
    license_plate: 'KOEN001',
    daily_rate: 99.00,
    weekly_rate: 600.00,
    security_deposit: 5000.00,
    description: 'A hypercar with incredible performance and luxury. Perfect for special occasions.',
    image_urls: ['https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800'],
    is_available: true,
    location: 'Downtown Showroom',
    mileage: 5000,
    fuel_type: 'Gasoline',
    transmission_type: 'Manual',
    number_of_seats: 2,
    features: ['GPS', 'Bluetooth', 'Premium Sound', 'Sport Mode'],
    luxury_status: true,
    rare_status: true
  },
  {
    make: 'Nissan',
    model: 'GT-R',
    year: 2021,
    color: 'Silver',
    license_plate: 'GTR2021',
    daily_rate: 80.00,
    weekly_rate: 500.00,
    security_deposit: 3000.00,
    description: 'Iconic sports car with legendary performance and handling.',
    image_urls: ['https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800'],
    is_available: true,
    location: 'Airport Location',
    mileage: 15000,
    fuel_type: 'Gasoline',
    transmission_type: 'Automatic',
    number_of_seats: 4,
    features: ['GPS', 'Backup Camera', 'Sport Mode', 'Launch Control'],
    luxury_status: false,
    rare_status: false
  },
  {
    make: 'Rolls-Royce',
    model: 'Phantom',
    year: 2022,
    color: 'Black',
    license_plate: 'RR2022',
    daily_rate: 96.00,
    weekly_rate: 580.00,
    security_deposit: 8000.00,
    description: 'The ultimate luxury sedan with unmatched comfort and prestige.',
    image_urls: ['https://images.unsplash.com/photo-1563720223185-11003d516935?w=800'],
    is_available: false,
    location: 'VIP Center',
    mileage: 3000,
    fuel_type: 'Gasoline',
    transmission_type: 'Automatic',
    number_of_seats: 5,
    features: ['Massaging Seats', 'Champagne Cooler', 'Starlight Headliner', 'Premium Audio'],
    luxury_status: true,
    rare_status: true
  },
  {
    make: 'Toyota',
    model: 'Rush',
    year: 2023,
    color: 'Gray',
    license_plate: 'RUSH23',
    daily_rate: 72.00,
    weekly_rate: 450.00,
    security_deposit: 1500.00,
    description: 'Reliable and spacious SUV perfect for family trips.',
    image_urls: ['https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800'],
    is_available: true,
    location: 'Main Branch',
    mileage: 12000,
    fuel_type: 'Gasoline',
    transmission_type: 'Manual',
    number_of_seats: 7,
    features: ['GPS', 'Third Row Seating', 'Roof Rack', 'USB Charging'],
    luxury_status: false,
    rare_status: false
  },
  {
    make: 'Tesla',
    model: 'Model S',
    year: 2023,
    color: 'Red',
    license_plate: 'TSLA23',
    daily_rate: 85.00,
    weekly_rate: 520.00,
    security_deposit: 2500.00,
    description: 'Premium electric sedan with autopilot and cutting-edge technology.',
    image_urls: ['https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800'],
    is_available: true,
    location: 'Tech District',
    mileage: 8000,
    fuel_type: 'Electric',
    transmission_type: 'Automatic',
    number_of_seats: 5,
    features: ['Autopilot', 'Premium Audio', 'Glass Roof', 'Supercharging'],
    luxury_status: true,
    rare_status: false
  },
  {
    make: 'BMW',
    model: 'M3',
    year: 2022,
    color: 'Blue',
    license_plate: 'BMW22M3',
    daily_rate: 78.00,
    weekly_rate: 480.00,
    security_deposit: 2000.00,
    description: 'High-performance sports sedan with precision handling.',
    image_urls: ['https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800'],
    is_available: true,
    location: 'Downtown Showroom',
    mileage: 10000,
    fuel_type: 'Gasoline',
    transmission_type: 'Automatic',
    number_of_seats: 5,
    features: ['Sport Mode', 'Adaptive Suspension', 'Heated Seats', 'Premium Sound'],
    luxury_status: false,
    rare_status: false
  },
  {
    make: 'Mercedes-Benz',
    model: 'S-Class',
    year: 2023,
    color: 'White',
    license_plate: 'MBS23',
    daily_rate: 92.00,
    weekly_rate: 560.00,
    security_deposit: 3500.00,
    description: 'Luxury sedan with advanced technology and supreme comfort.',
    image_urls: ['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800'],
    is_available: true,
    location: 'VIP Center',
    mileage: 6000,
    fuel_type: 'Hybrid',
    transmission_type: 'Automatic',
    number_of_seats: 5,
    features: ['Massage Seats', 'Air Suspension', 'Night Vision', 'Burmester Audio'],
    luxury_status: true,
    rare_status: false
  },
  {
    make: 'Porsche',
    model: '911 Turbo',
    year: 2022,
    color: 'Yellow',
    license_plate: 'POR911',
    daily_rate: 95.00,
    weekly_rate: 590.00,
    security_deposit: 4000.00,
    description: 'Iconic sports car with breathtaking performance and handling.',
    image_urls: ['https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800'],
    is_available: true,
    location: 'Airport Location',
    mileage: 7500,
    fuel_type: 'Gasoline',
    transmission_type: 'Automatic',
    number_of_seats: 4,
    features: ['Sport Chrono', 'Active Suspension', 'Sport Exhaust', 'Carbon Brakes'],
    luxury_status: true,
    rare_status: true
  },
  {
    make: 'Honda',
    model: 'CR-V',
    year: 2023,
    color: 'Silver',
    license_plate: 'CRV2023',
    daily_rate: 65.00,
    weekly_rate: 400.00,
    security_deposit: 1200.00,
    description: 'Practical and fuel-efficient SUV perfect for everyday use.',
    image_urls: ['https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800'],
    is_available: true,
    location: 'Main Branch',
    mileage: 18000,
    fuel_type: 'Gasoline',
    transmission_type: 'Automatic',
    number_of_seats: 5,
    features: ['Apple CarPlay', 'Backup Camera', 'Blind Spot Monitor', 'Roof Rack'],
    luxury_status: false,
    rare_status: false
  },
  {
    make: 'Lamborghini',
    model: 'Aventador',
    year: 2021,
    color: 'Orange',
    license_plate: 'LAMBO21',
    daily_rate: 150.00,
    weekly_rate: 950.00,
    security_deposit: 10000.00,
    description: 'Ultimate supercar with jaw-dropping looks and performance.',
    image_urls: ['https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=800'],
    is_available: true,
    location: 'VIP Center',
    mileage: 4000,
    fuel_type: 'Gasoline',
    transmission_type: 'Automatic',
    number_of_seats: 2,
    features: ['Launch Control', 'Carbon Fiber Interior', 'Lifting System', 'Sport Exhaust'],
    luxury_status: true,
    rare_status: true
  }
];

// Function to seed the database
const seedDatabase = async () => {
  try {
    // connect to mongodb
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // delete existing cars for clean slate
    await Car.deleteMany({});
    console.log('🗑️  Cleared existing cars');

    // innsert of  sample cars
    const cars = await Car.insertMany(sampleCars);
    console.log(`✅ Added ${cars.length} sample cars to database`);

    // displaying added cars
    console.log('\n📋 Sample cars added:');
    cars.forEach((car, index) => {
      console.log(`${index + 1}. ${car.make} ${car.model} - $${car.daily_rate}/day`);
    });

    // disconnect
    await mongoose.connection.close();
    console.log('\n✅ Database seeded successfully!');
    process.exit(0);

  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

// run the seedcars script
seedDatabase();