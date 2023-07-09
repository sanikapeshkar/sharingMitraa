import React from "react";
import "./style.scss";
import Image from "../images/logo.png";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
export const Navbar = () => {
  return (
    <section className="navigation">
      <div className="nav-container">
        <div className="brand">
          <a href="#!">
            <img src={Image} alt="sharingjmitra"></img>
          </a>
        </div>
        <nav>
          <div class="nav-mobile">
            <a id="nav-toggle" href="#!">
              <span></span>
            </a>
          </div>
          <ul class="nav-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/aboutus">About Us</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>

            <li>
              <a href="#footer">Contact Us</a>
            </li>

          

            <Popup
              trigger={<button> Donate </button>}
              modal
              nested
            >
              {(close) => (
                <div className="modal">
                  <div className="content">
                    We would like to extend our heartfelt gratitude for your
                    willingness to support our cause through donations. However,
                    we regret to inform you that we have reached our donation
                    capacity and are unable to accept any further contributions
                    at this time. The overwhelming response from our community
                    has exceeded our expectations, and we are immensely grateful
                    for the support we have received. Therefore, we kindly
                    request you to provide your email address, so we can keep
                    you informed about upcoming events, initiatives, and
                    potential future donation drives.
                  </div>
                  <div>
               
                  </div>
                </div>
              )}
            </Popup>
          </ul>
        </nav>
      </div>
    </section>
  );
};
