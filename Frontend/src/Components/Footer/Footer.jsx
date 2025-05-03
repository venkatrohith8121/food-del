import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {

    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} className='logo' alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime veniam optio inventore, pariatur cum iste magnam dolorum rem itaque iure excepturi ipsum nulla nesciunt eligendi dolore cupiditate odio quia quo.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 812-197-1994</li>
                        <li>kandlurirohith@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div class="footer-copyright">
                <p>© 2024 venkat rohith kandluri. All rights reserved </p>
                <p class="small">Taking profound inspiration, I crafted and coded it entirely myself.</p>
            </div>
        </div>
    )
}

export default Footer