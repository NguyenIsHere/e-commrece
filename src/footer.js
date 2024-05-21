import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import './footer.css'
const footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='about'>
          <div className='logo'>
            <img src='./img/' alt='logo' />
          </div>
          <div className='detail'>
            <p>
              We are a team of designers and developers that create high quality
              product
            </p>
            <div className='icon'>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaYoutube />
              </li>
            </div>
          </div>
        </div>
        <div className='account'>
          <h3>My Account</h3>
          <ul>
            <li>Account</li>
            <li>Order</li>
            <li>Cart</li>
            <li>Shipping</li>
            <li>Return</li>
          </ul>
        </div>
        <div className='page'>
          <h3>Pages</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default footer
