import React from 'react'
import Navbar from './Navbar'
import circularart from '../assets/circularart.png'
import circularart2 from '../assets/circularart2.png'
import lineart from '../assets/lineart.png'
import logo from '../assets/logo.png'
import '../components/Header.css'

const Header = () => {
    return (
        <>
            <div className='header'>
                <img src={circularart} alt="Logo" style={{ width: "80px", height: "160px" }} />
                <div className='innerheader'>
                    <img src={lineart} alt="Logo" style={{ width: "500px" }} />
                    <img src={logo} alt="Logo" style={{ width: "124px", height: "86px" }} />
                    <img src={lineart} alt="Logo" style={{ width: "500px" }} />
                </div>
                <img src={circularart2} alt="Logo" style={{ width: "80px", height: "160px" }} />
            </div>
            <Navbar />
        </>
    )
}

export default Header