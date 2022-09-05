import React from 'react'

const addCarButton = ({text, color, onIsAdding}) => {
  return (
    <button type='button' className='add-car-button' style={{backgroundColor: color}} onClick={onIsAdding}> {text} </button>
  )
}

export default addCarButton