import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Navbar.css'

const Navbar = ({ isOpen }) => {
  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <ul className="nav-menu">
        <li><Link to="/" className="nav-links">HOME</Link></li>
        <li><Link to="/about" className="nav-links">ABOUT US</Link></li>
        <li><Link to="/ourcollection" className="nav-links">OUR COLLECTION</Link></li>
        <li><Link to="/gallery" className="nav-links">GALLERY</Link></li>
        <li><Link to="/contact" className="nav-links">CONTACT US</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
