import React from 'react'
import ReactImageFallback from "react-image-fallback";

const Car = ({car, travels}) => {
  return (
    <div className='car'>
        <ReactImageFallback
          src={'/images/' + car.carName + '.jpg'}
          fallbackImage={'/images/' + car.carName + '.png'}
          alt={'Picture of a ' + car.carName}
          className="car-image" 
        />
        <div id='carDivisor'></div>
        <div className='car-info'>
          <p className='car-name'>{car.carName}</p>
          <p className='car-ratio'>{car.kmToLiterRatio}</p> km/liter
          <div className='car-key'>{car.key}</div>
        </div>
    </div>
  )
}

export default Car