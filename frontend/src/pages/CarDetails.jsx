import React, {useState, useEffect} from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import {useParams} from 'react-router-dom'
import { carAPI } from '../services/api.js'
import CarGallery from '../components/cars/CarGallery.jsx'
import CarInfo from '../components/carInfo/carInfo.jsx'




const CarDetails = () => {

    const {id} = useParams();

  const [car, setCar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const goToCarId = async () => {
      try {
        setIsLoading(true);

        const data = await carAPI.getCarById(id);

        if (typeof data.data.features === 'string') {
        data.data.features = JSON.parse(data.data.features);
      }

        setCar(data.data)
        setIsLoading(false);

      } catch (err) {
        setErrorMsg(err.message);
        setIsLoading(false);
      }
    } 
    goToCarId();
  }, [id])
  

  return (
    <>
        <Navbar/>
        {isLoading ? (

        <>
        <div className='flex justify-between items-center mb-5 animate-pulse'>
          <div className='h-6 w-32 bg-gray-200 rounded-md animate-pulse'></div>
          <div className='h-6 w-20 bg-gray-200 rounded-md animate-pulse'></div>
        </div><div className='flex justify-between items-center mb-5'>
            <div className='h-6 w-32 bg-gray-200 rounded-md animate-pulse'></div>
            <div className='h-6 w-20 bg-gray-200 rounded-md animate-pulse'></div>
          </div>
          </>

          ): errorMsg ?(
            <div className='py-20 text-center'>
        <p className='text-red-500 font font-semibold'>Error:{errorMsg}</p>
        <button onClick={() => window.location.reload()}
                className='mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
          Try Again
        </button>
        </div>

          ) : (
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-10'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <CarGallery images={car.image_urls}/>
                <div>
                  <h2 className='font-bold text-3xl text-blue-600 '>{car.make}-{car.model}</h2>
                  {car && <CarInfo car={car}/>}
                </div>
              </div>
            </div>

          )}
        
    </>
    
  )
}

export default CarDetails