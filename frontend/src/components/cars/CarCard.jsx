import React from 'react'
import {Heart, Fuel, UsersRound, Gauge} from 'lucide-react'
import { createLucideIcon } from "lucide-react";
import { gearbox } from "@lucide/lab";
import { Link } from 'react-router';

const Gearbox = createLucideIcon("Gearbox", gearbox);


import { useState } from 'react';

const CarCard = ({car}) => {
  const [isLiked, setisLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    //container - header section + img sec + specs section + footer price+button
    <div className='w-full max-w-xs mx-auto border border-gray-200 bg-[#fafafa] rounded-[20px] p-6 flex flex-col transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl '>
     <div className='flex justify-between items-start mb-4'>
        <div>
          <h3 className='font-bold text-xl'>{car.make} {car.model}</h3>
          <p className='font-medium text-sm text-gray-500 capitalize'>{car.year}</p>
        </div>

        <button onClick={() => setisLiked(!isLiked)} className='text-[#90A3BF] hover:text-[#ED3F3F] transition-colors'>
          <Heart 
          size={24}
          className={isLiked ? 'fill-[#ED3F3F] text-[#ED3F3F]' :'fill-none'}
          />
       </button>
      </div> 
      
    <div className='relative my-4 h-48 w-full rounded-lg overflow-hidden'>
      {!imageLoaded && (
        <div className='absolute bg-gray-100 inset-0 rounded-lg animate-pulse z-10 '></div>
      )}
     <img src={car.image_urls[0]} alt={car.make} 
     onLoad={() =>setImageLoaded(true)}
        className={`w-full h-full object-contain transition-opacity duration-500 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div className='absolute bottom-0 w-full h-23 bg-linear-to-t from-[#fafafa] to-transparent'></div>
    </div>

    

      <div className='flex justify-between items-center mt-auto text-gray-500'>
        <div className="flex items-center gap-1">
          <Fuel size={20} className="text-[#3563E9]" />
          <span className="text-sm font-medium">{car.fuel_type}</span>
        </div>
        <div className="flex items-center gap-1">
          <Gearbox size={20} className="text-[#3563E9]" />
          <span className="text-sm font-medium capitalize">{car.transmission_type}</span>
        </div>
        <div className="flex items-center gap-1">
          <UsersRound size={20} className="text-[#3563E9]"/>
          <span className="text-sm font-medium">{car.number_of_seats} People</span>
        </div>
      </div>

      <div className='flex justify-between items-center mt-auto pt-4'>
        <div>
          <p className="text-xl font-bold">
            ${car.daily_rate.toFixed(2)}
            <span className="text-sm font-normal text-gray-500">/day</span>
          </p>
        </div>
        <Link
        to={'/car/{car._id}'}
        className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-md cursor-pointer hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
          Rent Now
        </Link>
      </div>

    </div>
  )
}

export default CarCard