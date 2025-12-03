import React from 'react'
import CarCard from '../components/cars/CarCard.jsx'
import { carAPI } from '../services/api.js'
import Spinner from '../components/layout/Spinner.jsx'
import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import HeroSection from '../components/home/HeroSection.jsx'
import { useState, useEffect } from 'react'
import HeroSectionV2 from '../components/home/HeroSection.jsx'

const Home = () => {
//state to store the car list
const [cars, setCars] = useState([]);

//loading before seeing the cars
const [isLoading, setIsLoading] = useState(true);

// storing any errors that happen
const [errorMsg, setErrorMsg] = useState(null);

useEffect(() => {
  const fetchCars = async () => {
    try {
        //start with loading
        setIsLoading(true);

        // call the api to get all the cars 
        const data = await carAPI.getAllCars();

        //stores data to the state
        setCars(data.data);
        setIsLoading(false);
        
    } catch (err) {
        setErrorMsg(err.message);
        setIsLoading(false);

    }
  }
    //calling the function  
    fetchCars();
  
}, [])


  // spliting the cars to popular and recommended sections
  const popularCars = cars.filter(car => car.luxury_status || car.rare_status).slice(0, 4);
  const recommendedCars = cars.slice(0, 8);


 return (
  <>
  <Navbar/>
  <HeroSection/>
  <div className='flex flex-col items-center pt-2'>
  {isLoading ? (
        // 1- loading state
        <Spinner />
      ) : errorMsg ? (
        // 2- error state
        <p className='text-red-500'>{errorMsg}</p>
      ) : (
        // 3- success state data loaded
        // we use a another fragement<> to make a grid
        <>
          {/* Popular Cars Section */}
      <section className="container mx-auto px-6 py-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-base font-semibold text-[#90A3BF]">Popular Car</h2>
          <button className="text-[#3563E9] text-base font-semibold hover:underline">
            View All
          </button>
        </div>

        {/* Popular Cars - Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="relative">
          {/* Mobile: Horizontal Scrollable */}
          <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
            {popularCars.map((car) => (
              <div key={car._id} className="shrink-0 w-auto snap-center">
                <CarCard car={car} />
              </div>
            ))}
          </div>

          {/* Desktop: 4 Cards in a Row */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            {popularCars.map((car) => (
              <CarCard key={car._id} car={car} />
            ))}
          </div>
        </div>

      </section>

      {/* Recommendation Cars Section */}
      <section className="container mx-auto px-6 py-8">
        
        {/* Section Header */}
        <div className="mb-5">
          <h2 className="text-base font-semibold text-[#90A3BF]">Recommendation Car</h2>
        </div>

        {/* Recommendation Cars - 1 column mobile, 4 columns desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {recommendedCars.map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>

        {/* Show More Button */}
        <div className="flex flex-col items-center gap-4 mt-16">
          <button className="bg-[#3563E9] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#264BC5] transition-colors min-w-[156px]">
            Show more car
          </button>
          <p className="text-sm text-[#90A3BF]">
            {cars.length} Car
          </p>
        </div>

      </section>
        </>
      )}
      </div>
      <Footer/>
    </>
  );
};

export default Home;