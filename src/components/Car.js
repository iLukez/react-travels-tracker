import React from 'react'

const Car = ({car, travels}) => {
  return (
    <div className='car'>
        <p className='car-name'>{car.carName}</p>
        <p className='car-ratio'>{car.kmToLiterRatio} km/liter</p>
        <p className='car-key'>{car.key}</p>
    </div>
  )
}

export default Car