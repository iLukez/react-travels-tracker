import React from 'react'

const addCarButton = ({isAdding, onIsAdding}) => {
  return (
    <button 
      type='button' 
      id='addCarButton' 
      className={isAdding ? 'delete-button' : 'add-button'} 
      onClick={onIsAdding}
    >
      {isAdding ? '- Delete Car' : '+ Add New Car'}
    </button>
  )
}

export default addCarButton