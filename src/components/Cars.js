import React from 'react'
import Car from './Car'

const Cars = ({carsList, travels}) => {
  return (
    <div className='cars-list'>
      <h2>Your cars:</h2>
      <div className='cars'>
        {carsList.map((car) => (
            <Car car={car} travels={travels}/>
        ))}
      </div>
    </div>
  )
}

export default Cars