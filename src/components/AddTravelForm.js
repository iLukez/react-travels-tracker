import React from 'react'

const AddTravelForm = () => {
  return (
    <div id='addTravel'>
        <form className='addTravelForm'>
            <label>From:</label><br />
            <input id='formFrom' type='text'></input><br />
            <label>To:</label><br />
            <input id='formTo' type='text'></input><br />
            <label>Distance Travelled:</label><br />
            <input id='formDistanceTravelled' type='number'></input><br />
            <label>Car Used:</label><br />
            <input id='formCarUsed' type='text'></input><br />
            <label>Date:</label><br />
            <input id='formDate' type='date'></input>
        </form>
    </div>
  )
}

export default AddTravelForm