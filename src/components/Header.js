import React from 'react'
import Avatar from './avatar.png'

export const Header = ({user}) => {
  return (
    <div className="header">
      <h2 id='app-name'>Travels</h2>
      <div className="user-data">
        <img id='user-avatar' src={Avatar}/>
        <p style={{fontSize: '13px'}}>{user.name} {user.surname}</p>
      </div>
    </div>
  )
}

export default Header