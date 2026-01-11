import React from 'react'


const carInfo = ({car}) => {

if(!car){
    return null;
}
  return (
    <div className='mt-4 space-y-4 relative'>
      
      {/* basic info */}
      <div className='bg-white rounded-xl shadow-md p-6'>
        <h3 className='text-xl font-bold mb-4 '>Vehicle Information</h3>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <p className='text-gray-600 text-sm'>Color</p>
            <p className='font-semibold'>{car.color}</p>
          </div>
          <div>
            <p className='text-gray-600 text-sm'>Mileage</p>
            <p className='font-semibold'>{car.mileage?.toLocaleString()} km</p>
          </div>
          <div>
            <p className='text-gray-600 text-sm'>Fuel Type</p>
            <p className='font-semibold'>{car.fuel_type}</p>
          </div>
          <div>
            <p className='text-gray-600 text-sm'>Transmission</p>
            <p className='font-semibold'>{car.transmission_type}</p>
          </div>
          <div>
            <p className='text-gray-600 text-sm'>Daily rate</p>
            <p className='font-semibold text-blue-600'>${car.daily_rate?.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* description*/}
      {car.description && (
        <div className='bg-white rounded-xl shadow-md p-6'>
          <h3 className='text-xl font-bold mb-4'>Description</h3>
          <p className='text-gray-700 leading-relaxed whitespace-pre-line'>
            {car.description}
          </p>
        </div>
      )}

      {/* features */}
      {car.features && car.features.length > 0 && (
        <div className='bg-white rounded-xl shadow-md p-6'>
          <h3 className='text-xl font-bold mb-4'>Features</h3>
          <ul className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
            {car.features.map((feature, index) => (
              <li key={index} className='flex items-start'>
                <svg 
                  className='w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0' 
                  fill='none' 
                  stroke='currentColor' 
                  viewBox='0 0 24 24'
                >
                  <path 
                    strokeLinecap='round' 
                    strokeLinejoin='round' 
                    strokeWidth='2' 
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <span className='text-gray-700'>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* cta */}
      <div className='bg-white rounded-lg shadow-md p-6'>
        <button className='w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'>
          Contact Seller for {car.daily_rate}$/day
        </button>
      </div>
    </div>
  )
}

export default carInfo