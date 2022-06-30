import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='navbar'>
        <div className='nav-element'>
            <Link to={'/'}>Travels List</Link>
        </div>
        <div className='nav-element'>
            <Link to={'/'}>Cars</Link>
        </div>
        <div className='nav-element'>
            <Link to={'/'}>Expenses Details</Link>
        </div>
        <div className='nav-element'>
            <Link to={'/'}>Function</Link>
        </div>
    </nav>
  )
}

export default Nav
