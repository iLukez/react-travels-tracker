import React from 'react'
import Car from './Car'
import PropTypes from 'prop-types'

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

Cars.propTypes = {
  carsList: PropTypes.array,
  removeCar: PropTypes.func
}

export default Cars