import React from 'react'
import RemoveCarButton from './RemoveCarButton.js';
import PropTypes from 'prop-types';

const Car = ({ car, removeCar }) => {
  return (
    <div className='car'>
      <img
        src={car.image}
        alt={'Picture of a ' + car.carName}
        className="car-image" 
      />

      <div className='car-divisor'></div>

      <div className='car-info'>
        <p className='car-name'>{car.carName}</p>
        <p className='car-ratio'>{car.kmToLiterRatio}</p> km/liter
        <RemoveCarButton car={car} removeCar={removeCar}/>
        <div className='car-key'>{car.key}</div>
      </div>
    </div>
  )
}

Car.propTypes = {
  car: PropTypes.object,
  removeCar: PropTypes.func
}

export default Car