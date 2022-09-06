import React from 'react'
import { useState } from "react";

const AddTravelForm = ({addTravel, carsList, setIsAdding}) => {

  // States for the data of the new travel

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [distance, setDistance] = useState('');
  const [car, setCar] = useState('');
  const [date, setDate] = useState('');

  // Test submit function, todo: remove

  const onSubmit = () => {
    if (!from || !to || !distance || !car || !date) {
      alert('Can\'t submit the Travel due to missing informations');
      return;
    }

    addTravel(from, to, distance, car, date);

    setFrom('');
    setTo('');
    setDistance('');
    setCar('');
    setDate('');

    setIsAdding();
    return
  }


  return (
    <div id='addTravel'>
        <form className='addTravelForm' >
            <label>From:</label><br />
            <input id='formFrom' type='text' value={from} onChange={(event) => setFrom(event.target.value)} /><br />

            <label>To:</label><br />
            <input id='formTo' type='text' value={to} onChange={(event) => setTo(event.target.value)} /><br />

            <label>Distance Travelled:</label><br />
            <input id='formDistanceTravelled' type='number' value={distance} onChange={(event) => setDistance(event.target.value)} /> Km<br />

            <label>Car Used:</label><br />
            <select id='formCarUsed' defaultValue='' name='carUsed' onChange={(event) => setCar(event.target.value)}>
              <option value="" disabled hidden>Choose here</option>
              {carsList.map((car) => (
                <option key={car.key} value={car.carName}>{car.carName}</option>
              ))}
            </select><br />

            <label>Date:</label><br />
            <input id='formDate' type='date' value={date} onChange={(event) => setDate(event.target.value)} /><br />

            <button type='button' className='submitButton' onClick={() => onSubmit()}>&#10003; Submit</button>
        </form>
    </div>
  )
}

export default AddTravelForm