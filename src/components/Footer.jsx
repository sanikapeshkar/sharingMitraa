// import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
// import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";

import Image from '../images/logo.png'
import React from "react";


const Footer = () => {
  return (
    <div className="footer__wrapper">
      <div className="footer__top">
        <a href="#" className="logo_link">
        <img src={Image} alt="sharingjmitra"></img>
        </a>
        <div className="social__icons">
          <span className="icon__container">
            {/* <AiFillInstagram size={30} /> */}
          </span>
          <span className="icon__container">
            {/* <AiOutlineTwitter size={30} /> */}
          </span>
          <span className="icon__container">
            {/* <TiSocialFacebook size={30} /> */}
          </span>
          <span className="icon__container">
            {/* <TiSocialLinkedin size={30} /> */}
          </span>
        </div>
      </div>
<div className="links__container">
  <h2 className="section__title ">Links</h2>
  <ul className="links__list ">
    <li>
      <a href="#">Home </a>
      <a href="#">Home </a>
      <a href="#">Home </a>
      <a href="#">Home </a>
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