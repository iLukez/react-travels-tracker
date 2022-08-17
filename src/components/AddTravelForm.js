import React from 'react'
import { useState } from "react";

const AddTravelForm = () => {

  // States for the data of the new travel

  const [from, setFrom] = useState('/');
  const [to, setTo] = useState('/');
  const [distance, setDistance] = useState('/');
  const [car, setCar] = useState('/');
  const [date, setDate] = useState('1/1/1960');

  // Test submit function, todo: remove

  const submit = () => {
    console.log(from);
    console.log(to);
    console.log(distance);
    console.log(car);
    console.log(date);
  }


  return (
    <div id='addTravel'>
        <form className='addTravelForm' >
            <label>From:</label><br />
            <input id='formFrom' type='text' onChange={(event) => setFrom(event.target.value)} /><br />
            <label>To:</label><br />
            <input id='formTo' type='text' onChange={(event) => setTo(event.target.value)} /><br />
            <label>Distance Travelled:</label><br />
            <input id='formDistanceTravelled' type='number' onChange={(event) => setDistance(event.target.value)} /> Km<br />
            <label>Car Used:</label><br />
            <input id='formCarUsed' type='text' onChange={(event) => setCar(event.target.value)} /><br />
            <label>Date:</label><br />
            <input id='formDate' type='date' onChange={(event) => setDate(event.target.value)} /><br />
            <button type='button' className='submitButton' onClick={() => submit()}>&#10003; Submit</button>
        </form>
    </div>
  )
}

export default AddTravelForm