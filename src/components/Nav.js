import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='navbar'>
        <Link to={'/'}  className='nav-element' style={{borderRight: '2px solid rgb(226, 226, 226)'}}>
            <strong>Travels List</strong>
        </Link>

        <Link to={'/cars'}  className='nav-element'>
            <strong>My Cars</strong>
        </Link>
    </nav>
  )
}

export default Nav
