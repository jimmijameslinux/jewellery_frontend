import React from 'react'
import '../components/Footer.css'
import logo from '../assets/footerlogo.png'
import locationi from '../assets/location.png'
import email from '../assets/email.png'
import phone from '../assets/phone.png'
import { Link,useLocation } from 'react-router-dom'
import footerart from '../assets/footerart.png'

const Footer = () => {
    const location = useLocation()
    const isCartPage = location.pathname !== '/' // Check if the current path is "/cart"
    return (
        <div className={`${isCartPage ? 'footernone' : 'footer'}`}>
            <img className='footerart' src={footerart} alt="" />
            <div className="footerleftcontent">
                <img src={logo} alt="logo" />
                <div className="address">
                    <div className="location">
                        <img src={locationi} alt="location" className="icon" />
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
                            <li><Link to="/rings">Rings</Link></li>
                            <li><Link to="/necklaces">Necklaces</Link></li>
                            <li><Link to="/earrings">Earrings</Link></li>
                            <li><Link to="/bracelets">Bracelets</Link></li>
                            <li><Link to="/anklets">Anklets</Link></li>
                        </ul>
                    </div>
                    <div className="usefulinks">
                        <h3>Useful Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/ourcollection">Our Collection</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
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