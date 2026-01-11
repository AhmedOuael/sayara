import React, {useState} from 'react'

const CarGallery = ({images}) => {
const [selectedImage, setSelectedImage] = useState(images[0])


if (!images || images.length === 0) {
    return (
      <div className="grid gap-4 p-4">
        <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
          <p className="text-gray-500">Error : images are not available at the moment</p>
        </div>
      </div>
    );
  }

  return (
<div className='space-y-4'>
  <div className='w-full'>
    <img src={selectedImage} alt=""
          className='h-auto w-full max-h-[500px] object-cover rounded mx-auto shadow-lg' />
  </div>

  <div className='grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4'>
    {images.map((image, index) => 
     <img src={image} alt="" 
          onClick={() => setSelectedImage(image)} 
          key={index}
          className='h-auto max-w-full rounded-md mx-auto'/> )}
  </div>
</div>

  )
}

export default CarGallery