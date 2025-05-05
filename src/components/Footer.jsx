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
            <div className="footerrightcontent">
                <div className="categoryandlink">
                    <div className="ourcategories">
                        <h3>Our Categories</h3>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="usefulinks">
                        <h3>Useful Links</h3>
                        <ul>
                            <li>Terms of Use</li>
                            <li>Privacy Policy</li>
                            <li>Refund Policy</li>
                            <li>Shipping Policy</li>
                            <li>Cancellation Policy</li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright © 2025 Saubhagya Jewels | Design & Promoted By - Keyword India Network pvt. Ltd.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer