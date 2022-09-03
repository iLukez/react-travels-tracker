import React from 'react'

const Car = ({car, travels}) => {
  return (
    <div className='car'>
        <p className='car-name'>{car.carName}</p>
        <p className='car-ratio'>{car.kmToLiterRatio}</p> km/liter
        <p className='car-key'>{car.key}</p>
    </div>
  )
}

export default Car