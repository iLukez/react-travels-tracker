import React from 'react'

const Travel = ({travel}) => {
  return (
    <div className='travel'>
      <p className='travel-date'>Giorno: <strong>{travel.date}</strong></p>
      <h5>from: <strong>{travel.startingPoint}</strong>  to: <strong>{travel.endingPoint}</strong></h5>
      {travel.distance} Km
    </div>
  )
}

export default Travel
