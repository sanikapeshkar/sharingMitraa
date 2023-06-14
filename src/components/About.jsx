import React from 'react'
import Image from "../images/India.png"
import './style.scss'
export const About = () => {
  return (
    <div className='about'>
        <img src={Image} alt="India image here"></img>
        <div className='about-content'>
            <h1>ABOUT US</h1>
              <p> You can copy the code into a Java IDE or editor, run it, and enter the
          customer details in the specified format. The program will calculate
          the total cost of the booking based on the number of adults, children,
          and days. It will display the confirmation message with the total cost
          or an error message if the input is invalid.</p>     
        </div>
 
    </div>
  )
}

