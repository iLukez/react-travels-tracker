import React from 'react'

const Button = ({text, color}) => {
  return (
    <button id='addTravelButton' style={{backgroundColor: color}}> {text} </button>
  )
}

export default Button