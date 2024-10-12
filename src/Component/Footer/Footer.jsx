import React from 'react'
import "./Footer.css"
import logo from "../Assets/logo.png"
import instagram from "../Assets/instagram_icon.png"
import pintester from "../Assets/pintester_icon.png"
import whatsapp from "../Assets/whatsapp_icon.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="" />
        <p>Atles</p>
      </div>
      <ul className="footer_link">
        <li>Company</li>
        <li>Protect</li>
        <li>Office</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="social_media">
        <div className="social_media_icons">
          <img src={instagram} alt="" />
        </div>
        <div className="social_media_icons">
          <img src={pintester} alt="" />
        </div>
        <div className="social_media_icons">
          <img src={whatsapp} alt="" />
        </div>
      </div>
      <div className="copy_rights">
        <hr />
        <p>Copyright @2024 All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
