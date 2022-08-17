import React from 'react'

const Button = ({text, color, onIsAdding}) => {
  return (
    <button type='button' id='addTravelButton' style={{backgroundColor: color}} onClick={onIsAdding}> {text} </button>
  )
}

export default Button