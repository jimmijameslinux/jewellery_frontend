import React from 'react'
import { NavLink } from 'react-router-dom'
import '../components/Navbar.css'

const Navbar = ({ isOpen }) => {
  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <ul className="nav-menu">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}>
            ABOUT US
          </NavLink>
        </li>
        <li>
          <NavLink to="/ourcollection" className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}>
            OUR COLLECTION
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}>
            GALLERY
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}>
            CONTACT US
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar