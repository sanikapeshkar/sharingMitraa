import React from 'react'
import './style.scss'
import Image from '../images/logo.png'
export const Navbar = () => {
  return (
    <section class="navigation">
    <div class="nav-container">
      <div class="brand">
        <a href="#!"><img src={Image} alt="sharingjmitra"></img></a>
      </div>
      <nav>
    <div class="nav-mobile">
      <a id="nav-toggle" href="#!"><span></span></a>
    </div>
    <ul class="nav-list">
      <li><a href="#!">Home</a></li>
      <li><a href="#!">About Us</a></li>
      <li>
        <a href="#!">Gallery</a>
  
      </li>
 
      <li><a href="#!">Contact Us</a></li>

      <button> Donate Now </button>
    </ul>
  </nav>
      </div>
  </section>
  )
}
