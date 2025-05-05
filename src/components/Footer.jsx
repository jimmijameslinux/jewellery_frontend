import React from 'react'
import '../components/Footer.css'
import logo from '../assets/footerlogo.png'
import location from '../assets/location.png'
import email from '../assets/email.png'
import phone from '../assets/phone.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerleftcontent">
          <img src={logo} alt="logo" />  
          <div className="address">
            <div className="location">
                <img src={location} alt="location" className="icon" />
                <p>In Front of Sunahari Maszid, Near Indian Bank, kachehari Road, Lakhimpur Kheri</p>
            </div>
            <div className="email">
                <img src={email} alt="email" className="icon" />
                <p>majlakhimpur@gmail.com</p>
            </div>
            <div className="phone">
                <img src={phone} alt="phone" className="icon" />
                <p>+91-9506056672, +91-8318614342</p>
            </div>
          </div>
        </div>
        <div className="footerrightcontent"></div>
    </div>
  )
}

export default Footer