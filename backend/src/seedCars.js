const mongoose = require('mongoose');
const Car = require('./models/Car');
require('dotenv').config();

// temp 10 cars 
const sampleCars = [
  {
    make: 'Koenigsegg',
    model: 'CCXR',
    year: 2020,
    color: 'White',
    license_plate: 'KOEN001',
    daily_rate: 99.00,
    weekly_rate: 600.00,
    security_deposit: 5000.00,
    description: 'NISMO has become the embodiment of Nissan outstanding performance, inspired by the most unforgiving proving ground, the "race track".',
    image_urls: ['/images/Koenigsegg.png'],
    is_available: true,
    location: 'Downtown Showroom',
    mileage: 5000,
    fuel_type: 'Gasoline',
    fuel_capacity: '90L',
    transmission_type: 'Manual',
    number_of_seats: 2,
    features: ['GPS', 'Bluetooth', 'Premium Sound', 'Sport Mode'],
    luxury_status: true,
    rare_status: true
  },
  {
    make: 'Nissan',
    model: 'GT - R',
    year: 2021,
    color: 'Silver',
    license_plate: 'GTR2021',
    daily_rate: 80.00,
    weekly_rate: 500.00,
    security_deposit: 3000.00,
    description: 'NISMO has become the embodiment of Nissans outstanding performance, inspired by the most unforgiving proving ground, the "race track".',
    image_urls: ['/images/Nissan GT - R.png'],
    is_available: true,
    location: 'Airport Location',
    mileage: 15000,
    fuel_type: 'Gasoline',
    fuel_capacity: '80L',
    transmission_type: 'Manual',
    number_of_seats: 2,
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
    image_urls: ['/images/Rolls - Royce.png'],
    is_available: false,
    location: 'VIP Center',
    mileage: 3000,
    fuel_type: 'Gasoline',
    fuel_capacity: '70L',
    transmission_type: 'Manual',
    number_of_seats: 4,
    features: ['Massaging Seats', 'Champagne Cooler', 'Starlight Headliner', 'Premium Audio'],
    luxury_status: true,
    rare_status: true
  },
  {
    make: 'All New Rush',
    model: 'SUV',
    year: 2023,
    color: 'Gray',
    license_plate: 'RUSH23',
    daily_rate: 72.00,
    weekly_rate: 450.00,
    security_deposit: 1500.00,
    description: 'Reliable and spacious SUV perfect for family trips.',
    image_urls: ['/images/All New Rush.png'],
    is_available: true,
    location: 'Main Branch',
    mileage: 12000,
    fuel_type: 'Gasoline',
    fuel_capacity: '70L',
    transmission_type: 'Manual',
    number_of_seats: 6,
    features: ['GPS', 'Third Row Seating', 'Roof Rack', 'USB Charging'],
    luxury_status: false,
    rare_status: false
  },
  {
    make: 'CR',
    model: '- V',
    year: 2023,
    color: 'Brown',
    license_plate: 'CRV23',
    daily_rate: 80.00,
    weekly_rate: 520.00,
    security_deposit: 2500.00,
    description: 'Premium SUV with comfort and cutting-edge technology.',
    image_urls: ['/images/CR  - V.png'],
    is_available: true,
    location: 'Tech District',
    mileage: 8000,
    fuel_type: 'Gasoline',
    fuel_capacity: '80L',
    transmission_type: 'Manual',
    number_of_seats: 6,
    features: ['Apple CarPlay', 'Premium Audio', 'Backup Camera', 'Blind Spot Monitor'],
    luxury_status: false,
    rare_status: false
  },
  {
    make: 'All New Terios',
    model: 'SUV',
    year: 2022,
    color: 'Blue',
    license_plate: 'TER22',
    daily_rate: 74.00,
    weekly_rate: 480.00,
    security_deposit: 2000.00,
    description: 'Compact SUV perfect for city driving and weekend adventures.',
    image_urls: ['/images/All New Terios.png'],
    is_available: true,
    location: 'Downtown Showroom',
    mileage: 10000,
    fuel_type: 'Gasoline',
    fuel_capacity: '90L',
    transmission_type: 'Manual',
    number_of_seats: 6,
    features: ['Bluetooth', 'USB Charging', 'Roof Rack', 'Climate Control'],
    luxury_status: false,
    rare_status: false
  },
  {
    make: 'MG ZX Exclusice',
    model: 'Hatchback',
    year: 2023,
    color: 'Blue',
    license_plate: 'MGZX23',
    daily_rate: 76.00,
    weekly_rate: 560.00,
    security_deposit: 3500.00,
    description: 'Modern hatchback with style and efficiency.',
    image_urls: ['/images/MG ZX Exclusice.png'],
    is_available: true,
    location: 'VIP Center',
    mileage: 6000,
    fuel_type: 'Electric',
    fuel_capacity: '70L',
    transmission_type: 'Manual',
    number_of_seats: 4,
    features: ['Panoramic Sunroof', 'Wireless Charging', 'LED Headlights', 'Digital Cockpit'],
    luxury_status: false,
    rare_status: false
  },
  {
    make: 'New MG ZS',
    model: 'SUV',
    year: 2022,
    color: 'White',
    license_plate: 'MGZS22',
    daily_rate: 80.00,
    weekly_rate: 590.00,
    security_deposit: 4000.00,
    description: 'Stylish compact SUV with great value and features.',
    image_urls: ['/images/New MG ZS.png'],
    is_available: true,
    location: 'Airport Location',
    mileage: 7500,
    fuel_type: 'Gasoline',
    fuel_capacity: '80L',
    transmission_type: 'Manual',
    number_of_seats: 6,
    features: ['Apple CarPlay', 'Cruise Control', 'Rear Camera', 'Alloy Wheels'],
    luxury_status: false,
    rare_status: false
  },
  {
    make: 'MG ZX Excite',
    model: 'Hatchback',
    year: 2023,
    color: 'Blue',
    license_plate: 'MGEX23',
    daily_rate: 74.00,
    weekly_rate: 400.00,
    security_deposit: 1200.00,
    description: 'Practical and fuel-efficient hatchback perfect for everyday use.',
    image_urls: ['/images/MG ZX Excite.png'],
    is_available: true,
    location: 'Main Branch',
    mileage: 18000,
    fuel_type: 'Electric',
    fuel_capacity: '90L',
    transmission_type: 'Manual',
    number_of_seats: 4,
    features: ['Android Auto', 'Keyless Entry', 'Climate Control', 'Multi-Function Steering'],
    luxury_status: false,
    rare_status: false
  },

  {
    make: 'Mercedes-Benz',
    model: 'G63 AMG',
    year: 2023,
    color: 'Matte Black',
    license_plate: '5814 MJC',
    daily_rate: 100.00,  
    weekly_rate: 580.00, 
    security_deposit: 1500.00, 
    description: 'The excellence of luxury, within your reach. Available for rental — with or without a driver. Perfect for your prestigious events, weddings and special occasions.',
    image_urls: ['/images/merc1.jpg',
                 '/images/merc2.jpg',
                 '/images/merc3.jpg',
                 '/images/merc4.jpg',
    ],
    is_available: true,
    location: 'Main Branch', 
    mileage: 5000,
    fuel_type: 'Gasoline',
    fuel_capacity: '100L',
    transmission_type: 'Automatic',
    number_of_seats: 5,
    features: ['Chauffeur Service', 'Red Leather Interior', 'Rear Entertainment', 'Sunroof', 'GPS'],
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