import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import '../components/Navbar.css'

const Navbar = ({ isOpen }) => {
  const location = useLocation()
  const isCartPage = location.pathname !== '/'
  return (
    <nav className={`${isOpen ? 'open' : ''}  ${isCartPage ? 'navbarnone' : 'navbar'}`}>
      <ul className="nav-menu">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}>
            HOME
          </NavLink>
        </li>
        <li>
          {/* <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}>
            ABOUT US
          </NavLink> */}
          {/* use a tag */}
          <a href="#trendinghorimg" className="nav-links">ABOUT US</a>
        </li>
        <li>
          {/* <NavLink to="#collectionentry" className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}>
            OUR COLLECTION
          </NavLink> */}
          {/* use a tag */}
          <a href="#collectionentry" className="nav-links">OUR COLLECTION</a>
        </li>
        <li>
          {/* <NavLink to="/gallery" className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}>
            GALLERY
          </NavLink> */}
          {/* use a tag */}
          <a href="#trending" className="nav-links">GALLERY</a>
        </li>
        <li>
          {/* <NavLink to="#footer" className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}>
            CONTACT US
          </NavLink> */}
          {/* use a tag */}
          <a href="#footer" className="nav-links">CONTACT US</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar