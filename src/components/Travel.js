import React from 'react'
import RemoveButton from './RemoveButton';

const Travel = ({travel, carsList, gasCostPerLiter, removeTravel}) => {

  function findTravelCost(car, carsList, gasCostPerLiter, travelDistance) {
    const carUsed = carsList.find( (c) => {
      if (car === c.carName) {
        return true;
      }
      return false;
    })
    const travelCost = (travelDistance / carUsed.kmToLiterRatio) * gasCostPerLiter;

    return travelCost.toFixed(2);
  }

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
        <h3>- € {findTravelCost(travel.car, carsList, gasCostPerLiter, travel.distance)}</h3>
      </div>
    </div>
  )
}

export default Travel
