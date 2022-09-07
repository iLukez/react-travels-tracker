import React from 'react'

const RemoveButton = ({ travel, removeTravel }) => {
  return (
    <button className='remove-button' onClick={() => removeTravel(travel.key)}>X</button>
  )
}

export default RemoveButton