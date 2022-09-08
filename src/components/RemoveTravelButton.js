import React from 'react'
import PropTypes from 'prop-types'

const RemoveTravelButton = ({ travel, removeTravel }) => {
  return (
    <button className='remove-button' 
            onClick={() => removeTravel(travel.key)}
    >
      X
    </button>
  )
}

RemoveTravelButton.propTypes = {
  travel: PropTypes.object,
  removeTravel: PropTypes.func
}

export default RemoveTravelButton