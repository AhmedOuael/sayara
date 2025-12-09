import React from 'react'

const SkeleronCard = () => {
  return (
     <div className='w-full max-w-xs mx-auto border border-gray-200 bg-white rounded-[20px] p-6 flex flex-col animate-pulse'>
       {/* header: title, heartcicon placeholder */}
        <div className='flex justify-between items-start mb-4'>
            <div className='space-y-2'>
                {/* title:1 name & 2 year or type palcehoder*/}
                <div className='h-6 w-32 bg-gray-200 rounded-md'></div>
                <div className='h-4 w-32 bg-gray-200 rounded-md'></div>
            </div>
               {/* heart icon placeholder */}
                <div className='h-6 w-6 bg-gray-200 rounded-full'></div> 
        </div>
        
        {/* img placeholder */}
        <div className='my-4 h-40 bg-gray-200 rounded-lg w-full'></div>
        {/* specs placeholder */}
        <div className='flex justify-between items-center text-gray-200 mt-4'>
            <div className='h-4 w-12 bg-gray-200 rounded-md'></div>
            <div className='h-4 w-12 bg-gray-200 rounded-md'></div>
            <div className='h-4 w-12 bg-gray-200 rounded-md'></div>
        </div>
        {/* footer price & rent button */}
        <div className='flex justify-between items-center mt-auto pt-4'>
            <div className='space-y-1'>
                <div className='h-6 w-24 bg-gray-200 rounded-md'></div>
                <div className='h-3 w-12 bg-gray-200 rounded-md'></div>
            </div>
            {/* button */}
            <div className='h-10 w-24 rounded-lg bg-gray-200'></div>
        </div>

     </div>
  )
}

export default SkeleronCard