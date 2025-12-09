import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import {useParams} from 'react-router-dom'



const CarDetails = () => {

    const {id} = useParams();
  return (
    <>
        <Navbar/>
        <div className='container mx-auto px-4 py-20'>
            <h1 className='text-2xl font-bold'>CarDetailed Page</h1>
            <p className='text-gray-500'>Showinf car details for car id: {id}</p>
        </div>
        
    </>
    
  )
}

export default CarDetails