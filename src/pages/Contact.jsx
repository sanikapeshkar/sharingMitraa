import React from "react";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import './stylepage.scss'
function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact">
           <h1>CONTACT US</h1>
           <a href="mailto:contact@sharingmitra.org">contact@sharingmitra.org</a>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
