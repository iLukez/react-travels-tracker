import React from 'react'
import PropTypes from 'prop-types'
import User from './User'

export const Header = ({ user, logout }) => {
  return (
    <div className="header">
      <a href='./'><h2 id='appName'>Travels</h2></a>
      <User user={user} logout={logout}/>
    </div>
  )
}

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func
}

export default Header