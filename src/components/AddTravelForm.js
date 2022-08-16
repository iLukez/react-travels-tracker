import React from 'react'
import { useState } from "react";

const AddTravelForm = () => {

  const [date, setDate] = useState();

  const submit = () => {
      console.log(date);
  }

  return (
    <div id='addTravel'>
        <form className='addTravelForm'>
            <label>From:</label><br />
            <input id='formFrom' type='text' /><br />
            <label>To:</label><br />
            <input id='formTo' type='text' /><br />
            <label>Distance Travelled:</label><br />
            <input id='formDistanceTravelled' type='number' /> Km<br />
            <label>Car Used:</label><br />
            <input id='formCarUsed' type='text' /><br />
            <label>Date:</label><br />
            <input id='formDate' type='date' onChange={(event) => setDate(event.target.value)}/>
            <input className='submitButton' defaultValue='&#10003; Submit' onSubmit={submit()}/>
        </form>
    </div>
  )
}

export default AddTravelForm