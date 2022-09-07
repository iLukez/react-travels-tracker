import React from 'react'
import RemoveButton from './RemoveTravelButton';

const Travel = ({travel, removeTravel}) => {

  return (
    <div className='travel'>
      <div className='travel-primitive-infos'>
        <h5 className='travel-positions'><strong>{travel.startingPoint}</strong> &rarr; <strong>{travel.endingPoint}</strong></h5>
        <p className='travel-distance'>{travel.distance} Km</p>
        <p className='travel-car'><b>Car:</b> {travel.car}</p>
        <p className='travel-date'><b>Day:</b> <i>{travel.date}</i></p>
      </div>
      <RemoveButton travel={travel} removeTravel={removeTravel}/>
      <div className='travel-cost'>
        <h3>- € {travel.cost}</h3>
      </div>
    </div>
  )
}

export default Travel
