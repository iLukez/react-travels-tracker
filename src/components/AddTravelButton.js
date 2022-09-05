import React from 'react'

const Button = ({text, color, onIsAdding}) => {
  return (
    <button type='button' className='add-travel-button' style={{backgroundColor: color}} onClick={onIsAdding}> {text} </button>
  )
}

export default Button