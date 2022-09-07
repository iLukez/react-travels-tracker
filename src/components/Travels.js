import React from 'react'
import Travel from './Travel'
import PropTypes from 'prop-types'

const Travels = ({ travels, carsList, gasCostPerLiter, removeTravel }) => {

  return (
    <div className='travels-list'>
      <h2>Travels List:</h2>
      <div className='travels'>
        {travels.map((travel) => (
          <Travel key={travel.key} travel={travel} carsList={carsList} gasCostPerLiter={gasCostPerLiter} removeTravel={removeTravel}/>
        ))}
      </div>
    </div>
  )
}

Travels.propTypes = {
  travels: PropTypes.array,
}

export default Travels
