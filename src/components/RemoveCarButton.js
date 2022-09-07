import React from 'react'

const RemoveCarButton = ({ car, removeCar }) => {
  return (
    <button className='remove-button' onClick={() => removeCar(car.key)}>X</button>
  )
}

export default RemoveCarButton