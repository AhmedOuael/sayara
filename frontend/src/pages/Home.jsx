import React from 'react'
import CarCard from '../components/cars/CarCard.jsx'
import { carAPI } from '../services/api.js'
import Spinner from '../components/layout/Spinner.jsx'
import { useState, useEffect } from 'react'

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


 return (
  <>
  {isLoading ? (
        // 1. loading state
        <Spinner />
      ) : errorMsg ? (
        // 2. error state
        <p className='text-red-500'>{errorMsg}</p>
      ) : (
        // 3. success state data loaded
        // we use a another fragement<> to make a grid
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* lopping through each car then create the CarCard */}
            {cars.map((car) => (
              <CarCard
                key={car._id}  // unique key for react
                car={car}      // passing the whole car obj to CarCard
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-[#90A3BF]">
              Showing {cars.length} cars
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Home;