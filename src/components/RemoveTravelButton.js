import React from 'react'

const RemoveTravelButton = ({ travel, removeTravel }) => {
  return (
    <button className='remove-button' onClick={() => removeTravel(travel.key)}>X</button>
  )
}

export default RemoveTravelButton