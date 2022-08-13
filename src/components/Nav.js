import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='navbar'>
        <div className='nav-element'>
            <Link to={'/'} style={{textDecoration: 'none', color: 'rgb(20, 20, 200)'}}>Travels List</Link>
        </div>
        <div className='nav-element'>
            <Link to={'/'} style={{textDecoration: 'none', color: 'rgb(20, 20, 200)'}}>My Cars todo</Link>
        </div>
        <div className='nav-element'>
            <Link to={'/'} style={{textDecoration: 'none', color: 'rgb(20, 20, 200)'}}>Expenses Details todo</Link>
        </div>
        <div className='nav-element'>
            <Link to={'/'} style={{textDecoration: 'none', color: 'rgb(20, 20, 200)'}}>Function todo</Link>
        </div>
    </nav>
  )
}

export default Nav
