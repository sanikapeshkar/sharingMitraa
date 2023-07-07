import React from 'react'
import Event from "../components/Events";
import { About } from "../components/About";
import { Navbar } from "../components/Navbar";
import Footer from '../components/Footer';
function AboutUs() {
  return (
    <div>
     <Navbar/>
     <About/>
     <Event/>
     <Footer/>
    </div>
  )
}

export default AboutUs