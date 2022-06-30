import React from 'react'
import Travel from './Travel'
import { useEffect } from 'react'
import PropTypes from 'prop-types'

const Travels = ({travels}) => {

  return (
    <div className='travels'>
      {travels.map((travel) => (
        <Travel key={travel.id} travel={travel} />
      ))}
    </div>
  )
}

Travels.propTypes = {
  travels: PropTypes.array,
}

export default Travels
