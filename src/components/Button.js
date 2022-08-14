import React from 'react'

const Button = ({text, color, onAddTravel}) => {
  return (
    <button id='addTravelButton' style={{backgroundColor: color}} onClick={onAddTravel}> {text} </button>
  )
}

export default Button