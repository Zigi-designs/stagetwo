import React from 'react'
import "./Footer.css";
import {Logo} from "../../assets"
import { Frame27 } from '../../assets';

const Footer = () => {
  return (
    <div>
      <footer className='foot'>
      <img src= {Logo} className='Logo2' alt='The Logo'/>
      <p></p>
      
      <div className="footer-links">
          <div className='contact'>
            <a href="#faqs">FAQs</a>
            <a href="#about">About us</a>
            <a href="#contact">Contact Us</a>
          </div>
          <div>
            <a href="#privacy">Privacy Policy</a>
            <a href="#support">Support</a>
            <a href="#refund">Refund Policy</a>
          </div>
          </div>
          
          <div className="footer-disclaimer">
          <p>Website © 2024 Console LLC. All content, games titles, trade names and or trade dress, trademarks, artwork and <br></br>associated imagery are trademarks and or copyright material of their respective owners. All rights reserved.</p>
        </div>
        <img src= {Frame27} className='Logo3' alt='Social_Media'/>
        
        </footer> 
      
    </div>
  )
}

export default Footer
