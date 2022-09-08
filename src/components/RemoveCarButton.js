import React from 'react'
import PropTypes from 'prop-types'

const RemoveCarButton = ({ car, removeCar }) => {
  return (
    <button className='remove-button' 
            onClick={() => removeCar(car.key)}
    >
      X
    </button>
  )
}

RemoveCarButton.propTypes = {
  car: PropTypes.object,
  removeCar: PropTypes.func
}

export default RemoveCarButton