import React from 'react'
import './style.scss'
import Image from '../images/logo.png'
import {Donate} from '../pages/Donate'
export const Navbar = () => {
  return (
    <section className="navigation">
    <div className="nav-container">
      <div className="brand">
        <a href="#!"><img src={Image} alt="sharingjmitra"></img></a>
      </div>
      <nav>
    <div class="nav-mobile">
      <a id="nav-toggle" href="#!"><span></span></a>
    </div>
    <ul class="nav-list">
      <li><a href="/">Home</a></li>
      <li><a href="/aboutus">About Us</a></li>
      <li>
        <a href="/gallery">Gallery</a>
  
      </li>
 
      <li><a href="/contact">Contact Us</a></li>

      <button > <a href={Donate} >Donate Now</a> </button>
    </ul>
  </nav>
      </div>
  </section>
  )
}
