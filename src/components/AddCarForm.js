import React from 'react'
import PropTypes from 'prop-types';
import { useState } from 'react'

const AddCarForm = ({ addCar, invertIsAdding }) => {

  // States for the datas of the new car
  const [carName, setCarName] = useState('');
  const [kmLRatio, setKmLRatio] = useState('');

  const onSubmit = () => {
      if (carName === '' || kmLRatio === '') {
          alert('Can\'t submit the Car due to missing informations');
          return;
      }
      else if (kmLRatio <= 0) {
          alert('Can\'t submit the Car due to invalid Km/l ratio value');
          return;
      }

      addCar(carName, kmLRatio);

      setCarName('');
      setKmLRatio('');

      invertIsAdding();
      return;
  }

  return (
    <div id='addCar'>
        <form className='add-car-form'>
            <label>Car name:</label><br />
            <input id='formCarName' 
                   type='text' 
                   value={carName} 
                   onChange={(e) => setCarName(e.target.value)} 
            /><br />

            <label>Km/l Ratio:</label><br />
            <input id='formKmL' 
                   type='number'
                   value={kmLRatio}
                   onChange={(e) => setKmLRatio(e.target.value)}
            /><br />

            <button type='button'
                    className='submit-button'
                    onClick={() => onSubmit()}
            >
                &#10003; Submit
            </button>
          </form>
      </div>
  )
}

AddCarForm.propTypes = {
    addCar: PropTypes.func,
    invertIsAdding: PropTypes.func
}

export default AddCarForm