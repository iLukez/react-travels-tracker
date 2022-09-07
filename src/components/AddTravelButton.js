import React from 'react'

const Button = ({isAdding, onIsAdding}) => {
  return (
    <button 
      type='button' 
      id='addTravelButton' 
      className={isAdding ? 'delete-button' : 'add-button'} 
      onClick={onIsAdding}
    > 
      {isAdding ? '- Delete Travel' : '+ Add New Travel'} 
    </button>
  )
}

export default Button