import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <ul className="nav-menu">
            <Link to="/" className="nav-links">
              HOME
            </Link>
            <Link to="/about" className="nav-links">
              ABOUT US
            </Link>
            <Link to="/ourcollection" className="nav-links">
                OUR COLLECTION
            </Link>
            <Link to="/gallery" className="nav-links">
                GALLERY
            </Link>
            <Link to="/contact" className="nav-links">
              CONTACT US
            </Link>
        </ul>
    </nav>
  )
}

export default Navbar