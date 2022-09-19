import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const User = ({ user, logout }) => {
  return (
    <div className="user-data">
        <div id='dropdownBtn'>
            <img id='userAvatar' 
                src='/images/avatar.png' 
                alt='User avatar'
            />
            <p style={{fontSize: '13px'}}>{user.name} {user.surname}</p>
        </div>
        <div id='dropdownContent'>
            {user.name === '' && user.surname === '' ? 
                <Link id='login' to='/login'>Login</Link> :
                <Link id='logout' to='/' onClick={() => logout()}>Logout</Link>
            }
        </div>
    </div>
  )
}

User.propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func
  }

export default User