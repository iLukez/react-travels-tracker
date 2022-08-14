import React from 'react'
import Travel from './Travel'
import { useState } from 'react'
import PropTypes from 'prop-types'

const Travels = ({travels}) => {
  const gasCostPerLiter = 2.01;
  const [carsList, setCarsList] = useState([{
        carName: 'Opel Karl',
        kmToLiterRatio: 19.6  
      },
      {
        carName: 'Renault Clio',
        kmToLiterRatio: 14.7  
      }
    ]
  )

  return (
    <div className='travels-list'>
      <h2>Travels List:</h2>
      <div className='travels'>
        {travels.map((travel) => (
          <Travel key={travel.key} travel={travel} carsList={carsList} gasCostPerLiter={gasCostPerLiter} />
        ))}
      </div>
    </div>
  )
}

Travels.propTypes = {
  travels: PropTypes.array,
}

export default Travels
