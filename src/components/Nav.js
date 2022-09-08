import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='navbar'>
        <Link to={'/'}  className='nav-element' style={{textDecoration: 'none', color: 'rgb(20, 20, 200)'}}>
            <strong>Travels List</strong>
        </Link>

        <Link to={'/cars'}  className='nav-element' style={{textDecoration: 'none', color: 'rgb(20, 20, 200)'}}>
            <strong>My Cars</strong>
        </Link>

        <Link to={'/'}  className='nav-element' style={{textDecoration: 'none', color: 'rgb(20, 20, 200)'}}>
            <strong>Expenses Details TODO</strong>
        </Link>
        
        <Link to={'/'}  className='nav-element' style={{textDecoration: 'none', color: 'rgb(20, 20, 200)'}}>
            <strong>Function TODO</strong>
        </Link>
    </nav>
  )
}

export default Nav
