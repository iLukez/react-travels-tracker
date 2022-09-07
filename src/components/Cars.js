import React from 'react'
import Car from './Car'

const Cars = ({ carsList, removeCar }) => {
  return (
    <div className='cars-list'>
      <h2>Your cars:</h2>
      <div className='cars'>
        {carsList.map((car) => (
            <Car key={car.key} car={car} removeCar={removeCar}/>
        ))}
      </div>
    </div>
  )
}

export default Cars