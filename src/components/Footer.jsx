// import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
// import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";

import Image from "../images/logo.png";
import React from "react";

const Footer = () => {
  return (
    <div className="footer__wrapper" id="#footer">
      <div className="footer__top">
        <a href="/home" className="logo_link">
          <img src={Image} alt="sharingjmitra"></img>
        </a>
        <div className="social__icons">
          <span className="">
            {/* <AiFillInstagram size={30} /> */}
          </span>
          <span className="">
            {/* <AiOutlineTwitter size={30} /> */}
          </span>
          <span className="">
            {/* <TiSocialFacebook size={30} /> */}
          </span>
          <span className="">
            {/* <TiSocialLinkedin size={30} /> */}
          </span>
        </div>
      </div>
      <div className="links__container">
        <h2 className="section__title ">Links</h2>
        <ul className="links__list ">
          <li>
            <a href="/">Home </a>{" "}
          </li>
          <li>
            <a href="/gallery">Gallery </a>{" "}
          </li>
          <li>
            <a href="/aboutus">AboutUs </a>{" "}
          </li>
          <li>
            <a href="/home">Contact </a>{" "}
          </li>
        </ul>
      </div>
      <div className="links__container">
        <h2 className="section__title ">Contact</h2>
        <ul className="links__listx ">
          <li>
            Address: Plot No. 3, New Verma Layout,Opposite to Ambazari Lake(440033)
          </li>
      
          <li>
           Email: contact@sharingmitra.com
          </li>
        
        </ul>
      </div>
      <div className="footer__bottom">
        <p>© 2021 All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
