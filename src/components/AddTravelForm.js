import React from 'react'
import { useState } from "react";
import PropTypes from 'prop-types';

const AddTravelForm = ({ addTravel, carsList, invertIsAdding }) => {

  // States for the data of the new travel
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [distance, setDistance] = useState('');
  const [car, setCar] = useState('');
  const [date, setDate] = useState('');

  const onSubmit = () => {
    if (!from || !to || !distance || !car || !date) {
      alert('Can\'t submit the Travel due to missing informations');
      return;
    }
    else if (distance <= 0) {
      alert('Can\'t submit the Travel due to invalid Distance value');
      return;
    }

    addTravel(from, to, distance, car, date);

    setFrom('');
    setTo('');
    setDistance('');
    setCar('');
    setDate('');

    invertIsAdding();
    return;
  }

  return (
    <div id='addTravel'>
      <form className='add-travel-form'>
        <label>From:</label><br />
        <input id='formFrom'
               type='text'
               value={from}
               onChange={(event) => setFrom(event.target.value)}
        /><br />

        <label>To:</label><br />
        <input id='formTo'
               type='text'
               value={to}
               onChange={(event) => setTo(event.target.value)}
        /><br />
        
        <label>Distance Travelled:</label><br />
        <input id='formDistanceTravelled'
               type='number'
               value={distance}
               onChange={(event) => setDistance(event.target.value)}
        /> Km<br />
        
        <label>Car Used:</label><br />
        <select id='formCarUsed'
                defaultValue='' 
                name='carUsed'
                onChange={(event) => setCar(event.target.value)}
        >
          <option value="" disabled hidden>Choose here</option>
              {carsList.map((car) => (
                <option key={car.key}
                        value={car.carName}>
                  {car.carName}
                </option>
              ))}
        </select><br />
        
        <label>Date:</label><br />
          <input id='formDate'
                 type='date' 
                 value={date} 
                 onChange={(event) => setDate(event.target.value)}
          /><br />

        <button type='button' 
                className='submit-button' 
                onClick={() => onSubmit()}
        >
          &#10003; Submit</button>
      </form>
    </div>
  )
}

AddTravelForm.propTypes = {
  addTravel: PropTypes.func,
  carsList: PropTypes.array,
  invertIsAdding: PropTypes.func
}

export default AddTravelForm