import React from 'react'
import PropTypes from 'prop-types'

export const Header = ({ user }) => {
  return (
    <div className="header">
      <h2 id='app-name'>Travels</h2>
      <div className="user-data">
        <img id='userAvatar' 
             src='/images/avatar.png' 
             alt='User avatar'
        />
        <p style={{fontSize: '13px'}}>{user.name} {user.surname}</p>
      </div>
    </div>
  )
}

Header.propTypes = {
  user: PropTypes.object
}

export default Header