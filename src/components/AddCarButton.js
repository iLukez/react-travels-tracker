import React from 'react'
import PropTypes from 'prop-types';

const addCarButton = ({ isAdding, invertIsAdding }) => {
  return (
    <button 
      type='button' 
      id='addCarButton' 
      className={isAdding ? 'delete-button' : 'add-button'} 
      onClick={invertIsAdding}
    >
      {isAdding ? '- Delete Car' : '+ Add New Car'}
    </button>
  )
}

addCarButton.propTypes = {
  isAdding: PropTypes.bool,
  onIsAdding: PropTypes.func
}

export default addCarButton