import React from 'react'
import PropTypes from 'prop-types';

const AddTravelButton = ({ isAdding, invertIsAdding }) => {
  return (
    <button
      type='button' 
      id='addTravelButton' 
      className={isAdding ? 'delete-button' : 'add-button'} 
      onClick={invertIsAdding}
    > 
      {isAdding ? '- Delete Travel' : '+ Add New Travel'} 
    </button>
  )
}

AddTravelButton.propTypes = {
  isAdding: PropTypes.bool,
  invertIsAdding: PropTypes.func
}

export default AddTravelButton