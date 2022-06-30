import React from 'react'

const Travel = ({travel}) => {
  return (
    <div className='travel'>
      <h5 className='travel-positions'><strong>{travel.startingPoint}</strong> &rarr; <strong>{travel.endingPoint}</strong></h5>
      <p className='travel-distance'>{travel.distance} Km</p>
      <p className='travel-car'><b>Car:</b> {travel.car}</p>
      <p className='travel-date'><b>Day:</b> <i>{travel.date}</i></p>
    </div>
  )
}

export default Travel
