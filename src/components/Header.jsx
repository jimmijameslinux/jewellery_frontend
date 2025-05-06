import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import circularart from '../assets/circularart.png'
import circularart2 from '../assets/circularart2.png'
import lineart from '../assets/lineart.png'
import logo from '../assets/logo.png'
import '../components/Header.css'


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()
    const isCartPage = location.pathname !== '/'
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <>
            <div className={`${isCartPage ? 'headernone' : 'header'}`}>
                <div className="side-art">
                    <img src={circularart} alt="Art Left" className="responsive-img tall" />
                </div>

                <div className="innerheader">
                    <img src={lineart} alt="Line Art Left" className="responsive-img line" />
                    <img src={logo} alt="Logo" className="responsive-img logo" />
                    <img src={lineart} alt="Line Art Right" className="responsive-img line" />
                </div>

                <div className="side-art">
                    <img src={circularart2} alt="Art Right" className="responsive-img tall" />
                </div>

                {/* Hamburger icon */}
                <div className="hamburger" onClick={toggleMenu}>
                    {
                        menuOpen ?
                            <span>X</span>
                            :
                            <span>☰</span>
                    }
                </div>
            </div>

            <Navbar isOpen={menuOpen} />
        </>
    )
}

export default Header
